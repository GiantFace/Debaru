/* global React */
// Shared wireframe primitives for Debaru wireframes.

const ImgPh = ({ label, style }) => (
  <div className="wf-img-ph" style={style}>
    <span className="label">{label || 'image'}</span>
  </div>
);

const Lines = ({ count = 3, widths }) => {
  const ws = widths || (count === 1 ? ['mid'] : ['long', 'long', 'mid'].slice(0, count));
  return (
    <div className="wf-text-lines">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={`line ${ws[i] || 'long'}`} />
      ))}
    </div>
  );
};

const Btn = ({ children, variant, size, style, ...rest }) => (
  <button
    className={`wf-btn ${variant || ''} ${size || ''}`}
    style={style}
    {...rest}
  >
    {children}
  </button>
);

const Pill = ({ children, variant, style }) => (
  <span className={`wf-pill ${variant || ''}`} style={style}>{children}</span>
);

const Box = ({ children, className = '', style, ...rest }) => (
  <div className={`wf-box ${className}`} style={style} {...rest}>{children}</div>
);

const Note = ({ children, top, left, right, bottom, rotate = -2, width = 160 }) => (
  <div className="wf-note" style={{ top, left, right, bottom, width, transform: `rotate(${rotate}deg)` }}>
    {children}
  </div>
);

const StatusDot = ({ status }) => <span className={`wf-status-dot ${status || ''}`} />;

// Sketchy SVG icon — simple line shapes
const Icon = ({ name, size = 18, color = 'currentColor' }) => {
  const paths = {
    home: 'M3 10 L10 4 L17 10 M5 10 V16 H15 V10',
    user: 'M10 9 a3 3 0 1 0 0 -6 a3 3 0 0 0 0 6 M4 17 c0 -4 12 -4 12 0',
    bell: 'M10 3 v1 M5 8 a5 5 0 0 1 10 0 v4 l2 2 H3 l2 -2 V8 M8 17 a2 2 0 0 0 4 0',
    search: 'M9 14 a5 5 0 1 1 0 -10 a5 5 0 0 1 0 10 M13 13 l4 4',
    plus: 'M10 4 v12 M4 10 h12',
    cog: 'M10 7 a3 3 0 1 0 0 6 a3 3 0 0 0 0 -6 M10 1 v3 M10 16 v3 M1 10 h3 M16 10 h3',
    file: 'M5 3 h7 l3 3 v11 h-10 z M12 3 v3 h3',
    chart: 'M3 17 h14 M5 14 v-4 M9 14 v-7 M13 14 v-9',
    arrow: 'M3 10 h13 M12 6 l4 4 l-4 4',
    check: 'M4 10 l4 4 l8 -9',
    x: 'M5 5 l10 10 M15 5 l-10 10',
    grid: 'M3 3 h6 v6 h-6 z M11 3 h6 v6 h-6 z M3 11 h6 v6 h-6 z M11 11 h6 v6 h-6 z',
    list: 'M3 5 h14 M3 10 h14 M3 15 h14',
    clock: 'M10 4 a6 6 0 1 0 0 12 a6 6 0 0 0 0 -12 M10 7 v3 l2 2',
    plc: 'M3 5 h14 v10 h-14 z M6 8 h2 v4 h-2 z M10 8 h2 v4 h-2 z M14 8 h1 v1 h-1 z M14 11 h1 v1 h-1 z',
    bolt: 'M11 2 L4 11 h5 l-2 7 L14 9 h-5 z',
    chip: 'M5 5 h10 v10 h-10 z M3 8 h2 M3 12 h2 M15 8 h2 M15 12 h2 M8 3 v2 M12 3 v2 M8 15 v2 M12 15 v2 M8 8 h4 v4 h-4 z',
    train: 'M5 4 h10 v9 h-10 z M5 8 h10 M7 16 l2 -3 M13 16 l-2 -3 M7 11 a0.5 0.5 0 1 1 0.01 0 M13 11 a0.5 0.5 0 1 1 0.01 0',
    factory: 'M2 17 v-6 l4 -2 v2 l4 -2 v2 l4 -2 v8 z M5 14 h1 M9 14 h1 M13 14 h1 M2 17 h16',
    paperclip: 'M14 9 l-5 5 a3 3 0 1 1 -4 -4 l6 -6 a2 2 0 0 1 3 3 l-7 7',
    eye: 'M3 10 c2 -4 12 -4 14 0 c-2 4 -12 4 -14 0 M10 8 a2 2 0 1 0 0 4 a2 2 0 0 0 0 -4',
    lock: 'M6 9 v-2 a4 4 0 0 1 8 0 v2 M4 9 h12 v8 h-12 z',
    globe: 'M10 3 a7 7 0 1 0 0 14 a7 7 0 0 0 0 -14 M3 10 h14 M10 3 c-3 3 -3 11 0 14 M10 3 c3 3 3 11 0 14',
    folder: 'M3 6 a1 1 0 0 1 1 -1 h4 l2 2 h6 a1 1 0 0 1 1 1 v8 a1 1 0 0 1 -1 1 h-12 a1 1 0 0 1 -1 -1 z',
    flag: 'M5 17 v-14 h10 l-2 3 l2 3 h-10',
    mail: 'M3 5 h14 v10 h-14 z M3 5 l7 6 l7 -6',
    phone: 'M5 3 h3 l1 4 l-2 1 a8 8 0 0 0 5 5 l1 -2 l4 1 v3 a2 2 0 0 1 -2 2 a14 14 0 0 1 -14 -14 a2 2 0 0 1 2 -2',
    upload: 'M10 14 v-9 M6 8 l4 -4 l4 4 M4 16 h12',
    filter: 'M3 4 h14 l-5 7 v5 l-4 -2 v-3 z',
    kanban: 'M3 3 h4 v14 h-4 z M9 3 h4 v9 h-4 z M15 3 h2 v6 h-2 z',
    timeline: 'M3 10 h14 M5 10 a1 1 0 1 1 0.01 0 M10 10 a1 1 0 1 1 0.01 0 M15 10 a1 1 0 1 1 0.01 0 M5 13 v1 M10 7 v1 M15 13 v1',
  };
  const d = paths[name] || paths.plus;
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
};

