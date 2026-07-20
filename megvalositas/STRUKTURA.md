# Debaru weboldal — projekt-struktúra

Ez a dokumentum a Debaru Kft. weboldalának felépítését írja le. Sima Markdown
fájl — **Windowson és macOS-en is** megnyílik bármely szövegszerkesztőben, a
VS Code-ban vagy a GitHubon (formázva).

---

## 1. Mi ez, milyen technológiával készült?

Egyoldalas-jellegű, több aloldalas **React** weboldal, **Vite** build-eszközzel.

| Réteg | Technológia |
|---|---|
| Frontend keretrendszer | React 18 (JSX, nem TypeScript) |
| Build / dev szerver | Vite 5 |
| Útvonalkezelés | react-router-dom v6 |
| Stílus | Sima CSS (globális design-tokenek, komponens-CSS) |
| Telefonszám-mező | react-phone-number-input |
| Spam-védelem | Cloudflare Turnstile (CAPTCHA) |
| Betűtípus | Space Grotesk (Google Fonts, nem-blokkoló) |

A tartalom jelenleg **magyar**. A nyelvválasztó (HU/EN/DE) megvan, de az EN/DE
fordítás még nincs kész (lásd 10. pont).

---

## 2. Futtatás és build

A projekt gyökerében (`megvalositas/` mappa) terminálból:

```bash
npm install        # függőségek telepítése (egyszer)
npm run dev        # fejlesztői szerver (http://localhost:5173) — élő újratöltéssel
npm run build      # éles build a dist/ mappába
npm run preview    # az elkészült build helyi megtekintése
```

> Node.js szükséges (18+ ajánlott). A `npm run dev` **nem** áll le magától — ez a
> fejlesztői szerver; élesítéshez a `npm run build` kell.

---

## 3. Mappastruktúra

```
megvalositas/
├── index.html              # HTML-váz: <title>, meta/SEO, favicon, JSON-LD, betűtöltés
├── package.json            # függőségek és npm-parancsok
├── vite.config.js          # Vite beállítás (vendor-chunk, stb.)
├── wrangler.jsonc          # Cloudflare Workers deploy-beállítás
├── .env.example            # környezeti változók mintája (Turnstile kulcs)
├── STRUKTURA.md            # EZ A FÁJL
│
├── public/                 # statikus fájlok (build során változatlanul a dist/-be kerülnek)
│   ├── favicon.svg, favicon-32.png, apple-touch-icon.png, icon-192.png
│   ├── og-image.png        # közösségi megosztókép (1200×630)
│   ├── robots.txt          # keresőrobotoknak
│   ├── sitemap.xml         # oldaltérkép (ÚJ oldalnál ide is fel kell venni!)
│   ├── site.webmanifest    # PWA/telefon-ikon
│   ├── assets/
│   │   └── debaru_logo.png # logó
│   └── partners/           # partner-logók a kezdőlapi sávhoz
│
└── src/                    # a forráskód
    ├── main.jsx            # belépési pont (React ide csatlakozik a #root-hoz)
    ├── App.jsx             # ÚTVONALAK (melyik URL melyik oldalt tölti be)
    │
    ├── pages/              # egy-egy teljes OLDAL
    ├── components/         # újrahasznosítható elemek
    │   ├── layout/         #   közös váz (nav, footer, háttér, scrollbar)
    │   ├── sections/       #   nagyobb szekciók (hero, bento, CTA, videó…)
    │   └── ui/             #   apró építőelemek (gomb, mező, ikon, kártya…)
    ├── data/               # A TARTALOM (szövegek, adatok) — ITT SZERKESZTHETŐ
    ├── hooks/              # újrahasznosítható logika (parallax, scroll, toast…)
    └── styles/             # globális CSS (színek, alap, komponensek)
```

---

## 4. Oldalak és útvonalak

Az útvonalakat az [`src/App.jsx`](src/App.jsx) köti össze az oldalakkal:

| URL | Oldal (fájl) | Leírás |
|---|---|---|
| `/` | `pages/Home.jsx` | Kezdőlap |
| `/rolunk` | `pages/About.jsx` | Rólunk + vezetőség |
| `/szolgaltatasok` | `pages/Services.jsx` | Szolgáltatások áttekintő |
| `/szolgaltatasok/:slug` | `pages/ServiceDetail.jsx` | Egy szolgáltatás aloldala (SEO) |
| `/projektjeink` | `pages/Projects.jsx` | Projektek rács |
| `/projektjeink/:slug` | `pages/ProjectDetail.jsx` | Egy projekt esettanulmánya |
| `/kapcsolat` | `pages/Contact.jsx` | Kapcsolatfelvételi űrlap + térkép |
| `/adatvedelem`, `/aszf`, `/impresszum` | `pages/Legal.jsx` | Jogi oldalak |
| bármi más | `pages/NotFound.jsx` | 404 oldal |

A `:slug` a konkrét szolgáltatás/projekt azonosítója (pl.
`/szolgaltatasok/energetika`). A régi `/projekt` átirányít a BKV esettanulmányra.

---

## 5. Hol szerkeszd a TARTALMAT? (`src/data/`)

