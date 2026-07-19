import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useScrolled } from '../../hooks/useScrolled.js'
import { useToast } from '../../hooks/useToast.jsx'
import { Button } from '../ui/Button.jsx'
import { Menu } from '../ui/Icons.jsx'
import { nav, langs } from '../../data/content.js'

const LOGO = '/assets/debaru_logo.png'

export function Navbar() {
  const scrolled = useScrolled()
  const toast = useToast()
  const [menuOpen, setMenuOpen] = useState(false)
  const [lang, setLang] = useState('HU')

  // Mentett nyelvválasztás visszatöltése.
  useEffect(() => { setLang(localStorage.getItem('debaru-lang') || 'HU') }, [])

  const pickLang = (l) => {
    setLang(l)
    localStorage.setItem('debaru-lang', l)
    if (l !== 'HU') toast(`${l} verzió hamarosan — a tartalom jelenleg magyarul érhető el.`)
  }

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="wrap">
          <Link className="brand" to="/" aria-label="Debaru kezdőlap"><img src={LOGO} alt="Debaru" /></Link>

          <nav className="nav-links">
            {nav.map((n) => (
              <NavLink key={n.label} to={n.to} end={n.to === '/'} className={({ isActive }) => (isActive ? 'active' : undefined)}>{n.label}</NavLink>
            ))}
          </nav>

          <div className="nav-right">
            {/* nyelvváltó — csak akkor, ha egynél több aktív nyelv van (i18n után) */}
            {langs.length > 1 && (
              <div className="langs" role="group" aria-label="Nyelvválasztó">
                {langs.map((l) => (
                  <button key={l} data-lang={l} className={lang === l ? 'on' : undefined} onClick={() => pickLang(l)}>{l}</button>
                ))}
              </div>
            )}
            <Button to="/kapcsolat" arrow>Ajánlatot kérek</Button>
          </div>

          <button className="menu-btn" aria-label="Menü" aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)}>
            <Menu />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          {nav.map((n) => (
            <NavLink key={n.label} to={n.to} end={n.to === '/'} onClick={() => setMenuOpen(false)}>{n.label}</NavLink>
          ))}
        </div>
      )}
    </>
  )
}
