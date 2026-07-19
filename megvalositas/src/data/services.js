// Szolgáltatások oldal tartalma (a terv szolgaltatasok.html alapján).

export const servicesHead = {
  crumb: 'Szolgáltatások',
  headPlaceholder: 'Fotó — üzem / technológia',
  title: ['Hat terület,', 'egy felelős partner.'],
  lede: 'A tervezéstől a gyártáson és kivitelezésen át az üzemeltetésig — nem kell külön beszállítókat koordinálnia. Mindent egy kézben adunk, egységes dokumentációval és felelősséggel.',
}

// A phead chip-jei az azonos id-jű szekciókra ugranak.
export const serviceChips = [
  { id: 'automatizalas', label: 'Automatizálás' },
  { id: 'szekreny', label: 'Kapcsolószekrény' },
  { id: 'scada', label: 'SCADA' },
  { id: 'energetika', label: 'Energetika' },
  { id: 'kozlekedes', label: 'Közlekedés' },
  { id: 'szerviz', label: 'Szerviz' },
]

export const serviceBlocks = [
  {
    id: 'automatizalas', tag: '01 · Automatizálás', title: 'Ipari automatizálás',
    desc: 'PLC- és HMI-alapú gépvezérlés tervezése és programozása, meglévő gyártósorok korszerűsítése és integrációja. Vezető platformokon dolgozunk: Siemens TIA Portal, Schneider és B&R.',
    items: ['PLC-programozás és HMI-fejlesztés', 'Gyártósor-integráció és robotcellák', 'Retrofit és teljesítménynövelés'],
    placeholder: 'Fotó — PLC / gyártósor',
  },
  {
    id: 'szekreny', tag: '02 · Gyártás', title: 'Kapcsolószekrény-gyártás',
    desc: 'Egyedi erősáramú és vezérlőszekrények tervezése és szerelése saját, 1 200 m²-es műhelyünkben. Teljes EPLAN-dokumentáció és gyári bevizsgálás minden darabhoz.',
    items: ['Erősáramú elosztó- és vezérlőszekrények', 'EPLAN tervezés és kábelrajzok', 'Gyári tesztelés és jegyzőkönyvezés'],
    placeholder: 'Fotó — kapcsolószekrény',
  },
  {
    id: 'scada', tag: '03 · Felügyelet', title: 'SCADA & folyamatfelügyelet',
    desc: 'Folyamatirányítási és távfelügyeleti rendszerek kiépítése: valós idejű adatgyűjtés, riasztáskezelés, trendek és energetikai monitoring — akár több telephely egyetlen felületen.',
    items: ['Központi vezérlőpult és vizualizáció', 'Adatnaplózás és riportálás', 'Távfelügyelet és riasztáskezelés'],
    placeholder: 'Fotó — SCADA vezérlőpult',
  },
  {
    id: 'energetika', tag: '04 · Energetika', title: 'Villamos energetika',
    desc: 'Közép- és kisfeszültségű hálózatok, transzformátorállomások és tartalék betáplálás tervezése és kivitelezése ipari és intézményi megrendelőknek.',
    items: ['Transzformátorállomások (KÖF/KIF)', 'Tartalék betáplálás és szünetmentes ellátás', 'Energiahatékonysági felmérés'],
    placeholder: 'Fotó — transzformátor / alállomás',
  },
  {
    id: 'kozlekedes', tag: '05 · Közlekedés', title: 'Közlekedési rendszerek',
    desc: 'Villamos- és vasúti pályák energiaellátása, felsővezeték-hálózatok, váltó- és jelzőberendezések, valamint elektromosbusz-depók töltőinfrastruktúrája.',
    items: ['Felsővezeték és egyenirányító alállomások', 'Váltó- és jelzőberendezések', 'Depói töltő- és energiainfrastruktúra'],
    placeholder: 'Fotó — villamos / felsővezeték',
  },
  {
    id: 'szerviz', tag: '06 · Üzemeltetés', title: 'Üzemeltetés & szerviz',
    desc: 'Karbantartási szerződések, 24/7 hibaelhárítás és tervszerű megelőző felülvizsgálat. A rendszer nem áll le — mi gondoskodunk róla, hogy így is maradjon.',
    items: ['24/7 ügyelet és távdiagnosztika', 'Tervszerű megelőző karbantartás', 'Alkatrész-ellátás és felújítás'],
    placeholder: 'Fotó — szerviz / karbantartás',
  },
]
