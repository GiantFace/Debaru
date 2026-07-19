import { useRef, useState } from 'react'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'
import 'react-phone-number-input/style.css'
import { PageHead } from '../components/sections/PageHead.jsx'
import { Reveal } from '../components/ui/Reveal.jsx'
import { Button } from '../components/ui/Button.jsx'
import { Field } from '../components/ui/Field.jsx'
import { Select } from '../components/ui/Select.jsx'
import { Turnstile } from '../components/ui/Turnstile.jsx'
import { Check, Close, Upload, Warn, infoIcons } from '../components/ui/Icons.jsx'
import { useToast } from '../hooks/useToast.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { contactHead, contactAreas, contactCards, contactTrust, timelines, OTHER_AREA, MAP_EMBED } from '../data/contact.js'

const MSG_MAX = 5000
const OTHER_MAX = 100 // "Egyéb" pontosító mező max. hossza
const MAX_FILE = 10 * 1024 * 1024 // 10 MB / fájl
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const fmtSize = (b) => (b < 1024 * 1024 ? `${Math.round(b / 1024)} KB` : `${(b / 1024 / 1024).toFixed(1)} MB`)

// Teljes frontend validáció, pontos magyar hibaüzenetekkel.
function validate(f, phone) {
  const e = {}
  if (!f.nev.trim()) e.nev = 'Kérjük, adja meg a nevét.'
  else if (f.nev.trim().length < 2) e.nev = 'A név túl rövid — legalább 2 karakter.'

  if (!f.email.trim()) e.email = 'Kérjük, adja meg az e-mail címét.'
  else if (!EMAIL_RE.test(f.email.trim())) e.email = 'Érvénytelen e-mail cím — ellenőrizze a formátumot (pl. nev@ceg.hu).'

  if (phone && !isValidPhoneNumber(phone)) e.tel = 'A telefonszám érvénytelen a kiválasztott országhoz.'

  if (!f.uzenet.trim()) e.uzenet = 'Kérjük, írja le röviden a feladatot.'
  else if (f.uzenet.length > MSG_MAX) e.uzenet = `Az üzenet legfeljebb ${MSG_MAX} karakter lehet.`

  if (!f.gdpr) e.gdpr = 'Az adatkezelési tájékoztató elfogadása kötelező.'
  return e
}

const EMPTY = { nev: '', ceg: '', email: '', terulet: '', teruletEgyeb: '', hatarido: '', uzenet: '', gdpr: false }

