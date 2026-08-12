import { useEffect, useRef, useState } from 'react'
import { Check } from './Icons.jsx'
import { useT } from '../../i18n/index.jsx'

// Letisztult, márkához igazított legördülő (egyszeres választás, törölhető).
// Kattintáson kívülre / Escape zár; a lenyíló lista is a design szerint stílusozott.
export function Select({ label, optional, options, value, placeholder, onChange }) {
  const t = useT()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const onDoc = (e) => { if (!ref.current?.contains(e.target)) setOpen(false) }
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onKey) }
  }, [open])

  const pick = (v) => { onChange(v); setOpen(false) }

  return (
    <div className="field group">
      <span className="grp-label">{label}{optional && <span className="opt">{t('forms.optional')}</span>}</span>
      <div className={`select${open ? ' open' : ''}`} ref={ref}>
        <button type="button" className="select-btn" aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <span className={value ? 'select-val' : 'select-ph'}>{value || placeholder || t('forms.selectPlaceholder')}</span>
          <svg className="select-chev" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
        </button>
        {open && (
          <ul className="select-menu" role="listbox">
            {value && <li className="select-opt select-clear" role="option" aria-selected={false} onClick={() => pick('')}>{t('forms.clear')}</li>}
            {options.map((o) => (
              <li key={o} className={`select-opt${value === o ? ' on' : ''}`} role="option" aria-selected={value === o} onClick={() => pick(o)}>
                <span>{o}</span>{value === o && <Check />}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
