import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHead } from '../components/sections/PageHead.jsx'
import { Reveal } from '../components/ui/Reveal.jsx'
import { VideoGallery } from '../components/sections/VideoGallery.jsx'
import { ImageSlot } from '../components/ui/ImageSlot.jsx'
import { Button } from '../components/ui/Button.jsx'
import { Counter } from '../components/ui/Counter.jsx'
import { Arrow } from '../components/ui/Icons.jsx'
import { projectsHead, projectFilters, featuredProjects, referenceList } from '../data/projects.js'
import { bkvVideos } from '../data/videos.js'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'

const catLabel = { kozlekedes: 'Közlekedés', villamos: 'Villamos', kf: 'K+F' }

// A legkésőbbi évszám kiolvasása a „2018–2019” / „2011-” alakú mezőkből (rendezéshez).
function latestYear(y) {
  const nums = String(y).match(/\d{4}/g)
  return nums ? Math.max(...nums.map(Number)) : 0
}

// Projektjeink oldal — kiemelt referencia-vitrin + teljes, szűrhető referencialista.
export default function Projects() {
  useDocumentTitle(projectsHead.crumb, projectsHead.lede)
  const [filter, setFilter] = useState('all')

  // teljes lista év szerint csoportosítva, legfrissebb évvel elöl (idővonalhoz)
  const groups = useMemo(() => {
    const sorted = [...referenceList].sort((a, b) => latestYear(b.y) - latestYear(a.y))
    const map = new Map()
    for (const r of sorted) {
      const y = latestYear(r.y)
      if (!map.has(y)) map.set(y, [])
      map.get(y).push(r)
    }
    return [...map.entries()].map(([year, items]) => ({ year, items }))
  }, [])
  const shownCount = referenceList.filter((r) => filter === 'all' || r.cat === filter).length

  // összesített számok a statisztika-sávhoz (a valós listából)
  const stats = useMemo(() => {
    const ys = referenceList.map((r) => latestYear(r.y)).filter(Boolean)
    return {
      count: referenceList.length,
      span: Math.max(...ys) - Math.min(...ys),
      users: new Set(referenceList.map((r) => r.felh)).size,
      clients: new Set(referenceList.map((r) => r.megr || r.felh)).size,
    }
  }, [])

  return (
    <>
      <PageHead placeholder={projectsHead.headPlaceholder} trail={[{ label: projectsHead.crumb }]} title={projectsHead.title} lede={projectsHead.lede} />

      {/* Kiemelt referenciák — csempés vitrin */}
      <section className="section" style={{ paddingTop: 16 }} id="kiemelt">
        <div className="wrap">
          <Reveal className="eyebrow">Kiemelt referenciák</Reveal>
          <Reveal as="h2" style={{ fontSize: 'clamp(28px,4vw,44px)', margin: '16px 0 40px', maxWidth: '22ch' }}>
            Rendszerek, amelyek nap mint nap dolgoznak
          </Reveal>
          <div className="pgrid">
            {featuredProjects.map((p) => (
              <Link className={`pcard${p.feat ? ' feat' : ''}`} to={`/projektjeink/${p.id}`} key={p.id}>
                <div className="pc-img"><ImageSlot placeholder={p.placeholder} /></div>
                <div className="pc-scrim" />
                <span className="pc-tag">{p.tag}</span>
                {p.foreign && <span className="pc-flag">Külföld</span>}
                <div className="pc-arrow"><Arrow /></div>
                <div className="pc-body">
                  <h3>{p.title}</h3>
                  <span className="pc-meta">
                    <span className="y">{p.year}</span>
                    <span className="c">{p.client}{p.via ? ` · ${p.via}` : ''}</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* referenciavideók — a BKV Etele téri munkáról */}
      <section className="section" style={{ paddingTop: 0 }} id="videok">
        <div className="wrap">
          <Reveal className="eyebrow">Munkáink videón</Reveal>
          <Reveal as="h2" style={{ fontSize: 'clamp(28px,4vw,44px)', margin: '16px 0 40px', maxWidth: '20ch' }}>
            A BKV Etele téri projekt — élőben
          </Reveal>
          <Reveal><VideoGallery videos={bkvVideos} /></Reveal>
        </div>
      </section>

      {/* Teljes referencialista — szűrhető */}
      <section className="section" style={{ paddingTop: 8 }} id="referencialista">
        <div className="wrap">
          <Reveal className="eyebrow">Teljes referencialista</Reveal>
          <Reveal as="h2" style={{ fontSize: 'clamp(28px,4vw,44px)', margin: '16px 0 10px', maxWidth: '24ch' }}>
            Több mint 100 projekt 2010 óta
          </Reveal>
          <Reveal as="p" className="muted" style={{ maxWidth: '60ch', margin: '0 0 28px' }}>
            Válogatás nélkül, a hivatalos referencialistánk alapján — végfelhasználó, megrendelő és a konkrét feladat megjelölésével.
          </Reveal>

          <Reveal className="pstats">
            <div className="pstat"><span className="n"><Counter to={stats.count} suffix="+" /></span><span className="l">átadott projekt</span></div>
            <div className="pstat"><span className="n"><Counter to={stats.span} suffix="+" /></span><span className="l">év, 2010 óta</span></div>
            <div className="pstat"><span className="n"><Counter to={stats.users} suffix="+" /></span><span className="l">végfelhasználó</span></div>
            <div className="pstat"><span className="n"><Counter to={stats.clients} suffix="+" /></span><span className="l">megrendelő és partner</span></div>
          </Reveal>

          <Reveal className="chips" style={{ marginBottom: 28 }}>
            {projectFilters.map((f) => (
              <button key={f.key} className={`chip${filter === f.key ? ' on' : ''}`} onClick={() => setFilter(f.key)}>{f.label}</button>
            ))}
          </Reveal>

          <div className="timeline">
            {groups.map((g) => {
              const items = g.items.filter((r) => filter === 'all' || r.cat === filter)
              if (!items.length) return null
              return (
                <div className="tl-group" key={g.year}>
                  <div className="tl-year">
                    <span className="y">{g.year}</span>
                    <span className="c">{items.length} projekt</span>
                  </div>
                  <div className="tl-items">
                    <span className="tl-ghost" aria-hidden="true">{g.year}</span>
                    {items.map((r, i) => {
                      const desc = [r.proj, r.fel].filter(Boolean).join(' — ')
                      return (
                        <article className="tl-card" key={`${r.felh}-${i}`}>
                          <div className="tl-head">
                            <h3 className="tl-felh">{r.felh}</h3>
                            <span className={`ref-cat ref-cat--${r.cat}`}>{catLabel[r.cat]}</span>
                          </div>
                          {r.megr && <span className="tl-via">{r.megr} megbízásából</span>}
                          {desc && <p className="tl-desc">{desc}</p>}
                          {String(g.year) !== r.y && <span className="tl-range">{r.y}</span>}
                        </article>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
          {shownCount === 0 && <p className="muted">Ebben a kategóriában nincs találat.</p>}
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap">
          <Reveal className="card" style={{ textAlign: 'center', padding: '72px 32px', background: 'linear-gradient(180deg,var(--card-hover),var(--card))', borderColor: 'var(--accent-line)' }}>
            <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', maxWidth: '20ch', margin: '0 auto 18px' }}>A következő referencia az Öné lehet!</h2>
            <Button to="/kapcsolat" arrow>Beszéljünk a projektjéről!</Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
