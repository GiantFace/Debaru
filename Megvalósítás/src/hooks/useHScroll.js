import { useEffect, useRef } from 'react'

// Függőleges görgetés hajtja a track vízszintes mozgását egy sticky szekcióban.
// Mindkét irányban sima, a szélek felé lekerekítve (clamp 0..1).
export function useHScroll() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const barRef = useRef(null)

  useEffect(() => {
    const sec = sectionRef.current, track = trackRef.current, bar = barRef.current
    if (!sec || !track) return
    let travel = 0, ticking = false

    const update = () => {
      const rect = sec.getBoundingClientRect()
      const total = sec.offsetHeight - window.innerHeight
      let p = total > 0 ? -rect.top / total : 0
      p = p < 0 ? 0 : p > 1 ? 1 : p
      track.style.transform = `translate3d(${(-(p * travel)).toFixed(1)}px,0,0)`
      if (bar) bar.style.width = `${(p * 100).toFixed(1)}%`
    }
    const measure = () => {
      // a vízszintes út, amennyit a track kimozdul, + magasság a görgetéshez
      travel = Math.max(0, track.scrollWidth - window.innerWidth)
      sec.style.height = `${travel + window.innerHeight}px`
      update()
    }
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { update(); ticking = false }) } }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', measure, { passive: true })
    if (document.fonts?.ready) document.fonts.ready.then(measure)
    const t = setTimeout(measure, 60)
    measure()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', measure)
      clearTimeout(t)
    }
  }, [])

  return { sectionRef, trackRef, barRef }
}
