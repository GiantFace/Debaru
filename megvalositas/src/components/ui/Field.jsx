import { useState } from 'react'
import { Warn } from './Icons.jsx'

// Lebegő címkés mező: a label a mezőben ül, fókuszra vagy kitöltésre a keret
// bal-felső sarkába úszik fel. `filled` = van érték; `always` = mindig fent
// (pl. telefon a zászlóval, vagy select).
export function Field({ id, label, error, filled = false, always = false, footer, children }) {
  const [focused, setFocused] = useState(false)
  const active = always || focused || filled
  return (
    <div className={`field float${active ? ' active' : ''}${error ? ' error' : ''}`}>
      {/* a focus/blur felbugyog a beágyazott inputról (focusin/focusout) */}
      <div className="fw" onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}>
        {children}
        <label htmlFor={id}>{label}</label>
      </div>
      {(error || footer) && (
        <div className="row-end">
          {error ? <span className="err" role="alert"><Warn />{error}</span> : <span />}
          {footer}
        </div>
      )}
    </div>
  )
}
