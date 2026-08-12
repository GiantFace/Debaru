import LogoLoop from '../ui/LogoLoop.jsx'
import { partners } from '../../data/partners.js'
import { useT } from '../../i18n/index.jsx'

// Egy logó + hoverre megjelenő teljes név (a LogoLoop renderItem-jén keresztül).
const renderPartner = (item) => (
  <span className="rs-logo">
    <img src={item.src} alt={item.alt} loading="lazy" decoding="async" draggable={false} />
    <span className="rs-name" aria-hidden="true">{item.title}</span>
  </span>
)

// Partner-/referencia-sáv a hero alatt — végtelenített, mozgó logó-marquee.
export function RefStrip() {
  const t = useT()
  return (
    <section className="refstrip">
      <div className="wrap">
        <span className="rs-lbl">{t('refstrip.label')}</span>
        <div className="rs-loop">
          <LogoLoop
            logos={partners}
            renderItem={renderPartner}
            speed={42}
            direction="left"
            logoHeight={46}
            gap={72}
            fadeOut
            fadeOutColor="var(--bg)"
            ariaLabel={t('refstrip.aria')}
          />
        </div>
      </div>
    </section>
  )
}
