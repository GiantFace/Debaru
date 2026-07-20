import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { useScrolled } from '../../hooks/useScrolled.js'
import { useToast } from '../../hooks/useToast.jsx'
import { Button } from '../ui/Button.jsx'
import { Menu, Close, Arrow, infoIcons } from '../ui/Icons.jsx'
import { nav, langs } from '../../data/content.js'

const LOGO = '/assets/debaru_logo.png'

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
          </div>
        </div>
      )}
    </>
  )
}
