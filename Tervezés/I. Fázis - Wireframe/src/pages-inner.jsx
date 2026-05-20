/* global React, ImgPh, Lines, Btn, Pill, Box, Note, Icon, PublicNav, Footer */
// Inner pages — Rólunk, Szolgáltatások, Projektek (list + detail), Kapcsolat.

// ── RÓLUNK ───────────────────────────────────────────────────────────────
const PageAbout = ({ navStyle, accent }) => (
  <div className="wf-page">
    <PublicNav active="Rólunk" style={navStyle} accent={accent} />
    <div className="wf-scroll">
      {/* HERO */}
      <div style={{ padding: '50px 60px', borderBottom: '1.5px solid var(--ink)', display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 40, alignItems: 'center' }}>
        <div>
          <div className="wf-label" style={{ marginBottom: 10 }}>Rólunk · Cégünkről</div>
          <div className="wf-display" style={{ fontSize: 52, marginBottom: 16 }}>
            Mérnöki gondolkodás, ami a gyakorlatban is megáll.
          </div>
          <div style={{ fontSize: 15, color: 'var(--ink-soft)', maxWidth: 480 }}>
            A Debaru Kft. ipari automatizálással, áramellátással és szoftverfejlesztéssel foglalkozó mérnöki vállalkozás. Olyan rendszereket tervezünk és valósítunk meg, amelyek ügyfeleink mindennapi működését hatékonyabbá és biztonságosabbá teszik.
          </div>
        </div>
        <ImgPh label="csapatfotó / iroda / mérnöki munka" style={{ height: 240 }} />
      </div>

      {/* VALUES — 4 columns */}
      <div style={{ padding: '50px 60px' }}>
        <div className="wf-section-head"><span className="num">01</span><span className="wf-h2">Ahogy dolgozunk</span></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
          {[
            ['Szakértelem', 'PLC, SCADA, energiaellátás, távvezérlés, ipari automatizálás, közlekedési infrastruktúra.'],
            ['Komplex gondolkodás', 'Nem részfeladatokban — koncepció, tervezés, fejlesztés, kivitelezés, tesztelés, átadás, támogatás.'],
            ['Megbízható kivitelezés', 'Olyan területeken dolgozunk, ahol a folyamatos rendelkezésre állás kötelező.'],
            ['Ügyfélközpontúság', 'A megrendelő valós problémájára adunk hosszú távon is fenntartható választ.'],
          ].map(([t, d], i) => (
            <Box key={t} style={{ padding: 18 }}>
              <div className="wf-label">{`0${i + 1}`}</div>
              <div className="wf-h3" style={{ margin: '6px 0 6px' }}>{t}</div>
              <div style={{ fontSize: 12, color: 'var(--ink-soft)' }}>{d}</div>
            </Box>
          ))}
        </div>
      </div>

      {/* TIMELINE */}
      <div style={{ padding: '40px 60px', background: 'var(--paper-2)', borderTop: '1px dashed var(--ink-trace)' }}>
        <div className="wf-section-head"><span className="num">02</span><span className="wf-h2">Történetünk</span></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', paddingTop: 20 }}>
          <div style={{ position: 'absolute', top: 36, left: 20, right: 20, height: 1.5, background: 'var(--ink)', borderTop: '1.5px dashed var(--ink)' }} />
          {[
            ['1996', 'Alapítás'],
            ['2003', 'Első MÁV projekt'],
            ['2010', 'SCADA bevezetése'],
            ['2018', 'Etele tér · SIL2'],
            ['2024', 'EMS megoldások'],
          ].map(([y, t]) => (
            <div key={y} style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
              <div style={{ width: 14, height: 14, border: '2px solid var(--ink)', background: 'var(--paper)', borderRadius: 7, margin: '0 auto 8px' }} />
              <div style={{ fontFamily: 'var(--wf-display-font, Caveat), cursive', fontSize: 24, fontWeight: 700 }}>{y}</div>
              <div style={{ fontSize: 12, color: 'var(--ink-soft)' }}>{t}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: '40px 60px', display: 'flex', gap: 20, alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <div className="wf-h1">Dolgozzunk együtt.</div>
          <div style={{ color: 'var(--ink-soft)' }}>Mondja el a kihívást, mérnökeink segítenek megtalálni a megoldást.</div>
        </div>
        <Btn variant="primary" size="lg">Kapcsolatfelvétel →</Btn>
      </div>

      <Footer compact />
    </div>
  </div>
);

// ── SZOLGÁLTATÁSOK ───────────────────────────────────────────────────────
const PageServices = ({ navStyle, accent }) => {
  const services = [
    {
      n: '01', t: 'Ipari automatizálás', ic: 'factory',
      d: 'PLC vezérlések, SCADA rendszerek, távfelügyelet, vezérlőszekrények, szenzorika és beavatkozó rendszerek integrációja.',
      tags: ['PLC', 'SCADA', 'Vezérlőszekrény', 'Távfelügyelet'],
    },
    {
      n: '02', t: 'PLC és SCADA rendszerek', ic: 'plc',
      d: 'Ipari folyamatok vezérlése, felügyelete, adatgyűjtés, riasztáskezelés, eseménynaplózás üzemeltetői szempontból átláthatóan.',
      tags: ['Siemens', 'WinCC', 'TIA Portal', '24/7'],
    },
    {
      n: '03', t: 'Szoftver- és hardverfejlesztés', ic: 'chip',
      d: 'Vezérlőszoftverek, kommunikációs modulok, adatgyűjtő rendszerek, felügyeleti felületek és egyedi célhardverek.',
      tags: ['Egyedi', 'Embedded', 'Integráció'],
    },
    {
      n: '04', t: 'Áramellátási és távvezérlési rendszerek', ic: 'bolt',
      d: 'Áramátalakítók, alállomások, védelmi rendszerek és távvezérlő rendszerek — koncepciótól kivitelezésig.',
      tags: ['Metró', 'Villamos', 'Troli', 'MÁV FET HETA'],
    },
    {
      n: '05', t: 'Biztosítóberendezések', ic: 'train',
      d: 'SIL2 biztonsági szintű PLC-alapú megoldások, pl. az Etele téri 1-es villamos végállomás automatikus váltóvezérlése.',
      tags: ['SIL2', 'Váltóvezérlés', 'Közlekedés'],
    },
  ];

  return (
    <div className="wf-page">
      <PublicNav active="Szolgáltatások" style={navStyle} accent={accent} />
      <div className="wf-scroll">
        <div style={{ padding: '40px 60px', borderBottom: '1.5px solid var(--ink)' }}>
          <div className="wf-label" style={{ marginBottom: 8 }}>Szolgáltatások</div>
          <div className="wf-display" style={{ fontSize: 56, maxWidth: 800 }}>
            A teljes mérnöki spektrum — egy csapattól.
          </div>
        </div>

        {services.map((s, i) => (
          <div key={s.n} style={{
            padding: '36px 60px',
            display: 'grid',
            gridTemplateColumns: i % 2 === 0 ? '1fr 1.3fr' : '1.3fr 1fr',
            gap: 40,
            alignItems: 'center',
            borderBottom: '1px dashed var(--ink-trace)',
          }}>
            {i % 2 === 0 ? (
              <>
                <ImgPh label={`${s.t} — ipari fotó`} style={{ height: 180 }} />
                <div>
                  <div style={{ fontFamily: 'var(--wf-display-font, Caveat), cursive', fontSize: 36, color: accent || 'var(--accent)', lineHeight: 1 }}>{s.n}</div>
                  <div className="wf-h1" style={{ margin: '6px 0 10px', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Icon name={s.ic} size={26} /> {s.t}
                  </div>
                  <div style={{ fontSize: 14, color: 'var(--ink-soft)', marginBottom: 14, maxWidth: 460 }}>{s.d}</div>
                  <div className="wf-tag-row" style={{ marginBottom: 14 }}>
                    {s.tags.map(t => <Pill key={t}>{t}</Pill>)}
                  </div>
                  <Btn variant="ghost" size="sm">Kapcsolódó projektek →</Btn>
                </div>
              </>
            ) : (
              <>
                <div>
                  <div style={{ fontFamily: 'var(--wf-display-font, Caveat), cursive', fontSize: 36, color: accent || 'var(--accent)', lineHeight: 1 }}>{s.n}</div>
                  <div className="wf-h1" style={{ margin: '6px 0 10px', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Icon name={s.ic} size={26} /> {s.t}
                  </div>
                  <div style={{ fontSize: 14, color: 'var(--ink-soft)', marginBottom: 14, maxWidth: 460 }}>{s.d}</div>
                  <div className="wf-tag-row" style={{ marginBottom: 14 }}>
                    {s.tags.map(t => <Pill key={t}>{t}</Pill>)}
                  </div>
                  <Btn variant="ghost" size="sm">Kapcsolódó projektek →</Btn>
                </div>
                <ImgPh label={`${s.t} — ipari fotó`} style={{ height: 180 }} />
              </>
            )}
          </div>
        ))}

        <div style={{ padding: '36px 60px', textAlign: 'center' }}>
          <div className="wf-h2" style={{ marginBottom: 8 }}>Nem talál konkrét megoldást?</div>
          <div style={{ color: 'var(--ink-soft)', marginBottom: 14 }}>Egyedi mérnöki feladatokra is nyitottak vagyunk — beszélgessünk róla.</div>
          <Btn variant="primary">Egyedi igény leírása →</Btn>
        </div>

        <Footer compact />
      </div>
    </div>
  );
};

// ── PROJEKTJEINK (lista) ─────────────────────────────────────────────────
const PageProjects = ({ navStyle, accent }) => {
  const cats = ['Mind', 'Biztosítóberendezés', 'Áramátalakítók', 'SCADA', 'MÁV FET HETA', 'Ipari automatizálás'];
  const projects = [
    { t: '1-es villamos · Etele tér', cat: 'Biztosítóberendezés', year: '2018', loc: 'Budapest', tags: ['SIL2', 'PLC'] },
    { t: 'MÁV FET HETA távvezérlés', cat: 'MÁV FET HETA', year: '2022', loc: 'Országos', tags: ['SCADA', 'Vasút'] },
    { t: 'Galvanizáló üzem automatizálás', cat: 'Ipari automatizálás', year: '2023', loc: 'Győr', tags: ['PLC', 'WinCC'] },
    { t: 'Áramátalakító · alállomás', cat: 'Áramátalakítók', year: '2021', loc: 'Debrecen', tags: ['Védelem', 'Távvezérlés'] },
    { t: 'Szállítószalag-vezérlés', cat: 'Ipari automatizálás', year: '2020', loc: 'Kecskemét', tags: ['PLC'] },
    { t: 'Metró áramellátás SCADA', cat: 'SCADA', year: '2019', loc: 'Budapest', tags: ['24/7', 'BKV'] },
    { t: 'Kísérleti szennyvíztisztító EMS', cat: 'Ipari automatizálás', year: '2024', loc: 'Pécs', tags: ['EMS', 'Egyedi'] },
    { t: 'Felsővezetéki távvezérlő', cat: 'MÁV FET HETA', year: '2017', loc: 'Országos', tags: ['Vasút'] },
    { t: 'Trolibusz alállomás', cat: 'Áramátalakítók', year: '2023', loc: 'Budapest', tags: ['Védelem'] },
  ];

  return (
    <div className="wf-page">
      <PublicNav active="Projektjeink" style={navStyle} accent={accent} />
      <div className="wf-scroll">
        <div style={{ padding: '40px 60px 16px' }}>
          <div className="wf-label" style={{ marginBottom: 8 }}>Projektjeink · Referenciák</div>
          <div className="wf-display" style={{ fontSize: 48, marginBottom: 18 }}>
            Élő rendszerek, működő megoldások.
          </div>

          {/* category filter */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center', borderBottom: '1px dashed var(--ink-trace)', paddingBottom: 12 }}>
            <span className="wf-label" style={{ marginRight: 6 }}>Szűrés:</span>
            {cats.map((c, i) => (
              <Pill key={c} variant={i === 0 ? 'solid' : undefined}>{c}</Pill>
            ))}
            <span style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--ink-soft)', display: 'flex', gap: 8 }}>
              <span>Nézet:</span>
              <Icon name="grid" size={14} />
              <span style={{ opacity: .4 }}><Icon name="list" size={14} /></span>
            </span>
          </div>
        </div>

        <div style={{ padding: '0 60px 30px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {projects.map(p => (
            <Box key={p.t} style={{ padding: 0, overflow: 'hidden' }}>
              <ImgPh label={`${p.t.split(' ')[0]} fotó`} style={{ height: 120 }} />
              <div style={{ padding: 14 }}>
                <div style={{ fontSize: 10, color: 'var(--ink-faint)', display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span>{p.cat}</span>
                  <span>{p.year} · {p.loc}</span>
                </div>
                <div className="wf-h3" style={{ marginBottom: 6 }}>{p.t}</div>
                <div className="wf-tag-row">
                  {p.tags.map(t => <Pill key={t}>{t}</Pill>)}
                </div>
              </div>
            </Box>
          ))}
        </div>

        <div style={{ padding: '0 60px 30px', textAlign: 'center' }}>
          <Btn variant="ghost">Még több projekt betöltése ↓</Btn>
        </div>

        <Footer compact />
      </div>
    </div>
  );
};

// ── PROJEKT-RÉSZLETES ────────────────────────────────────────────────────
const PageProjectDetail = ({ navStyle, accent }) => (
  <div className="wf-page">
    <PublicNav active="Projektjeink" style={navStyle} accent={accent} />
    <div className="wf-scroll">
      {/* breadcrumb */}
      <div style={{ padding: '12px 60px', fontSize: 11, color: 'var(--ink-faint)', borderBottom: '1px dashed var(--ink-trace)' }}>
        Projektjeink › Biztosítóberendezés › <span style={{ color: 'var(--ink)' }}>1-es villamos · Etele tér</span>
      </div>

      {/* hero */}
      <div style={{ padding: '36px 60px 24px' }}>
        <div className="wf-tag-row" style={{ marginBottom: 12 }}>
          <Pill variant="accent">Biztosítóberendezés</Pill>
          <Pill>SIL2</Pill>
          <Pill>2018</Pill>
          <Pill>Budapest</Pill>
        </div>
        <div className="wf-display" style={{ fontSize: 44, marginBottom: 10 }}>
          1-es villamos · Etele téri végállomás
        </div>
        <div style={{ fontSize: 15, color: 'var(--ink-soft)', maxWidth: 620 }}>
          SIL2 biztonsági szintű PLC-alapú biztosítóberendezés a villamosok automatikus váltóirányításához.
        </div>
      </div>

      {/* hero image */}
      <div style={{ padding: '0 60px 30px' }}>
        <ImgPh label="kiemelt projektfotó · vezérlőszekrény / végállomás" style={{ height: 280 }} />
      </div>

      {/* 4 column overview block */}
      <div style={{ padding: '0 60px 30px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 36 }}>
        {/* left — narrative */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          {[
            ['Áttekintés', 'A budapesti 1-es villamos Etele téri végállomásához kapcsolódó biztosítóberendezés feladata a járművek automatikus, biztonságos vágányra terelése.'],
            ['Kihívás', 'A megoldásnak SIL2 biztonsági szintet kellett teljesítenie, miközben 24/7 forgalmi környezetben működik, és integrálódik a meglévő villamoshálózat irányítástechnikájába.'],
            ['Megoldás', 'PLC-alapú biztosítóberendezést terveztünk és telepítettünk, amely felismeri a járművet, kiválasztja a megfelelő vágányt, és automatikusan irányítja a váltót. A rendszer integrált SCADA felügyelettel rendelkezik.'],
            ['Eredmény', 'A végállomás automatikus, megbízható működése csökkenti a kezelői beavatkozást és javítja a forgalmi biztonságot.'],
          ].map(([t, d]) => (
            <div key={t}>
              <div className="wf-label" style={{ marginBottom: 6, color: accent || 'var(--accent)' }}>{t}</div>
              <div style={{ fontSize: 14, color: 'var(--ink)', lineHeight: 1.5 }}>{d}</div>
            </div>
          ))}
        </div>

        {/* right — fact sidebar */}
        <Box style={{ padding: 20, alignSelf: 'start' }}>
          <div className="wf-label" style={{ marginBottom: 12 }}>Projekt adatok</div>
          {[
            ['Megrendelő', 'BKV / vasútüzem'],
            ['Helyszín', 'Budapest, Etele tér'],
            ['Év', '2018'],
            ['Státusz', 'Élesben üzemel'],
            ['Biztonsági szint', 'SIL2'],
            ['Technológiák', 'PLC, SCADA, Safety bus'],
          ].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px dashed var(--ink-trace)', fontSize: 12 }}>
              <span style={{ color: 'var(--ink-soft)' }}>{k}</span>
              <span style={{ fontWeight: 600 }}>{v}</span>
            </div>
          ))}
          <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <Btn variant="primary" size="sm" style={{ width: '100%' }}>Műszaki dokumentáció (PDF) ↓</Btn>
            <Btn variant="ghost" size="sm" style={{ width: '100%' }}>Hasonló projekt érdekel →</Btn>
          </div>
        </Box>
      </div>

      {/* gallery strip */}
      <div style={{ padding: '0 60px 30px' }}>
        <div className="wf-label" style={{ marginBottom: 10 }}>Galéria</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
          {[1,2,3,4].map(i => <ImgPh key={i} label={`fotó ${i}`} style={{ height: 110 }} />)}
        </div>
      </div>

      <Footer compact />
    </div>
  </div>
);

// ── KAPCSOLAT ────────────────────────────────────────────────────────────
const PageContact = ({ navStyle, accent }) => (
  <div className="wf-page">
    <PublicNav active="Kapcsolat" style={navStyle} accent={accent} />
    <div className="wf-scroll">
      <div style={{ padding: '50px 60px', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 50 }}>
        {/* left — info */}
        <div>
          <div className="wf-label" style={{ marginBottom: 8 }}>Kapcsolat</div>
          <div className="wf-display" style={{ fontSize: 46, marginBottom: 14 }}>
            Lépjen kapcsolatba velünk.
          </div>
          <div style={{ fontSize: 14, color: 'var(--ink-soft)', maxWidth: 440, marginBottom: 26 }}>
            Automatizálási, áramellátási, szoftverfejlesztési vagy távvezérlési kihívása van? Mérnöki csapatunk segít megtalálni az optimális műszaki megoldást.
          </div>

          {[
            ['Iroda', '1117 Budapest, Budafoki út 97.', 'home'],
            ['E-mail', 'info@debaru.hu', 'mail'],
            ['Telefon', '+36 1 445 4166', 'phone'],
            ['Megközelítés', 'Bejárat a Prielle Kornélia utca 53. felől, a WSH feliratú épületnél.', 'globe'],
          ].map(([k, v, ic]) => (
            <div key={k} style={{ display: 'flex', gap: 14, paddingBottom: 14, marginBottom: 14, borderBottom: '1px dashed var(--ink-trace)' }}>
              <div className="wf-icon-ph" style={{ flexShrink: 0 }}>
                <Icon name={ic} size={16} />
              </div>
              <div>
                <div className="wf-label" style={{ marginBottom: 2 }}>{k}</div>
                <div style={{ fontSize: 14 }}>{v}</div>
              </div>
            </div>
          ))}

          <div style={{ marginTop: 10, fontSize: 11, color: 'var(--ink-faint)' }}>
            Cégjegyzékszám: 01-09-896759 · Adószám: 14277148-2-43
          </div>
        </div>

        {/* right — form */}
        <Box style={{ padding: 24 }}>
          <div className="wf-h2" style={{ marginBottom: 14 }}>Írjon nekünk</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
            <div className="wf-field"><label>Név</label><div className="wf-input">_______________</div></div>
            <div className="wf-field"><label>Cégnév</label><div className="wf-input">_______________</div></div>
            <div className="wf-field"><label>E-mail</label><div className="wf-input">_______________</div></div>
            <div className="wf-field"><label>Telefon</label><div className="wf-input">_______________</div></div>
          </div>
          <div className="wf-field" style={{ marginBottom: 12 }}>
            <label>Érdeklődés tárgya</label>
            <div className="wf-input" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--ink-faint)' }}>Válasszon szolgáltatást...</span>
              <span>▾</span>
            </div>
          </div>
          <div className="wf-field" style={{ marginBottom: 14 }}>
            <label>Üzenet</label>
            <div className="wf-input" style={{ height: 88, color: 'var(--ink-faint)' }}>Milyen feladatban segíthetünk?</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 16 }}>
            <div style={{ width: 14, height: 14, border: '1.5px solid var(--ink)', flexShrink: 0, marginTop: 2 }} />
            <div style={{ fontSize: 11, color: 'var(--ink-soft)' }}>Hozzájárulok az adataim kezeléséhez az adatvédelmi tájékoztató szerint.</div>
          </div>
          <Btn variant="primary" size="lg" style={{ width: '100%' }}>Üzenet küldése →</Btn>
        </Box>
      </div>

      {/* map placeholder */}
      <div style={{ padding: '0 60px 40px' }}>
        <ImgPh label="térkép · Budapest, Budafoki út 97." style={{ height: 220 }} />
      </div>

      <Footer compact />
    </div>
  </div>
);

window.PageAbout = PageAbout;
window.PageServices = PageServices;
window.PageProjects = PageProjects;
window.PageProjectDetail = PageProjectDetail;
window.PageContact = PageContact;
