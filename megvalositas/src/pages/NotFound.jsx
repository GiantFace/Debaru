import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/ui/Reveal.jsx'
import { Button } from '../components/ui/Button.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { prefersReducedMotion } from '../hooks/motion.js'
import { useT } from '../i18n/index.jsx'
import { CABINET_SVG } from '../data/cabinetSvg.js'
import '../styles/notfound.css'

// 404 — a designból: animált elosztószekrény kioldott 404-es kismegszakítóval.
export default function NotFound() {
  const t = useT()
  useDocumentTitle(t('notFound.docTitle'))

  // világos háttér → a nav sötét szövegű legyen (nincs sötét hero); + noindex.
  useEffect(() => {
    document.body.classList.remove('hero-light')
    const meta = document.createElement('meta')
    meta.name = 'robots'; meta.content = 'noindex'
    document.head.appendChild(meta)
    return () => { document.body.classList.add('hero-light'); document.head.removeChild(meta) }
  }, [])

  // egérmozgásra dőlő 3D parallax a szekrényen (reduced-motion esetén kikapcsol)
  useEffect(() => {
    if (prefersReducedMotion) return
    const v = document.querySelector('.e404-visual')
    const cab = document.querySelector('.cabinet')
    if (!v || !cab) return
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = null
    const loop = () => {
      cx += (tx - cx) * .08; cy += (ty - cy) * .08
      cab.style.transform = `perspective(900px) rotateY(${cx * 7}deg) rotateX(${-cy * 7}deg) translateZ(0)`
      raf = (Math.abs(tx - cx) > .002 || Math.abs(ty - cy) > .002) ? requestAnimationFrame(loop) : null
    }
    const onMove = (e) => {
      const r = v.getBoundingClientRect()
      tx = (e.clientX - (r.left + r.width / 2)) / r.width * 2
      ty = (e.clientY - (r.top + r.height / 2)) / r.height * 2
      if (!raf) raf = requestAnimationFrame(loop)
    }
    const onLeave = () => { tx = 0; ty = 0; if (!raf) raf = requestAnimationFrame(loop) }
    v.addEventListener('pointermove', onMove)
    v.addEventListener('pointerleave', onLeave)
    return () => { v.removeEventListener('pointermove', onMove); v.removeEventListener('pointerleave', onLeave); if (raf) cancelAnimationFrame(raf) }
  }, [])

  const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }
  return (
    <main className="e404">
      <div className="wrap">
        <div className="e404-grid">
          <div>
            <Reveal className="pill"><span className="dot" />{t('notFound.pill')}</Reveal>
            <Reveal as="h1" delay={80}>{t('notFound.heading.0')}<br /><span className="accent">{t('notFound.heading.1')}</span></Reveal>
            <Reveal as="p" className="lede" delay={160}>{t('notFound.lede')}</Reveal>
            <Reveal className="e404-actions" delay={240}>
              <Button to="/" arrow>{t('notFound.home')}</Button>
              <Button variant="ghost" to="/kapcsolat">{t('nav.contact')}</Button>
            </Reveal>
            <Reveal className="e404-links" delay={320}>
              <div className="lbl">{t('notFound.popular')}</div>
              <div className="chips">
                <Link to="/szolgaltatasok"><svg viewBox="0 0 24 24" {...stroke}><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9h6v6H9z" /></svg>{t('nav.services')}</Link>
                <Link to="/projektjeink"><svg viewBox="0 0 24 24" {...stroke}><path d="M3 7h18M3 12h18M3 17h12" /></svg>{t('nav.projects')}</Link>
                <Link to="/rolunk"><svg viewBox="0 0 24 24" {...stroke}><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>{t('nav.about')}</Link>
                <Link to="/kapcsolat"><svg viewBox="0 0 24 24" {...stroke}><path d="M4 4h16v16H4z" /><path d="m4 6 8 6 8-6" /></svg>{t('nav.contact')}</Link>
              </div>
            </Reveal>
          </div>

          <Reveal className="e404-visual" delay={120}>
            <div className="cabinet" dangerouslySetInnerHTML={{ __html: CABINET_SVG }} />
          </Reveal>
        </div>
      </div>
    </main>
  )
}
