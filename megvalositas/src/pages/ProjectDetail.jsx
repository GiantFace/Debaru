import { useParams, Navigate, Link } from 'react-router-dom'
import { PageHead } from '../components/sections/PageHead.jsx'
import { Reveal, RevealStagger } from '../components/ui/Reveal.jsx'
import { ParallaxMedia } from '../components/ui/ParallaxMedia.jsx'
import { StatBlock } from '../components/ui/StatBlock.jsx'
import { VideoGallery } from '../components/sections/VideoGallery.jsx'
import { Button } from '../components/ui/Button.jsx'
import { Arrow, Check } from '../components/ui/Icons.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { projects, projectBySlug } from '../data/projects.js'
import { bkvVideos } from '../data/videos.js'

// Közös checklist-elem (szállított elemek / eredmények).
const CheckItem = ({ children }) => (
  <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', color: 'var(--muted)', fontSize: 15 }}>
    <Check style={{ width: 19, height: 19, color: 'var(--accent-2)', flexShrink: 0, marginTop: 2 }} />{children}
  </li>
)

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

      {/* áttekintés + kép + szállított elemek */}
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="split" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'start' }}>
            <Reveal>
              <div className="eyebrow">Áttekintés</div>
              <h2 style={{ fontSize: 'clamp(24px,3vw,32px)', margin: '16px 0 16px' }}>A projekt röviden</h2>
              {p.overview.map((par, i) => (
                <p key={i} className="muted" style={{ marginBottom: i < p.overview.length - 1 ? 14 : 0 }}>{par}</p>
              ))}
              <div className="eyebrow" style={{ margin: '30px 0 14px' }}>Amit szállítottunk</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
                {p.scope.map((it) => <CheckItem key={it}>{it}</CheckItem>)}
              </ul>
            </Reveal>
            <ParallaxMedia reveal speed={0.08} style={{ height: 420 }} placeholder={p.placeholder} />
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* kihívás / megoldás / eredmény + projektadatok oldalsáv */}
      <section className="section">
        <div className="wrap">
          {/* align-items: stretch → a jobb oszlop a bal szöveg magasságáig nyúlik,
              így a sticky Projektadatok-kártya végig követi a szekciót görgetéskor. */}
          <div className="split" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 64, alignItems: 'stretch' }}>
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

      {/* a megvalósítás lépései */}
      <section className="section">
        <div className="wrap">
          <Reveal className="eyebrow">A megvalósítás</Reveal>
          <Reveal as="h2" style={{ fontSize: 'clamp(26px,4vw,40px)', margin: '16px 0 48px', maxWidth: '16ch' }}>Lépésről lépésre</Reveal>
          <RevealStagger className="grid g-4" step={90}>
            {p.process.map((s) => (
              <div key={s.n}>
                <div className="kicker-num">{s.n}</div>
                <h3 style={{ fontSize: 19, margin: '14px 0 8px' }}>{s.title}</h3>
                <p className="muted" style={{ fontSize: 14.5 }}>{s.desc}</p>
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>

      <hr className="divider" />

      {/* kulcselemek + műszaki paraméterek */}
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

          {p.tech && (
            <Reveal style={{ marginTop: 48 }}>
              <div className="eyebrow" style={{ marginBottom: 18 }}>Műszaki paraméterek</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {p.tech.map((t) => (
                  <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, color: 'var(--muted)', background: 'var(--card)', border: '1px solid var(--border)', padding: '9px 15px', borderRadius: 999 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-2)', flexShrink: 0 }} />{t}
                  </span>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <hr className="divider" />

      {/* eredmények + CTA */}
      <section className="section">
        <div className="wrap">
          <div className="split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
            <Reveal>
              <div className="eyebrow">Az eredmény</div>
              <h2 style={{ fontSize: 'clamp(24px,3vw,34px)', margin: '16px 0 22px', maxWidth: '16ch' }}>Amit a projekt hozott</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
                {p.outcome.map((o) => (
                  <li key={o} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 16 }}>
                    <Check style={{ width: 20, height: 20, color: 'var(--accent-2)', flexShrink: 0, marginTop: 3 }} />{o}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="card" style={{ textAlign: 'center', padding: '56px 32px', background: 'linear-gradient(180deg,var(--card-hover),var(--card))', borderColor: 'var(--accent-line)' }}>
              <h3 style={{ fontSize: 'clamp(22px,3vw,30px)', maxWidth: '18ch', margin: '0 auto 16px' }}>Hasonló projektet tervez?</h3>
              <p className="muted" style={{ margin: '0 auto 26px', maxWidth: '34ch' }}>Kérjen díjmentes szakmai konzultációt — 3 munkanapon belül visszajelzünk.</p>
              <Button to="/kapcsolat" arrow>Ajánlatot kérek</Button>
            </Reveal>
          </div>
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
            <Button to="/kapcsolat" arrow>Beszéljünk a projektjéről</Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
