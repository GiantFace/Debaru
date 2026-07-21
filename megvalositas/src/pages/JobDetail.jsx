import { useEffect } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { PageHead } from '../components/sections/PageHead.jsx'
import { Reveal } from '../components/ui/Reveal.jsx'
import { Button } from '../components/ui/Button.jsx'
import { Arrow, Check } from '../components/ui/Icons.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { jobs, jobBySlug } from '../data/careers.js'
import '../styles/careers.css'

// Közös checklist-elem.
const CheckItem = ({ children }) => (
  <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', color: 'var(--muted)', fontSize: 15 }}>
    <Check style={{ width: 19, height: 19, color: 'var(--accent-2)', flexShrink: 0, marginTop: 2 }} />{children}
  </li>
)

// JobPosting strukturált adat (Google Jobs / SEO) — az állás mezőiből építve.
function useJobPostingJsonLd(job) {
  useEffect(() => {
    if (!job) return
    const data = {
      '@context': 'https://schema.org',
      '@type': 'JobPosting',
      title: job.title,
      description: [job.summary, ...job.overview].join(' '),
      datePosted: job.postedAt,
      validThrough: job.validThrough,
      employmentType: job.employmentType,
      hiringOrganization: { '@type': 'Organization', name: 'Debaru Kft.', sameAs: 'https://debaru.hu' },
      jobLocation: {
        '@type': 'Place',
        address: { '@type': 'PostalAddress', addressLocality: job.location, addressCountry: 'HU' },
      },
      directApply: true,
    }
    const el = document.createElement('script')
    el.type = 'application/ld+json'
    el.textContent = JSON.stringify(data)
    document.head.appendChild(el)
    return () => el.remove()
  }, [job])
}

// Egy állás önálló, SEO-barát oldala (/karrier/:slug) — a Projekt-detail mintájára.
export default function JobDetail() {
  const { slug } = useParams()
  const job = jobBySlug[slug]
  useDocumentTitle(job ? `${job.title} — Karrier` : undefined, job?.summary)
  useJobPostingJsonLd(job)
  if (!job) return <Navigate to="/karrier" replace />

  const related = jobs.filter((x) => x.slug !== job.slug).slice(0, 5)
  const applyTo = `/karrier/${job.slug}/jelentkezes`

  return (
    <>
      <PageHead
        placeholder={job.placeholder}
        trail={[{ label: 'Karrier', to: '/karrier' }, { label: job.title }]}
        tag={job.department}
        title={job.title}
        lede={job.summary}
      />

      {/* áttekintés + feladatok + elvárások + sticky oldalsáv */}
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="split" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 64, alignItems: 'stretch' }}>
            <div>
              <Reveal>
                <div className="eyebrow">A pozícióról</div>
                <h2 style={{ fontSize: 'clamp(24px,3vw,32px)', margin: '16px 0 16px' }}>Áttekintés</h2>
                {job.overview.map((par, i) => (
                  <p key={i} className="muted" style={{ marginBottom: i < job.overview.length - 1 ? 14 : 0 }}>{par}</p>
                ))}
              </Reveal>

              <Reveal style={{ marginTop: 34 }}>
                <div className="eyebrow" style={{ marginBottom: 14 }}>Főbb feladatok</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
                  {job.responsibilities.map((it) => <CheckItem key={it}>{it}</CheckItem>)}
                </ul>
              </Reveal>

              <Reveal style={{ marginTop: 34 }}>
                <div className="eyebrow" style={{ marginBottom: 14 }}>Amit elvárunk</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
                  {job.requirements.map((it) => <CheckItem key={it}>{it}</CheckItem>)}
                </ul>
              </Reveal>

              {job.niceToHave && job.niceToHave.length > 0 && (
                <Reveal style={{ marginTop: 34 }}>
                  <div className="eyebrow" style={{ marginBottom: 14 }}>Előnyt jelent</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
                    {job.niceToHave.map((it) => <CheckItem key={it}>{it}</CheckItem>)}
                  </ul>
                </Reveal>
              )}
            </div>

            <Reveal as="div">
              <div className="card" style={{ position: 'sticky', top: 96 }}>
                <h3 style={{ fontFamily: 'var(--body)', fontSize: 12.5, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--faint)', marginBottom: 18 }}>Pozíció adatai</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {job.facts.map((f) => (
                    <div key={f.label}>
                      <div className="muted" style={{ fontSize: 13 }}>{f.label}</div>
                      <div style={{ fontWeight: 600 }}>{f.value}</div>
                    </div>
                  ))}
                </div>
                <hr className="divider" style={{ margin: '22px 0' }} />
                <Button to={applyTo} arrow className="job-apply">Jelentkezem</Button>
                <p className="muted" style={{ fontSize: 12.5, marginTop: 12, textAlign: 'center' }}>Önéletrajzodat e-mailben várjuk.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* amit kínálunk + CTA */}
      <section className="section">
        <div className="wrap">
          <div className="split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
            <Reveal>
              <div className="eyebrow">Amit kínálunk</div>
              <h2 style={{ fontSize: 'clamp(24px,3vw,34px)', margin: '16px 0 22px', maxWidth: '16ch' }}>Miért érdemes csatlakozni?</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
                {job.offer.map((o) => (
                  <li key={o} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 16 }}>
                    <Check style={{ width: 20, height: 20, color: 'var(--accent-2)', flexShrink: 0, marginTop: 3 }} />{o}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="card" style={{ textAlign: 'center', padding: '56px 32px', background: 'linear-gradient(180deg,var(--card-hover),var(--card))', borderColor: 'var(--accent-line)' }}>
              <h3 style={{ fontSize: 'clamp(22px,3vw,30px)', maxWidth: '18ch', margin: '0 auto 16px' }}>Érdekel a pozíció?</h3>
              <p className="muted" style={{ margin: '0 auto 26px', maxWidth: '34ch' }}>Küldd el önéletrajzod — pár mondat is elég arról, mi motivál.</p>
              <Button to={applyTo} arrow>Jelentkezem erre a pozícióra</Button>
            </Reveal>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* további pozíciók */}
      <section className="section-sm">
        <div className="wrap">
          <Reveal className="eyebrow">További pozíciók</Reveal>
          <Reveal as="div" className="chips" style={{ marginTop: 18 }}>
            {related.map((x) => (
              <Link key={x.slug} className="chip" to={`/karrier/${x.slug}`}>{x.title}</Link>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
            <Button variant="ghost" to="/karrier"><Arrow style={{ transform: 'rotate(180deg)' }} />Összes pozíció</Button>
            <Button to={applyTo} arrow>Jelentkezem</Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
