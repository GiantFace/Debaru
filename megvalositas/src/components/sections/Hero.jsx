import { useParallax } from '../../hooks/useParallax.js'
import { ImageSlot } from '../ui/ImageSlot.jsx'
import { ParallaxFade } from '../ui/Parallax.jsx'
import { Button } from '../ui/Button.jsx'
import { Reveal } from '../ui/Reveal.jsx'
import { heroStats } from '../../data/content.js'

// Full-bleed fotós hero — több rétegű parallax: fotó, lebegő stat, szövegblokk.
export function Hero() {
  const media = useParallax(0.16)   // háttérfotó (leglassabb réteg)
  const inner = useParallax(0.05)   // szövegblokk (előtér, finoman elúszik)
  return (
    <section className="hero-full" id="top">
      <div className="hf-media" ref={media}>
        <ImageSlot placeholder="Hero fotó — kapcsolószekrény / üzem / mérnöki munka" />
      </div>
      <div className="hf-scrim" />
      <div className="hf-accent" />

      <ParallaxFade className="hf-stat" speed={0.09}>
        <div className="hs-lbl">Élesben, folyamatosan</div>
        <div className="hs-row">
          {heroStats.map((s) => (
            <div key={s.k}><div className="v">{s.v}</div><div className="k">{s.k}</div></div>
          ))}
        </div>
      </ParallaxFade>

      <div className="wrap" style={{ position: 'relative' }}>
        <div className="hf-inner" ref={inner}>
          <Reveal className="hf-eyebrow">Ipari automatizálás · PLC / SCADA · Áramellátás</Reveal>
          <Reveal as="h1" className="hf-title" delay={90}>
            Megbízható rendszerek,<br />kritikus infrastruktúrákhoz.
          </Reveal>
          <Reveal className="hf-actions" delay={200}>
            <Button to="/projektjeink" arrow>Projektjeink</Button>
            <Button variant="outline-light" to="/kapcsolat">Kapcsolat</Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
