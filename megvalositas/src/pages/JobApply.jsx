import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { isValidPhoneNumber } from 'react-phone-number-input'
import { PageHead } from '../components/sections/PageHead.jsx'
import { Reveal } from '../components/ui/Reveal.jsx'
import { Button } from '../components/ui/Button.jsx'
import { Field } from '../components/ui/Field.jsx'
import { Turnstile } from '../components/ui/Turnstile.jsx'
import { Check, Close, Upload, Warn, Arrow } from '../components/ui/Icons.jsx'
import { useToast } from '../hooks/useToast.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { jobBySlug } from '../data/careers.js'
import '../styles/careers.css'

// A telefon-mező lazy chunkban (a nehéz lib + zászlók külön töltődnek)
const PhoneField = lazy(() => import('../components/ui/PhoneField.jsx'))

const MAX_FILE = 10 * 1024 * 1024 // 10 MB / fájl
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const URL_RE = /^https?:\/\/.+/i
const fmtSize = (b) => (b < 1024 * 1024 ? `${Math.round(b / 1024)} KB` : `${(b / 1024 / 1024).toFixed(1)} MB`)

// Újrahasznált fájlfeltöltő (dropzone) — önéletrajzhoz és motivációs levélhez is.
function FileDrop({ label, hint, accept, files, onAdd, onRemove, error }) {
  const ref = useRef(null)
  const [drag, setDrag] = useState(false)
  const onDrop = (e) => { e.preventDefault(); setDrag(false); if (e.dataTransfer.files?.length) onAdd(e.dataTransfer.files) }
  return (
    <div className={`field group${error ? ' error' : ''}`}>
      <span className="grp-label">{label}</span>
      <div
        className={`dropzone${drag ? ' drag' : ''}`} onClick={() => ref.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDrag(true) }} onDragLeave={(e) => { e.preventDefault(); setDrag(false) }} onDrop={onDrop}
      >
        <Upload className="dz-ico" />
        <div><strong>Húzza ide</strong> vagy tallózzon</div>
        <div className="dz-hint">{hint}</div>
        <input ref={ref} type="file" hidden accept={accept} onChange={(e) => { onAdd(e.target.files); e.target.value = '' }} />
      </div>
      {files.length > 0 && (
        <div className="file-list">
          {files.map((f, i) => (
            <div className="file-item" key={`${f.name}-${i}`}>
              <span className="fi-name">{f.name}</span>
              <span className="fi-size">{fmtSize(f.size)}</span>
              <button type="button" className="fi-x" aria-label="Eltávolítás" onClick={() => onRemove(i)}><Close /></button>
            </div>
          ))}
        </div>
      )}
      {error && <span className="err" role="alert"><Warn />{error}</span>}
    </div>
  )
}

// Frontend validáció, magyar hibaüzenetekkel (ugyanaz a szigor, mint a kapcsolati űrlapon).
function validate(f, phone, cv, cover) {
  const e = {}
  if (!f.nev.trim()) e.nev = 'Kérjük, adja meg a nevét.'
  else if (f.nev.trim().length < 2) e.nev = 'A név túl rövid, legalább 2 karakter.'

  if (!f.email.trim()) e.email = 'Kérjük, adja meg az e-mail címét.'
  else if (!EMAIL_RE.test(f.email.trim())) e.email = 'Érvénytelen e-mail cím, ellenőrizze a formátumot (pl. nev@ceg.hu).'

  if (phone && !isValidPhoneNumber(phone)) e.tel = 'A telefonszám érvénytelen a kiválasztott országhoz.'

  if (f.linkedin.trim() && !URL_RE.test(f.linkedin.trim())) e.linkedin = 'Teljes linket adjon meg (https://…).'

  if (!cv.length) e.cv = 'Kérjük, csatolja az önéletrajzát (PDF vagy DOC).'
  if (!cover.length) e.cover = 'Kérjük, csatolja a motivációs levelét (PDF vagy DOC).'

  if (!f.gdpr) e.gdpr = 'Az adatkezelési tájékoztató elfogadása kötelező.'
  return e
}

const EMPTY = { nev: '', email: '', linkedin: '', gdpr: false }

// Piszkozat gyorsítótár — POZÍCIÓNKÉNT külön kulcson (a slug alapján). A fájlokat
// nem tudjuk tárolni (a File nem szerializálható), csak a szöveges mezőket.
const draftKey = (slug) => `debaru-apply-draft-${slug}`
const loadDraft = (slug) => { try { return JSON.parse(localStorage.getItem(draftKey(slug))) || null } catch { return null } }

