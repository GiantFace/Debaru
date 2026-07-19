import { references } from '../../data/content.js'

// Referencia-logók sávja a hero alatt.
export function RefStrip() {
  return (
    <section className="refstrip">
      <div className="wrap">
        <span className="rs-lbl">Referenciák</span>
        <div className="rs-logos">
          {references.map((r) => <span key={r}>{r}</span>)}
        </div>
      </div>
    </section>
  )
}
