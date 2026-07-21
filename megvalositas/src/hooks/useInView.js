import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion, liteMode } from './motion.js'

// Reduced motion vagy lite mód → nincs animáció, minden azonnal látszik
// (így gyenge gépen sosem "ragad" rejtve a tartalom, és nincs figyelő sem).
const instant = prefersReducedMotion || liteMode

// Egyszeri belépő láthatóság-figyelő a scroll-reveal animációkhoz.
// IntersectionObserver + scroll-biztonsági háló: ha egy gyors/akadozó görgetés
// "átugorja" az IO triggerét, a scroll-ellenőrzés akkor is felfedi az elemet.
export function useInView({ threshold = 0.12, rootMargin = '0px 0px -8% 0px' } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(instant)

  useEffect(() => {
    const el = ref.current
    if (instant || !el) return
    let done = false
    const reveal = () => { if (done) return; done = true; setInView(true); cleanup() }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) reveal() })
    }, { threshold, rootMargin })
    io.observe(el)

    // Biztonsági háló: ha az elem teteje beért a nézet aljába (vagy át is haladt
    // rajta egy nagy ugrással), fedjük fel. rAF-fékezett, olvasás-only, reveal után leáll.
    let ticking = false
    const check = () => {
      ticking = false
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      if (r.top < vh * 0.92) reveal()
    }
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(check) } }
    window.addEventListener('scroll', onScroll, { passive: true })

    function cleanup() {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
    return cleanup
  }, [threshold, rootMargin])

  return [ref, inView]
}
