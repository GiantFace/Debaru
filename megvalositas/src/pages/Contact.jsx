import { useState } from 'react'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'
import 'react-phone-number-input/style.css'
import { PageHead } from '../components/sections/PageHead.jsx'
import { Reveal } from '../components/ui/Reveal.jsx'
import { Button } from '../components/ui/Button.jsx'
import { Field } from '../components/ui/Field.jsx'
import { infoIcons } from '../components/ui/Icons.jsx'
import { useToast } from '../hooks/useToast.jsx'
import { contactHead, contactAreas, contactCards } from '../data/contact.js'

const MSG_MAX = 5000
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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
  return e
}

const EMPTY = { nev: '', ceg: '', email: '', terulet: contactAreas[0], uzenet: '' }

export default function Contact() {
  const toast = useToast()
  const [form, setForm] = useState(EMPTY)
  const [phone, setPhone] = useState()
  const [touched, setTouched] = useState({})

  const errors = validate(form, phone)
  const showErr = (k) => (touched[k] && errors[k]) || undefined

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const markTouched = (k) => () => setTouched((t) => ({ ...t, [k]: true }))

  const onSubmit = (e) => {
    e.preventDefault()
    if (Object.keys(errors).length) {
      setTouched({ nev: true, email: true, tel: true, uzenet: true })
      toast('Kérjük, javítsa a pirossal jelölt mezőket.')
      const first = document.querySelector('.field.error input, .field.error textarea, .field.error .PhoneInputInput')
      if (first) first.focus()
      return
    }
    toast('Köszönjük! Üzenetét megkaptuk — hamarosan jelentkezünk.')
    setForm(EMPTY)
    setPhone(undefined)
    setTouched({})
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
                  {/* telefon: a zászló a beírt szám országkódjából jön (nem választható), a szám elé töltve */}
                  <Field id="tel" label="Telefon" error={showErr('tel')} filled={!!phone} always>
                    <PhoneInput
                      international
                      defaultCountry="HU"
                      flags={flags}
                      value={phone}
                      onChange={setPhone}
                      onBlur={markTouched('tel')}
                      numberInputProps={{ id: 'tel' }}
                      placeholder="30 123 4567"
                    />
                  </Field>
                </div>

                <Field id="terulet" label="Terület" always>
                  <select id="terulet" value={form.terulet} onChange={update('terulet')}>
                    {contactAreas.map((a) => <option key={a}>{a}</option>)}
                  </select>
                </Field>

                <Field
                  id="uzenet" label="Üzenet *" error={showErr('uzenet')} filled={!!form.uzenet}
                  footer={<span className={`char-count${msgWarn ? ' warn' : ''}`}>{msgLen} / {MSG_MAX}</span>}
                >
                  <textarea id="uzenet" value={form.uzenet} onChange={update('uzenet')} onBlur={markTouched('uzenet')} maxLength={MSG_MAX} placeholder="Néhány mondat a feladatról, a helyszínről és a tervezett ütemezésről…" aria-invalid={!!showErr('uzenet')} />
                </Field>

                <Button type="submit" arrow style={{ width: '100%', justifyContent: 'center' }}>Üzenet küldése</Button>
                <p className="muted" style={{ fontSize: 12.5, marginTop: 14, textAlign: 'center' }}>A gomb megnyomásával elfogadja az adatkezelési tájékoztatót.</p>
              </form>
            </Reveal>

            {/* elérhetőségek */}
            <Reveal delay={100}>
              {contactCards.map((c, i) => {
                const Icon = infoIcons[c.icon]
                return (
                  <div className="card" key={c.title} style={{ marginBottom: i < contactCards.length - 1 ? 16 : 0 }}>
                    <div className="ico"><Icon /></div>
                    <h3 style={{ fontSize: 18, marginBottom: 6 }}>{c.title}</h3>
                    <p className="muted" style={{ fontSize: 15 }}>
                      {c.links
                        ? c.links.map((l, j) => <span key={l.href}>{j > 0 && <br />}<a href={l.href}>{l.label}</a></span>)
                        : c.lines.map((line, j) => <span key={j}>{j > 0 && <br />}{line}</span>)}
                    </p>
                  </div>
                )
              })}
            </Reveal>
          </div>
        </div>
      </section>

      {/* térkép helye */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="media" style={{ height: 360, display: 'grid', placeItems: 'center', background: 'var(--bg-2)' }}>
            <div style={{ textAlign: 'center', color: 'var(--faint)' }}>
              <infoIcons.pin style={{ width: 34, height: 34, margin: '0 auto 10px' }} />
              <div style={{ fontSize: 14 }}>Térkép — Budafoki út 97.</div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
