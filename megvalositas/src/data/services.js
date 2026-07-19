// Szolgáltatások — egységes forrás. A `slug` egyben az ikon-kulcs (serviceIcons),
// a részletoldal útvonala (/szolgaltatasok/:slug) és az áttekintő horgony (#slug).
// Minden szolgáltatásnak külön, SEO-barát részletoldala van.

export const servicesHead = {
  crumb: 'Szolgáltatások',
  headPlaceholder: 'Fotó — üzem / technológia',
  title: ['Hat terület,', 'egy felelős partner.'],
  lede: 'A tervezéstől a gyártáson és kivitelezésen át az üzemeltetésig — nem kell külön beszállítókat koordinálnia. Mindent egy kézben adunk, egységes dokumentációval és felelősséggel.',
}

export const services = [
  {
    slug: 'automatizalas', chip: 'Automatizálás', tag: '01 · Automatizálás', title: 'Ipari automatizálás',
    short: 'PLC/HMI gépvezérlés és gyártósor-integráció.',
    desc: 'PLC- és HMI-alapú gépvezérlés tervezése és programozása, meglévő gyártósorok korszerűsítése és integrációja. Vezető platformokon dolgozunk: Siemens TIA Portal, Schneider és B&R.',
    items: ['PLC-programozás és HMI-fejlesztés', 'Gyártósor-integráció és robotcellák', 'Retrofit és teljesítménynövelés'],
    placeholder: 'Fotó — PLC / gyártósor',
    lede: 'PLC- és HMI-alapú gépvezérlés tervezése, programozása és integrációja — a koncepciótól az üzembe helyezésig, vezető ipari platformokon.',
    intro: [
      'Az ipari automatizálás a termelékenység és a megbízhatóság alapja. A Debaru mérnökei gépek, gyártósorok és technológiai folyamatok teljes vezérlését tervezik és valósítják meg — a szenzoroktól a PLC-n és HMI-n át a felügyeleti rendszerig.',
      'Vezető platformokon dolgozunk (Siemens TIA Portal, Schneider Electric, B&R), így a meglévő eszközparkjához illeszkedő, hosszú távon támogatott megoldást kap. A meglévő sorok korszerűsítését (retrofit) is vállaljuk, minimális állásidővel.',
    ],
    capabilities: [
      { title: 'PLC-programozás', desc: 'Gépvezérlés fejlesztése Siemens, Schneider és B&R platformokon, dokumentált, karbantartható kóddal.' },
      { title: 'HMI & vizualizáció', desc: 'Kezelőfelületek, amelyek áttekinthetők és gyorsan betaníthatók az üzemeltetők számára.' },
      { title: 'Gyártósor-integráció', desc: 'Több gépegység és robotcella egységes vezérlés alá vonása, adatkapcsolatok kiépítése.' },
      { title: 'Retrofit & korszerűsítés', desc: 'Meglévő gépek vezérlésének megújítása a teljes csere költsége nélkül.' },
    ],
    benefits: ['Egy felelős partner a tervezéstől az üzemeltetésig', 'Dokumentált, hosszú távon támogatott rendszerek', 'Minimális állásidő a korszerűsítéseknél'],
  },
  {
    slug: 'szekreny', chip: 'Kapcsolószekrény', tag: '02 · Gyártás', title: 'Kapcsolószekrény-gyártás',
    short: 'Egyedi erősáramú és vezérlőszekrény gyártás.',
    desc: 'Egyedi erősáramú és vezérlőszekrények tervezése és szerelése saját, 1 200 m²-es műhelyünkben. Teljes EPLAN-dokumentáció és gyári bevizsgálás minden darabhoz.',
    items: ['Erősáramú elosztó- és vezérlőszekrények', 'EPLAN tervezés és kábelrajzok', 'Gyári tesztelés és jegyzőkönyvezés'],
    placeholder: 'Fotó — kapcsolószekrény',
    lede: 'Egyedi erősáramú és vezérlőszekrények tervezése és gyártása saját, 1 200 m²-es műhelyünkben — teljes EPLAN-dokumentációval és gyári bevizsgálással.',
    intro: [
      'Egy jól megépített kapcsolószekrény a teljes villamos rendszer megbízhatóságának alapja. A Debaru saját gyártóműhelyében egyedi erősáramú elosztó- és vezérlőszekrényeket tervez és szerel, a megrendelő igényeire szabva.',
      'Minden szekrényhez teljes EPLAN-alapú dokumentációt és kábelrajzot készítünk, és gyári tesztelést végzünk a kiszállítás előtt — így a helyszíni üzembe helyezés gyors és zökkenőmentes.',
    ],
    capabilities: [
      { title: 'Erősáramú elosztók', desc: 'Fő- és alelosztók, teljesítményelosztás ipari és intézményi környezetbe.' },
      { title: 'Vezérlőszekrények', desc: 'PLC-, motorvezérlő- és jelzőszekrények egyedi kialakításban.' },
      { title: 'EPLAN dokumentáció', desc: 'Teljes kapcsolási és kábelrajz, amely az üzemeltetést is támogatja.' },
      { title: 'Gyári bevizsgálás', desc: 'Minden darab tesztelve és jegyzőkönyvezve a kiszállítás előtt.' },
    ],
    benefits: ['Saját 1 200 m²-es gyártóműhely', 'Egyedi, igényre szabott kialakítás', 'Bevizsgált, dokumentált minőség'],
  },
  {
    slug: 'scada', chip: 'SCADA', tag: '03 · Felügyelet', title: 'SCADA & folyamatfelügyelet',
    short: 'Távfelügyelet, adatgyűjtés és riasztáskezelés.',
    desc: 'Folyamatirányítási és távfelügyeleti rendszerek kiépítése: valós idejű adatgyűjtés, riasztáskezelés, trendek és energetikai monitoring — akár több telephely egyetlen felületen.',
    items: ['Központi vezérlőpult és vizualizáció', 'Adatnaplózás és riportálás', 'Távfelügyelet és riasztáskezelés'],
    placeholder: 'Fotó — SCADA vezérlőpult',
    lede: 'Folyamatirányítási és távfelügyeleti rendszerek: valós idejű adatgyűjtés, riasztáskezelés és energetikai monitoring — akár több telephely egyetlen felületen.',
    intro: [
      'A SCADA rendszer a szemünk és a kezünk a technológián. A Debaru olyan felügyeleti rendszereket épít, amelyek valós időben mutatják a folyamatokat, naplózzák az adatokat, és azonnal jeleznek, ha beavatkozásra van szükség.',
      'Legyen szó egyetlen üzemről vagy több telephelyes hálózatról, egységes, biztonságos felületet adunk — távolról is elérhetően, a meglévő PLC- és mérőrendszereihez illesztve.',
    ],
    capabilities: [
      { title: 'Központi vezérlőpult', desc: 'Áttekinthető vizualizáció a teljes technológiáról, egy helyen.' },
      { title: 'Adatgyűjtés & trendek', desc: 'Historikus adatnaplózás, riportok és energetikai monitoring.' },
      { title: 'Riasztáskezelés', desc: 'Prioritásos riasztások, értesítések és eseménynapló.' },
      { title: 'Távfelügyelet', desc: 'Biztonságos távoli hozzáférés, akár több telephely felett.' },
    ],
    benefits: ['Valós idejű átláthatóság', 'Gyorsabb hibafelismerés', 'Több telephely egy felületen'],
  },
  {
    slug: 'energetika', chip: 'Energetika', tag: '04 · Energetika', title: 'Villamos energetika',
    short: 'Hálózatok, alállomások és tartalék betáplálás.',
    desc: 'Közép- és kisfeszültségű hálózatok, transzformátorállomások és tartalék betáplálás tervezése és kivitelezése ipari és intézményi megrendelőknek.',
    items: ['Transzformátorállomások (KÖF/KIF)', 'Tartalék betáplálás és szünetmentes ellátás', 'Energiahatékonysági felmérés'],
    placeholder: 'Fotó — transzformátor / alállomás',
    lede: 'Közép- és kisfeszültségű hálózatok, transzformátorállomások és tartalék betáplálás tervezése és kivitelezése ipari és intézményi megrendelőknek.',
    intro: [
      'A stabil energiaellátás minden ipari működés alapja. A Debaru közép- és kisfeszültségű hálózatokat, transzformátorállomásokat és tartalék betáplálási rendszereket tervez és épít — a hálózati csatlakozástól a végponti elosztásig.',
      'Az energiahatékonyságot is szem előtt tartjuk: felméréssel és megfelelő méretezéssel csökkentjük a veszteségeket és a működési költséget.',
    ],
    capabilities: [
      { title: 'Transzformátorállomások', desc: 'KÖF/KIF állomások tervezése és kivitelezése.' },
      { title: 'Tartalék betáplálás', desc: 'Szünetmentes és tartalék rendszerek a folyamatos üzemért.' },
      { title: 'Hálózati csatlakozás', desc: 'Kis- és középfeszültségű hálózatok kiépítése.' },
      { title: 'Energiahatékonyság', desc: 'Felmérés és méretezés a veszteségek csökkentésére.' },
    ],
    benefits: ['Megbízható, szabvány szerinti kivitelezés', 'Tartalék ellátás a kritikus üzemhez', 'Alacsonyabb működési költség'],
  },
  {
    slug: 'kozlekedes', chip: 'Közlekedés', tag: '05 · Közlekedés', title: 'Közlekedési rendszerek',
    short: 'Villamos- és vasúti energiaellátás, depói töltés.',
    desc: 'Villamos- és vasúti pályák energiaellátása, felsővezeték-hálózatok, váltó- és jelzőberendezések, valamint elektromosbusz-depók töltőinfrastruktúrája.',
    items: ['Felsővezeték és egyenirányító alállomások', 'Váltó- és jelzőberendezések', 'Depói töltő- és energiainfrastruktúra'],
    placeholder: 'Fotó — villamos / felsővezeték',
    lede: 'Villamos- és vasúti pályák energiaellátása, felsővezeték-hálózatok, alállomások és elektromosbusz-depók töltőinfrastruktúrája — valós BKV-referenciákkal.',
    intro: [
      'A városi és vasúti közlekedés folyamatos, biztonságos energiaellátást kíván. A Debaru villamos- és vasúti pályák táplálását, felsővezeték-hálózatokat és egyenirányító alállomásokat épít — referenciáink között a BKV Etele téri projekt is szerepel.',
      'Az elektromos flották térnyerésével a depói töltőinfrastruktúra kiépítése is a portfóliónk része, a hálózati csatlakozástól a töltőoszlopok vezérléséig és diszpécser-felügyeletéig.',
    ],
    capabilities: [
      { title: 'Felsővezeték & alállomás', desc: 'Egyenirányító alállomások és felsővezeték-hálózatok kivitelezése.' },
      { title: 'Váltó- & jelzőberendezés', desc: 'Pályavillamosítás, váltó- és jelzőberendezések.' },
      { title: 'Depói töltés', desc: 'Elektromosbusz-depók töltő- és energiainfrastruktúrája.' },
      { title: 'Diszpécser-felügyelet', desc: 'A közlekedési energetika bekötése a központi diszpécserközpontba.' },
    ],
    benefits: ['Valós BKV-referenciák', 'Kivitelezés forgalomkiesés nélkül', 'Energia- és töltésinfrastruktúra egy kézben'],
    projectHref: '/projekt',
  },
  {
    slug: 'szerviz', chip: 'Szerviz', tag: '06 · Üzemeltetés', title: 'Üzemeltetés & szerviz',
    short: '24/7 hibaelhárítás és megelőző karbantartás.',
    desc: 'Karbantartási szerződések, 24/7 hibaelhárítás és tervszerű megelőző felülvizsgálat. A rendszer nem áll le — mi gondoskodunk róla, hogy így is maradjon.',
    items: ['24/7 ügyelet és távdiagnosztika', 'Tervszerű megelőző karbantartás', 'Alkatrész-ellátás és felújítás'],
    placeholder: 'Fotó — szerviz / karbantartás',
    lede: '24/7 hibaelhárítás, tervszerű megelőző karbantartás és karbantartási szerződések — hogy a rendszer ne álljon le.',
    intro: [
      'Egy rendszer értéke a folyamatos, megbízható üzemben mutatkozik meg. A Debaru karbantartási szerződéseket, 24/7 hibaügyeletet és tervszerű megelőző felülvizsgálatot kínál, garantált reagálási idővel.',
      'A távdiagnosztikának köszönhetően sok hibát még azelőtt azonosítunk, hogy leállást okozna — és a helyszíni beavatkozás is gyors, mert ismerjük a rendszert, amit építettünk.',
    ],
    capabilities: [
      { title: '24/7 ügyelet', desc: 'Hibaelhárítási készenlét, garantált kiszállási idővel.' },
      { title: 'Megelőző karbantartás', desc: 'Tervszerű felülvizsgálat a váratlan leállások ellen.' },
      { title: 'Távdiagnosztika', desc: 'Hibák korai felismerése távoli felügyelettel.' },
      { title: 'Alkatrész & felújítás', desc: 'Pótalkatrész-ellátás és berendezés-felújítás.' },
    ],
    benefits: ['Garantált reagálási idő', 'Kevesebb váratlan leállás', 'Ismerjük az Ön rendszerét'],
  },
]

// slug → szolgáltatás gyors lekérés (részletoldalhoz).
export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s]))
