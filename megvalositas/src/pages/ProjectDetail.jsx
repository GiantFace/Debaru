import { PageHead } from '../components/sections/PageHead.jsx'
import { Reveal } from '../components/ui/Reveal.jsx'
import { StatBlock } from '../components/ui/StatBlock.jsx'
import { VideoGallery } from '../components/sections/VideoGallery.jsx'
import { Button } from '../components/ui/Button.jsx'
import { Arrow } from '../components/ui/Icons.jsx'
import { projectDetail as d } from '../data/projectDetail.js'
import { bkvVideos } from '../data/videos.js'

// Esettanulmány oldal — a terv projekt.html hű változata.
export default function ProjectDetail() {
  return (
    <>
      <PageHead
        placeholder={d.headPlaceholder}
        trail={[{ label: 'Projektjeink', to: '/projektjeink' }, { label: d.crumb }]}
        tag={d.tag}
        title={d.title}
        lede={d.lede}
      />

      {/* leírás + oldalsáv */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 64, alignItems: 'start' }}>
            <div>
              {d.sections.map((s, i) => (
                <Reveal key={s.eyebrow} style={i > 0 ? { marginTop: 36 } : undefined}>
                  <div className="eyebrow">{s.eyebrow}</div>
                  <h2 style={{ fontSize: 26, margin: '16px 0 14px' }}>{s.title}</h2>
                  {s.paragraphs.map((p, j) => (
                    <p key={j} className="muted" style={{ marginBottom: j < s.paragraphs.length - 1 ? 14 : 0 }}>{p}</p>
                  ))}
                </Reveal>
              ))}
            </div>

            <Reveal as="aside">
              <div className="card" style={{ position: 'sticky', top: 96 }}>
                <h4 style={{ fontFamily: 'var(--body)', fontSize: 12.5, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--faint)', marginBottom: 18 }}>Projektadatok</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {d.facts.map((f) => (
                    <div key={f.label}>
                      <div className="muted" style={{ fontSize: 13 }}>{f.label}</div>
                      <div style={{ fontWeight: 600 }}>{f.value}</div>
                    </div>
                  ))}
                </div>
                <hr className="divider" style={{ margin: '22px 0' }} />
                <div className="grid g-2" style={{ gap: 14 }}>
                  {d.stats.map((s) => (
                    <StatBlock key={s.label} to={s.to} suffix={s.suffix} label={s.label} numSize={32} lblSize={12.5} />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* videó-galéria — a projekt három szakasza */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="eyebrow">A projekt videón</Reveal>
          <Reveal as="h2" style={{ fontSize: 'clamp(24px,3vw,34px)', margin: '16px 0 32px' }}>Áramátalakító, diszpécser, végállomás</Reveal>
          <Reveal><VideoGallery videos={bkvVideos} /></Reveal>
        </div>
      </section>

      {/* navigáció */}
      <section className="section-sm">
        <div className="wrap">
          <Reveal style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
            <Button variant="ghost" to="/projektjeink"><Arrow style={{ transform: 'rotate(180deg)' }} />Összes projekt</Button>
            <Button to="/kapcsolat" arrow>Hasonló projektet tervez?</Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