**A szövegek és adatok többsége itt van** — nem a komponensekben. Ha tartalmat
akarsz módosítani, szinte mindig egy `data/` fájlt kell szerkeszteni:

| Fájl | Mit tartalmaz |
|---|---|
| `data/content.js` | Menü, kiemelt projektek, ágazatok, folyamat, GYIK, **footer** |
| `data/services.js` | A 6 szolgáltatás teljes tartalma (cím, leírás, képességek, folyamat, szabványok) |
| `data/projects.js` | A 10 projekt/esettanulmány teljes tartalma |
| `data/about.js` | Rólunk oldal: történet, számok, értékek, mérföldkövek, **vezetőség** |
| `data/contact.js` | Kapcsolat oldal fejléce, elérhetőségek, űrlap-opciók, térkép |
| `data/legal.js` | Adatvédelem / ÁSZF / Impresszum szövege |
| `data/videos.js` | A BKV referenciavideók (YouTube-azonosítók, paraméterek) |
| `data/partners.js` | Partner-logók listája |
| `data/cabinetSvg.js` | A 404 oldal animált szekrény-ábrája (SVG) |

> Példa: a **telefonszám** vagy **e-mail** módosításához a `data/content.js` (footer),
> `data/contact.js` és `data/legal.js` fájlokban kell átírni.

---

## 6. Komponensek (`src/components/`)

### `layout/` — a közös váz (minden oldalon)
- `Layout.jsx` — összefogja: háttér + nav + tartalom + footer + süti-sáv
- `Navbar.jsx` — fejléc, nyelvválasztó, mobil hamburgermenü
- `Footer.jsx` — lábléc (görgetéskor feltárul, zöld)
- `Background.jsx` — dekoratív rács + lebegő fény-orbök
- `CustomScrollbar.jsx` — egyedi görgetősáv
- `ScrollToTop.jsx` — oldalváltáskor a tetejére ugrik

### `sections/` — nagyobb szekciók
`Hero`, `Bento`, `FeaturedProjects`, `Sectors`, `Process`, `VideoBand`,
`VideoGallery`, `Faq`, `Cta`, `RefStrip` (partnerek), `PageHead` (aloldal-fejléc).

### `ui/` — apró építőelemek
`Button`, `Field` (űrlapmező), `Select` (legördülő), `Icons` (SVG-ikonok),
`StatBlock`/`Counter` (animált számok), `Reveal` (belépő animáció),
`Parallax`/`ParallaxImage`/`ParallaxMedia`, `Turnstile` (CAPTCHA),
`CookieBanner`, `VideoLightbox`, `ImageSlot`, `LogoLoop`.

---

## 7. Hookok (`src/hooks/`) — újrahasznosítható logika

`useParallax` / `useScrollParallax` (parallax), `useInView` (belépő animáció),
`useScrolled` / `useHScroll` (görgetés), `useToast` (értesítés),
`useDocumentTitle` (oldal-cím + SEO meta), `motion.js` (mozgás-csökkentés kezelése).

---

## 8. Stílus / design-rendszer (`src/styles/`)

- `tokens.css` — **globális változók**: színek, betűtípus, méretek. A **márka-zöld**
  és a többi szín innen jön (pl. `--accent`). Egy helyen módosítható az egész oldal.
- `base.css` — alap (reset, tipográfia, reszponzív rács, animációk)
- `components.css` — az összes komponens stílusa
- `notfound.css` — a 404 oldal külön stílusa

---

## 9. SEO és megosztás

- `index.html` — oldal-szintű `<title>`, leírás, **Open Graph** (megosztókép),
  **JSON-LD** strukturált cégadat (Google-nak).
- `public/robots.txt`, `public/sitemap.xml` — kereső-optimalizálás.
- Oldalankénti cím/leírás: a `useDocumentTitle` hook állítja.
- **Fontos:** új szolgáltatás- vagy projekt-aloldalnál a `sitemap.xml`-be is fel
  kell venni az új URL-t.

---

## 10. Élesítés és nyitott feladatok

- **Domain / tárhely:** a végleges cél a **debaru.hu** (részletek a fejlesztőnél,
  cPanel-terv). A `wrangler.jsonc` a Cloudflare-deployhoz tartozik.
- **Kapcsolati űrlap:** jelenleg csak visszajelzést mutat — a valódi e-mail-küldés
  (pl. cPanel `contact.php` vagy Cloudflare Worker) még beépítendő. A Turnstile
  *secret* kulcsot szerveroldalon kell ellenőrizni.
- **Turnstile _site_ kulcs:** a `.env`-ben (`VITE_TURNSTILE_SITE_KEY`); enélkül a
  teszt-kulcs fut.
- **EN/DE fordítás (i18n):** a nyelvválasztó megvan, de a tartalom még csak HU.
- **Valódi fotók:** a szürke „Fotó — …" helykitöltők valós képekre cserélendők
  (üzem, szekrények, helyszínek, vezetőségi portrék).
- **Jogi adatok:** az impresszum/adatvédelem sablon — érdemes jogásszal ellenőriztetni.
