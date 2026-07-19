import { useInView } from '../../hooks/useInView.js'
import { ParallaxImage } from './ParallaxImage.jsx'

// Framelt kép-helykitöltő belső parallax réteggel: a kép a keretén belül mozog.
// `reveal` esetén a keret belépő animációt is kap (a parallax a belső rétegen fut,
// így a kettő nem ütközik).
export function ParallaxMedia({ placeholder, src, alt, speed = 0.09, reveal = false, delay, className = '', style }) {
  const [frameRef, inView] = useInView()
  const cls = ['media', reveal && inView && 'in', className].filter(Boolean).join(' ')
  const frameProps = reveal ? { ref: frameRef, 'data-reveal': '' } : {}
  const frameStyle = reveal && delay ? { ...style, transitionDelay: `${delay}ms` } : style
  return (
    <div className={cls} style={frameStyle} {...frameProps}>
      <ParallaxImage className="pm-layer" speed={speed} placeholder={placeholder} src={src} alt={alt} />
    </div>
  )
}
