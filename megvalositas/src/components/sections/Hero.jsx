import { useParallax } from '../../hooks/useParallax.js'
import { ImageSlot } from '../ui/ImageSlot.jsx'
import { ParallaxFade } from '../ui/Parallax.jsx'
import { Button } from '../ui/Button.jsx'
import { Reveal } from '../ui/Reveal.jsx'
import { heroStats } from '../../data/content.js'
import { useT } from '../../i18n/index.jsx'

// Full-bleed fotós hero — több rétegű parallax: fotó, lebegő stat, szövegblokk.
export function Hero() {
  const t = useT()
  const media = useParallax(0.16)   // háttérfotó (leglassabb réteg)
  const inner = useParallax(0.05)   // szövegblokk (előtér, finoman elúszik)
  return (
    <section className="hero-full" id="top">
      <div className="hf-media" ref={media}>
        <ImageSlot placeholder={t('hero.placeholder')} />
      </div>
      <div className="hf-scrim" />
      <div className="hf-accent" />

      <ParallaxFade className="hf-stat" speed={0.09}>
        <div className="hs-lbl">{t('hero.statsLabel')}</div>
        <div className="hs-row">
          {heroStats.map((s, i) => (
            <div key={s.v}><div className="v">{s.v}</div><div className="k">{t(`hero.stats.${i}`)}</div></div>
          ))}
        </div>
      </ParallaxFade>

      <div className="wrap" style={{ position: 'relative' }}>
        <div className="hf-inner" ref={inner}>
          <Reveal className="hf-eyebrow">{t('hero.eyebrow')}</Reveal>
          <Reveal as="h1" className="hf-title" delay={90}>
            {t('hero.title.0')}<br />{t('hero.title.1')}
          </Reveal>
          <Reveal className="hf-actions" delay={200}>
            <Button to="/projektjeink" arrow>{t('hero.cta.projects')}</Button>
            <Button variant="outline-light" to="/kapcsolat">{t('hero.cta.contact')}</Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
