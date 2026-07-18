// Az oldal teljes tartalma egy helyen — a komponensek innen renderelnek.
// (Egyoldalas megvalósítás: a hivatkozások szekció-horgonyokra mutatnak.)

export const nav = [
  { label: 'Kezdőlap', to: '/' },
  { label: 'Rólunk', to: '/rolunk' },
  { label: 'Szolgáltatások', to: '/szolgaltatasok' },
  { label: 'Projektjeink', to: '/projektjeink' },
  { label: 'Kapcsolat', to: '/kapcsolat' },
]

export const langs = ['HU', 'EN', 'DE']

export const heroStats = [
  { v: '15+', k: 'év' },
  { v: '24/7', k: 'üzem' },
  { v: 'SIL2', k: 'biztonság' },
]

export const references = ['MÁV', 'BKV', 'MOL', 'Paks II.', 'E.ON', 'Audi']

// Bento — vezető stat és szolgáltatás-kártyák számlálókkal keverve.
export const bentoStats = {
  years: { to: 15, suffix: '+', label: 'év tapasztalat az iparban' },
  team: { to: 45, label: 'mérnök és technikus' },
  uptime: { to: 99.2, decimals: 1, suffix: '%', label: 'rendszer-rendelkezésre állás' },
  support: { to: 24, suffix: '/7', label: 'ügyeleti terméktámogatás' },
}

export const services = [
  { slug: 'automatizalas', title: 'Ipari automatizálás', desc: 'PLC/HMI gépvezérlés és gyártósor-integráció.' },
  { slug: 'szekreny', title: 'Kapcsolószekrény', desc: 'Egyedi erősáramú és vezérlőszekrény gyártás.' },
  { slug: 'scada', title: 'SCADA & felügyelet', desc: 'Távfelügyelet, adatgyűjtés és riasztáskezelés.' },
  { slug: 'energetika', title: 'Villamos energetika', desc: 'Hálózatok, alállomások és tartalék betáplálás.' },
  { slug: 'kozlekedes', title: 'Közlekedés', desc: 'Villamos- és vasúti energiaellátás, depói töltés.' },
  { slug: 'szerviz', title: 'Üzemeltetés', desc: '24/7 hibaelhárítás és megelőző karbantartás.' },
]

export const projects = [
  {
    tag: 'Közlekedés',
    title: '1-es villamos — energiaellátás korszerűsítés',
    desc: 'Felsővezeték-hálózat és két új egyenirányító alállomás kivitelezése a teljes vonalon, üzemszünet nélkül.',
    placeholder: 'Projektfotó — villamos vonal / felsővezeték',
  },
  {
    tag: 'Automatizálás',
    title: 'Élelmiszeripari csomagolósor integráció',
    desc: 'Nyolc gépegység egységes PLC-vezérlés alá vonása és központi SCADA felügyelet kiépítése.',
    placeholder: 'Projektfotó — gyártósor / automatizálás',
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
  { n: '01', title: 'Felmérés & koncepció', desc: 'Helyszíni bejárás, igényfelmérés és megvalósíthatósági terv pontos költségkerettel.' },
  { n: '02', title: 'Tervezés', desc: 'Villamos és vezérlési tervek, szekrény-dokumentáció, PLC-architektúra EPLAN-ban.' },
  { n: '03', title: 'Gyártás & kivitelezés', desc: 'Szekrénygyártás saját műhelyben, helyszíni szerelés és üzembe helyezés.' },
  { n: '04', title: 'Üzemeltetés', desc: 'Betanítás, dokumentációátadás és folyamatos karbantartás, 24/7 ügyelettel.' },
]

export const footer = {
  columns: [
    { title: 'Cég', links: [
      { label: 'Rólunk', to: '/rolunk' },
      { label: 'Szolgáltatások', to: '/szolgaltatasok' },
      { label: 'Projektjeink', to: '/projektjeink' },
      { label: 'Kapcsolat', to: '/kapcsolat' },
    ] },
    { title: 'Szolgáltatás', links: [
      { label: 'Automatizálás', to: '/szolgaltatasok#automatizalas' },
      { label: 'Kapcsolószekrény', to: '/szolgaltatasok#szekreny' },
      { label: 'SCADA', to: '/szolgaltatasok#scada' },
      { label: 'Energetika', to: '/szolgaltatasok#energetika' },
    ] },
    { title: 'Kapcsolat', links: [
      { label: '+36 1 200 1234', href: 'tel:+3612001234' },
      { label: 'info@debaru.hu', href: 'mailto:info@debaru.hu' },
    ], address: '1117 Budapest,\nBudafoki út 97.' },
  ],
}
