# Debaru

A Debaru projekt tervezési anyagainak gyűjtője.

## Élő verzió

Ha a GitHub Pages be van kapcsolva ehhez a repóhoz, az anyag elérhető itt:

**https://giantface.github.io/Debaru/**

A főoldalról a mappákon keresztül lehet eljutni az interaktív wireframe-hez:

```
Debaru/
└── Tervezés/
    └── I. Fázis – Wireframe/   ← interaktív wireframe + források
```

## Struktúra

- [`index.html`](index.html) – nyitóoldal a `Tervezés/` mappához
- [`Tervezés/index.html`](Tervezés/index.html) – mappaválasztó a fázisokhoz
- [`Tervezés/I. Fázis - Wireframe/index.html`](Tervezés/I.%20F%C3%A1zis%20-%20Wireframe/index.html) – az interaktív wireframe (standalone HTML, minden függőség beágyazva)
- [`Tervezés/I. Fázis - Wireframe/src/`](Tervezés/I.%20F%C3%A1zis%20-%20Wireframe/src) – a wireframe forrásfájljai (JSX, CSS)

## GitHub Pages bekapcsolása

1. Nyisd meg a repó beállításait: <https://github.com/GiantFace/Debaru/settings/pages>
2. **Build and deployment** alatt a **Source** legyen *Deploy from a branch*.
3. A **Branch** legyen `main`, a mappa pedig `/ (root)`. Mentsd el (**Save**).
4. Várj kb. 1 percet, amíg a deploy lefut. Frissítsd az oldalt — fent megjelenik az élő URL: `https://giantface.github.io/Debaru/`.
