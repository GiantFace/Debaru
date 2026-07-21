import { useEffect } from 'react'

// Oldalankénti SEO: <title> + meta description + canonical + Open Graph/Twitter.
// A description opcionális; ha nincs megadva, az index.html-beli alap marad.
const SITE = 'Debaru Kft.'
const ORIGIN = 'https://debaru.hu'

// Egy meglévő <meta> tartalmának ideiglenes felülírása (elhagyáskor visszaáll).
function setMeta(selector, content) {
  if (!content) return null
  const el = document.head.querySelector(selector)
  if (!el) return null
  const prev = el.getAttribute('content')
  el.setAttribute('content', content)
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
    const full = title ? `${title} — ${SITE}` : SITE
    document.title = full
    const url = ORIGIN + window.location.pathname
    // oldalankénti meta + OG/Twitter felülírás (unmountra visszaáll az index.html-beli alap)
    const restores = [
      setMeta('meta[name="description"]', description),
      setMeta('meta[property="og:title"]', full),
      setMeta('meta[property="og:description"]', description),
      setMeta('meta[property="og:url"]', url),
      setMeta('meta[name="twitter:title"]', full),
      setMeta('meta[name="twitter:description"]', description),
      applyCanonical(),
    ]
    return () => {
      document.title = prevTitle
      restores.forEach((r) => r && r())
    }
  }, [title, description])
}
