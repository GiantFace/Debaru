import { useEffect, useRef, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { useScrolled } from '../../hooks/useScrolled.js'
import { useLang, useT, LANGS } from '../../i18n/index.jsx'
import { Button } from '../ui/Button.jsx'
import { Menu, Close, Arrow, infoIcons } from '../ui/Icons.jsx'
import { nav } from '../../data/content.js'

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

// Nyelvválasztó legördülő (asztali nav) — helyben vált, nincs navigáció.
function LangMenu({ lang, onPick }) {
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
  return (
    <div className={`lang${open ? ' open' : ''}`} ref={ref}>
      <button className="lang-btn" onClick={() => setOpen((o) => !o)} aria-haspopup="listbox" aria-expanded={open} aria-label={t('navAria.lang')}>
        {FLAGS[lang]}<span>{lang}</span>
        <svg className="lang-chev" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
      </button>
      {open && (
        <ul className="lang-menu" role="listbox">
          {LANGS.map((l) => (
            <li key={l}><button role="option" aria-selected={l === lang} className={l === lang ? 'on' : undefined} onClick={() => { onPick(l); setOpen(false) }}>{FLAGS[l]}<span>{l}</span></button></li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function Navbar() {
  const scrolled = useScrolled()
  const t = useT()
  const { lang, setLang } = useLang()
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  // Menü zárása útvonalváltáskor.
  useEffect(() => { setMenuOpen(false) }, [pathname])
  // Háttér-görgetés zárolása nyitott menünél.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
        <div className="wrap">
          <Link className="brand" to="/" aria-label={t('navAria.brand')}><img src={LOGO} alt="Debaru" /></Link>

          <nav className="nav-links" aria-label={t('navAria.main')}>
            {nav.map((n) => (
              <NavLink key={n.key} to={n.to} end={n.to === '/'} className={({ isActive }) => (isActive ? 'active' : undefined)}>{t(`nav.${n.key}`)}</NavLink>
            ))}
          </nav>

          <div className="nav-right">
            <LangMenu lang={lang} onPick={setLang} />
            <Button to="/kapcsolat" arrow>{t('common.quote')}</Button>
          </div>

          <button className="menu-btn" aria-label={menuOpen ? t('navAria.menuClose') : t('navAria.menu')} aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)}>
            {menuOpen ? <Close /> : <Menu />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label={t('navAria.menu')}>
          <nav className="mm-links" aria-label={t('navAria.mobileNav')}>
            {nav.map((n) => (
              <NavLink key={n.key} to={n.to} end={n.to === '/'} className={({ isActive }) => (isActive ? 'active' : undefined)} onClick={() => setMenuOpen(false)}>
                {t(`nav.${n.key}`)}<Arrow />
              </NavLink>
            ))}
          </nav>

          <div className="mm-foot">
            <Button to="/kapcsolat" arrow onClick={() => setMenuOpen(false)}>{t('common.quote')}</Button>
            <div className="mm-contact">
              <a href="tel:+3614454166"><infoIcons.phone />+36 1 445 4166</a>
              <a href="mailto:info@debaru.hu"><infoIcons.mail />info@debaru.hu</a>
            </div>
            <div className="mm-lang" role="group" aria-label={t('navAria.lang')}>
              {LANGS.map((l) => (
                <button key={l} className={lang === l ? 'on' : undefined} onClick={() => setLang(l)}>{FLAGS[l]}<span>{l}</span></button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
