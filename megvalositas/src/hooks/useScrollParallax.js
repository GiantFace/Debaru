import { useEffect, useRef } from 'react'
import { prefersReducedMotion, liteMode } from './motion.js'

// Egyszerű, scrollY-vezérelt eltolás (fix pozíciójú dekorációkhoz, pl. orbök).
export function useScrollParallax(speed = 0.15) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (prefersReducedMotion || liteMode || !el) return
    let ticking = false
    const apply = () => {
      el.style.transform = `translate3d(0, ${(window.scrollY * speed).toFixed(1)}px, 0)`
      ticking = false
    }
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(apply) } }
    apply()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed])
  return ref
}
