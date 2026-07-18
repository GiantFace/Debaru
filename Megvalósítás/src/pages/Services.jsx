import { PageHead } from '../components/sections/PageHead.jsx'
import { Reveal } from '../components/ui/Reveal.jsx'
import { ParallaxImage } from '../components/ui/ParallaxImage.jsx'
import { Button } from '../components/ui/Button.jsx'
import { Check } from '../components/ui/Icons.jsx'
import { servicesHead, serviceChips, serviceBlocks } from '../data/services.js'

// Szolgáltatások oldal — a terv szolgaltatasok.html hű változata (váltakozó blokkok).
export default function Services() {
  return (
    <>
      <PageHead placeholder={servicesHead.headPlaceholder} trail={[{ label: servicesHead.crumb }]} title={servicesHead.title} lede={servicesHead.lede}>
        <Reveal className="chips" delay={200}>
          {serviceChips.map((c) => <a key={c.id} className="chip" href={`#${c.id}`}>{c.label}</a>)}
        </Reveal>
      </PageHead>

      <div className="wrap">
        {serviceBlocks.map((b, i) => (
          <Reveal as="section" className="svc" id={b.id} key={b.id} style={i === serviceBlocks.length - 1 ? { borderBottom: '1px solid var(--border)' } : undefined}>
            <div>
              <span className="tag">{b.tag}</span>
              <h2 style={{ fontSize: 'clamp(26px,3vw,36px)', margin: '16px 0 12px' }}>{b.title}</h2>
              <p className="muted">{b.desc}</p>
              <ul>
                {b.items.map((it) => <li key={it}><Check />{it}</li>)}
              </ul>
            </div>
            <ParallaxImage className="svc-media media" speed={0.11} style={{ height: 380 }} placeholder={b.placeholder} />
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