export default function Contact() {
  useDocumentTitle(contactHead.crumb, contactHead.lede)
  const toast = useToast()
  const [form, setForm] = useState(EMPTY)
  const [phone, setPhone] = useState()
  const [touched, setTouched] = useState({})
  const [files, setFiles] = useState([])
  const [drag, setDrag] = useState(false)
  const [hp, setHp] = useState('') // honeypot — botcsapda
  const [captcha, setCaptcha] = useState('') // Turnstile token
  const [captchaKey, setCaptchaKey] = useState(0) // remount = widget újratöltés
  const fileRef = useRef(null)

  const errors = validate(form, phone)
  const showErr = (k) => (touched[k] && errors[k]) || undefined

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const setField = (k, v) => setForm((f) => ({ ...f, [k]: v }))
  const markTouched = (k) => () => setTouched((t) => ({ ...t, [k]: true }))

  const addFiles = (list) => {
    const incoming = Array.from(list)
    if (incoming.some((f) => f.size > MAX_FILE)) toast('Néhány fájl túl nagy — max. 10 MB fájlonként.')
    const ok = incoming.filter((f) => f.size <= MAX_FILE)
    setFiles((prev) => [...prev, ...ok].slice(0, 6))
  }
  const onDrop = (e) => { e.preventDefault(); setDrag(false); if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files) }

  // terület váltása: ha nem "Egyéb", a pontosító mezőt is ürítjük
  const setTerulet = (v) => setForm((f) => ({ ...f, terulet: v, teruletEgyeb: v === OTHER_AREA ? f.teruletEgyeb : '' }))

  const resetForm = () => { setForm(EMPTY); setPhone(undefined); setFiles([]); setTouched({}); setHp(''); setCaptcha(''); setCaptchaKey((k) => k + 1) }

  const onSubmit = (e) => {
    e.preventDefault()
    // honeypot: ha kitöltötték, bot — csendben elvetjük (nem áruljuk el a csapdát)
    if (hp) { resetForm(); toast('Köszönjük! Üzenetét megkaptuk — hamarosan jelentkezünk.'); return }
    const hasErr = Object.keys(errors).length > 0
    if (hasErr || !captcha) {
      setTouched({ nev: true, email: true, tel: true, uzenet: true, gdpr: true, captcha: true })
      toast(hasErr ? 'Kérjük, javítsa a pirossal jelölt mezőket.' : 'Kérjük, igazolja, hogy nem robot.')
      const first = document.querySelector('.field.error input, .field.error textarea, .field.error .PhoneInputInput, .check.error input')
      if (first) first.focus()
      return
    }
    // NOTE: a `captcha` tokent a szerveren kell ellenőrizni a Turnstile secret key-jel
    // (challenges.cloudflare.com/turnstile/v0/siteverify) — lásd a README-jegyzetet.
    toast('Köszönjük! Üzenetét megkaptuk — hamarosan jelentkezünk.')
    resetForm()
  }

  const msgLen = form.uzenet.length
  const msgWarn = msgLen > MSG_MAX - 200

  return (
    <>
      <PageHead placeholder={contactHead.headPlaceholder} trail={[{ label: contactHead.crumb }]} title={contactHead.title} lede={contactHead.lede} />

      <section className="section" style={{ paddingTop: 24 }} id="urlap">
        <div className="wrap">
          <div className="split" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 56, alignItems: 'start' }}>
            {/* űrlap */}
            <Reveal className="card" style={{ padding: 36 }}>
              <form onSubmit={onSubmit} noValidate>
                {/* honeypot: képernyőn kívüli botcsapda — ember nem látja, nem tölti ki */}
                <div className="hp-field" aria-hidden="true">
                  <label htmlFor="company_url">Ne töltse ki ezt a mezőt</label>
                  <input id="company_url" name="company_url" type="text" tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} />
                </div>

                <div className="grid g-2" style={{ gap: 18 }}>
                  <Field id="nev" label="Név *" error={showErr('nev')} filled={!!form.nev}>
                    <input id="nev" value={form.nev} onChange={update('nev')} onBlur={markTouched('nev')} placeholder="Kovács János" autoComplete="name" aria-invalid={!!showErr('nev')} />
                  </Field>
                  <Field id="ceg" label="Cég" filled={!!form.ceg}>
                    <input id="ceg" value={form.ceg} onChange={update('ceg')} placeholder="Cég neve" autoComplete="organization" />
                  </Field>
                </div>

                <div className="grid g-2" style={{ gap: 18 }}>
                  <Field id="email" label="E-mail *" error={showErr('email')} filled={!!form.email}>
                    <input id="email" type="email" value={form.email} onChange={update('email')} onBlur={markTouched('email')} placeholder="janos@ceg.hu" autoComplete="email" aria-invalid={!!showErr('email')} />
                  </Field>
                  {/* telefon: a zászló a beírt szám országkódjából jön (nem választható) */}
                  <Field id="tel" label="Telefon" error={showErr('tel')} filled={!!phone} always>
                    <PhoneInput international defaultCountry="HU" flags={flags} value={phone} onChange={setPhone} onBlur={markTouched('tel')} numberInputProps={{ id: 'tel' }} placeholder="30 123 4567" />
                  </Field>
                </div>

                <div className="grid g-2" style={{ gap: 18 }}>
                  <Select label="Terület" optional options={contactAreas} value={form.terulet} placeholder="Válasszon területet…" onChange={setTerulet} />
                  <Select label="Határidő" optional options={timelines} value={form.hatarido} placeholder="Válasszon határidőt…" onChange={(v) => setField('hatarido', v)} />
                </div>

                {/* "Egyéb" választásakor opcionális, rövid pontosító mező */}
                {form.terulet === OTHER_AREA && (
                  <Field
                    id="teruletEgyeb" label="Miben segíthetünk? · opcionális" filled={!!form.teruletEgyeb}
                    footer={<span className={`char-count${form.teruletEgyeb.length > OTHER_MAX - 20 ? ' warn' : ''}`}>{form.teruletEgyeb.length} / {OTHER_MAX}</span>}
                  >
                    <input id="teruletEgyeb" value={form.teruletEgyeb} onChange={update('teruletEgyeb')} maxLength={OTHER_MAX} placeholder="Röviden, milyen feladatról van szó…" />
                  </Field>
                )}

                <Field
                  id="uzenet" label="Üzenet *" error={showErr('uzenet')} filled={!!form.uzenet}
                  footer={<span className={`char-count${msgWarn ? ' warn' : ''}`}>{msgLen} / {MSG_MAX}</span>}
                >
                  <textarea id="uzenet" value={form.uzenet} onChange={update('uzenet')} onBlur={markTouched('uzenet')} maxLength={MSG_MAX} placeholder="Néhány mondat a feladatról, a helyszínről és a tervezett ütemezésről…" aria-invalid={!!showErr('uzenet')} />
                </Field>

                {/* fájlcsatolás */}
                <div className="field group">
                  <span className="grp-label">Csatolmány<span className="opt"> · tervrajz, PDF, kép — max. 10 MB</span></span>
                  <div
                    className={`dropzone${drag ? ' drag' : ''}`} onClick={() => fileRef.current?.click()}
                    onDragOver={(e) => { e.preventDefault(); setDrag(true) }} onDragLeave={(e) => { e.preventDefault(); setDrag(false) }} onDrop={onDrop}
                  >
                    <Upload className="dz-ico" />
                    <div><strong>Húzza ide a fájlokat</strong>, vagy kattintson a tallózáshoz</div>
                    <div className="dz-hint">PDF · PNG · JPG · DWG · ZIP</div>
                    <input ref={fileRef} type="file" hidden multiple accept=".pdf,.png,.jpg,.jpeg,.dwg,.zip" onChange={(e) => { addFiles(e.target.files); e.target.value = '' }} />
                  </div>
                  {files.length > 0 && (
                    <div className="file-list">
                      {files.map((f, i) => (
                        <div className="file-item" key={`${f.name}-${i}`}>
                          <span className="fi-name">{f.name}</span>
                          <span className="fi-size">{fmtSize(f.size)}</span>
                          <button type="button" className="fi-x" aria-label="Eltávolítás" onClick={() => setFiles(files.filter((_, idx) => idx !== i))}><Close /></button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* GDPR */}
                <div className={`field group${showErr('gdpr') ? ' error' : ''}`} style={{ marginBottom: 20 }}>
                  <label className={`check${showErr('gdpr') ? ' error' : ''}`}>
                    <input type="checkbox" checked={form.gdpr} onChange={(e) => { setField('gdpr', e.target.checked); setTouched((t) => ({ ...t, gdpr: true })) }} />
                    <span className="box"><Check /></span>
                    <span>Elolvastam és elfogadom az <a href="#adatvedelem" onClick={(e) => e.preventDefault()}>adatvédelmi tájékoztatót</a>. *</span>
                  </label>
                  {showErr('gdpr') && <span className="err"><Warn />{errors.gdpr}</span>}
                </div>

                {/* Cloudflare Turnstile CAPTCHA — a beküldés csak sikeres ellenőrzés után enged */}
                <div className={`field group${touched.captcha && !captcha ? ' error' : ''}`} style={{ marginBottom: 18 }}>
                  <Turnstile key={captchaKey} onVerify={(t) => { setCaptcha(t); setTouched((s) => ({ ...s, captcha: true })) }} onExpire={() => setCaptcha('')} />
                  {touched.captcha && !captcha && <span className="err"><Warn />Kérjük, igazolja, hogy nem robot.</span>}
                </div>

                <Button type="submit" arrow style={{ width: '100%', justifyContent: 'center' }}>Üzenet küldése</Button>
              </form>
            </Reveal>

            {/* elérhetőségek + bizalmi blokk */}
            <Reveal delay={100}>
              {contactCards.map((c) => {
                const Icon = infoIcons[c.icon]
                return (
                  <div className="card info-card" key={c.title} style={{ marginBottom: 16 }}>
                    <div className="ico"><Icon /></div>
                    <div className="ic-body">
                      <h3>{c.title}</h3>
                      <p className="muted">
                        {c.links
                          ? c.links.map((l, j) => <span key={l.href}>{j > 0 && <br />}<a href={l.href}>{l.label}</a></span>)
                          : c.lines.map((line, j) => <span key={j}>{j > 0 && <br />}{line}</span>)}
                      </p>
                    </div>
                  </div>
                )
              })}

              <div className="card contact-trust">
                <h3>Miért a Debaru?</h3>
                <ul>
                  {contactTrust.map((t) => (
                    <li key={t}><Check />{t}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* térkép — beágyazott Google Maps + brand-jelvény a jobb felső sarokban */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="media" style={{ height: 420 }}>
            <iframe
              title="Debaru Kft. — Budafoki út 97., Budapest"
              src={MAP_EMBED} width="100%" height="100%" style={{ border: 0, display: 'block' }}
              loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen
            />
            <div className="map-badge"><img src="/assets/debaru_logo.png" alt="Debaru" /></div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
