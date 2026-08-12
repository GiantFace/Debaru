import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Arrow, Play } from '../ui/Icons.jsx'
import { VideoLightbox } from '../ui/VideoLightbox.jsx'
import { useParallax } from '../../hooks/useParallax.js'

// Videó-borítókép erős, görgetés-vezérelt belső parallaxszal (a kép a keretén
// belül mozog, mélységérzet). Külön komponens, mert a hookot nem lehet map-ben hívni.
function VideoThumb({ v, onPlay }) {
  const par = useParallax(0.11)
  return (
    <div className="vc-thumb">
      <div className="vc-thumb-par" ref={par}>
        <img
          src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`} alt={v.title} loading="lazy"
          onError={(e) => { e.currentTarget.src = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg` }}
        />
      </div>
      <span className="vc-scrim" />
      {v.tag && <span className="vc-tag">{v.tag}</span>}
      <button className="vc-play" onClick={onPlay} aria-label={`${v.title}, videó lejátszása`}><Play /></button>
    </div>
  )
}

// Videó-kártyák rácsa. A kártya a projektre (esettanulmány) linkel, a play gomb
// a YouTube-videót nyitja lightboxban; a specs-ek a referencia paraméterei.
// `projectLink=false` (pl. magán a projekt oldalon) → az egész kártya videót játszik.
export function VideoGallery({ videos, projectLink = false }) {
  const [active, setActive] = useState(null)
  return (
    <>
      <div className="vgrid">
        {videos.map((v) => (
          <div className="vcard" key={v.id}>
            <VideoThumb v={v} onPlay={() => setActive(v.id)} />
            <div className="vc-info">
              <h3>{v.title}</h3>
              {v.specs && <ul className="vc-specs">{v.specs.map((s) => <li key={s}>{s}</li>)}</ul>}
              {projectLink && <span className="vc-cta">Projekt megtekintése <Arrow /></span>}
            </div>
            {/* stretched link: az egész kártya a projektre visz (a play gomb fölötte marad),
                a projekt oldalon viszont maga a kártya is videót játszik */}
            {projectLink
              ? <Link to={v.href} className="vc-cover" aria-label={`${v.title}, projekt megtekintése`} />
              : <button className="vc-cover" onClick={() => setActive(v.id)} aria-label={`${v.title}, videó lejátszása`} />}
          </div>
        ))}
      </div>
      <VideoLightbox videoId={active} onClose={() => setActive(null)} />
    </>
  )
}
