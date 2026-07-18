import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Route-váltáskor a lap tetejére ugrik; hash esetén az adott szekcióhoz.
export function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) { el.scrollIntoView(); return }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}
