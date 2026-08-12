import { Link } from 'react-router-dom'
import { RevealStagger } from '../ui/Reveal.jsx'
import { Counter } from '../ui/Counter.jsx'
import { ParallaxImage } from '../ui/ParallaxImage.jsx'
import { Button } from '../ui/Button.jsx'
import { Arrow, serviceIcons } from '../ui/Icons.jsx'
import { bentoStats } from '../../data/content.js'
import { services } from '../../data/services.js'

// Statisztika-csempe animált számlálóval.
function Stat({ to, decimals, suffix, label }) {
  return (
    <div className="b b-stat">
      <Counter to={to} decimals={decimals} suffix={suffix} />
      <div className="l">{label}</div>
    </div>
  )
}

// Bento rács: bevezető + szolgáltatások + számok, egy vizuális blokkban.
export function Bento() {
  const { years, team } = bentoStats
  return (
    <section className="section" id="szolg">
      <div className="wrap">
        <RevealStagger className="bento" step={40}>
          <div className="b b-accent b-2w b-2h">
            <div className="eyebrow">Amit csinálunk</div>
            <h2 style={{ fontSize: 'clamp(26px,3.4vw,40px)', margin: '16px 0 14px', lineHeight: 1.05, maxWidth: '15ch' }}>
              Teljes villamos életciklus, egy partnerrel
            </h2>
            <p style={{ fontSize: '15px', maxWidth: '38ch', color: 'rgba(255,255,255,.9)' }}>
              A koncepciótól a tervezésen és gyártáson át az üzemeltetésig, nem kell külön beszállítókat koordinálnia.
            </p>
            <div className="mt" style={{ paddingTop: '20px' }}>
              <Button to="/szolgaltatasok" arrow style={{ background: '#fff', color: '#2c6f56', borderColor: '#fff' }}>
                Összes szolgáltatás
              </Button>
            </div>
          </div>

          <Stat to={years.to} suffix={years.suffix} label={years.label} />
          <Stat to={team.to} label={team.label} />

          <div className="b b-img b-2w">
            <ParallaxImage className="pm-layer" speed={0.12} placeholder="Fotó, saját berendezésgyártó műhely" />
            <div className="b-scrim" />
            <div className="b-cap">
              <h3 style={{ fontSize: '19px', margin: '0 0 4px' }}>Saját berendezésgyártó műhely</h3>
              <p style={{ fontSize: '14px', margin: 0 }}>Automatika és energiaelosztó szekrények gyártása saját telephelyen.</p>
            </div>
          </div>

          {services.map((s) => {
            const Icon = serviceIcons[s.slug]
            return (
              <Link className="b" key={s.slug} to={`/szolgaltatasok#${s.slug}`}>
                <div className="b-ico"><Icon /></div>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <span className="arr"><Arrow /></span>
              </Link>
            )
          })}

        </RevealStagger>
      </div>
    </section>
  )
}
