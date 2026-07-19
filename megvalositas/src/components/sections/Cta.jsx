import { Reveal } from '../ui/Reveal.jsx'
import { Button } from '../ui/Button.jsx'

// Záró CTA — kiemelt kártya, közvetlen kapcsolatfelvétellel.
export function Cta() {
  return (
    <section className="section-sm" id="cta">
      <div className="wrap">
        <Reveal
          className="card"
          style={{ textAlign: 'center', padding: '72px 32px', background: 'linear-gradient(180deg,var(--card-hover),var(--card))', borderColor: 'var(--accent-line)' }}
        >
          <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', maxWidth: '20ch', margin: '0 auto 18px' }}>
            Van egy villamos vagy vezérlési kihívása?
          </h2>
          <p className="lede" style={{ margin: '0 auto 32px', textAlign: 'center' }}>
            Kérjen díjmentes szakmai konzultációt — mérnökeink 3 munkanapon belül visszajeleznek.
          </p>
          <Button to="/kapcsolat" arrow>Kapcsolatfelvétel</Button>
        </Reveal>
      </div>
    </section>
  )
}