// Simple SVG annotation arrow — curved, hand-drawn feel
const AnnoArrow = ({ from, to, curve = 30, style }) => {
  const [x1, y1] = from, [x2, y2] = to;
  const mx = (x1 + x2) / 2 + curve;
  const my = (y1 + y2) / 2 - curve;
  return (
    <svg
      style={{ position: 'absolute', left: 0, top: 0, overflow: 'visible', pointerEvents: 'none', ...style }}
      width="1" height="1"
    >
      <defs>
        <marker id="arr-head" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 z" fill="#5a4a2a" />
        </marker>
      </defs>
      <path
        d={`M${x1},${y1} Q${mx},${my} ${x2},${y2}`}
        stroke="#5a4a2a" strokeWidth="1.3" fill="none"
        strokeDasharray="4 3" markerEnd="url(#arr-head)"
      />
    </svg>
  );
};

// Window chrome (browser-style)
const Browser = ({ url = 'debaru.hu', children, lang }) => (
  <div className="wf-browser-bar">
    <span className="dot" />
    <span className="dot" />
    <span className="dot" />
    <span className="url">{url}</span>
    {lang && <span style={{ marginLeft: 'auto', fontSize: 10 }}>{lang}</span>}
  </div>
);

// Top nav for the public website
const PublicNav = ({ active = 'Kezdőlap', style = 'top', accent }) => {
  const links = ['Kezdőlap', 'Rólunk', 'Szolgáltatások', 'Projektjeink', 'Kapcsolat'];
  if (style === 'mega') {
    return (
      <div className="wf-nav" style={{ padding: '14px 28px' }}>
        <div className="brand">Debaru.</div>
        <div className="nav-links" style={{ marginLeft: 32, gap: 22 }}>
          {links.map(l => (
            <span key={l} style={{
              fontWeight: l === active ? 700 : 400,
              borderBottom: l === active ? `2px solid ${accent || 'var(--ink)'}` : 'none',
              paddingBottom: 2,
            }}>{l} {l === 'Szolgáltatások' && <span style={{ fontSize: 9 }}>▾</span>}</span>
          ))}
        </div>
        <div className="nav-right">
          <span style={{ fontSize: 11, color: 'var(--ink-soft)' }}>HU · EN · DE · HR</span>
          <Btn size="sm" variant="primary">Ügyfélportál</Btn>
        </div>
      </div>
    );
  }
  return (
    <div className="wf-nav">
      <div className="brand">Debaru.</div>
      <div className="nav-links">
        {links.map(l => (
          <span key={l} style={{
            fontWeight: l === active ? 700 : 400,
            color: l === active ? 'var(--ink)' : 'var(--ink-soft)',
          }}>{l}</span>
        ))}
      </div>
      <div className="nav-right">
        <span style={{ fontSize: 11, color: 'var(--ink-faint)' }}>HU EN DE HR</span>
        <Btn size="sm" variant="primary">Bejelentkezés</Btn>
      </div>
    </div>
  );
};

