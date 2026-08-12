// Az oldal teljes tartalma egy helyen — a komponensek innen renderelnek.
// (Egyoldalas megvalósítás: a hivatkozások szekció-horgonyokra mutatnak.)

// Főnavigáció — szerkezet (útvonal + kulcs); a felirat az i18n szótárból (nav.*).
export const nav = [
  { key: 'home', to: '/' },
  { key: 'about', to: '/rolunk' },
  { key: 'services', to: '/szolgaltatasok' },
  { key: 'projects', to: '/projektjeink' },
  { key: 'contact', to: '/kapcsolat' },
]

export const heroStats = [
  { v: '17+', k: 'év' },
  { v: 'SIL2', k: 'biztonság' },
]

export const references = ['MÁV', 'BKV', 'MOL', 'Paks II.', 'E.ON', 'Audi']

// Bento — vezető stat és szolgáltatás-kártyák számlálókkal keverve.
export const bentoStats = {
  years: { to: 17, suffix: '+', label: 'év tapasztalat az iparban' },
  projects: { to: 100, suffix: '+', label: 'átadott projekt' },
}

// A szolgáltatások adatai átkerültek a data/services.js-be (egységes forrás).

export const projects = [
  {
    tag: 'Közlekedés · BKV',
    title: '1-es villamos, Etele téri végállomás',
    desc: 'SIL2 biztonsági vezérlés, áramátalakítók és a teljes védelem-irányítástechnika a végállomáshoz, a Siemens Mobility megbízásából.',
    placeholder: 'Projektfotó, Etele téri villamos-végállomás',
    to: '/projektjeink#kiemelt',
  },
  {
    tag: 'Tisztatér · ASML Berlin',
    title: 'ASML Berlin, tisztatéri automatizálás',
    desc: 'Félvezetőgyári tisztaterek épületgépészeti automatizálása: tervezés, szerelés, kábelezés, szoftver és üzembe helyezés, az ap-systems megbízásából.',
    placeholder: 'Projektfotó, tisztatéri technológia',
    to: '/projektjeink#kiemelt',
  },
]

export const sectors = [
  { n: '01', title: 'Gyártás & üzemek', desc: 'Gyártósorok automatizálása és energiaellátása a folyamatos termelésért.', placeholder: 'Gyártóüzem' },
  { n: '02', title: 'Energetika', desc: 'Transzformátorállomások, tartalék betáplálás és hálózati csatlakozás.', placeholder: 'Energetika' },
  { n: '03', title: 'Városi közlekedés', desc: 'Villamos felsővezeték, alállomások és depói töltőinfrastruktúra.', placeholder: 'Városi közlekedés' },
  { n: '04', title: 'Vasút', desc: 'Pályavillamosítás, váltó- és jelzőberendezések kivitelezése.', placeholder: 'Vasút' },
  { n: '05', title: 'Vízművek', desc: 'Szivattyútelepek vezérlése és többtelephelyes SCADA-felügyelet.', placeholder: 'Vízművek' },
  { n: '06', title: 'Adatközpontok', desc: 'Redundáns kisfeszültségű elosztás és szünetmentes ellátás.', placeholder: 'Adatközpont' },
]

export const processSteps = [
  { n: '01', title: 'Felmérés & koncepció', desc: 'Helyszíni bejárás, igényfelmérés és megvalósíthatósági terv.' },
  { n: '02', title: 'Tervezés és programozás', desc: 'ATEX tervezés, hardvertervezés, villamos tervezés, villámvédelmi tervezés és szoftverkészítés.' },
  { n: '03', title: 'Gyártás & kivitelezés', desc: 'Berendezésgyártás saját műhelyben, nyomvonalépítés, kábelezés, helyszíni szerelés és üzembe helyezés.' },
  { n: '04', title: 'Üzemeltetés', desc: 'Karbantartás és folyamatos szakmai támogatás.' },
]

export const faq = [
  { q: 'Hogyan kérhetek ajánlatot?', a: 'Töltse ki a kapcsolati űrlapot, kérjen e-mailben ajánlatot vagy hívjon minket. 3 munkanapon belül visszajelzünk egy első szakmai állásfoglalással.' },
  { q: 'Vállalnak munkát vidéken és külföldön is?', a: 'Igen. Vállalatunk az ország bármely területén és külföldön is vállal munkát.' },
  { q: 'Van sürgősségi ügyelet?', a: 'Egyedi szerződés alapján hibaelhárítási ügyeletet tartunk a karbantartási szerződéssel rendelkező ügyfeleink számára, garantált kiszállási idővel.' },
  { q: 'Milyen platformokon dolgoznak?', a: 'Siemens, SAIA, Qronox és Wago PLC-k szoftveres megoldása, EPLAN alapú villamostervezés, WSCAD és EPLAN alapú 3D tervezés, HMI-programozás és saját SCADA-integráció, meglévő rendszerekhez is illesztve.' },
]

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
