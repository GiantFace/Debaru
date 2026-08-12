// Oldal-szintű SZERKEZET (útvonalak, kulcsok, számok). A szövegek az i18n
// szótárakban élnek (src/i18n/*.json); a komponensek useT()/useContent()-tel
// olvassák. Itt csak nem-fordítandó szerkezet marad.

// Főnavigáció — szerkezet (útvonal + kulcs); a felirat az i18n szótárból (nav.*).
export const nav = [
  { key: 'home', to: '/' },
  { key: 'about', to: '/rolunk' },
  { key: 'services', to: '/szolgaltatasok' },
  { key: 'projects', to: '/projektjeink' },
  { key: 'contact', to: '/kapcsolat' },
]

// Hero-statok — az érték (v) szerkezet/tulajdonnév; a felirat: i18n hero.stats[i].
export const heroStats = [{ v: '17+' }, { v: 'SIL2' }]

// Bento vezető statok — szám + suffix szerkezet; a felirat: i18n bento.stats.*.
export const bentoStats = {
  years: { to: 17, suffix: '+' },
  projects: { to: 100, suffix: '+' },
}

// Munkafolyamat — csak a sorszám szerkezet; cím/leírás: i18n process.steps[i].
export const processSteps = [{ n: '01' }, { n: '02' }, { n: '03' }, { n: '04' }]

// Lábléc — szerkezet (útvonal + kulcs); a feliratok az i18n szótárból.
// A `labelKey` az i18n útvonal; a nyers `label` tulajdonnév (telefon/e-mail).
export const footer = {
  columns: [
    { key: 'company', links: [
      { labelKey: 'nav.about', to: '/rolunk' },
      { labelKey: 'nav.services', to: '/szolgaltatasok' },
      { labelKey: 'nav.projects', to: '/projektjeink' },
      { labelKey: 'nav.careers', to: '/karrier' },
      { labelKey: 'nav.contact', to: '/kapcsolat' },
      { labelKey: 'nav.faq', to: '/#gyik' },
    ] },
    { key: 'services', links: [
      { labelKey: 'footer.services.bms', to: '/szolgaltatasok#bms' },
      { labelKey: 'footer.services.energiaellatas', to: '/szolgaltatasok#energiaellatas' },
      { labelKey: 'footer.services.berendezesgyartas', to: '/szolgaltatasok#berendezesgyartas' },
      { labelKey: 'footer.services.karbantartas', to: '/szolgaltatasok#karbantartas' },
      { labelKey: 'footer.services.kotottpalyas', to: '/szolgaltatasok#kotottpalyas-kozlekedes' },
      { labelKey: 'footer.services.tisztateri', to: '/szolgaltatasok#tisztateri-villamoskivitelezes' },
      { labelKey: 'footer.services.scada', to: '/szolgaltatasok#scada' },
      { labelKey: 'footer.services.knx', to: '/szolgaltatasok#knx' },
    ] },
    { key: 'contact', links: [
      { label: '+36 1 445 4166', href: 'tel:+3614454166' },
      { label: 'info@debaru.hu', href: 'mailto:info@debaru.hu' },
    ], address: true },
  ],
}
