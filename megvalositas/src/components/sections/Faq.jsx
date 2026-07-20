import { useState } from 'react'
import { Reveal } from '../ui/Reveal.jsx'
import { Parallax } from '../ui/Parallax.jsx'
import { Plus } from '../ui/Icons.jsx'
import { faq } from '../../data/content.js'

// Gyakori kérdések — akkordeon (grid-rows 0fr→1fr sima nyitás), a lap alján.
export function Faq() {
  const [open, setOpen] = useState(0) // az első nyitva indul
  return (
    <section className="section" id="gyik">
      <div className="wrap">
        <Parallax speed={0.09}>
          <Reveal className="eyebrow">GYIK</Reveal>
          <Reveal as="h2" style={{ fontSize: 'clamp(30px,4vw,48px)', margin: '16px 0 40px', maxWidth: '18ch' }}>
            Gyakori kérdések
          </Reveal>
        </Parallax>

        <Reveal className="faq">
          {faq.map((it, i) => (
            <div className={`faq-item${open === i ? ' open' : ''}`} key={it.q}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                {it.q}
                <span className="faq-ico"><Plus /></span>
              </button>
              <div className="faq-a"><div><p>{it.a}</p></div></div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
