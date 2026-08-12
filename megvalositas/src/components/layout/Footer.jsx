import { Link } from 'react-router-dom'
import { footer } from '../../data/content.js'
import { useT } from '../../i18n/index.jsx'

const LOGO = '/assets/debaru_logo.png'

export function Footer() {
  const t = useT()
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="cols">
          <div className="foot-brand">
            <img src={LOGO} alt={t('footer.brandAlt')} />
            <p className="muted" style={{ fontSize: '14.5px', maxWidth: '34ch' }}>
              {t('footer.tagline')}
            </p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.key}>
              <h3>{t(`footer.title.${col.key}`)}</h3>
              {col.links.map((l) => {
                const label = l.label ?? t(l.labelKey)
                return l.to
                  ? <Link key={label} to={l.to}>{label}</Link>
                  : <a key={label} href={l.href}>{label}</a>
              })}
              {col.address && (
                <span className="muted" style={{ display: 'block', fontSize: '14.5px', padding: '5px 0' }}>
                  {t('footer.address').split('\n').map((line, i, arr) => (
                    <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                  ))}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Debaru Kft. {t('footer.rights')}</span>
          <span className="foot-legal">
            <Link to="/adatvedelem">{t('footer.legal.privacy')}</Link>
            <span aria-hidden="true">·</span>
            <Link to="/aszf">{t('footer.legal.terms')}</Link>
            <span aria-hidden="true">·</span>
            <Link to="/impresszum">{t('footer.legal.imprint')}</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
