import { useEffect, useRef } from 'react'

// Zöld olvasás-jelző sáv közvetlenül a header alatt: a görgetési haladást mutatja.
export function ScrollProgress() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    let raf = null
    const update = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      const pct = max > 0 ? doc.scrollTop / max : 0
      if (el) el.style.transform = `scaleX(${pct})`
      raf = null
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return <div className="scroll-progress" ref={ref} aria-hidden="true" />
}
