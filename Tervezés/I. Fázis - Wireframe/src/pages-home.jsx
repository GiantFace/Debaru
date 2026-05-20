/* global React, ImgPh, Lines, Btn, Pill, Box, Note, Icon, PublicNav, SideNav, Footer */
// Homepage variations — 5 distinct approaches to the public landing page.

const RefLogos = () => (
  <div style={{ display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap' }}>
    {['SIEMENS', 'MERCEDES', 'VW', 'AUDI', 'MÁV', 'BKV'].map(l => (
      <div key={l} style={{
        padding: '4px 10px',
        border: '1px dashed var(--ink-trace)',
        fontSize: 11,
        color: 'var(--ink-faint)',
        letterSpacing: 1,
        fontWeight: 600,
      }}>{l}</div>
    ))}
  </div>
);

// ── A · Classic corporate — centered hero, 3 services, logos ─────────────
const HomeA = ({ navStyle, accent }) => (
  <div className="wf-page">
    <PublicNav active="Kezdőlap" style={navStyle} accent={accent} />
    <div className="wf-scroll">
      {/* HERO */}
      <div style={{ padding: '60px 80px 50px', textAlign: 'center', borderBottom: '1px dashed var(--ink-trace)' }}>
        <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: 16 }}>
          Mérnöki precizitás · 1996 óta
        </div>
        <div className="wf-display" style={{ fontSize: 52, maxWidth: 820, margin: '0 auto 18px' }}>
          Innovatív ipari automatizálási és áramellátási megoldások — a tervezéstől a kulcsrakész kivitelezésig.
        </div>
        <div style={{ maxWidth: 580, margin: '0 auto 24px', color: 'var(--ink-soft)', fontSize: 15 }}>
          PLC, SCADA, távvezérlés és egyedi mérnöki rendszerek ipari, közlekedési és energetikai környezetbe.
        </div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
          <Btn variant="primary" size="lg">Kapcsolatfelvétel →</Btn>
          <Btn variant="ghost" size="lg">Projektjeink</Btn>
        </div>
      </div>

      {/* SERVICES TRIPTYCH */}
      <div style={{ padding: '50px 80px' }}>
        <div className="wf-section-head">
          <span className="num">01</span>
          <span className="wf-h2">Mit csinálunk</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
          {[
            ['Automatizálás', 'plc', 'PLC és SCADA rendszerek tervezése, fejlesztése, integrációja és kulcsrakész kivitelezése.'],
            ['Fejlesztés', 'chip', 'Egyedi szoftverek és hardverek, amelyek pontosan az adott ipari folyamatra illeszkednek.'],
            ['Áramellátás', 'bolt', 'Áramátalakítók, alállomások, távvezérlő és védelmi rendszerek tervezése és kivitelezése.'],
          ].map(([t, ic, d]) => (
            <Box key={t} style={{ padding: 22 }}>
              <Icon name={ic} size={28} />
              <div className="wf-h3" style={{ margin: '12px 0 6px' }}>{t}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-soft)', marginBottom: 14 }}>{d}</div>
              <span style={{ fontSize: 11, borderBottom: '1.5px solid var(--ink)', paddingBottom: 1 }}>Bővebben →</span>
            </Box>
          ))}
        </div>
      </div>

      {/* LOGO STRIP */}
      <div style={{ padding: '36px 80px', background: 'var(--paper-2)', borderTop: '1px dashed var(--ink-trace)', borderBottom: '1px dashed var(--ink-trace)' }}>
        <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: 14, textAlign: 'center' }}>
          Akikkel már dolgoztunk
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <RefLogos />
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: '50px 80px', display: 'flex', gap: 30, alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <div className="wf-h1" style={{ marginBottom: 8 }}>Van egy automatizálási vagy áramellátási kihívása?</div>
          <div style={{ color: 'var(--ink-soft)', fontSize: 14 }}>Vegye fel velünk a kapcsolatot, és kidolgozzuk a megfelelő műszaki megoldást.</div>
        </div>
        <Btn variant="primary" size="lg">Kapcsolatfelvétel →</Btn>
      </div>

      <Footer />
    </div>
  </div>
);

