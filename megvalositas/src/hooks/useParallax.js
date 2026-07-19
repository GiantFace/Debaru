import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from './motion.js'

// Viewport-relatív, kizárólag transform-alapú parallax (rAF-fékezve).
export function useParallax(speed = 0.06) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (prefersReducedMotion || !el) return
    let ticking = false
    const apply = () => {
      const mid = window.innerHeight / 2
      const r = el.getBoundingClientRect()
      const center = r.top + r.height / 2
      const off = (center - mid) * speed * -1 // az elem képernyőn megtett útjához kötve
      el.style.transform = `translate3d(0,${off.toFixed(1)}px,0)`
      ticking = false
    }
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(apply) } }
    apply()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [speed])
  return ref
}