// Side nav (alternative layout)
const SideNav = ({ active = 'Kezdőlap' }) => {
  const links = ['Kezdőlap', 'Rólunk', 'Szolgáltatások', 'Projektjeink', 'Kapcsolat'];
  return (
    <div style={{
      width: 180, padding: 24, background: 'var(--paper-2)',
      borderRight: '1.5px solid var(--ink)', display: 'flex', flexDirection: 'column',
      gap: 20, flexShrink: 0,
    }}>
      <div className="brand" style={{ fontFamily: 'var(--wf-display-font, Caveat), cursive', fontSize: 26, fontWeight: 700 }}>
        Debaru.
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {links.map(l => (
          <span key={l} style={{
            fontSize: 13,
            fontWeight: l === active ? 700 : 400,
            color: l === active ? 'var(--ink)' : 'var(--ink-soft)',
            paddingLeft: l === active ? 8 : 0,
            borderLeft: l === active ? '2px solid var(--ink)' : 'none',
          }}>{l}</span>
        ))}
      </div>
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ fontSize: 10, color: 'var(--ink-faint)', textTransform: 'uppercase', letterSpacing: 1 }}>
          Nyelv
        </div>
        <div style={{ display: 'flex', gap: 6, fontSize: 11 }}>
          <span style={{ fontWeight: 700, borderBottom: '1.5px solid var(--ink)' }}>HU</span>
          <span style={{ color: 'var(--ink-faint)' }}>EN</span>
          <span style={{ color: 'var(--ink-faint)' }}>DE</span>
          <span style={{ color: 'var(--ink-faint)' }}>HR</span>
        </div>
        <Btn size="sm" variant="primary" style={{ marginTop: 8 }}>Ügyfélportál →</Btn>
      </div>
    </div>
  );
};

const Footer = ({ compact }) => (
  <div style={{
    padding: compact ? '14px 24px' : '24px 28px',
    background: 'var(--paper-2)',
    borderTop: '1.5px solid var(--ink)',
    display: 'flex', gap: 24, fontSize: 11, color: 'var(--ink-soft)',
    flexShrink: 0,
  }}>
    <div style={{ flex: 1 }}>
      <div className="brand" style={{ fontFamily: 'var(--wf-display-font, Caveat), cursive', fontSize: 18, color: 'var(--ink)' }}>Debaru Kft.</div>
      <div style={{ marginTop: 4 }}>1117 Bp., Budafoki út 97.</div>
    </div>
    <div>
      <div style={{ fontWeight: 700, color: 'var(--ink)' }}>Szolgáltatások</div>
      <div>Automatizálás · PLC/SCADA · Áramellátás · Fejlesztés</div>
    </div>
    <div>
      <div style={{ fontWeight: 700, color: 'var(--ink)' }}>Kapcsolat</div>
      <div>info@debaru.hu · +36 1 445 4166</div>
    </div>
    <div style={{ alignSelf: 'flex-end', fontSize: 9 }}>© 2026 Debaru Kft.</div>
  </div>
);

