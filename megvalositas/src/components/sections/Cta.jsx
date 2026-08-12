import { Reveal } from '../ui/Reveal.jsx'
import { Parallax } from '../ui/Parallax.jsx'
import { Button } from '../ui/Button.jsx'
import { useT } from '../../i18n/index.jsx'

// Záró CTA — kiemelt kártya, finom parallax elúszással.
export function Cta() {
  const t = useT()
  return (
    <section className="section-sm" id="cta">
      <Parallax className="wrap" speed={0.09}>
        <Reveal
          className="card"
          style={{ textAlign: 'center', padding: '72px 32px', background: 'linear-gradient(180deg,var(--card-hover),var(--card))', borderColor: 'var(--accent-line)' }}
        >
          <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', maxWidth: '20ch', margin: '0 auto 18px' }}>
            {t('cta.title')}
          </h2>
          <p className="lede" style={{ margin: '0 auto 32px', textAlign: 'center' }}>
            {t('cta.text')}
          </p>
          <Button to="/kapcsolat" arrow>{t('cta.button')}</Button>
        </Reveal>
      </Parallax>
    </section>
  )
}
