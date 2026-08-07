import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { PageHead } from '../components/sections/PageHead.jsx'
import { Reveal } from '../components/ui/Reveal.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { legalDocs } from '../data/legal.js'

// Egy tartalomblokk kirajzolása (bekezdés / alcím / lista / kulcs–érték sorok).
function Block({ b }) {
  if (b.p) return <p>{b.p}</p>
  if (b.h3) return <h3>{b.h3}</h3>
  if (b.ul) return <ul>{b.ul.map((li) => <li key={li}>{li}</li>)}</ul>
  if (b.rows) return (
    <dl className="legal-rows">
      {b.rows.map((r) => (
        <div key={r.label}>
          <dt>{r.label}</dt>
          <dd>{r.href ? <a href={r.href}>{r.value}</a> : r.value}</dd>
        </div>
      ))}
    </dl>
  )
  if (b.pdf) {
    const docs = [
      { href: b.pdf.hu, lang: 'Magyar', kind: 'ÁSZF', primary: true },
      { href: b.pdf.de, lang: 'Deutsch', kind: 'AGB' },
      { href: b.pdf.en, lang: 'English', kind: 'Terms & Conditions' },
    ].filter((d) => d.href)
    return (
      <div className="doc-cards">
        {docs.map((d) => (
          <a key={d.lang} className={`doc-card${d.primary ? ' doc-card--primary' : ''}`} href={d.href} target="_blank" rel="noopener noreferrer">
            <span className="doc-ico" aria-hidden="true"><PdfGlyph /></span>
            <span className="doc-txt">
              <span className="doc-lang">{d.lang}</span>
              <span className="doc-meta">{d.kind} · PDF</span>
            </span>
            <span className="doc-dl" aria-hidden="true"><DownloadGlyph /></span>
          </a>
        ))}
      </div>
    )
  }
  return null
}

// Dokumentum- és letöltés-ikon (beágyazott, hogy a jogi oldal önálló legyen).
function PdfGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
    </svg>
  )
}
function DownloadGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4v11" /><path d="m7 11 5 5 5-5" /><path d="M5 20h14" />
    </svg>
  )
}

// Jogi oldal (Adatvédelem / ÁSZF / Impresszum): bal 1/3 sticky tartalomjegyzék,
// jobb 2/3 részletes leírás. A tartalomjegyzék görgetéskor kiemeli az aktív szekciót.
export default function Legal({ doc }) {
  const data = legalDocs[doc]
  useDocumentTitle(data?.title, data?.intro)
  const [active, setActive] = useState(data?.sections[0]?.id)

  // aktív szekció követése görgetéskor (a nav magasságát a rootMargin veszi ki)
  useEffect(() => {
    if (!data) return
    const els = data.sections.map((s) => document.getElementById(s.id)).filter(Boolean)
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
          setActive(visible[0].target.id)
        }
      },
      { rootMargin: '-100px 0px -65% 0px', threshold: 0 },
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [doc])

  if (!data) return <Navigate to="/" replace />

  const goTo = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); setActive(id) }
  }

  return (
    <>
      <PageHead placeholder={data.headPlaceholder} trail={[{ label: data.crumb }]} title={data.title} lede={data.intro} />

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="legal-grid">
            {/* bal: sticky tartalomjegyzék */}
            <div className="legal-toc">
              <div className="legal-toc-title">Tartalom</div>
              <nav aria-label="Tartalomjegyzék">
                <ol>
                  {data.sections.map((s, i) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} className={active === s.id ? 'active' : ''} onClick={(e) => goTo(e, s.id)}>
                        <span className="n">{String(i + 1).padStart(2, '0')}</span>{s.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

            {/* jobb: részletes leírás */}
            <div className="legal-content">
              <Reveal as="p" className="legal-updated">{data.updated}</Reveal>
              {data.sections.map((s) => (
                <section key={s.id} id={s.id} className="legal-section">
                  <h2>{s.title}</h2>
                  {s.body.map((b, i) => <Block key={i} b={b} />)}
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
