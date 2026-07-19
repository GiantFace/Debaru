import { useEffect, useRef } from 'react'

// Cloudflare Turnstile (CAPTCHA). A widget tokent ad; a beküldés csak ezután enged.
// A site key a VITE_TURNSTILE_SITE_KEY env-változóból jön (Cloudflare Dashboard →
// Turnstile → Add site). Ha nincs beállítva, az official TESZT-kulcsra esik vissza
// (mindig sikeres) — így fejlesztés közben is működik. FONTOS: a tokent a szerveren
// ellenőrizni kell a secret key-jel (siteverify), a widget önmagában megkerülhető.
export const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'

const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
let scriptPromise = null

// A Turnstile scriptet csak egyszer töltjük be (a Kapcsolat oldalon).
function loadTurnstile() {
  if (window.turnstile) return Promise.resolve()
  if (scriptPromise) return scriptPromise
  scriptPromise = new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.src = SCRIPT_SRC; s.async = true; s.defer = true
    s.onload = () => resolve()
    s.onerror = reject
    document.head.appendChild(s)
  })
  return scriptPromise
}

export function Turnstile({ siteKey = TURNSTILE_SITE_KEY, onVerify, onExpire, theme = 'light', size = 'flexible' }) {
  const ref = useRef(null)
  const widgetId = useRef(null)

  useEffect(() => {
    let cancelled = false
    // A scriptet mi töltjük be és megvárjuk, így a window.turnstile már kész —
    // közvetlenül renderelünk (a turnstile.ready() csak a script ELŐTT hívva működik).
    loadTurnstile().then(() => {
      const tr = window.turnstile
      if (cancelled || !ref.current || !tr || widgetId.current != null) return
      widgetId.current = tr.render(ref.current, {
        sitekey: siteKey,
        theme,
        size, // 'flexible' = a konténer teljes szélességét kitölti
        callback: (token) => onVerify?.(token),
        'expired-callback': () => onExpire?.(),
        'error-callback': () => onExpire?.(),
      })
    }).catch(() => {})
    return () => {
      cancelled = true
      if (widgetId.current != null && window.turnstile) {
        try { window.turnstile.remove(widgetId.current) } catch { /* már eltávolítva */ }
        widgetId.current = null
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteKey])

  return <div ref={ref} className="turnstile" />
}
