// ============================================================================
// Analitika — consent-gated GA4 (Google Analytics 4).
//
// Csak akkor tölt be, ha (1) be van állítva a VITE_GA_ID (pl. "G-XXXXXXX"), ÉS
// (2) a felhasználó az "Összes elfogadása" gombra kattintott a sütisávon.
// Süti-alapú, ezért kötelezően a hozzájáruláshoz kötjük (GDPR).
//
// Aktiválás: a projekt gyökér .env(.local) fájljában:  VITE_GA_ID=G-XXXXXXX
// Ha nincs ID beállítva, semmilyen külső szkript nem töltődik be.
//
// Plausible-re váltás: elég ezt a fájlt kicserélni — a hívási pontok
// (Layout, CookieBanner) változatlanok maradnak.
// ============================================================================

const GA_ID = import.meta.env.VITE_GA_ID
const CONSENT_KEY = 'debaru-cookie-consent'
let loaded = false

// GA4 betöltése (idempotens). A dataLayer/gtag szinkron elérhető, a parancsok
// a szkript megérkezéséig sorba állnak.
export function loadAnalytics() {
  if (loaded || !GA_ID || typeof window === 'undefined') return
  loaded = true
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  // send_page_view: false → a lapletöltéseket mi küldjük (SPA, útvonalváltásra)
  window.gtag('config', GA_ID, { anonymize_ip: true, send_page_view: false })
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(s)
}

// Alkalmazásindításkor: ha korábban már hozzájárult, töltsük be.
export function initAnalyticsIfConsented() {
  try {
    if (localStorage.getItem(CONSENT_KEY) === 'all') loadAnalytics()
  } catch { /* pl. privát mód */ }
}

// SPA lapletöltés-esemény (útvonalváltásra). No-op, amíg nincs betöltve.
export function trackPageview(path) {
  if (!loaded || !GA_ID || !window.gtag) return
  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  })
}
