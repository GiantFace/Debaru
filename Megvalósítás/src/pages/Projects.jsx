import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHead } from '../components/sections/PageHead.jsx'
import { Reveal } from '../components/ui/Reveal.jsx'
import { ImageSlot } from '../components/ui/ImageSlot.jsx'
import { Button } from '../components/ui/Button.jsx'
import { Arrow } from '../components/ui/Icons.jsx'
import { projectsHead, projectFilters, projectCards } from '../data/projects.js'

// Projektjeink oldal — szűrhető bento rács (a terv projektjeink.html alapján).
export default function Projects() {
  const [filter, setFilter] = useState('all')
  const shown = projectCards.filter((c) => filter === 'all' || c.cat === filter)

  return (
    <>
      <PageHead placeholder={projectsHead.headPlaceholder} trail={[{ label: projectsHead.crumb }]} title={projectsHead.title} lede={projectsHead.lede}>
        <Reveal className="chips" delay={200}>
          {projectFilters.map((f) => (
            <button key={f.key} className={`chip${filter === f.key ? ' on' : ''}`} onClick={() => setFilter(f.key)}>{f.label}</button>
          ))}
        </Reveal>
      </PageHead>

      <section className="section" style={{ paddingTop: 16 }}>
        <div className="wrap">
          <div className="pgrid">
            {shown.map((c) => (
              <Link className={`pcard${c.feat ? ' feat' : ''}`} to="/projekt" key={c.title}>
                <div className="pc-img"><ImageSlot placeholder={c.placeholder} /></div>
                <div className="pc-scrim" />
                <span className="pc-tag">{c.tag}</span>
                <div className="pc-arrow"><Arrow /></div>
                <div className="pc-body">
                  <h3>{c.title}</h3>
                  {c.desc && <p>{c.desc}</p>}
                  <span className="pc-metric"><span className="m">{c.metric}</span><span className="l">{c.metricLabel}</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap">
          <Reveal className="card" style={{ textAlign: 'center', padding: '72px 32px', background: 'linear-gradient(180deg,var(--card-hover),var(--card))', borderColor: 'var(--accent-line)' }}>
            <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', maxWidth: '20ch', margin: '0 auto 18px' }}>A következő referencia az Öné lehet</h2>
            <Button to="/kapcsolat" arrow>Beszéljünk a projektjéről</Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
