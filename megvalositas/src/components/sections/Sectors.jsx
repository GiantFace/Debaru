import { useHScroll } from '../../hooks/useHScroll.js'
import { ImageSlot } from '../ui/ImageSlot.jsx'
import { sectors } from '../../data/content.js'

// Ágazatok — függőleges görgetés hajtja a vízszintes panel-sort (sticky).
export function Sectors() {
  const { sectionRef, trackRef, barRef } = useHScroll()
  return (
    <section className="hscroll" id="agazatok" ref={sectionRef}>
      <div className="hscroll-sticky">
        <div className="hscroll-head">
          <div className="eyebrow">Ágazatok</div>
          <h2 style={{ fontSize: 'clamp(28px,4vw,46px)', margin: '16px 0 0', maxWidth: '20ch' }}>
            Ahol a rendszereink dolgoznak
          </h2>
        </div>

        <div className="hscroll-track" ref={trackRef}>
          {sectors.map((s) => (
            <div className="hpanel" key={s.n}>
              <ImageSlot placeholder={s.placeholder} />
              <div className="hp-cap">
                <div className="n">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="hscroll-progress"><div className="bar"><i ref={barRef} /></div></div>
      </div>
    </section>
  )
}
