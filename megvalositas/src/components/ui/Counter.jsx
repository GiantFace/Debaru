import { useEffect, useRef, useState } from 'react'
import { useInView } from '../../hooks/useInView.js'
import { prefersReducedMotion } from '../../hooks/motion.js'

// Számláló, ami láthatóvá váláskor 0-ról a célértékig fut (easeOutCubic).
// `className`/`style` a szám-elemet szabja (bento: "n", oldalak: "num").
export function Counter({ to, decimals = 0, suffix = '', duration = 1000, className = 'n', style }) {
  const [ref, inView] = useInView({ threshold: 0.5, rootMargin: '0px' })
  const [val, setVal] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    if (prefersReducedMotion) { setVal(to); return }
    let raf, t0
    const tick = (now) => {
      t0 ??= now
      const p = Math.min(1, (now - t0) / duration)
      setVal(to * (1 - Math.pow(1 - p, 3)))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setVal(to)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])

  const text = val.toFixed(decimals).replace(/\.0+$/, '')
  return (
    <div className={className} ref={ref} style={style}>
      {text}{suffix && <span className="suf">{suffix}</span>}
    </div>
  )
}