// ── B · Split tech — text left, big SCADA visual right ──────────────────
const HomeB = ({ navStyle, accent }) => (
  <div className="wf-page">
    <PublicNav active="Kezdőlap" style={navStyle} accent={accent} />
    <div className="wf-scroll">
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', minHeight: 460 }}>
        <div style={{ padding: '60px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: '1.5px solid var(--ink)' }}>
          <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: 18 }}>
            Debaru Kft. — automatizálás · áramellátás · fejlesztés
          </div>
          <div className="wf-display" style={{ fontSize: 46, marginBottom: 18 }}>
            A koncepciótól a kulcsrakész rendszerig.
          </div>
          <div style={{ fontSize: 15, color: 'var(--ink-soft)', maxWidth: 440, marginBottom: 22 }}>
            PLC, SCADA, távvezérlés, biztosítóberendezések és egyedi mérnöki megoldások ipari, közlekedési és energetikai környezetbe.
          </div>
          <div style={{ display: 'flex', gap: 10, marginBottom: 28 }}>
            <Btn variant="primary">Ajánlatkérés →</Btn>
            <Btn variant="ghost">Szolgáltatások</Btn>
          </div>
          <div style={{ display: 'flex', gap: 24, fontSize: 11, color: 'var(--ink-soft)' }}>
            <div><div style={{ fontFamily: 'var(--wf-display-font, Caveat), cursive', fontSize: 28, color: 'var(--ink)' }}>30+</div>év tapasztalat</div>
            <div><div style={{ fontFamily: 'var(--wf-display-font, Caveat), cursive', fontSize: 28, color: 'var(--ink)' }}>120+</div>kivitelezett projekt</div>
            <div><div style={{ fontFamily: 'var(--wf-display-font, Caveat), cursive', fontSize: 28, color: 'var(--ink)' }}>24/7</div>üzemtámogatás</div>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <ImgPh label="SCADA felület / vezérlőszekrény fotó" style={{ position: 'absolute', inset: 0 }} />
          <Note top={24} right={24} rotate={3}>
            ⚡ valódi ipari fotó — vezérlőszekrény vagy SCADA monitor közeli
          </Note>
        </div>
      </div>

      {/* SERVICES + AVAILABLE BADGE */}
      <div style={{ padding: '46px 56px', background: 'var(--paper-2)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 20 }}>
          <span className="wf-h2">Szakterületek</span>
          <span style={{ fontSize: 11, color: 'var(--ink-soft)' }}>→ Részletes szolgáltatások</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {[
            ['Ipari automatizálás', 'factory'],
            ['PLC / SCADA', 'plc'],
            ['Áramellátás', 'bolt'],
            ['Távvezérlés', 'globe'],
            ['Biztosítóberendezés', 'train'],
            ['Szoftverfejlesztés', 'chip'],
            ['Hardverfejlesztés', 'grid'],
            ['Üzemeltetés', 'cog'],
          ].map(([t, ic]) => (
            <Box key={t} style={{ padding: 14, background: 'var(--paper)' }}>
              <Icon name={ic} size={20} />
              <div style={{ marginTop: 8, fontSize: 13, fontWeight: 600 }}>{t}</div>
              <Lines count={2} widths={['mid', 'short']} />
            </Box>
          ))}
        </div>
      </div>

      {/* REF LOGOS */}
      <div style={{ padding: '24px 56px', borderTop: '1px dashed var(--ink-trace)', borderBottom: '1px dashed var(--ink-trace)', display: 'flex', alignItems: 'center', gap: 24 }}>
        <span style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--ink-faint)' }}>Partnereink</span>
        <RefLogos />
      </div>

      <Footer compact />
    </div>
  </div>
);

// ── C · Editorial dense — magazine grid, lots of info up front ──────────
const HomeC = ({ navStyle, accent }) => (
  <div className="wf-page">
    <PublicNav active="Kezdőlap" style={navStyle} accent={accent} />
    <div className="wf-scroll">
      <div style={{ padding: '32px 40px 24px', borderBottom: '1.5px solid var(--ink)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: 8 }}>
          <span>Budapest · 1117</span>
          <span>Nr. 028 — 2026</span>
          <span>HU · EN · DE · HR</span>
        </div>
        <div className="wf-display" style={{ fontSize: 62, lineHeight: 0.95, marginBottom: 8 }}>
          Mérnöki<br/>megoldások,<br/>amelyek <span style={{ fontStyle: 'italic', color: accent || 'var(--accent)' }}>működnek</span>.
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 0.9fr', borderBottom: '1.5px solid var(--ink)' }}>
        <div style={{ padding: 24, borderRight: '1px dashed var(--ink-trace)' }}>
          <div className="wf-label" style={{ marginBottom: 6 }}>01 · Bemutatkozó</div>
          <Lines count={6} widths={['long', 'long', 'mid', 'long', 'long', 'short']} />
          <div style={{ marginTop: 14, fontSize: 11, borderTop: '1px solid var(--ink-trace)', paddingTop: 10, color: 'var(--ink-soft)' }}>
            „Hiszünk abban, hogy minden sikeres projekt alapja a pontos igényfelmérés és a minőségi kivitelezés."
          </div>
        </div>
        <div style={{ padding: 0, borderRight: '1px dashed var(--ink-trace)' }}>
          <ImgPh label="ipari fotó (vezérlőszekrény belső)" style={{ height: '100%', minHeight: 200 }} />
        </div>
        <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div className="wf-label">Kiemelt projektek</div>
          {['1-es villamos · Etele tér', 'MÁV FET HETA távvezérlés', 'Galvanizáló üzem · automatizálás', 'Áramátalakító · alállomás'].map(p => (
            <div key={p} style={{ fontSize: 12, paddingBottom: 8, borderBottom: '1px dashed var(--ink-trace)', display: 'flex', justifyContent: 'space-between' }}>
              <span>{p}</span>
              <span style={{ color: 'var(--ink-faint)' }}>→</span>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES GRID — 4 columns */}
      <div style={{ padding: '24px 40px', borderBottom: '1.5px solid var(--ink)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 14 }}>
          <span className="wf-label">Szolgáltatások</span>
          <span style={{ flex: 1, height: 1, background: 'var(--ink-trace)' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {[
            ['Ipari automatizálás', 'PLC, SCADA, vezérlőszekrény, távfelügyelet', 'factory'],
            ['PLC / SCADA rendszerek', 'Tervezés, fejlesztés, integráció', 'plc'],
            ['Szoftver / hardver', 'Egyedi rendszerek mérnöki környezetbe', 'chip'],
            ['Áramellátás', 'Áramátalakítók, alállomások, védelem', 'bolt'],
          ].map(([t, d, ic]) => (
            <div key={t}>
              <Icon name={ic} size={22} />
              <div style={{ fontSize: 14, fontWeight: 700, marginTop: 8 }}>{t}</div>
              <div style={{ fontSize: 11, color: 'var(--ink-soft)', marginBottom: 8 }}>{d}</div>
              <span style={{ fontSize: 10, borderBottom: '1.5px solid var(--ink)' }}>Olvasson tovább →</span>
            </div>
          ))}
        </div>
      </div>

      {/* TICKETING TEASER */}
      <div style={{ padding: '24px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
        <div>
          <div className="wf-label" style={{ marginBottom: 8 }}>Ügyfélportál</div>
          <div className="wf-h2" style={{ marginBottom: 8 }}>Hibajegy bejelentés és követés</div>
          <Lines count={3} widths={['long', 'mid', 'short']} />
          <div style={{ marginTop: 12 }}>
            <Btn variant="primary" size="sm"><Icon name="lock" size={12} color="white" /> Bejelentkezés a portálra</Btn>
          </div>
        </div>
        <div>
          <div className="wf-label" style={{ marginBottom: 8 }}>Kapcsolat</div>
          <div style={{ fontSize: 13 }}>
            <div style={{ fontFamily: 'var(--wf-display-font, Caveat), cursive', fontSize: 22 }}>info@debaru.hu</div>
            <div style={{ fontFamily: 'var(--wf-display-font, Caveat), cursive', fontSize: 22 }}>+36 1 445 4166</div>
            <div style={{ color: 'var(--ink-soft)', marginTop: 4 }}>1117 Budapest, Budafoki út 97.</div>
          </div>
        </div>
      </div>

      <Footer compact />
    </div>
  </div>
);

// ── D · Modern industrial — full-bleed photo with stat overlay ──────────
const HomeD = ({ navStyle, accent }) => (
  <div className="wf-page">
    <PublicNav active="Kezdőlap" style={navStyle} accent={accent} />
    <div className="wf-scroll">
      {/* full-bleed hero */}
      <div style={{ position: 'relative', height: 520 }}>
        <ImgPh label="full-bleed ipari fotó · vezérlőszekrény közeli / SCADA monitor / mérnök munkában" style={{ position: 'absolute', inset: 0 }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(20,20,30,.0) 30%, rgba(20,20,30,.5) 100%)',
        }} />
        <div style={{ position: 'absolute', left: 40, bottom: 40, maxWidth: 680, color: 'white' }}>
          <div style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 14, color: 'rgba(255,255,255,.8)' }}>
            Ipari automatizálás · PLC / SCADA · Áramellátás
          </div>
          <div className="wf-display" style={{ fontSize: 52, color: 'white', textShadow: '0 1px 8px rgba(0,0,0,.4)' }}>
            Megbízható rendszerek<br/>kritikus infrastruktúrákhoz.
          </div>
          <div style={{ marginTop: 18, display: 'flex', gap: 10 }}>
            <Btn variant="accent" size="lg" style={{ background: accent || 'var(--accent)', borderColor: accent || 'var(--accent)' }}>Projektjeink →</Btn>
            <Btn size="lg" style={{ background: 'transparent', borderColor: 'white', color: 'white' }}>Kapcsolat</Btn>
          </div>
        </div>
        {/* stat strip */}
        <div style={{
          position: 'absolute', right: 40, top: 40,
          background: 'rgba(20,20,30,.7)', backdropFilter: 'blur(4px)',
          padding: 18, color: 'white', minWidth: 200,
        }}>
          <div style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', opacity: 0.7, marginBottom: 8 }}>SCADA · élesben</div>
          <div style={{ display: 'flex', gap: 14 }}>
            <div><div style={{ fontFamily: 'var(--wf-display-font, Caveat), cursive', fontSize: 28 }}>30+</div><div style={{ fontSize: 10 }}>év</div></div>
            <div><div style={{ fontFamily: 'var(--wf-display-font, Caveat), cursive', fontSize: 28 }}>24/7</div><div style={{ fontSize: 10 }}>üzem</div></div>
            <div><div style={{ fontFamily: 'var(--wf-display-font, Caveat), cursive', fontSize: 28 }}>SIL2</div><div style={{ fontSize: 10 }}>biztonság</div></div>
          </div>
        </div>
      </div>

      {/* logo strip */}
      <div style={{ padding: '18px 40px', borderBottom: '1px dashed var(--ink-trace)', display: 'flex', alignItems: 'center', gap: 24 }}>
        <span className="wf-label">Referenciák</span>
        <RefLogos />
      </div>

      {/* PILLAR BLOCKS — large cards */}
      <div style={{ padding: '40px' }}>
        <div className="wf-h2" style={{ marginBottom: 24 }}>Három szakterület, egy mérnöki gondolkodás</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
          {[
            ['Automatizálás', 'PLC, SCADA, távfelügyelet, vezérlőszekrény és integráció.', 'factory'],
            ['Fejlesztés', 'Egyedi szoftver és hardver mérnöki környezetbe.', 'chip'],
            ['Áramellátás', 'Áramátalakítók, alállomások, távvezérlő és védelem.', 'bolt'],
          ].map(([t, d, ic]) => (
            <Box key={t} style={{ padding: 0, overflow: 'hidden' }}>
              <ImgPh label="szakterület fotó" style={{ height: 110 }} />
              <div style={{ padding: 18 }}>
                <Icon name={ic} size={22} />
                <div className="wf-h3" style={{ margin: '8px 0' }}>{t}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-soft)', marginBottom: 12 }}>{d}</div>
                <span style={{ fontSize: 11, borderBottom: `1.5px solid ${accent || 'var(--ink)'}`, color: accent || 'var(--ink)' }}>Részletek →</span>
              </div>
            </Box>
          ))}
        </div>
      </div>

      <Footer compact />
    </div>
  </div>
);

// ── E · Typographic statement — bold type-led, minimalist ───────────────
const HomeE = ({ navStyle, accent }) => (
  <div className="wf-page">
    <PublicNav active="Kezdőlap" style={navStyle} accent={accent} />
    <div className="wf-scroll" style={{ padding: '60px 60px 0' }}>
      <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: 30 }}>
        Debaru Kft. — Mérnöki precizitás 1996 óta
      </div>

      <div className="wf-display" style={{ fontSize: 90, lineHeight: 0.92, marginBottom: 28 }}>
        Tervezzük.<br/>
        <span style={{ color: accent || 'var(--accent)', fontStyle: 'italic' }}>Fejlesztjük.</span><br/>
        Kivitelezzük.
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 40 }}>
        <div style={{ fontSize: 16, color: 'var(--ink-soft)', maxWidth: 460 }}>
          A Debaru Kft. ipari automatizálással, PLC/SCADA rendszerekkel, áramellátással és egyedi mérnöki fejlesztéssel foglalkozik. Koncepciótól az átadásig.
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10 }}>
          <Btn variant="primary" size="lg">Lássuk a projekteket →</Btn>
          <Btn size="lg" variant="ghost">Mit csinálunk</Btn>
        </div>
      </div>

      <div style={{ borderTop: '1.5px solid var(--ink)', padding: '24px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {[
            ['01', 'Automatizálás', 'PLC · SCADA · távfelügyelet'],
            ['02', 'Fejlesztés', 'Szoftver · hardver · integráció'],
            ['03', 'Áramellátás', 'Áramátalakító · alállomás · védelem'],
            ['04', 'Biztosító\u00ADberendezés', 'SIL2 · PLC-alapú · közlekedés'],
          ].map(([n, t, d]) => (
            <div key={n}>
              <div style={{ fontFamily: 'var(--wf-display-font, Caveat), cursive', fontSize: 48, lineHeight: 1, color: 'var(--ink-trace)' }}>{n}</div>
              <div style={{ fontSize: 16, fontWeight: 700, marginTop: 6 }}>{t}</div>
              <div style={{ fontSize: 12, color: 'var(--ink-soft)' }}>{d}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 20, padding: '14px 0', borderTop: '1px dashed var(--ink-trace)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 11, color: 'var(--ink-soft)' }}>
        <span>Eddigi munkáink: Siemens · Mercedes · VW · Audi · MÁV · BKV</span>
        <span>Görgessen lejjebb ↓</span>
      </div>
    </div>
  </div>
);

window.HomeA = HomeA;
window.HomeB = HomeB;
window.HomeC = HomeC;
window.HomeD = HomeD;
window.HomeE = HomeE;
