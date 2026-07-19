import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Close } from './Icons.jsx'

// Videó-lightbox: teljes képernyős overlay, a YouTube-videó hanggal, vezérlőkkel.
// Bezárás: háttérre kattintás, X, vagy Esc. Portál a body-ba (transform-safe).
export function VideoLightbox({ videoId, onClose }) {
  useEffect(() => {
    if (!videoId) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden' // háttér-görgetés tiltása
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [videoId, onClose])

  if (!videoId) return null
  const src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`

  return createPortal(
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button className="lb-close" aria-label="Bezárás" onClick={onClose}><Close /></button>
      <div className="lb-frame" onClick={(e) => e.stopPropagation()}>
        <iframe src={src} title="Debaru referenciavideó" allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowFullScreen />
      </div>
    </div>,
    document.body,
  )
}
