import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Route-váltáskor a lap tetejére ugrik; hash esetén az adott szekcióhoz.
export function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // más oldalról érkezve a lazy-betöltött szekció még nem biztos, hogy kész — várunk rá
      let tries = 0
      let raf
      const go = () => {
        const el = document.getElementById(hash.slice(1))
        if (el) { el.scrollIntoView(); return }
        if (tries++ < 25) raf = requestAnimationFrame(go)
      }
      go()
      return () => raf && cancelAnimationFrame(raf)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}
