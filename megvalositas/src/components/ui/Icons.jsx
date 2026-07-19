// Központi ikonkészlet — egységes, currentColor-alapú inline SVG-k.
const stroke = { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round' }

// Nyíl a "btn-arrow" gombokhoz és linkekhez.
export const Arrow = (p) => (
  <svg viewBox="0 0 24 24" strokeWidth="2.2" {...stroke} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)

export const Menu = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" {...stroke} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
)

// Pipa a szolgáltatás-listák elemeihez.
export const Check = (p) => (
  <svg viewBox="0 0 24 24" strokeWidth="2.4" {...stroke} {...p}><path d="M20 6 9 17l-5-5" /></svg>
)

// Figyelmeztető ikon az űrlap-hibaüzenetekhez.
export const Warn = (p) => (
  <svg viewBox="0 0 24 24" strokeWidth="2" {...stroke} {...p}><circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" /></svg>
)

// Érték- és kapcsolat-ikonok (kártyafejlécek).
const line = { viewBox: '0 0 24 24', strokeWidth: '1.7', ...stroke }
export const infoIcons = {
  shield: (p) => <svg {...line} {...p}><path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5z" /><path d="m9 12 2 2 4-4" /></svg>,
  clock: (p) => <svg {...line} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>,
  gear: (p) => <svg {...line} {...p}><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" /><circle cx="12" cy="12" r="3" /></svg>,
  wrench: (p) => <svg {...line} {...p}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6a1.5 1.5 0 0 0 2 2l6-6a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2z" /></svg>,
  pin: (p) => <svg {...line} {...p}><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  phone: (p) => <svg {...line} {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" /></svg>,
}

// Szolgáltatás-ikonok a bento rácshoz (slug → komponens).
const svc = { viewBox: '0 0 24 24', strokeWidth: '1.7', ...stroke }
export const serviceIcons = {
  automatizalas: () => (
    <svg {...svc}><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9h6v6H9z" /><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" /></svg>
  ),
  szekreny: () => (
    <svg {...svc}><rect x="5" y="3" width="14" height="18" rx="1.5" /><path d="M8 7h8M8 11h8M8 15h5" /></svg>
  ),
  scada: () => (
    <svg {...svc}><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4M7 11l3-3 2 2 4-4" /></svg>
  ),
  energetika: () => (
    <svg {...svc}><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></svg>
  ),
  kozlekedes: () => (
    <svg {...svc}><rect x="5" y="3" width="14" height="14" rx="3" /><path d="M5 10h14M9 17l-2 4M15 17l2 4M9 7h6" /><circle cx="8.5" cy="13.5" r="1" /><circle cx="15.5" cy="13.5" r="1" /></svg>
  ),
  szerviz: () => (
    <svg {...svc}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6a1.5 1.5 0 0 0 2 2l6-6a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2z" /></svg>
  ),
}
