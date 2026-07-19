import LogoLoop from '../ui/LogoLoop.jsx'
import { partners } from '../../data/partners.js'

// Partner-/referencia-sáv a hero alatt — végtelenített, mozgó logó-marquee.
export function RefStrip() {
  return (
    <section className="refstrip">
      <div className="wrap">
        <span className="rs-lbl">Partnereink</span>
        <div className="rs-loop">
          <LogoLoop
            logos={partners}
            speed={42}
            direction="left"
            logoHeight={34}
            gap={64}
            fadeOut
            fadeOutColor="var(--bg)"
            ariaLabel="Partnereink és referenciáink"
          />
        </div>
      </div>
    </section>
  )
}
