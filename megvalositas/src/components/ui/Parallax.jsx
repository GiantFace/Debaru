import { useInView } from '../../hooks/useInView.js'
import { useParallax } from '../../hooks/useParallax.js'

// Parallax-eltolás bármely elemre. A gyerekek saját transformja (pl. reveal)
// rákomponálódik, mert külön DOM-elemen van — így nem ütköznek.
export function Parallax({ as: Tag = 'div', speed = 0.06, className = '', style, children, ...rest }) {
  const ref = useParallax(speed)
  return <Tag ref={ref} className={className} style={style} {...rest}>{children}</Tag>
}

// Parallax (transform) + belépő fade (opacity). Két külön CSS-tulajdonság,
// ezért egy elemen is elférnek ütközés nélkül.
export function ParallaxFade({ as: Tag = 'div', speed = 0.06, className = '', style, children, ...rest }) {
  const pRef = useParallax(speed)
  const [vRef, inView] = useInView()
  const setRef = (el) => { pRef.current = el; vRef.current = el }
  return (
    <Tag ref={setRef} className={className} style={{ ...style, opacity: inView ? 1 : 0, transition: 'opacity .7s var(--ease)' }} {...rest}>
      {children}
    </Tag>
  )
}
