import { Reveal, RevealStagger } from '../ui/Reveal.jsx'
import { Parallax } from '../ui/Parallax.jsx'
import { processSteps } from '../../data/content.js'
import { useT } from '../../i18n/index.jsx'

// Munkafolyamat — a fejléc és a nagy sorszámok külön ütemben úsznak (parallax).
export function Process() {
  const t = useT()
  return (
    <section className="section" id="folyamat">
      <div className="wrap">
        <Parallax speed={0.09}>
          <Reveal className="eyebrow">{t('process.eyebrow')}</Reveal>
          <Reveal as="h2" style={{ fontSize: 'clamp(30px,4vw,48px)', margin: '16px 0 16px', maxWidth: '16ch' }}>
            {t('process.title')}
          </Reveal>
          <Reveal as="p" className="muted" style={{ fontSize: '16px', margin: '0 0 56px', maxWidth: '52ch' }}>
            {t('process.lede')}
          </Reveal>
        </Parallax>

        <RevealStagger className="grid g-4" step={90}>
          {processSteps.map((s, i) => (
            <div key={s.n}>
              <div className="kicker-num">{s.n}</div>
              <h3 style={{ fontSize: '19px', margin: '14px 0 8px' }}>{t(`process.steps.${i}.title`)}</h3>
              <p className="muted" style={{ fontSize: '14.5px' }}>{t(`process.steps.${i}.desc`)}</p>
            </div>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
