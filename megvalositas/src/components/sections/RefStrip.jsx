import { Parallax } from '../ui/Parallax.jsx'
import { references } from '../../data/content.js'

// Referencia-logók sávja a hero alatt — a logók finoman elúsznak scrollra.
export function RefStrip() {
  return (
    <section className="refstrip">
      <div className="wrap">
        <span className="rs-lbl">Referenciák</span>
        <Parallax className="rs-logos" speed={0.05}>
          {references.map((r) => <span key={r}>{r}</span>)}
        </Parallax>
      </div>
    </section>
  )
}