// Dedikált állásjelentkezési űrlap (/karrier/:slug/jelentkezes).
// A slug azonosítja a pozíciót (fejléc + rejtett mező). Csatolmány: önéletrajz +
// motivációs levél (fájlként). Védelem: Turnstile CAPTCHA + honeypot + piszkozat-mentés.
export default function JobApply() {
  const { slug } = useParams()
  const job = jobBySlug[slug]
  useDocumentTitle(job ? `Jelentkezés · ${job.title}` : undefined, job?.summary)
  const toast = useToast()

  const [form, setForm] = useState(() => { const d = loadDraft(slug); return d?.form ? { ...EMPTY, ...d.form } : EMPTY })
  const [phone, setPhone] = useState(() => loadDraft(slug)?.phone)
  const [touched, setTouched] = useState({})
  const [cv, setCv] = useState([])
  const [cover, setCover] = useState([])
  const [hp, setHp] = useState('') // honeypot — botcsapda
  const [captcha, setCaptcha] = useState('') // Turnstile token
  const [captchaKey, setCaptchaKey] = useState(0)

  // piszkozat mentése/törlése (pozíciónkénti kulcson) — csak szöveges mezők
  useEffect(() => {
    const has = form.nev || form.email || form.linkedin || form.gdpr || phone
    try {
      if (has) localStorage.setItem(draftKey(slug), JSON.stringify({ form, phone }))
      else localStorage.removeItem(draftKey(slug))
    } catch { /* pl. privát mód vagy tele a tár */ }
  }, [form, phone, slug])

  if (!job) return <Navigate to="/karrier" replace />

  const errors = validate(form, phone, cv, cover)
  const showErr = (k) => (touched[k] && errors[k]) || undefined
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const setField = (k, v) => setForm((f) => ({ ...f, [k]: v }))
  const markTouched = (k) => () => setTouched((t) => ({ ...t, [k]: true }))

  // fájl hozzáadása egy adott mezőhöz (max. 2 fájl / mező), méret-ellenőrzéssel
  const addTo = (setter, key) => (list) => {
    const incoming = Array.from(list)
    if (incoming.some((f) => f.size > MAX_FILE)) toast('Néhány fájl túl nagy, max. 10 MB fájlonként.')
    const ok = incoming.filter((f) => f.size <= MAX_FILE)
    setter((prev) => [...prev, ...ok].slice(0, 2))
    setTouched((t) => ({ ...t, [key]: true }))
  }
  const removeFrom = (setter) => (i) => setter((prev) => prev.filter((_, idx) => idx !== i))

  const resetForm = () => { setForm(EMPTY); setPhone(undefined); setCv([]); setCover([]); setTouched({}); setHp(''); setCaptcha(''); setCaptchaKey((k) => k + 1) }

  const onSubmit = (e) => {
    e.preventDefault()
    if (hp) { resetForm(); toast('Köszönjük a jelentkezését! Hamarosan felvesszük Önnel a kapcsolatot.'); return }
    const hasErr = Object.keys(errors).length > 0
    if (hasErr || !captcha) {
      setTouched({ nev: true, email: true, tel: true, linkedin: true, cv: true, cover: true, gdpr: true, captcha: true })
      toast(hasErr ? 'Kérjük, javítsa a pirossal jelölt mezőket.' : 'Kérjük, igazolja, hogy nem robot.')
      const first = document.querySelector('.field.error input, .field.error textarea, .field.error .PhoneInputInput, .field.error .dropzone, .check.error input')
      if (first) first.focus?.()
      return
    }
    // NOTE (backend later): beküldéskor a `pozicio` (slug + cím), a mezők, a csatolt
    // önéletrajz + motivációs levél és a `captcha` token mennek a szerverre; a Turnstile
    // tokent a szerveren kell ellenőrizni (siteverify a secret key-jel).
    toast('Köszönjük a jelentkezését! Hamarosan felvesszük Önnel a kapcsolatot.')
    resetForm()
  }

  return (
    <>
      <PageHead
        placeholder={job.placeholder}
        trail={[{ label: 'Karrier', to: '/karrier' }, { label: job.title, to: `/karrier/${job.slug}` }, { label: 'Jelentkezés' }]}
        tag={job.department}
        title="Jelentkezés"
        lede={`${job.title}, töltse ki az űrlapot, és pár perc alatt jelentkezhet.`}
      />

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <div className="split" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 56, alignItems: 'start' }}>
            {/* űrlap */}
            <Reveal className="card" style={{ padding: 36 }}>
              {/* melyik pozícióra jelentkezik — jól láthatóan azonosítva */}
              <div className="apply-for">
                <span className="af-label">Jelentkezés erre a pozícióra</span>
                <div className="af-job">
                  <span className="af-title">{job.title}</span>
                  <span className="job-badge dept">{job.department}</span>
                </div>
              </div>

              <form onSubmit={onSubmit} noValidate>
                {/* a pozíció a beküldött adatban is (rejtett mező) */}
                <input type="hidden" name="pozicio" value={`${job.title} (${job.slug})`} readOnly />

                {/* honeypot: képernyőn kívüli botcsapda */}
                <div className="hp-field" aria-hidden="true">
                  <label htmlFor="company_url">Ne töltse ki ezt a mezőt</label>
                  <input id="company_url" name="company_url" type="text" tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} />
                </div>

                <div className="grid g-2" style={{ gap: 18 }}>
                  <Field id="nev" label="Név *" error={showErr('nev')} filled={!!form.nev}>
                    <input id="nev" value={form.nev} onChange={update('nev')} onBlur={markTouched('nev')} placeholder="Kovács János" autoComplete="name" aria-invalid={!!showErr('nev')} />
                  </Field>
                  <Field id="email" label="E-mail *" error={showErr('email')} filled={!!form.email}>
                    <input id="email" type="email" value={form.email} onChange={update('email')} onBlur={markTouched('email')} placeholder="janos@pelda.hu" autoComplete="email" aria-invalid={!!showErr('email')} />
                  </Field>
                </div>

                <div className="grid g-2" style={{ gap: 18 }}>
                  <Field id="tel" label="Telefon" error={showErr('tel')} filled={!!phone} always>
                    <Suspense fallback={<div className="phone-skeleton" aria-hidden="true" />}>
                      <PhoneField value={phone} onChange={setPhone} onBlur={markTouched('tel')} numberInputProps={{ id: 'tel' }} placeholder="30 123 4567" />
                    </Suspense>
                  </Field>
                  <Field id="linkedin" label="LinkedIn / portfólió · opcionális" error={showErr('linkedin')} filled={!!form.linkedin}>
                    <input id="linkedin" value={form.linkedin} onChange={update('linkedin')} onBlur={markTouched('linkedin')} placeholder="https://linkedin.com/in/…" autoComplete="url" inputMode="url" aria-invalid={!!showErr('linkedin')} />
                  </Field>
                </div>

                {/* csatolmányok: önéletrajz + motivációs levél — mindkettő fájlként, egymás mellett */}
                <div className="apply-files">
                  <FileDrop
                    label={<>Önéletrajz (CV) *<span className="opt"> · PDF/DOC</span></>}
                    hint="PDF · DOC · DOCX" accept=".pdf,.doc,.docx"
                    files={cv} onAdd={addTo(setCv, 'cv')} onRemove={removeFrom(setCv)} error={showErr('cv')}
                  />
                  <FileDrop
                    label={<>Motivációs levél *<span className="opt"> · PDF/DOC</span></>}
                    hint="PDF · DOC · DOCX" accept=".pdf,.doc,.docx"
                    files={cover} onAdd={addTo(setCover, 'cover')} onRemove={removeFrom(setCover)} error={showErr('cover')}
                  />
                </div>

                {/* GDPR */}
                <div className={`field group${showErr('gdpr') ? ' error' : ''}`} style={{ marginTop: 4, marginBottom: 20 }}>
                  <label className={`check${showErr('gdpr') ? ' error' : ''}`}>
                    <input type="checkbox" checked={form.gdpr} onChange={(e) => { setField('gdpr', e.target.checked); setTouched((t) => ({ ...t, gdpr: true })) }} />
                    <span className="box"><Check /></span>
                    <span>Elolvastam és elfogadom az <a href="/adatvedelem" target="_blank" rel="noopener noreferrer">adatvédelmi tájékoztatót</a>, és hozzájárulok jelentkezésem elbírálásához. *</span>
                  </label>
                  {showErr('gdpr') && <span className="err" role="alert"><Warn />{errors.gdpr}</span>}
                </div>

                {/* Cloudflare Turnstile CAPTCHA — ugyanaz a védelem, mint a kapcsolati űrlapon */}
                <div className={`field group${touched.captcha && !captcha ? ' error' : ''}`} style={{ marginBottom: 18 }}>
                  <Turnstile key={captchaKey} onVerify={(t) => { setCaptcha(t); setTouched((s) => ({ ...s, captcha: true })) }} onExpire={() => setCaptcha('')} />
                  {touched.captcha && !captcha && <span className="err" role="alert"><Warn />Kérjük, igazolja, hogy nem robot.</span>}
                </div>

                <Button type="submit" arrow style={{ width: '100%', justifyContent: 'center' }}>Jelentkezés elküldése</Button>
              </form>
            </Reveal>

            {/* oldalsáv — a pozíció adatai + vissza a teljes leíráshoz */}
            <Reveal delay={100}>
              <div className="card" style={{ position: 'sticky', top: 96 }}>
                <h3 style={{ fontFamily: 'var(--body)', fontSize: 12.5, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--faint)', marginBottom: 14 }}>A pozícióról</h3>
                <p className="muted" style={{ fontSize: 14.5, marginBottom: 20 }}>{job.summary}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {job.facts.map((f) => (
                    <div key={f.label}>
                      <div className="muted" style={{ fontSize: 13 }}>{f.label}</div>
                      <div style={{ fontWeight: 600 }}>{f.value}</div>
                    </div>
                  ))}
                </div>
                <hr className="divider" style={{ margin: '22px 0' }} />
                <Link to={`/karrier/${job.slug}`} className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center' }}>
                  <Arrow style={{ transform: 'rotate(180deg)' }} />Teljes álláshirdetés
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
