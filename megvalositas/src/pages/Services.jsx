import { Link } from 'react-router-dom'
import { PageHead } from '../components/sections/PageHead.jsx'
import { Reveal } from '../components/ui/Reveal.jsx'
import { ParallaxImage } from '../components/ui/ParallaxImage.jsx'
import { Button } from '../components/ui/Button.jsx'
import { Check } from '../components/ui/Icons.jsx'
import { servicesHead, services } from '../data/services.js'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'

// Szolgáltatások áttekintő — minden blokkból „Részletek" visz a saját aloldalra.
export default function Services() {
  useDocumentTitle(servicesHead.crumb, servicesHead.lede)
  return (
    <>
      <PageHead placeholder={servicesHead.headPlaceholder} trail={[{ label: servicesHead.crumb }]} title={servicesHead.title} lede={servicesHead.lede}>
        <Reveal className="chips" delay={200}>
          {services.map((s) => <a key={s.slug} className="chip" href={`#${s.slug}`}>{s.chip}</a>)}
        </Reveal>
      </PageHead>

      <div className="wrap">
        {services.map((s, i) => (
          <Reveal as="section" className="svc" id={s.slug} key={s.slug} style={i === services.length - 1 ? { borderBottom: '1px solid var(--border)' } : undefined}>
            <div>
              <span className="tag">{s.tag}</span>
              <h2 style={{ fontSize: 'clamp(26px,3vw,36px)', margin: '16px 0 12px' }}>
                <Link to={`/szolgaltatasok/${s.slug}`} style={{ color: 'inherit' }}>{s.title}</Link>
              </h2>
              <p className="muted">{s.desc}</p>
              <ul>
                {s.items.map((it) => <li key={it}><Check />{it}</li>)}
              </ul>
              <div style={{ marginTop: 24 }}>
                <Button variant="ghost" to={`/szolgaltatasok/${s.slug}`} arrow>Részletek</Button>
              </div>
            </div>
            <ParallaxImage className="svc-media media" speed={0.11} style={{ height: 380 }} placeholder={s.placeholder} />
          </Reveal>
        ))}
      </div>

      <section className="section-sm">
        <div className="wrap">
          <Reveal className="card" style={{ textAlign: 'center', padding: '72px 32px', background: 'linear-gradient(180deg,var(--card-hover),var(--card))', borderColor: 'var(--accent-line)' }}>
            <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', maxWidth: '22ch', margin: '0 auto 18px' }}>Nem biztos, melyik szolgáltatás illik a feladatához?</h2>
            <p className="lede" style={{ margin: '0 auto 32px', textAlign: 'center' }}>Írja le a kihívást — mérnökeink megmondják, mi a legjobb megoldás.</p>
            <Button to="/kapcsolat" arrow>Konzultációt kérek</Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
