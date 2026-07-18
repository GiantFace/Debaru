# Debaru Kft. — kezdőlap (React megvalósítás)

A `Tervezés/` mappa `site/index.html` statikus tervének React (Vite) átirata.
Globális design system: közös színek, tipográfia és újrahasznált komponensek.

## Futtatás

```bash
npm install
npm run dev      # fejlesztői szerver (http://localhost:5173)
npm run build    # produkciós build a dist/ mappába
npm run preview  # a build helyi kiszolgálása
```

## Struktúra

```
src/
├─ main.jsx                # belépő + globális stílusok betöltése
├─ App.jsx                 # oldal-összeállítás (szekciók sorrendje)
├─ styles/
│  ├─ tokens.css           # design tokenek (színek, tipó, geometria)
│  ├─ base.css             # reset, tipográfia, layout primitívek, reveal
│  └─ components.css       # globális komponens-stílusok (nav, gomb, kártya, bento…)
├─ data/content.js         # az oldal teljes szöveges tartalma egy helyen
├─ hooks/                  # újrahasználható viselkedés (parallax, reveal, hscroll, toast)
├─ components/
│  ├─ ui/                  # primitívek: Button, Reveal, Counter, ImageSlot, Icons
│  ├─ layout/              # Navbar, Footer, Background
│  └─ sections/            # Hero, Bento, Sectors, Process, Cta…
└─ public/assets/          # statikus assetek (logó)
```

## Megjegyzések

- A képek helyén `ImageSlot` placeholder áll (az eredeti `<image-slot>` helyett);
  `src` prop megadásával valós kép is beköthető.
- Az oldalon belüli hivatkozások szekció-horgonyokra mutatnak (egyoldalas változat).
- `prefers-reduced-motion` esetén minden animáció kikapcsol.
