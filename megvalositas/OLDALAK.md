# Debaru — oldalak és URL-ek

## Jelenlegi (magyar) URL-ek

Fő domain jelenleg: `https://debaru.modroczky-ferenc-ev.workers.dev`

```
https://debaru.modroczky-ferenc-ev.workers.dev/ — Kezdőlap
https://debaru.modroczky-ferenc-ev.workers.dev/rolunk — Rólunk
https://debaru.modroczky-ferenc-ev.workers.dev/szolgaltatasok — Szolgáltatások
https://debaru.modroczky-ferenc-ev.workers.dev/szolgaltatasok/automatizalas — Ipari automatizálás
https://debaru.modroczky-ferenc-ev.workers.dev/szolgaltatasok/szekreny — Kapcsolószekrény-gyártás
https://debaru.modroczky-ferenc-ev.workers.dev/szolgaltatasok/scada — SCADA & folyamatfelügyelet
https://debaru.modroczky-ferenc-ev.workers.dev/szolgaltatasok/energetika — Villamos energetika
https://debaru.modroczky-ferenc-ev.workers.dev/szolgaltatasok/kozlekedes — Közlekedési rendszerek
https://debaru.modroczky-ferenc-ev.workers.dev/szolgaltatasok/szerviz — Üzemeltetés & szerviz
https://debaru.modroczky-ferenc-ev.workers.dev/projektjeink — Projektjeink
https://debaru.modroczky-ferenc-ev.workers.dev/projektjeink/bkv-etele-ter — BKV Etele téri villamos-végállomás
https://debaru.modroczky-ferenc-ev.workers.dev/projektjeink/1-es-villamos — 1-es villamos energiaellátás korszerűsítés
https://debaru.modroczky-ferenc-ev.workers.dev/projektjeink/elelmiszeripari-csomagolosor — Élelmiszeripari csomagolósor integráció
https://debaru.modroczky-ferenc-ev.workers.dev/projektjeink/logisztikai-park-betaplalas — Logisztikai park betáplálás
https://debaru.modroczky-ferenc-ev.workers.dev/projektjeink/vezerloszekreny-sorozat — Vezérlőszekrény-sorozat gyártás
https://debaru.modroczky-ferenc-ev.workers.dev/projektjeink/regionalis-vizmu-scada — Regionális vízmű SCADA
https://debaru.modroczky-ferenc-ev.workers.dev/projektjeink/elektromosbusz-depo-toltes — Elektromosbusz-depó töltés
https://debaru.modroczky-ferenc-ev.workers.dev/projektjeink/ipari-napelempark — Ipari napelempark csatlakozás
https://debaru.modroczky-ferenc-ev.workers.dev/projektjeink/hegeszto-robotcella — Hegesztő robotcella integráció
https://debaru.modroczky-ferenc-ev.workers.dev/projektjeink/adatkozpont-fo-eloszto — Adatközpont fő elosztó
https://debaru.modroczky-ferenc-ev.workers.dev/kapcsolat — Kapcsolat
https://debaru.modroczky-ferenc-ev.workers.dev/adatvedelem — Adatvédelem
https://debaru.modroczky-ferenc-ev.workers.dev/aszf — ÁSZF
https://debaru.modroczky-ferenc-ev.workers.dev/impresszum — Impresszum
https://debaru.modroczky-ferenc-ev.workers.dev/<bármely-nem-létező-cím> — 404 (nem található oldal)
```

---

## Angol és német URL-ek (i18n) — a legjobb SEO szerint

Ez még nincs megvalósítva; így kell majd felépíteni. Az alábbi példák a végleges
domainnel (`debaru.hu`) szerepelnek — a szerkezet a jelenlegi workers.dev címen is
ugyanez, csak a domain más.

### Alapelvek (legjobb SEO)

1. **Nyelvi alkönyvtár-prefix**: a magyar a gyökéren, az angol a `/en/`, a német a
   `/de/` alatt. (Nem aldomain, nem külön domain — így a domain-tekintély egyben marad.)
2. **Lefordított útvonalak ÉS slug-ok**: minden nyelven kulcsszó-releváns az URL
   (jobb helyi rangsor, nem csak `/en/szolgaltatasok/...`).
3. **hreflang** tag-ek minden oldalon, amelyek összekötik a 3 nyelvi változatot
   (`hu`, `en`, `de`) + `x-default`.
4. Minden nyelvi változat bekerül a **sitemap.xml**-be, hreflang-alternatívákkal.
5. A HTML nyelv-attribútum a megfelelő: `<html lang="hu|en|de">`.
6. A nyelvválasztó ezekre a lefordított URL-ekre mutat.

### Fő oldalak

| Magyar | Angol | Német |
|---|---|---|
| `debaru.hu/` | `debaru.hu/en` | `debaru.hu/de` |
| `debaru.hu/rolunk` | `debaru.hu/en/about` | `debaru.hu/de/ueber-uns` |
| `debaru.hu/szolgaltatasok` | `debaru.hu/en/services` | `debaru.hu/de/leistungen` |
| `debaru.hu/projektjeink` | `debaru.hu/en/projects` | `debaru.hu/de/projekte` |
| `debaru.hu/kapcsolat` | `debaru.hu/en/contact` | `debaru.hu/de/kontakt` |
| `debaru.hu/adatvedelem` | `debaru.hu/en/privacy-policy` | `debaru.hu/de/datenschutz` |
| `debaru.hu/aszf` | `debaru.hu/en/terms` | `debaru.hu/de/agb` |
| `debaru.hu/impresszum` | `debaru.hu/en/imprint` | `debaru.hu/de/impressum` |

### Szolgáltatás-aloldalak (lefordított slug — a legjobb SEO)

| Magyar slug | Angol | Német |
|---|---|---|
| `.../szolgaltatasok/automatizalas` | `.../en/services/industrial-automation` | `.../de/leistungen/industrieautomation` |
| `.../szolgaltatasok/szekreny` | `.../en/services/control-panel-manufacturing` | `.../de/leistungen/schaltschrankbau` |
| `.../szolgaltatasok/scada` | `.../en/services/scada-process-control` | `.../de/leistungen/scada-prozessleittechnik` |
| `.../szolgaltatasok/energetika` | `.../en/services/electrical-power-engineering` | `.../de/leistungen/elektrische-energietechnik` |
| `.../szolgaltatasok/kozlekedes` | `.../en/services/transport-systems` | `.../de/leistungen/verkehrssysteme` |
| `.../szolgaltatasok/szerviz` | `.../en/services/operation-maintenance` | `.../de/leistungen/betrieb-wartung` |

### Projekt-aloldalak

Ugyanaz az elv: `/en/projects/<lefordított-slug>` és `/de/projekte/<lefordított-slug>`.
Példa:

| Magyar | Angol | Német |
|---|---|---|
| `.../projektjeink/bkv-etele-ter` | `.../en/projects/bkv-etele-square-tram-terminus` | `.../de/projekte/bkv-etele-platz-strassenbahn-endstation` |
| `.../projektjeink/ipari-napelempark` | `.../en/projects/industrial-solar-park-connection` | `.../de/projekte/industrie-solarpark-anschluss` |

A többi projekt a fenti minta szerint kap lefordított slug-ot.

> A végleges angol/német slug-okat fordítás/lektorálás után célszerű véglegesíteni.
