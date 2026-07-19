import { useParams, Navigate, Link } from 'react-router-dom'
import { PageHead } from '../components/sections/PageHead.jsx'
import { Reveal, RevealStagger } from '../components/ui/Reveal.jsx'
import { StatBlock } from '../components/ui/StatBlock.jsx'
import { VideoGallery } from '../components/sections/VideoGallery.jsx'
import { Button } from '../components/ui/Button.jsx'
import { Arrow } from '../components/ui/Icons.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { projects, projectBySlug } from '../data/projects.js'
import { bkvVideos } from '../data/videos.js'

// Egy projekt önálló, SEO-barát esettanulmány-oldala (/projektjeink/:slug).
export default function ProjectDetail() {
  const { slug } = useParams()
  const p = projectBySlug[slug]
  useDocumentTitle(p?.title)
  if (!p) return <Navigate to="/projektjeink" replace />

  const related = projects.filter((x) => x.slug !== p.slug).slice(0, 5)

  return (
    <>
      <PageHead
        placeholder={p.placeholder}
        trail={[{ label: 'Projektjeink', to: '/projektjeink' }, { label: p.title }]}
        tag={p.tag}
        title={p.title}
        lede={p.lede}
      />

      {/* leírás + projektadatok oldalsáv */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 64, alignItems: 'start' }}>
            <div>
              {p.sections.map((s, i) => (
                <Reveal key={s.eyebrow} style={i > 0 ? { marginTop: 36 } : undefined}>
                  <div className="eyebrow">{s.eyebrow}</div>
                  <h2 style={{ fontSize: 26, margin: '16px 0 14px' }}>{s.title}</h2>
                  {s.paragraphs.map((par, j) => (
                    <p key={j} className="muted" style={{ marginBottom: j < s.paragraphs.length - 1 ? 14 : 0 }}>{par}</p>
                  ))}
                </Reveal>
              ))}
            </div>

            <Reveal as="aside">
              <div className="card" style={{ position: 'sticky', top: 96 }}>
                <h4 style={{ fontFamily: 'var(--body)', fontSize: 12.5, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--faint)', marginBottom: 18 }}>Projektadatok</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {p.facts.map((f) => (
                    <div key={f.label}>
                      <div className="muted" style={{ fontSize: 13 }}>{f.label}</div>
                      <div style={{ fontWeight: 600 }}>{f.value}</div>
                    </div>
                  ))}
                </div>
                <hr className="divider" style={{ margin: '22px 0' }} />
                <div className="grid g-2" style={{ gap: 14 }}>
                  {p.stats.map((s) => (
                    <StatBlock key={s.label} to={s.to} suffix={s.suffix} label={s.label} numSize={32} lblSize={12.5} />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* mit valósítottunk meg — kiemelt elemek */}
      <section className="section">
        <div className="wrap">
          <Reveal className="eyebrow">A projekt kulcselemei</Reveal>
          <Reveal as="h2" style={{ fontSize: 'clamp(26px,4vw,40px)', margin: '16px 0 44px', maxWidth: '18ch' }}>Amit megvalósítottunk</Reveal>
          <RevealStagger className="grid g-2" step={80}>
            {p.highlights.map((h) => (
              <div className="card" key={h.title}>
                <h3 style={{ fontSize: 19, marginBottom: 8 }}>{h.title}</h3>
                <p>{h.desc}</p>
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* videó-galéria — csak a videós referenciánál (BKV) */}
      {p.videos && (
        <>
          <hr className="divider" />
          <section className="section">
            <div className="wrap">
              <Reveal className="eyebrow">A projekt videón</Reveal>
              <Reveal as="h2" style={{ fontSize: 'clamp(24px,3vw,34px)', margin: '16px 0 32px' }}>Áramátalakító, diszpécser, végállomás</Reveal>
              <Reveal><VideoGallery videos={bkvVideos} /></Reveal>
            </div>
          </section>
        </>
      )}

      <hr className="divider" />

      {/* kapcsolódó projektek */}
      <section className="section-sm">
        <div className="wrap">
          <Reveal className="eyebrow">További projektek</Reveal>
          <Reveal as="div" className="chips" style={{ marginTop: 18 }}>
            {related.map((x) => (
              <Link key={x.slug} className="chip" to={`/projektjeink/${x.slug}`}>{x.title}</Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* navigáció */}
      <section className="section-sm" style={{ paddingTop: 0 }}>
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
