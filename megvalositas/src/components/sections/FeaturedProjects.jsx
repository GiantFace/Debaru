import { Link } from 'react-router-dom'
import { Reveal, RevealStagger } from '../ui/Reveal.jsx'
import { ParallaxMedia } from '../ui/ParallaxMedia.jsx'
import { Parallax } from '../ui/Parallax.jsx'
import { Button } from '../ui/Button.jsx'
import { projects } from '../../data/content.js'

// Kiemelt projektek — két nagy kártya képpel és címkével.
export function FeaturedProjects() {
  return (
    <section className="section" id="kiemelt" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Parallax speed={0.05}>
          <Reveal className="eyebrow">Kiemelt munkák</Reveal>
          <Reveal as="h2" style={{ fontSize: 'clamp(30px,4vw,48px)', margin: '16px 0 48px', maxWidth: '18ch' }}>
            Rendszerek, amelyek nap mint nap dolgoznak
          </Reveal>
        </Parallax>

        <RevealStagger className="grid g-2" step={120} style={{ gap: '24px' }}>
          {projects.map((p) => (
            <Link className="card" key={p.title} to={p.to} style={{ padding: 0 }}>
              <ParallaxMedia speed={0.07} placeholder={p.placeholder} style={{ aspectRatio: '16 / 10', border: 0, borderRadius: '16px 16px 0 0' }} />
              <div style={{ padding: '26px 28px 28px' }}>
                <span className="tag">{p.tag}</span>
                <h3 style={{ fontSize: '22px', margin: '16px 0 8px' }}>{p.title}</h3>
                <p className="muted" style={{ fontSize: '15px' }}>{p.desc}</p>
              </div>
            </Link>
          ))}
        </RevealStagger>

        <Reveal style={{ marginTop: '32px' }}>
          <Button variant="ghost" to="/projektjeink" arrow>Összes projekt megtekintése</Button>
        </Reveal>
      </div>
    </section>
  )
}
