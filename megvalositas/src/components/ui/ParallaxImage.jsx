import { useParallax } from '../../hooks/useParallax.js'
import { ImageSlot } from './ImageSlot.jsx'

// Parallaxos képkeret — a wrapper mozog, benne a helykitöltő/kép.
// A slot-propok (placeholder, src, alt) továbbmennek az ImageSlot-ba.
export function ParallaxImage({ speed = 0.05, className = '', style, ...slot }) {
  const ref = useParallax(speed)
  return (
    <div className={className} ref={ref} style={style}>
      <ImageSlot {...slot} />
    </div>
  )
}
