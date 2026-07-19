import { useScrollParallax } from '../../hooks/useScrollParallax.js'

// Rögzített háttér: dekoratív rács + lágyan sodródó accent-orbök (parallax mélység).
export function Background() {
  const orbA = useScrollParallax(0.12)
  const orbB = useScrollParallax(-0.08)
  return (
    <div aria-hidden="true">
      <div className="bg-grid" />
      <div className="orb orb-a" ref={orbA} />
      <div className="orb orb-b" ref={orbB} />
    </div>
  )
}