// Ticketing sidebar (used in all portal screens)
const PortalSidebar = ({ role = 'ügyfél', active = 'Dashboard', accent }) => {
  const items = {
    'ügyfél': [
      ['Dashboard', 'home'],
      ['Hibajegyeim', 'list'],
      ['Új hibajegy', 'plus'],
      ['Projektjeim', 'folder'],
      ['Dokumentumok', 'file'],
    ],
    'ügyfél admin': [
      ['Dashboard', 'home'],
      ['Cégünk jegyei', 'list'],
      ['Új hibajegy', 'plus'],
      ['Kapcsolattartók', 'user'],
      ['Projektjeink', 'folder'],
      ['Riportok', 'chart'],
    ],
    'munkatárs': [
      ['Munkalista', 'list'],
      ['Saját jegyek', 'flag'],
      ['Projektek', 'folder'],
      ['Tudásbázis', 'file'],
      ['Naptár', 'clock'],
    ],
    'admin': [
      ['Áttekintés', 'chart'],
      ['Minden jegy', 'list'],
      ['Felhasználók', 'user'],
      ['Cégek', 'globe'],
      ['Projektek', 'folder'],
      ['Kategóriák', 'grid'],
      ['SLA / Riportok', 'flag'],
      ['Beállítások', 'cog'],
    ],
  }[role];

  return (
    <div className="wf-sidebar">
      <div className="brand" style={{
        fontFamily: 'var(--wf-display-font, Caveat), cursive', fontSize: 22, fontWeight: 700,
        marginBottom: 4,
      }}>
        Debaru<span style={{ color: accent || 'var(--accent)' }}>.</span> portál
      </div>
      <div style={{ fontSize: 10, color: 'var(--ink-faint)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>
        {role}
      </div>
      {items.map(([label, ic]) => (
        <div key={label} className={`item ${label === active ? 'active' : ''} ${accent && label === active ? 'accent' : ''}`} style={accent && label === active ? { background: accent, color: 'white' } : undefined}>
          <Icon name={ic} size={14} color={label === active ? (accent ? 'white' : 'var(--paper)') : 'var(--ink-faint)'} />
          {label}
        </div>
      ))}
      <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: '1px dashed var(--ink-trace)', display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ fontSize: 11, display: 'flex', gap: 8, alignItems: 'center' }}>
          <div className="wf-icon-ph" style={{ width: 24, height: 24, fontSize: 11 }}>K</div>
          <span>Kovács Anna</span>
        </div>
        <div style={{ fontSize: 9, color: 'var(--ink-faint)', display: 'flex', gap: 4 }}>
          <span>HU</span><span>·</span><span>EN</span><span>·</span><span>DE</span><span>·</span><span>HR</span>
        </div>
      </div>
    </div>
  );
};

// Top bar inside portal (page title + search + actions)
const PortalTopBar = ({ title, sub, right, accent }) => (
  <div style={{
    padding: '14px 24px',
    borderBottom: '1px solid var(--ink-trace)',
    display: 'flex', alignItems: 'center', gap: 16,
    flexShrink: 0,
    background: 'var(--paper)',
  }}>
    <div>
      <div style={{ fontFamily: 'var(--wf-display-font, Caveat), cursive', fontSize: 22, fontWeight: 700 }}>{title}</div>
      {sub && <div style={{ fontSize: 11, color: 'var(--ink-soft)' }}>{sub}</div>}
    </div>
    <div style={{ marginLeft: 'auto', display: 'flex', gap: 10, alignItems: 'center' }}>
      {right || (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '4px 10px', border: '1px dashed var(--ink-trace)', borderRadius: 16, fontSize: 11, color: 'var(--ink-faint)' }}>
            <Icon name="search" size={12} />
            <span>Keresés…</span>
          </div>
          <Icon name="bell" size={16} color="var(--ink-soft)" />
        </>
      )}
    </div>
  </div>
);

Object.assign(window, {
  ImgPh, Lines, Btn, Pill, Box, Note, StatusDot, Icon, AnnoArrow,
  Browser, PublicNav, SideNav, Footer, PortalSidebar, PortalTopBar,
});
