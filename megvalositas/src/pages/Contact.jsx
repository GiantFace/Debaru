import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { isValidPhoneNumber } from 'react-phone-number-input'
import { PageHead } from '../components/sections/PageHead.jsx'
import { Reveal } from '../components/ui/Reveal.jsx'
import { Button } from '../components/ui/Button.jsx'
import { Field } from '../components/ui/Field.jsx'
import { Select } from '../components/ui/Select.jsx'
import { Turnstile } from '../components/ui/Turnstile.jsx'
import { Check, Close, Upload, Warn, infoIcons } from '../components/ui/Icons.jsx'
import { useToast } from '../hooks/useToast.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { useT, useLang } from '../i18n/index.jsx'
import { useContent } from '../i18n/content.js'
import { mapEmbed } from '../data/contact.js'

// A telefon-mező lazy chunkban (a nehéz lib + zászlók külön töltődnek)
const PhoneField = lazy(() => import('../components/ui/PhoneField.jsx'))

const MSG_MAX = 5000
const OTHER_MAX = 100 // "Egyéb" pontosító mező max. hossza
const MAX_FILE = 10 * 1024 * 1024 // 10 MB / fájl
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const fmtSize = (b) => (b < 1024 * 1024 ? `${Math.round(b / 1024)} KB` : `${(b / 1024 / 1024).toFixed(1)} MB`)

// Teljes frontend validáció — a hibaüzenetek a szótárból (forms.* / contact.errors.*).
function validate(f, phone, t) {
  const e = {}
  if (!f.nev.trim()) e.nev = t('forms.nameReq')
  else if (f.nev.trim().length < 2) e.nev = t('forms.nameShort')

  if (!f.email.trim()) e.email = t('forms.emailReq')
  else if (!EMAIL_RE.test(f.email.trim())) e.email = t('forms.emailInvalid')

  if (phone && !isValidPhoneNumber(phone)) e.tel = t('forms.phoneInvalid')

  if (!f.uzenet.trim()) e.uzenet = t('contact.errors.messageReq')
  else if (f.uzenet.length > MSG_MAX) e.uzenet = t('contact.errors.messageMax', { n: MSG_MAX })

  if (!f.gdpr) e.gdpr = t('forms.gdprReq')
  return e
}

const EMPTY = { nev: '', ceg: '', email: '', terulet: '', teruletEgyeb: '', hatarido: '', uzenet: '', gdpr: false }

// Piszkozat gyorsítótár: gépelés közben ment, frissítés után visszatölt, küldés után törlődik.
// (Fájlokat nem tárolunk — a File objektum nem szerializálható.)
const DRAFT_KEY = 'debaru-contact-draft'
const loadDraft = () => { try { return JSON.parse(localStorage.getItem(DRAFT_KEY)) || null } catch { return null } }

