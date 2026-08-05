// Az oldal teljes tartalma egy helyen — a komponensek innen renderelnek.
// (Egyoldalas megvalósítás: a hivatkozások szekció-horgonyokra mutatnak.)

export const nav = [
  { label: 'Kezdőlap', to: '/' },
  { label: 'Rólunk', to: '/rolunk' },
  { label: 'Szolgáltatások', to: '/szolgaltatasok' },
  { label: 'Projektjeink', to: '/projektjeink' },
  { label: 'Kapcsolat', to: '/kapcsolat' },
]

// Aktív nyelvek (a nyelvválasztó legördülőben). A tartalom jelenleg HU;
// EN/DE választásakor „hamarosan" jelzés — valódi fordítás (i18n) később.
export const langs = ['HU', 'EN', 'DE']

export const heroStats = [
  { v: '17+', k: 'év' },
  { v: 'SIL2', k: 'biztonság' },
]

export const references = ['MÁV', 'BKV', 'MOL', 'Paks II.', 'E.ON', 'Audi']

// Bento — vezető stat és szolgáltatás-kártyák számlálókkal keverve.
export const bentoStats = {
  years: { to: 17, suffix: '+', label: 'év tapasztalat az iparban' },
  team: { to: 15, suffix: '+', label: 'mérnök és technikus' },
}

// A szolgáltatások adatai átkerültek a data/services.js-be (egységes forrás).

export const projects = [
  {
    tag: 'Közlekedés',
    title: '1-es villamos — energiaellátás korszerűsítés',
    desc: 'Felsővezeték-hálózat és két új egyenirányító alállomás kivitelezése a teljes vonalon, üzemszünet nélkül.',
    placeholder: 'Projektfotó — villamos vonal / felsővezeték',
    to: '/projektjeink/1-es-villamos',
  },
  {
    tag: 'Automatizálás',
    title: 'Élelmiszeripari csomagolósor integráció',
    desc: 'Nyolc gépegység egységes PLC-vezérlés alá vonása és központi SCADA felügyelet kiépítése.',
    placeholder: 'Projektfotó — gyártósor / automatizálás',
    to: '/projektjeink/elelmiszeripari-csomagolosor',
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
  { q: 'Hogyan kérhetek ajánlatot?', a: 'Töltse ki a kapcsolati űrlapot, kérjen e-mailben ajánlatot vagy hívjon minket — 3 munkanapon belül visszajelzünk egy első szakmai állásfoglalással.' },
  { q: 'Vállalnak munkát vidéken és külföldön is?', a: 'Igen. Vállalatunk az ország bármely területén és külföldön is vállal munkát.' },
  { q: 'Mennyi idő egy kapcsolószekrény legyártása?', a: 'A komplexitástól függ, de egy egyedi vezérlőszekrény jellemzően 3–6 hét a jóváhagyott tervektől számítva, saját műhelyünkben gyártva.' },
  { q: 'Van sürgősségi ügyelet?', a: 'Egyedi szerződés alapján hibaelhárítási ügyeletet tartunk a karbantartási szerződéssel rendelkező ügyfeleink számára, garantált kiszállási idővel.' },
  { q: 'Milyen platformokon dolgoznak?', a: 'Siemens, SAIA, Qronox és Wago PLC-k szoftveres megoldása, EPLAN alapú villamostervezés, WSCAD és EPLAN alapú 3D tervezés, HMI-programozás és saját SCADA-integráció — meglévő rendszerekhez is illesztve.' },
]

export const footer = {
  columns: [
    { title: 'Cég', links: [
      { label: 'Rólunk', to: '/rolunk' },
      { label: 'Szolgáltatások', to: '/szolgaltatasok' },
      { label: 'Projektjeink', to: '/projektjeink' },
      { label: 'Karrier', to: '/karrier' },
      { label: 'Kapcsolat', to: '/kapcsolat' },
      { label: 'GYIK', to: '/#gyik' },
    ] },
    { title: 'Szolgáltatás', links: [
      { label: 'BMS', to: '/szolgaltatasok#bms' },
      { label: 'Energiaellátás', to: '/szolgaltatasok#energiaellatas' },
      { label: 'Berendezésgyártás', to: '/szolgaltatasok#berendezesgyartas' },
      { label: 'Karbantartás', to: '/szolgaltatasok#karbantartas' },
      { label: 'Kötöttpályás közlekedés', to: '/szolgaltatasok#kotottpalyas-kozlekedes' },
      { label: 'Tisztatéri kivitelezés', to: '/szolgaltatasok#tisztateri-villamoskivitelezes' },
      { label: 'SCADA', to: '/szolgaltatasok#scada' },
      { label: 'KNX', to: '/szolgaltatasok#knx' },
    ] },
    { title: 'Kapcsolat', links: [
      { label: '+36 1 445 4166', href: 'tel:+3614454166' },
      { label: 'info@debaru.hu', href: 'mailto:info@debaru.hu' },
    ], address: '1117 Budapest,\nBudafoki út 97.' },
  ],
}
