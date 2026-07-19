import LogoLoop from '../ui/LogoLoop.jsx'
import { partners } from '../../data/partners.js'

// Egy logó + hoverre megjelenő teljes név (a LogoLoop renderItem-jén keresztül).
const renderPartner = (item) => (
  <span className="rs-logo">
    <img src={item.src} alt={item.alt} title={item.title} loading="lazy" decoding="async" draggable={false} />
    <span className="rs-name">{item.title}</span>
  </span>
)

// Partner-/referencia-sáv a hero alatt — végtelenített, mozgó logó-marquee.
export function RefStrip() {
  return (
    <section className="refstrip">
      <div className="wrap">
        <span className="rs-lbl">Partnereink</span>
        <div className="rs-loop">
          <LogoLoop
            logos={partners}
            renderItem={renderPartner}
            speed={42}
            direction="left"
            logoHeight={46}
            gap={72}
            fadeOut
            fadeOutColor="var(--bg)"
            ariaLabel="Partnereink és referenciáink"
          />
        </div>
      </div>
    </section>
  )
}
