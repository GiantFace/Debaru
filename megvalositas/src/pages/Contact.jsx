import { PageHead } from '../components/sections/PageHead.jsx'
import { Reveal } from '../components/ui/Reveal.jsx'
import { Button } from '../components/ui/Button.jsx'
import { ImageSlot } from '../components/ui/ImageSlot.jsx'
import { infoIcons } from '../components/ui/Icons.jsx'
import { useToast } from '../hooks/useToast.jsx'
import { contactHead, contactAreas, contactCards } from '../data/contact.js'

// Kapcsolat oldal — űrlap + elérhetőségek (a terv kapcsolat.html alapján).
export default function Contact() {
  const toast = useToast()

  const onSubmit = (e) => {
    e.preventDefault()
    toast('Köszönjük! Üzenetét megkaptuk — hamarosan jelentkezünk.')
    e.target.reset()
  }

  return (
    <>
      <PageHead placeholder={contactHead.headPlaceholder} trail={[{ label: contactHead.crumb }]} title={contactHead.title} lede={contactHead.lede} />

      <section className="section" style={{ paddingTop: 24 }} id="urlap">
        <div className="wrap">
          <div className="split" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 56, alignItems: 'start' }}>
            {/* űrlap */}
            <Reveal className="card" style={{ padding: 36 }}>
              <form onSubmit={onSubmit}>
                <div className="grid g-2" style={{ gap: 18 }}>
                  <div className="field"><label htmlFor="nev">Név *</label><input id="nev" required placeholder="Kovács János" /></div>
                  <div className="field"><label htmlFor="ceg">Cég</label><input id="ceg" placeholder="Cég neve" /></div>
                </div>
                <div className="grid g-2" style={{ gap: 18 }}>
                  <div className="field"><label htmlFor="email">E-mail *</label><input id="email" type="email" required placeholder="janos@ceg.hu" /></div>
                  <div className="field"><label htmlFor="tel">Telefon</label><input id="tel" placeholder="+36 30 123 4567" /></div>
                </div>
                <div className="field">
                  <label htmlFor="terulet">Terület</label>
                  <select id="terulet" defaultValue={contactAreas[0]}>
                    {contactAreas.map((a) => <option key={a}>{a}</option>)}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="uzenet">Üzenet *</label>
                  <textarea id="uzenet" required placeholder="Néhány mondat a feladatról, a helyszínről és a tervezett ütemezésről…" />
                </div>
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
