import { Link } from 'react-router-dom'
import { footer } from '../../data/content.js'

const LOGO = '/assets/debaru_logo.png'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="cols">
          <div className="foot-brand">
            <img src={LOGO} alt="Debaru" />
            <p className="muted" style={{ fontSize: '14.5px', maxWidth: '34ch' }}>
              Ipari automatizálás, villamos energetika és vezérléstechnika — tervezéstől a folyamatos üzemig.
            </p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              {col.links.map((l) => (
                l.to
                  ? <Link key={l.label} to={l.to}>{l.label}</Link>
                  : <a key={l.label} href={l.href}>{l.label}</a>
              ))}
              {col.address && (
                <span className="muted" style={{ display: 'block', fontSize: '14.5px', padding: '5px 0' }}>
                  {col.address.split('\n').map((line, i, arr) => (
                    <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                  ))}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="foot-bottom">
          <span>© 2026 Debaru Kft. Minden jog fenntartva.</span>
          <span>Adatvédelem · ÁSZF · Impresszum</span>
        </div>
      </div>
    </footer>
  )
}
