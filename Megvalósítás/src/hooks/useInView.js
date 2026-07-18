import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from './motion.js'

// Egyszeri belépő láthatóság-figyelő (IntersectionObserver) a scroll-reveal animációkhoz.
export function useInView({ threshold = 0.12, rootMargin = '0px 0px -8% 0px', once = true } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(prefersReducedMotion) // reduced motion → azonnal látszik

  useEffect(() => {
    const el = ref.current
    if (prefersReducedMotion || !el) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setInView(true)
          if (once) io.unobserve(el)
        } else if (!once) setInView(false)
      })
    }, { threshold, rootMargin })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, inView]
}
