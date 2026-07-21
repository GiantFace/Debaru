import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion, liteMode } from './motion.js'

// Reduced motion vagy lite mód → nincs animáció, minden azonnal látszik
// (így gyenge gépen sosem "ragad" rejtve a tartalom, és nincs figyelő/parallax sem).
const instant = prefersReducedMotion || liteMode

// Egyszeri belépő láthatóság-figyelő a scroll-reveal animációkhoz.
// KIZÁRÓLAG IntersectionObserver — a böngésző a fő szálon kívül kezeli, így nem
// terheli a görgetést (nincs elemenkénti scroll-figyelő). Gyenge gépen az `instant`
// miatt eleve nincs reveal, tehát ott sincs semmi görgetési költség.
export function useInView({ threshold = 0.1, rootMargin = '0px 0px -6% 0px' } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(instant)

  useEffect(() => {
    const el = ref.current
    if (instant || !el) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { setInView(true); io.disconnect() }
      })
    }, { threshold, rootMargin })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, rootMargin])

  return [ref, inView]
}