export default function Contact() {
  const t = useT()
  const { lang } = useLang()
  const { contact } = useContent()
  const { head, areas, timelines, cards } = contact
  const OTHER_AREA = areas[areas.length - 1]
  useDocumentTitle(head.crumb, head.lede)
  const toast = useToast()
  const [form, setForm] = useState(() => { const d = loadDraft(); return d?.form ? { ...EMPTY, ...d.form } : EMPTY })
  const [phone, setPhone] = useState(() => loadDraft()?.phone)
  const [touched, setTouched] = useState({})
  const [files, setFiles] = useState([])
  const [drag, setDrag] = useState(false)
  const [hp, setHp] = useState('') // honeypot — botcsapda
  const [captcha, setCaptcha] = useState('') // Turnstile token
  const [captchaKey, setCaptchaKey] = useState(0) // remount = widget újratöltés
  const fileRef = useRef(null)

  // piszkozat mentése/törlése a beírt adatok alapján (küldéskor a form üresre áll -> törlődik)
  useEffect(() => {
    const has = form.nev || form.ceg || form.email || form.terulet || form.teruletEgyeb || form.hatarido || form.uzenet || form.gdpr || phone
    try {
      if (has) localStorage.setItem(DRAFT_KEY, JSON.stringify({ form, phone }))
      else localStorage.removeItem(DRAFT_KEY)
    } catch { /* pl. privát mód vagy tele a tár */ }
  }, [form, phone])

  const errors = validate(form, phone, t)
  const showErr = (k) => (touched[k] && errors[k]) || undefined

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const setField = (k, v) => setForm((f) => ({ ...f, [k]: v }))
  const markTouched = (k) => () => setTouched((t) => ({ ...t, [k]: true }))

  const addFiles = (list) => {
    const incoming = Array.from(list)
    if (incoming.some((f) => f.size > MAX_FILE)) toast(t('forms.fileTooBig'))
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
    if (hp) { resetForm(); toast(t('contact.toasts.success')); return }
    const hasErr = Object.keys(errors).length > 0
    if (hasErr || !captcha) {
      setTouched({ nev: true, email: true, tel: true, uzenet: true, gdpr: true, captcha: true })
      toast(hasErr ? t('forms.fixErrors') : t('forms.captcha'))
      const first = document.querySelector('.field.error input, .field.error textarea, .field.error .PhoneInputInput, .check.error input')
      if (first) first.focus()
      return
    }
    // NOTE: a `captcha` tokent a szerveren kell ellenőrizni a Turnstile secret key-jel
    // (challenges.cloudflare.com/turnstile/v0/siteverify) — lásd a README-jegyzetet.
    toast(t('contact.toasts.success'))
    resetForm()
  }

  const msgLen = form.uzenet.length
  const msgWarn = msgLen > MSG_MAX - 200

  return (
    <>
      <PageHead placeholder={head.placeholder} trail={[{ label: head.crumb }]} title={head.title} lede={head.lede} />

      <section className="section" style={{ paddingTop: 24 }} id="urlap">
        <div className="wrap">
          <h2 className="sr-only">{t('contact.srHeading')}</h2>
          <div className="split" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 56, alignItems: 'start' }}>
            {/* űrlap */}
            <Reveal className="card" style={{ padding: 36 }}>
              <form onSubmit={onSubmit} noValidate>
                {/* honeypot: képernyőn kívüli botcsapda — ember nem látja, nem tölti ki */}
                <div className="hp-field" aria-hidden="true">
                  <label htmlFor="company_url">{t('forms.honeypot')}</label>
                  <input id="company_url" name="company_url" type="text" tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} />
                </div>

                <div className="grid g-2" style={{ gap: 18 }}>
                  <Field id="nev" label={t('forms.nameLabel')} error={showErr('nev')} filled={!!form.nev}>
                    <input id="nev" value={form.nev} onChange={update('nev')} onBlur={markTouched('nev')} placeholder={t('forms.namePlaceholder')} autoComplete="name" aria-invalid={!!showErr('nev')} />
                  </Field>
                  <Field id="ceg" label={t('contact.cegLabel')} filled={!!form.ceg}>
                    <input id="ceg" value={form.ceg} onChange={update('ceg')} placeholder={t('contact.cegPlaceholder')} autoComplete="organization" />
                  </Field>
                </div>

                <div className="grid g-2" style={{ gap: 18 }}>
                  <Field id="email" label={t('forms.emailLabel')} error={showErr('email')} filled={!!form.email}>
                    <input id="email" type="email" value={form.email} onChange={update('email')} onBlur={markTouched('email')} placeholder={t('contact.emailPlaceholder')} autoComplete="email" aria-invalid={!!showErr('email')} />
                  </Field>
                  {/* telefon: a zászló a beírt szám országkódjából jön (nem választható) */}
                  <Field id="tel" label={t('forms.phoneLabel')} error={showErr('tel')} filled={!!phone} always>
                    <Suspense fallback={<div className="phone-skeleton" aria-hidden="true" />}>
                      <PhoneField value={phone} onChange={setPhone} onBlur={markTouched('tel')} numberInputProps={{ id: 'tel' }} placeholder={t('forms.phonePlaceholder')} />
                    </Suspense>
                  </Field>
                </div>

                <div className="grid g-2" style={{ gap: 18 }}>
                  <Select label={t('contact.areaLabel')} optional options={areas} value={form.terulet} placeholder={t('contact.areaPlaceholder')} onChange={setTerulet} />
                  <Select label={t('contact.timelineLabel')} optional options={timelines} value={form.hatarido} placeholder={t('contact.timelinePlaceholder')} onChange={(v) => setField('hatarido', v)} />
                </div>

                {/* "Egyéb" választásakor opcionális, rövid pontosító mező */}
                {form.terulet === OTHER_AREA && (
                  <Field
                    id="teruletEgyeb" label={t('contact.otherLabel')} filled={!!form.teruletEgyeb}
                    footer={<span className={`char-count${form.teruletEgyeb.length > OTHER_MAX - 20 ? ' warn' : ''}`}>{form.teruletEgyeb.length} / {OTHER_MAX}</span>}
                  >
                    <input id="teruletEgyeb" value={form.teruletEgyeb} onChange={update('teruletEgyeb')} maxLength={OTHER_MAX} placeholder={t('contact.otherPlaceholder')} />
                  </Field>
                )}

                <Field
                  id="uzenet" label={t('contact.messageLabel')} error={showErr('uzenet')} filled={!!form.uzenet}
                  footer={<span className={`char-count${msgWarn ? ' warn' : ''}`}>{msgLen} / {MSG_MAX}</span>}
                >
                  <textarea id="uzenet" value={form.uzenet} onChange={update('uzenet')} onBlur={markTouched('uzenet')} maxLength={MSG_MAX} placeholder={t('contact.messagePlaceholder')} aria-invalid={!!showErr('uzenet')} />
                </Field>

                {/* fájlcsatolás */}
                <div className="field group">
                  <span className="grp-label">{t('contact.attachLabel')}<span className="opt">{t('contact.attachOpt')}</span></span>
                  <div
                    className={`dropzone${drag ? ' drag' : ''}`} onClick={() => fileRef.current?.click()}
                    onDragOver={(e) => { e.preventDefault(); setDrag(true) }} onDragLeave={(e) => { e.preventDefault(); setDrag(false) }} onDrop={onDrop}
                  >
                    <Upload className="dz-ico" />
                    <div><strong>{t('contact.dropzoneStrong')}</strong>{t('contact.dropzoneRest')}</div>
                    <div className="dz-hint">{t('contact.dropzoneHint')}</div>
                    <input ref={fileRef} type="file" hidden multiple accept=".pdf,.png,.jpg,.jpeg,.dwg,.zip" onChange={(e) => { addFiles(e.target.files); e.target.value = '' }} />
                  </div>
                  {files.length > 0 && (
                    <div className="file-list">
                      {files.map((f, i) => (
                        <div className="file-item" key={`${f.name}-${i}`}>
                          <span className="fi-name">{f.name}</span>
                          <span className="fi-size">{fmtSize(f.size)}</span>
                          <button type="button" className="fi-x" aria-label={t('forms.remove')} onClick={() => setFiles(files.filter((_, idx) => idx !== i))}><Close /></button>
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
                    <span>{t('contact.gdpr1')}<a href="/adatvedelem" target="_blank" rel="noopener noreferrer">{t('forms.gdprLink')}</a>{t('contact.gdpr2')}</span>
                  </label>
                  {showErr('gdpr') && <span className="err" role="alert"><Warn />{errors.gdpr}</span>}
                </div>

                {/* Cloudflare Turnstile CAPTCHA — a beküldés csak sikeres ellenőrzés után enged */}
                <div className={`field group${touched.captcha && !captcha ? ' error' : ''}`} style={{ marginBottom: 18 }}>
                  <Turnstile key={captchaKey} onVerify={(tok) => { setCaptcha(tok); setTouched((s) => ({ ...s, captcha: true })) }} onExpire={() => setCaptcha('')} />
                  {touched.captcha && !captcha && <span className="err" role="alert"><Warn />{t('forms.captcha')}</span>}
                </div>

                <Button type="submit" arrow style={{ width: '100%', justifyContent: 'center' }}>{t('contact.submit')}</Button>
              </form>
            </Reveal>

            {/* elérhetőségek + bizalmi blokk */}
            <Reveal delay={100}>
              {cards.map((c) => {
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
            </Reveal>
          </div>
        </div>
      </section>

      {/* térkép — beágyazott Google Maps + brand-jelvény a jobb felső sarokban */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="media" style={{ height: 420 }}>
            <iframe
              title={t('contact.mapTitle')}
              src={mapEmbed(lang)} width="100%" height="100%" style={{ border: 0, display: 'block' }}
              loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen
            />
            <div className="map-badge"><img src="/assets/debaru_logo.png" alt="Debaru" /></div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
