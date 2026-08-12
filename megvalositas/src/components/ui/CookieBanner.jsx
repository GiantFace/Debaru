import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { loadAnalytics } from '../../lib/analytics.js'
import { useT } from '../../i18n/index.jsx'

const KEY = 'debaru-cookie-consent'

// Süti-beállítások sáv. Jelenleg csak működéshez szükséges sütit használunk,
// de a szabványos két gombot (összes / csak szükséges) kínáljuk — jövőálló, és
// a döntést eltároljuk. Default export: a Layout lazy-vel tölti be.
export default function CookieBanner() {
  const t = useT()
  const [show, setShow] = useState(false)

  useEffect(() => {
    try { if (!localStorage.getItem(KEY)) setShow(true) } catch { setShow(true) }
  }, [])

  const decide = (value) => () => {
    try { localStorage.setItem(KEY, value) } catch { /* pl. privát mód */ }
    if (value === 'all') loadAnalytics() // hozzájárulás után indul az analitika (ha van GA-ID)
    setShow(false)
  }

  if (!show) return null
  return (
    <div className="cookie-banner" role="region" aria-label={t('cookie.aria')}>
      <strong>{t('cookie.title')}</strong>
      <p>
        {t('cookie.text')}<Link to="/adatvedelem">{t('cookie.link')}</Link>.
      </p>
      <div className="ck-actions">
        <button type="button" className="btn btn-ghost" onClick={decide('necessary')}>{t('cookie.necessary')}</button>
        <button type="button" className="btn btn-primary" onClick={decide('all')}>{t('cookie.acceptAll')}</button>
      </div>
    </div>
  )
}
