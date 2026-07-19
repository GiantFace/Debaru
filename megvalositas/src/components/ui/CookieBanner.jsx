import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const KEY = 'debaru-cookie-consent'

// Süti-tájékoztató sáv. Az oldal csak működéshez/spam-védelemhez szükséges sütit
// használ (analitika/marketing nincs), ezért egy sima tudomásulvétel elegendő.
export function CookieBanner() {
  const [show, setShow] = useState(false)

  // csak akkor jelenik meg, ha a látogató még nem nyugtázta
  useEffect(() => {
    try { if (!localStorage.getItem(KEY)) setShow(true) } catch { setShow(true) }
  }, [])

  const accept = () => {
    try { localStorage.setItem(KEY, 'ok') } catch { /* pl. privát mód */ }
    setShow(false)
  }

  if (!show) return null
  return (
    <div className="cookie-banner" role="region" aria-label="Süti-tájékoztató">
      <strong>Sütikről röviden</strong>
      <p>
        Az oldal csak a működéshez és a spam elleni védelemhez (Cloudflare Turnstile)
        szükséges sütiket használ — analitikát és marketinget nem. Részletek az{' '}
        <Link to="/adatvedelem">Adatkezelési tájékoztatóban</Link>.
      </p>
      <button type="button" className="btn btn-primary" onClick={accept}>Rendben</button>
    </div>
  )
}
