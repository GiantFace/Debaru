import { useMemo, useState } from 'react'
import { PageHead } from '../components/sections/PageHead.jsx'
import { Reveal } from '../components/ui/Reveal.jsx'
import { VideoGallery } from '../components/sections/VideoGallery.jsx'
import { ImageSlot } from '../components/ui/ImageSlot.jsx'
import { Button } from '../components/ui/Button.jsx'
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

  // teljes lista: legfrissebb elöl, majd kategória szerint szűrve
  const sorted = useMemo(
    () => [...referenceList].sort((a, b) => latestYear(b.y) - latestYear(a.y)),
    [],
  )
  const shown = sorted.filter((r) => filter === 'all' || r.cat === filter)

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
              <article className={`pcard${p.feat ? ' feat' : ''}`} key={p.id}>
                <div className="pc-img"><ImageSlot placeholder={p.placeholder} /></div>
                <div className="pc-scrim" />
                <span className="pc-tag">{p.tag}</span>
                {p.foreign && <span className="pc-flag">Külföld</span>}
                <div className="pc-body">
                  <h3>{p.title}</h3>
                  <span className="pc-meta">
                    <span className="y">{p.year}</span>
                    <span className="c">{p.client}{p.via ? ` · ${p.via}` : ''}</span>
                  </span>
                </div>
              </article>
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

          <Reveal className="chips" style={{ marginBottom: 28 }}>
            {projectFilters.map((f) => (
              <button key={f.key} className={`chip${filter === f.key ? ' on' : ''}`} onClick={() => setFilter(f.key)}>{f.label}</button>
            ))}
          </Reveal>

          <div className="reflist">
            {shown.map((r, i) => {
              const desc = [r.proj, r.fel].filter(Boolean).join(' — ')
              return (
                <article className="refrow" key={`${r.y}-${r.felh}-${i}`}>
                  <div className="ref-y">{r.y}</div>
                  <div className="ref-main">
                    <h3 className="ref-felh">
                      {r.felh}
                      {r.megr && <span className="ref-via"> · {r.megr} megbízásából</span>}
                    </h3>
                    {desc && <p className="ref-desc">{desc}</p>}
                  </div>
                  <span className={`ref-cat ref-cat--${r.cat}`}>{catLabel[r.cat]}</span>
                </article>
              )
            })}
          </div>
          {shown.length === 0 && <p className="muted">Ebben a kategóriában nincs találat.</p>}
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
