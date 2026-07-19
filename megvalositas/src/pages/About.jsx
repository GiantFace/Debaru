import { PageHead } from '../components/sections/PageHead.jsx'
import { VideoBand } from '../components/sections/VideoBand.jsx'
import { Reveal, RevealStagger } from '../components/ui/Reveal.jsx'
import { StatBlock } from '../components/ui/StatBlock.jsx'
import { ParallaxMedia } from '../components/ui/ParallaxMedia.jsx'
import { Button } from '../components/ui/Button.jsx'
import { infoIcons } from '../components/ui/Icons.jsx'
import { aboutHead, story, aboutStats, values, milestones, team } from '../data/about.js'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'

// Rólunk oldal — a terv rolunk.html hű React változata.
export default function About() {
  useDocumentTitle(aboutHead.crumb, aboutHead.lede)
  return (
    <>
      <PageHead placeholder={aboutHead.headPlaceholder} trail={[{ label: aboutHead.crumb }]} title={aboutHead.title} lede={aboutHead.lede} />

      {/* nagy fotó */}
      <section className="section" style={{ paddingTop: 32 }}>
        <div className="wrap">
          <ParallaxMedia reveal speed={0.09} style={{ height: 440 }} placeholder={aboutHead.heroPlaceholder} />
        </div>
      </section>

      {/* történet + számok */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
            <Reveal>
              <div className="eyebrow">{story.eyebrow}</div>
              <h2 style={{ fontSize: 'clamp(26px,3vw,38px)', margin: '16px 0 20px' }}>{story.title}</h2>
              {story.paragraphs.map((p, i) => (
                <p key={i} className="muted" style={{ marginBottom: i < story.paragraphs.length - 1 ? 16 : 0 }}>{p}</p>
              ))}
            </Reveal>
            <RevealStagger className="grid g-2" step={90} style={{ gap: 16 }}>
              {aboutStats.map((s) => (
                <div className="card" key={s.label}><StatBlock to={s.to} suffix={s.suffix} label={s.label} numSize={44} /></div>
              ))}
            </RevealStagger>
          </div>
        </div>
      </section>

      {/* full-bleed háttérvideó */}
      <VideoBand videoId="8t5K-FrwARQ" start={3} eyebrow="Bepillantás" title="A műhely, ahol a rendszerek készülnek" />

      {/* értékek */}
      <section className="section">
        <div className="wrap">
          <Reveal className="eyebrow">Amiben hiszünk</Reveal>
          <Reveal as="h2" style={{ fontSize: 'clamp(28px,4vw,44px)', margin: '16px 0 48px', maxWidth: '16ch' }}>Négy elv, ami minden projektet vezet</Reveal>
          <RevealStagger className="grid g-4" step={90}>
            {values.map((v) => {
              const Icon = infoIcons[v.icon]
              return (
                <div className="card" key={v.title}>
                  <div className="ico"><Icon /></div>
                  <h3 style={{ fontSize: 18 }}>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              )
            })}
          </RevealStagger>
        </div>
      </section>

      <hr className="divider" />

      {/* mérföldkövek */}
      <section className="section">
        <div className="wrap">
          <Reveal className="eyebrow">Mérföldkövek</Reveal>
          <Reveal as="h2" style={{ fontSize: 'clamp(28px,4vw,44px)', margin: '16px 0 48px' }}>A Debaru útja</Reveal>
          <RevealStagger step={90}>
            {milestones.map((m, i) => (
              <div key={m.year} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 28, padding: '22px 0', borderTop: '1px solid var(--border)', borderBottom: i === milestones.length - 1 ? '1px solid var(--border)' : undefined }}>
                <div className="kicker-num" style={{ fontSize: 22, color: 'var(--accent-2)' }}>{m.year}</div>
                <div>
                  <h3 style={{ fontSize: 19, marginBottom: 6 }}>{m.title}</h3>
                  <p className="muted" style={{ fontSize: 15 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>

      <hr className="divider" />

      {/* csapat */}
      <section className="section">
        <div className="wrap">
          <Reveal className="eyebrow">A csapat</Reveal>
          <Reveal as="h2" style={{ fontSize: 'clamp(28px,4vw,44px)', margin: '16px 0 48px' }}>Akik a rendszerek mögött állnak</Reveal>
          <RevealStagger className="grid g-4" step={80}>
            {team.map((t) => (
              <div key={t.name}>
                <ParallaxMedia speed={0.06} style={{ height: 260, marginBottom: 16 }} placeholder="Portré" />
                <h3 style={{ fontSize: 17 }}>{t.name}</h3>
                <p className="muted" style={{ fontSize: 14 }}>{t.role}</p>
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm">
        <div className="wrap">
          <Reveal className="card" style={{ textAlign: 'center', padding: '72px 32px', background: 'linear-gradient(180deg,var(--card-hover),var(--card))', borderColor: 'var(--accent-line)' }}>
            <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', maxWidth: '20ch', margin: '0 auto 18px' }}>Dolgozzunk együtt a következő rendszerén</h2>
            <Button to="/kapcsolat" arrow>Beszéljünk</Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
