// Szolgáltatások — egységes forrás (a kliens 2026-os hibalistája alapján, 8 terület).
// A kártyák önmagukban állnak: külön aloldal helyett mindegyiknél "Ajánlatot kérek"
// (→ /kapcsolat). A `slug` az áttekintő horgony (#slug) és az ikon-kulcs (serviceIcons).

export const servicesHead = {
  crumb: 'Szolgáltatások',
  headPlaceholder: 'Fotó, üzem / technológia',
  title: ['Teljes villamos szolgáltatás,', 'egy partnerrel.'],
  lede: 'A tervezéstől és szoftverkészítéstől a gyártáson és kivitelezésen át az üzembe helyezésig és karbantartásig, nem kell külön beszállítókat koordinálnia. Mindent egy kézben adunk.',
}

export const services = [
  {
    slug: 'bms', chip: 'BMS', tag: '01 · BMS', title: 'BMS',
    short: 'Komplex épületfelügyeleti (BMS) rendszerek.',
    desc: 'Komplex BMS-rendszerek tervezése, programozása és vizuális megjelenítése. Siemens, SAIA, Qronox és Wago PLC-k szoftveres megoldása, EPLAN-alapú villamostervezés, WSCAD- és EPLAN-alapú 3D tervezés, HMI-programozás és saját SCADA-integráció, meglévő rendszerekhez is illesztve.',
    items: ['PLC-szoftver: Siemens, SAIA, Qronox, Wago', 'EPLAN-alapú villamostervezés, WSCAD/EPLAN 3D', 'HMI-programozás és SCADA-integráció'],
    placeholder: 'Fotó, BMS / vezérlőterem',
  },
  {
    slug: 'energiaellatas', chip: 'Energiaellátás', tag: '02 · Energiaellátás', title: 'Energiaellátás',
    short: 'Kis- és középfeszültségű energiaellátás.',
    desc: 'Komplex energiaellátási rendszerek tervezése, kivitelezése és felügyelete. Kis- és középfeszültségű transzformátorok, elosztórendszerek, kapcsoló- és vezérlőberendezések, szünetmentes tápegységek, aggregátoros rendszerek, valamint energiafelügyeleti és fogyasztásmérési megoldások, EPLAN-alapú tervezéssel, védelmi és vezérlési integrációval, hálózatkorszerűsítéssel.',
    items: ['Transzformátorok, elosztók, kapcsoló- és vezérlőberendezések', 'UPS, aggregátoros rendszerek, energiafelügyelet', 'EPLAN-tervezés, védelmi és vezérlési integráció'],
    placeholder: 'Fotó, transzformátor / elosztó',
  },
  {
    slug: 'berendezesgyartas', chip: 'Berendezésgyártás', tag: '03 · Gyártás', title: 'Berendezésgyártás',
    short: 'Egyedi és sorozatgyártott villamos berendezések.',
    desc: 'Egyedi és sorozatgyártott villamos kapcsoló-, vezérlő- és elosztóberendezések komplett gyártása, szerelése és dokumentálása EPLAN- és WSCAD-dokumentáció alapján. Teljes körű huzalozás, készülékezés, jelölés, gyártásközi ellenőrzés, funkcionális tesztelés, helyszíni telepítés és üzembe helyezés.',
    items: ['Kapcsoló-, vezérlő- és elosztószekrények', 'EPLAN/WSCAD dokumentáció, gyártásközi ellenőrzés', 'Funkcionális tesztelés, telepítés, üzembe helyezés'],
    placeholder: 'Fotó, berendezésgyártó műhely',
  },
  {
    slug: 'karbantartas', chip: 'Karbantartás', tag: '04 · Karbantartás', title: 'Karbantartás',
    short: 'Megelőző és hibaelhárító karbantartás.',
    desc: 'BMS-rendszerek, energiaellátási hálózatok és villamos berendezések teljes körű, megelőző és hibaelhárító karbantartása. PLC-, HMI- és SCADA-rendszerek, kapcsoló- és vezérlőszekrények, elosztóberendezések, szünetmentes tápegységek és aggregátoros rendszerek felülvizsgálata, diagnosztikája és javítása, állapotfelméréssel, alkatrészcserével és korszerűsítéssel.',
    items: ['Megelőző és hibaelhárító karbantartás', 'PLC/HMI/SCADA, szekrények, UPS diagnosztikája', 'Állapotfelmérés, alkatrészcsere, korszerűsítés'],
    placeholder: 'Fotó, karbantartás / szerviz',
  },
  {
    slug: 'kotottpalyas-kozlekedes', chip: 'Kötöttpályás közlekedés', tag: '05 · Közlekedés', title: 'Kötöttpályás közlekedés',
    short: 'Villamos- és vasúti energiaellátás, felsővezeték.',
    desc: 'Villamos- és vasúti pályák energiaellátása, felsővezeték-hálózatok, váltó- és jelzőberendezések, fagymegelőző berendezések, valamint töltőinfrastruktúra tervezése és kivitelezése.',
    items: ['Felsővezeték és egyenirányító alállomások', 'Váltó- és jelzőberendezések', 'Depói töltő- és energiainfrastruktúra'],
    placeholder: 'Fotó, villamos / felsővezeték',
  },
  {
    slug: 'tisztateri-villamoskivitelezes', chip: 'Tisztatéri kivitelezés', tag: '06 · Tisztatéri', title: 'Tisztatéri villamoskivitelezés',
    short: 'Tisztatéri villamos hálózatok és épületfelügyelet.',
    desc: 'Komplex tisztatéri rendszerek tervezése, kivitelezése és a kapcsolódó épületfelügyeleti megoldások kialakítása. Tisztatéri elektromos hálózatok, vezérlések, gépészeti és technológiai rendszerek integrációja, valamint nyomás-, hőmérséklet-, páratartalom- és légtechnikai paraméterek folyamatos felügyelete PLC-, HMI- és SCADA-alapú BMS-megoldásokkal.',
    items: ['Tisztatéri elektromos hálózatok és vezérlések', 'Gépészeti és technológiai integráció', 'Nyomás/hőmérséklet/pára/légtechnika felügyelet'],
    placeholder: 'Fotó, tisztatéri kivitelezés',
  },
  {
    slug: 'scada', chip: 'SCADA', tag: '07 · SCADA', title: 'SCADA & folyamatfelügyelet',
    short: 'Valós idejű folyamatfelügyelet és adatgyűjtés.',
    desc: 'Komplex SCADA- és folyamatfelügyeleti rendszerek tervezése, programozása és üzembe helyezése. Technológiai folyamatok valós idejű megjelenítése, vezérlése és felügyelete, mérési adatok gyűjtése, naplózása és kiértékelése, egyedi kezelőfelületekkel, riasztáskezeléssel, trendekkel, riportokkal és jogosultsági szintekkel, PLC-, HMI- és BMS-integrációval.',
    items: ['Valós idejű megjelenítés, vezérlés, felügyelet', 'Adatgyűjtés, naplózás, trendek, riportok', 'Riasztáskezelés, jogosultságok, PLC/HMI/BMS integráció'],
    placeholder: 'Fotó, SCADA vezérlőpult',
  },
  {
    slug: 'knx', chip: 'KNX', tag: '08 · KNX', title: 'KNX épületautomatizálás',
    short: 'KNX-alapú épületautomatizálás.',
    desc: 'Komplex KNX-alapú épületautomatizálási rendszerek tervezése, programozása és üzembe helyezése. Világítás-, árnyékolás-, fűtés-, hűtés- és helyiségszabályozási megoldások jelenlét- és időjárásfüggő vezérléssel, ETS-alapú konfigurációval, vizualizációval, energiafelügyelettel, távoli eléréssel és BMS-, SCADA-integrációval.',
    items: ['Világítás, árnyékolás, fűtés/hűtés, helyiségszabályozás', 'ETS-konfiguráció, vizualizáció, energiafelügyelet', 'Távoli elérés, BMS/SCADA-integráció'],
    placeholder: 'Fotó, KNX / épületautomatizálás',
  },
]

// slug → szolgáltatás gyors lekérés.
export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s]))
