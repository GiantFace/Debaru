import { useParams, Navigate, Link } from 'react-router-dom'
import { PageHead } from '../components/sections/PageHead.jsx'
import { Reveal, RevealStagger } from '../components/ui/Reveal.jsx'
import { ParallaxMedia } from '../components/ui/ParallaxMedia.jsx'
import { Button } from '../components/ui/Button.jsx'
import { Check, serviceIcons } from '../components/ui/Icons.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { services, serviceBySlug } from '../data/services.js'

// Egy szolgáltatás önálló, SEO-barát részletoldala (/szolgaltatasok/:slug).
export default function ServiceDetail() {
  const { slug } = useParams()
  const svc = serviceBySlug[slug]
  useDocumentTitle(svc?.title, svc?.lede)
  if (!svc) return <Navigate to="/szolgaltatasok" replace />

  const Icon = serviceIcons[svc.slug]
  const related = services.filter((s) => s.slug !== svc.slug)

  return (
    <>
      <PageHead
        placeholder={svc.placeholder}
        trail={[{ label: 'Szolgáltatások', to: '/szolgaltatasok' }, { label: svc.title }]}
        tag={svc.tag}
        title={svc.title}
        lede={svc.lede}
      />

      {/* bevezető + kulcspontok + kép */}
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="split" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'start' }}>
            <Reveal>
              <div className="svc-lead-ico"><Icon /></div>
              <h2 style={{ fontSize: 'clamp(24px,3vw,32px)', margin: '20px 0 16px' }}>Amit a Debaru ezen a területen nyújt</h2>
              {svc.intro.map((p, i) => (
                <p key={i} className="muted" style={{ marginBottom: i < svc.intro.length - 1 ? 14 : 0 }}>{p}</p>
              ))}
              <ul style={{ listStyle: 'none', padding: 0, margin: '22px 0 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {svc.items.map((it) => (
                  <li key={it} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', color: 'var(--muted)', fontSize: 15 }}>
                    <Check style={{ width: 19, height: 19, color: 'var(--accent-2)', flexShrink: 0, marginTop: 2 }} />{it}
                  </li>
                ))}
              </ul>
            </Reveal>
            <ParallaxMedia reveal speed={0.15} style={{ height: 380 }} placeholder={svc.placeholder} />
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* mit tartalmaz — képességek */}
      <section className="section">
        <div className="wrap">
          <Reveal className="eyebrow">Amit tartalmaz</Reveal>
          <Reveal as="h2" style={{ fontSize: 'clamp(26px,4vw,40px)', margin: '16px 0 44px', maxWidth: '18ch' }}>Konkrét képességek és megoldások</Reveal>
          <RevealStagger className="grid g-2" step={80}>
            {svc.capabilities.map((c) => (
              <div className="card" key={c.title}>
                <h3 style={{ fontSize: 19, marginBottom: 8 }}>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* hogyan dolgozunk — folyamat */}
      {svc.process && (
        <>
          <hr className="divider" />
          <section className="section">
            <div className="wrap">
              <Reveal className="eyebrow">Hogyan dolgozunk</Reveal>
              <Reveal as="h2" style={{ fontSize: 'clamp(26px,4vw,40px)', margin: '16px 0 48px', maxWidth: '16ch' }}>A koncepciótól az átadásig</Reveal>
              <RevealStagger className="grid g-4" step={90}>
                {svc.process.map((s) => (
                  <div key={s.n}>
                    <div className="kicker-num">{s.n}</div>
                    <h3 style={{ fontSize: 19, margin: '14px 0 8px' }}>{s.title}</h3>
                    <p className="muted" style={{ fontSize: 14.5 }}>{s.desc}</p>
                  </div>
                ))}
              </RevealStagger>

              {svc.tech && (
                <Reveal style={{ marginTop: 48 }}>
                  <div className="eyebrow" style={{ marginBottom: 18 }}>Szabványok & technológiák</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                    {svc.tech.map((t) => (
                      <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, color: 'var(--muted)', background: 'var(--card)', border: '1px solid var(--border)', padding: '9px 15px', borderRadius: 999 }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-2)', flexShrink: 0 }} />{t}
                      </span>
                    ))}
                  </div>
                </Reveal>
              )}
            </div>
          </section>
        </>
      )}

      <hr className="divider" />

      {/* miért a Debaru + kapcsolódó projekt */}
      <section className="section">
        <div className="wrap">
          <div className="split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
            <Reveal>
              <div className="eyebrow">Miért a Debaru</div>
              <h2 style={{ fontSize: 'clamp(24px,3vw,34px)', margin: '16px 0 22px', maxWidth: '16ch' }}>Egy partner, teljes felelősséggel</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {svc.benefits.map((b) => (
                  <li key={b} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 16 }}>
                    <Check style={{ width: 20, height: 20, color: 'var(--accent-2)', flexShrink: 0, marginTop: 3 }} />{b}
                  </li>
                ))}
              </ul>
              {svc.projectHref && (
                <div style={{ marginTop: 28 }}>
                  <Button variant="ghost" to={svc.projectHref} arrow>Kapcsolódó esettanulmány</Button>
                </div>
              )}
            </Reveal>
            <Reveal className="card" style={{ textAlign: 'center', padding: '56px 32px', background: 'linear-gradient(180deg,var(--card-hover),var(--card))', borderColor: 'var(--accent-line)' }}>
              <h3 style={{ fontSize: 'clamp(22px,3vw,30px)', maxWidth: '18ch', margin: '0 auto 16px' }}>Van egy hasonló feladata?</h3>
              <p className="muted" style={{ margin: '0 auto 26px', maxWidth: '34ch' }}>Kérjen díjmentes szakmai konzultációt — 3 munkanapon belül visszajelzünk.</p>
              <Button to="/kapcsolat" arrow>Ajánlatot kérek</Button>
            </Reveal>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* kapcsolódó szolgáltatások */}
      <section className="section-sm">
        <div className="wrap">
          <Reveal className="eyebrow">További szolgáltatások</Reveal>
          <Reveal as="div" className="chips" style={{ marginTop: 18 }}>
            {related.map((s) => (
              <Link key={s.slug} className="chip" to={`/szolgaltatasok/${s.slug}`}>{s.title}</Link>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  )
}
