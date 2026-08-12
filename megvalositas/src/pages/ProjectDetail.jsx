import { useParams, Navigate } from 'react-router-dom'
import { PageHead } from '../components/sections/PageHead.jsx'
import { Reveal } from '../components/ui/Reveal.jsx'
import { Button } from '../components/ui/Button.jsx'
import { featuredById, referenceList } from '../data/projects.js'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'

const catLabel = { kozlekedes: 'Közlekedés', villamos: 'Villamos', kf: 'K+F' }
const accentLabel = { kozlekedes: 'Közlekedés', villamos: 'Villamos / automatizálás', energetika: 'Energetika' }

// Melyik hivatalos referencia-sorok tartoznak az adott kiemelt projekt megrendelőjéhez.
const RELATED = {
  'bkv-etele': (r) => r.felh.includes('BKV'),
  'bkv-m4': (r) => r.felh.includes('BKV'),
  'bkv-50-56': (r) => r.felh.includes('BKV'),
  'mav-heta': (r) => r.felh === 'MÁV Zrt.',
  'mav-hev': (r) => r.felh.includes('MÁV-HÉV'),
  'asml-berlin': (r) => r.felh.includes('ASML'),
  'audi': (r) => r.felh.includes('Audi'),
  'mercedes': (r) => r.felh.includes('Mercedes'),
  'vw': (r) => r.felh.includes('Volkswagen'),
  'hungrana': (r) => r.felh.includes('Hungrana'),
  'szeged-tram': (r) => r.felh.includes('Szeged'),
  'regor': (r) => r.felh.includes('belső fejlesztés'),
}

// Kiemelt projekt részletoldala — kizárólag valós adatból (megrendelő, év, feladat)
// és a hivatalos referencialistából; nincs kitalált mérőszám.
export default function ProjectDetail() {
  const { slug } = useParams()
  const p = featuredById[slug]
  useDocumentTitle(p?.title, p?.desc)
  if (!p) return <Navigate to="/projektjeink" replace />

  const related = (RELATED[slug] ? referenceList.filter(RELATED[slug]) : []).slice(0, 8)
  const facts = [
    { label: 'Megrendelő / végfelhasználó', value: p.client },
    p.via && { label: 'Fővállalkozó', value: p.via },
    { label: 'Időszak', value: p.year },
    { label: 'Terület', value: accentLabel[p.accent] || p.tag },
    p.foreign && { label: 'Helyszín', value: 'Külföldi projekt' },
  ].filter(Boolean)

  return (
    <>
      <PageHead
        placeholder={p.placeholder}
        trail={[{ label: 'Projektjeink', to: '/projektjeink' }, { label: p.client }]}
        tag={p.tag}
        title={p.title}
        lede={p.desc}
      />

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="wrap" style={{ maxWidth: 900 }}>
          <Reveal as="h2" style={{ fontSize: 'clamp(22px,3vw,30px)', margin: '0 0 18px' }}>A projekt adatai</Reveal>
          <dl className="legal-rows">
            {facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>

          {related.length > 0 && (
            <div style={{ marginTop: 48 }}>
              <Reveal className="eyebrow">A hivatalos referencialistából</Reveal>
              <Reveal as="h2" style={{ fontSize: 'clamp(22px,3vw,30px)', margin: '14px 0 22px' }}>
                Kapcsolódó munkáink · {p.client}
              </Reveal>
              <div className="related-grid">
                {related.map((r, i) => {
                  const desc = [r.proj, r.fel].filter(Boolean).join(' · ')
                  return (
                    <div className="related-card" key={i}>
                      <div className="tl-head">
                        <h3 className="tl-felh">{r.y}{r.megr ? ` · ${r.megr}` : ''}</h3>
                        <span className={`ref-cat ref-cat--${r.cat}`}>{catLabel[r.cat]}</span>
                      </div>
                      {desc && <p className="tl-desc">{desc}</p>}
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          <Reveal className="card" style={{ marginTop: 48, textAlign: 'center', padding: '48px 28px', background: 'linear-gradient(180deg,var(--card-hover),var(--card))', borderColor: 'var(--accent-line)' }}>
            <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', maxWidth: '24ch', margin: '0 auto 16px' }}>Hasonló projektet tervez?</h2>
            <Button to="/kapcsolat" arrow>Kérjen ajánlatot</Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
