import { useEffect } from 'react'

// Oldalankénti SEO: <title> + meta description + canonical link beállítása.
// A description opcionális; ha nincs megadva, az index.html-beli alap marad.
const SITE = 'Debaru Kft.'
const ORIGIN = 'https://debaru.hu'

// Meglévő <meta name="description"> tartalmának ideiglenes felülírása (elhagyáskor visszaáll).
function applyDescription(desc) {
  if (!desc) return null
  const el = document.head.querySelector('meta[name="description"]')
  if (!el) return null
  const prev = el.getAttribute('content')
  el.setAttribute('content', desc)
  return () => el.setAttribute('content', prev)
}

// Canonical URL az aktuális útvonalra (a debaru.hu domainen).
function applyCanonical() {
  let el = document.head.querySelector('link[rel="canonical"]')
  const created = !el
  if (!el) { el = document.createElement('link'); el.setAttribute('rel', 'canonical'); document.head.appendChild(el) }
  const prev = el.getAttribute('href')
  el.setAttribute('href', ORIGIN + window.location.pathname)
  return () => { created ? el.remove() : el.setAttribute('href', prev) }
}

export function useDocumentTitle(title, description) {
  useEffect(() => {
    const prevTitle = document.title
    document.title = title ? `${title} — ${SITE}` : SITE
    const restoreDesc = applyDescription(description)
    const restoreCanonical = applyCanonical()
    return () => {
      document.title = prevTitle
      restoreDesc?.()
      restoreCanonical?.()
    }
  }, [title, description])
}
