// Szolgáltatások — SZERKEZET (a kliens 2026-os hibalistája alapján, 8 terület).
// A `slug` az áttekintő horgony (#slug) és az ikon-kulcs (serviceIcons), az `n` a
// sorszám a tag-ben. Minden SZÖVEG az i18n szótárban él (services.head / services.items.<slug>).
export const services = [
  { slug: 'bms', n: '01' },
  { slug: 'energiaellatas', n: '02' },
  { slug: 'berendezesgyartas', n: '03' },
  { slug: 'karbantartas', n: '04' },
  { slug: 'kotottpalyas-kozlekedes', n: '05' },
  { slug: 'tisztateri-villamoskivitelezes', n: '06' },
  { slug: 'scada', n: '07' },
  { slug: 'knx', n: '08' },
]
