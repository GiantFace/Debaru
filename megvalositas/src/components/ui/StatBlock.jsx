import { Counter } from './Counter.jsx'

// `.stat` szám + felirat blokk (Rólunk / esettanulmány oldalak).
export function StatBlock({ to, decimals, suffix, label, numSize, lblSize }) {
  return (
    <div className="stat">
      <Counter to={to} decimals={decimals} suffix={suffix} className="num" style={numSize ? { fontSize: numSize } : undefined} />
      <div className="lbl" style={lblSize ? { fontSize: lblSize } : undefined}>{label}</div>
    </div>
  )
}
