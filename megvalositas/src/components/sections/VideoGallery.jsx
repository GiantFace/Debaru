import { useState } from 'react'
import { Play } from '../ui/Icons.jsx'
import { VideoLightbox } from '../ui/VideoLightbox.jsx'

// Videó-kártyák rácsa (poszter + play + cím). Kattintásra lightboxban játszik.
export function VideoGallery({ videos }) {
  const [active, setActive] = useState(null)
  return (
    <>
      <div className="vgrid">
        {videos.map((v) => (
          <button className="vcard" key={v.id} onClick={() => setActive(v.id)} aria-label={`${v.title} — videó lejátszása`}>
            <img
              src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`} alt={v.title} loading="lazy"
              onError={(e) => { e.currentTarget.src = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg` }}
            />
            <span className="vc-scrim" />
            {v.tag && <span className="vc-tag">{v.tag}</span>}
            <span className="vc-play"><Play /></span>
            <span className="vc-title">{v.title}</span>
          </button>
        ))}
      </div>
      <VideoLightbox videoId={active} onClose={() => setActive(null)} />
    </>
  )
}
