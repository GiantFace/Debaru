import { Reveal, RevealStagger } from '../ui/Reveal.jsx'
import { processSteps } from '../../data/content.js'

// Munkafolyamat — négy lépcsős, számozott lista.
export function Process() {
  return (
    <section className="section" id="folyamat">
      <div className="wrap">
        <Reveal className="eyebrow">Hogyan dolgozunk</Reveal>
        <Reveal as="h2" style={{ fontSize: 'clamp(30px,4vw,48px)', margin: '16px 0 56px', maxWidth: '16ch' }}>
          A koncepciótól a folyamatos üzemig
        </Reveal>

        <RevealStagger className="grid g-4" step={90}>
          {processSteps.map((s) => (
            <div key={s.n}>
              <div className="kicker-num">{s.n}</div>
              <h3 style={{ fontSize: '19px', margin: '14px 0 8px' }}>{s.title}</h3>
              <p className="muted" style={{ fontSize: '14.5px' }}>{s.desc}</p>
            </div>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
