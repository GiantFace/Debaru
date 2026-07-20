import { Link } from 'react-router-dom'
import { Reveal } from '../ui/Reveal.jsx'
import { ParallaxImage } from '../ui/ParallaxImage.jsx'

// Full-bleed oldalfejléc (phead-full): parallax fotó + morzsamenü + cím + lede.
// `trail` a "Debaru" utáni morzsaszakaszok; `title` sortördelhető tömb is lehet.
export function PageHead({ placeholder, trail = [], tag, title, lede, children }) {
  const lines = Array.isArray(title) ? title : [title]
  return (
    <section className="phead-full">
      <ParallaxImage className="pf-media" speed={0.16} placeholder={placeholder} />
      <div className="hf-scrim" />
      <div className="hf-accent" />
      <div className="wrap">
        <Reveal className="crumb">
          <Link to="/">Debaru</Link>
          {trail.map((s, i) => (
            <span key={i}> / {s.to ? <Link to={s.to}>{s.label}</Link> : s.label}</span>
          ))}
        </Reveal>
        {tag && <Reveal as="span" className="tag">{tag}</Reveal>}
        <Reveal as="h1" delay={60} style={tag ? { marginTop: 16, maxWidth: '20ch' } : undefined}>
          {lines.map((l, i) => <span key={i}>{i > 0 && <br />}{l}</span>)}
        </Reveal>
        {lede && <Reveal as="p" className="lede" delay={140} style={{ marginTop: 24 }}>{lede}</Reveal>}
        {children}
      </div>
    </section>
  )
}
