import { useEffect, useRef, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { useScrolled } from '../../hooks/useScrolled.js'
import { useToast } from '../../hooks/useToast.jsx'
import { Button } from '../ui/Button.jsx'
import { Menu, Close, Arrow, infoIcons } from '../ui/Icons.jsx'
import { nav, langs } from '../../data/content.js'

const LOGO = '/assets/debaru_logo.png'

// Kis zászlók a nyelvekhez (inline SVG — nincs flag-könyvtár a főbundle-ben).
const FLAGS = {
  HU: (
    <svg viewBox="0 0 20 14" className="flag" aria-hidden="true">
      <rect width="20" height="14" fill="#fff" /><rect width="20" height="4.67" fill="#cd2a3e" /><rect y="9.33" width="20" height="4.67" fill="#436f4d" />
    </svg>
  ),
  EN: (
    <svg viewBox="0 0 60 30" className="flag" aria-hidden="true">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
      <path d="M0 0l60 30m0-30L0 30" stroke="#c8102e" strokeWidth="3" />
      <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
      <path d="M30 0v30M0 15h60" stroke="#c8102e" strokeWidth="6" />
    </svg>
  ),
  DE: (
    <svg viewBox="0 0 20 14" className="flag" aria-hidden="true">
      <rect width="20" height="4.67" fill="#000" /><rect y="4.67" width="20" height="4.66" fill="#d00" /><rect y="9.33" width="20" height="4.67" fill="#ffce00" />
    </svg>
  ),
}

// Nyelvválasztó legördülő (asztali nav). A tartalom jelenleg HU; EN/DE „hamarosan".
function LangMenu({ lang, onPick }) {
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
  return (
    <div className={`lang${open ? ' open' : ''}`} ref={ref}>
      <button className="lang-btn" onClick={() => setOpen((o) => !o)} aria-haspopup="listbox" aria-expanded={open} aria-label="Nyelvválasztó">
        {FLAGS[lang]}<span>{lang}</span>
        <svg className="lang-chev" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
      </button>
      {open && (
        <ul className="lang-menu" role="listbox">
          {langs.map((l) => (
            <li key={l}><button role="option" aria-selected={l === lang} className={l === lang ? 'on' : undefined} onClick={() => { onPick(l); setOpen(false) }}>{FLAGS[l]}<span>{l}</span></button></li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function Navbar() {
  const scrolled = useScrolled()
  const toast = useToast()
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [lang, setLang] = useState('HU')

  // Mentett nyelvválasztás visszatöltése.
  useEffect(() => { setLang(localStorage.getItem('debaru-lang') || 'HU') }, [])
  // Menü zárása útvonalváltáskor.
  useEffect(() => { setMenuOpen(false) }, [pathname])
  // Háttér-görgetés zárolása nyitott menünél.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const pickLang = (l) => {
    setLang(l)
    localStorage.setItem('debaru-lang', l)
    if (l !== 'HU') toast(`${l} verzió hamarosan — a tartalom jelenleg magyarul érhető el.`)
  }

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
        <div className="wrap">
          <Link className="brand" to="/" aria-label="Debaru kezdőlap"><img src={LOGO} alt="Debaru" /></Link>

          <nav className="nav-links" aria-label="Fő navigáció">
            {nav.map((n) => (
              <NavLink key={n.label} to={n.to} end={n.to === '/'} className={({ isActive }) => (isActive ? 'active' : undefined)}>{n.label}</NavLink>
            ))}
          </nav>

          <div className="nav-right">
            <LangMenu lang={lang} onPick={pickLang} />
            <Button to="/kapcsolat" arrow>Ajánlatot kérek</Button>
          </div>

          <button className="menu-btn" aria-label={menuOpen ? 'Menü bezárása' : 'Menü'} aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)}>
            {menuOpen ? <Close /> : <Menu />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menü">
          <nav className="mm-links" aria-label="Mobil navigáció">
            {nav.map((n) => (
              <NavLink key={n.label} to={n.to} end={n.to === '/'} className={({ isActive }) => (isActive ? 'active' : undefined)} onClick={() => setMenuOpen(false)}>
                {n.label}<Arrow />
              </NavLink>
            ))}
          </nav>

          <div className="mm-foot">
            <Button to="/kapcsolat" arrow onClick={() => setMenuOpen(false)}>Ajánlatot kérek</Button>
            <div className="mm-contact">
              <a href="tel:+3614454166"><infoIcons.phone />+36 1 445 4166</a>
              <a href="mailto:info@debaru.hu"><infoIcons.mail />info@debaru.hu</a>
            </div>
            <div className="mm-lang" role="group" aria-label="Nyelvválasztó">
              {langs.map((l) => (
                <button key={l} className={lang === l ? 'on' : undefined} onClick={() => pickLang(l)}>{FLAGS[l]}<span>{l}</span></button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
