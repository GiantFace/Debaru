// KARRIER — SZERKEZET. A szövegek az i18n szótárban élnek (careers.*, forms.*).
// A useContent() fésüli a slug/kulcs szerint. Új pozíció = új objektum + a szöveg
// hozzáadása a szótárhoz (careers.jobs.<slug>).

// Ide érkeznek a jelentkezések (később: karrier@debaru.hu vagy ATS-integráció).
export const applyEmail = 'info@debaru.hu'

// Kultúra-statisztikák — szám + suffix (szerkezet); felirat: careers.cultureStats[i].
export const cultureStats = [
  { to: 15, suffix: "+" },
  { to: 15, suffix: "+" },
  { to: 4 },
  { to: 24, suffix: "/7" },
]

// Juttatások — ikon-kulcs (szerkezet); cím/leírás: careers.benefits[i].
export const benefits = [
  { icon: "growth" },
  { icon: "projects" },
  { icon: "learning" },
  { icon: "team" },
  { icon: "stability" },
  { icon: "balance" },
]

// Jelentkezési lépések — sorszám (szerkezet); cím/leírás: careers.hiringSteps[i].
export const hiringSteps = [
  { n: "01" },
  { n: "02" },
  { n: "03" },
  { n: "04" },
]

// Szűrő-osztályok — kulcs (szerkezet); felirat: careers.departments.<key>.
export const departments = [
  { key: "all" },
  { key: "tervezes" },
  { key: "automatizalas" },
  { key: "gyartas" },
  { key: "kivitelezes" },
  { key: "gyakornok" },
]

// Nyitott pozíciók — SZERKEZET (slug/dept/JSON-LD mezők). A szöveg: careers.jobs.<slug>.
export const jobs = [
  { slug: "villamos-tervezomernok", dept: "tervezes", employmentType: "FULL_TIME", postedAt: "2026-07-01", validThrough: "2026-09-30" },
  { slug: "plc-scada-mernok", dept: "automatizalas", employmentType: "FULL_TIME", postedAt: "2026-07-01", validThrough: "2026-09-30" },
  { slug: "kapcsoloszekreny-szerelo", dept: "gyartas", employmentType: "FULL_TIME", postedAt: "2026-07-01", validThrough: "2026-09-30" },
  { slug: "villamos-projektvezeto", dept: "kivitelezes", employmentType: "FULL_TIME", postedAt: "2026-07-01", validThrough: "2026-09-30" },
  { slug: "helyszini-villanyszerelo", dept: "kivitelezes", employmentType: "FULL_TIME", postedAt: "2026-07-01", validThrough: "2026-09-30" },
  { slug: "kulfoldi-villamos-szerelo", dept: "kivitelezes", foreign: true, employmentType: "FULL_TIME", postedAt: "2026-07-01", validThrough: "2026-09-30" },
  { slug: "mernok-gyakornok", dept: "gyakornok", employmentType: "INTERN", postedAt: "2026-07-01", validThrough: "2026-09-30" },
]
