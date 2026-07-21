import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHead } from '../components/sections/PageHead.jsx'
import { Reveal, RevealStagger } from '../components/ui/Reveal.jsx'
import { StatBlock } from '../components/ui/StatBlock.jsx'
import { Button } from '../components/ui/Button.jsx'
import { Arrow } from '../components/ui/Icons.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import {
  careersHead, careerIntro, cultureStats, benefits, values,
  hiringSteps, departments, jobs, applyEmail,
} from '../data/careers.js'
import '../styles/careers.css'

const S = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }

// Juttatás-ikonok (a data `icon` kulcsa → SVG). Így a data serializálható marad (DB-ready).
const benefitIcon = {
  growth: <svg viewBox="0 0 24 24" {...S}><path d="M3 17l6-6 4 4 7-7" /><path d="M17 5h4v4" /></svg>,
  projects: <svg viewBox="0 0 24 24" {...S}><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></svg>,
  learning: <svg viewBox="0 0 24 24" {...S}><path d="M3 8l9-4 9 4-9 4-9-4z" /><path d="M7 10v4c0 1.6 2.4 3 5 3s5-1.4 5-3v-4" /></svg>,
  team: <svg viewBox="0 0 24 24" {...S}><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0" /><path d="M16 8a3 3 0 0 1 0 6M22 20a6 6 0 0 0-6-6" /></svg>,
  stability: <svg viewBox="0 0 24 24" {...S}><path d="M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" /></svg>,
  balance: <svg viewBox="0 0 24 24" {...S}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>,
}

// Állás-metaadat ikonok (helyszín / munkaidő / munkarend).
const metaIcon = {
  location: <svg viewBox="0 0 24 24" {...S}><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>,
  time: <svg viewBox="0 0 24 24" {...S}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>,
  arrangement: <svg viewBox="0 0 24 24" {...S}><path d="M3 21h18M6 21V7l6-4 6 4v14" /><path d="M10 21v-5h4v5" /></svg>,
}

// Karrier oldal — adatvezérelt (data/careers.js). Nyitott pozíciók szűrhető listával.
export default function Careers() {
  useDocumentTitle(careersHead.crumb, careersHead.lede)
  const [filter, setFilter] = useState('all')
  const shown = jobs.filter((j) => filter === 'all' || j.dept === filter)

  return (
    <>
      <PageHead
        placeholder={careersHead.headPlaceholder}
        trail={[{ label: careersHead.crumb }]}
        title={careersHead.title}
        lede={careersHead.lede}
      />

      {/* intro + kultúra-statisztikák */}
      <section className="section">
        <div className="wrap">
          <div className="split" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 56, alignItems: 'center' }}>
            <Reveal>
              <div className="eyebrow">{careerIntro.eyebrow}</div>
              <h2 style={{ fontSize: 'clamp(24px,3.4vw,36px)', margin: '16px 0 18px', maxWidth: '20ch' }}>{careerIntro.title}</h2>
              {careerIntro.paragraphs.map((p, i) => (
                <p key={i} className="muted" style={{ marginBottom: i < careerIntro.paragraphs.length - 1 ? 14 : 0 }}>{p}</p>
              ))}
            </Reveal>
            <Reveal className="card" style={{ padding: '34px 30px' }}>
              <div className="grid g-2" style={{ gap: 26 }}>
                {cultureStats.map((s) => (
                  <StatBlock key={s.label} to={s.to} suffix={s.suffix} label={s.label} numSize={36} lblSize={13} />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* juttatások */}
      <section className="section">
        <div className="wrap">
          <Reveal className="eyebrow">Amit kínálunk</Reveal>
          <Reveal as="h2" style={{ fontSize: 'clamp(26px,4vw,40px)', margin: '16px 0 44px', maxWidth: '18ch' }}>Miért jó nálunk dolgozni?</Reveal>
          <RevealStagger className="grid g-3" step={80}>
            {benefits.map((b) => (
              <div className="card" key={b.title}>
                <div className="benefit-ic">{benefitIcon[b.icon]}</div>
                <h3 style={{ fontSize: 19, marginBottom: 8 }}>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>

      <hr className="divider" />

      {/* nyitott pozíciók */}
      <section className="section" id="poziciok">
        <div className="wrap">
          <Reveal className="eyebrow">Nyitott pozíciók</Reveal>
          <Reveal as="h2" style={{ fontSize: 'clamp(26px,4vw,40px)', margin: '16px 0 26px', maxWidth: '18ch' }}>Csatlakozz a csapathoz!</Reveal>
          <Reveal className="chips" style={{ marginBottom: 30 }}>
            {departments.map((d) => (
              <button key={d.key} className={`chip${filter === d.key ? ' on' : ''}`} onClick={() => setFilter(d.key)}>{d.label}</button>
            ))}
          </Reveal>
          <div className="job-list">
            {shown.map((j) => (
              <Link className="job-card" to={`/karrier/${j.slug}`} key={j.slug}>
                <div className="jc-main">
                  <h3>{j.title}</h3>
                  <p className="jc-sum">{j.summary}</p>
                  <div className="job-meta">
                    <span className="job-badge dept">{j.department}</span>
                    <span className="job-badge">{metaIcon.location}{j.location}</span>
                    <span className="job-badge">{metaIcon.time}{j.type}</span>
                    <span className="job-badge">{metaIcon.arrangement}{j.arrangement}</span>
                  </div>
                </div>
                <span className="jc-arrow"><Arrow /></span>
              </Link>
            ))}
            {shown.length === 0 && (
              <div className="job-empty">Ebben a kategóriában jelenleg nincs nyitott pozíció — de a spontán jelentkezést mindig várjuk!</div>
            )}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* értékek / kultúra */}
      <section className="section">
        <div className="wrap">
          <Reveal className="eyebrow">A kultúránk</Reveal>
          <Reveal as="h2" style={{ fontSize: 'clamp(26px,4vw,40px)', margin: '16px 0 44px', maxWidth: '16ch' }}>Ahogy dolgozunk</Reveal>
          <RevealStagger className="grid g-2" step={80}>
            {values.map((v) => (
              <div className="card" key={v.title}>
                <h3 style={{ fontSize: 19, marginBottom: 8 }}>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>

      <hr className="divider" />

      {/* jelentkezési folyamat */}
      <section className="section">
        <div className="wrap">
          <Reveal className="eyebrow">A jelentkezés menete</Reveal>
          <Reveal as="h2" style={{ fontSize: 'clamp(26px,4vw,40px)', margin: '16px 0 48px', maxWidth: '16ch' }}>Négy lépés, semmi hercehurca</Reveal>
          <RevealStagger className="grid g-4" step={90}>
            {hiringSteps.map((s) => (
              <div key={s.n}>
                <div className="kicker-num">{s.n}</div>
                <h3 style={{ fontSize: 19, margin: '14px 0 8px' }}>{s.title}</h3>
                <p className="muted" style={{ fontSize: 14.5 }}>{s.desc}</p>
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>

      <hr className="divider" />

      {/* spontán jelentkezés CTA */}
      <section className="section-sm">
        <div className="wrap">
          <Reveal className="card" style={{ textAlign: 'center', padding: '72px 32px', background: 'linear-gradient(180deg,var(--card-hover),var(--card))', borderColor: 'var(--accent-line)' }}>
            <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', maxWidth: '22ch', margin: '0 auto 14px' }}>Nem találtad a pozíciód?</h2>
            <p className="muted" style={{ margin: '0 auto 28px', maxWidth: '46ch' }}>Küldd el önéletrajzod spontán jelentkezésként — ha van hozzád illő feladat, keresünk!</p>
            <Button href={`mailto:${applyEmail}?subject=${encodeURIComponent('Spontán jelentkezés — Debaru karrier')}`} arrow>Spontán jelentkezés</Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
