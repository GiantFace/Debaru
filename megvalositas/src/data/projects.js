// Projektek — egységes forrás. A `slug` egyben a részletoldal útvonala
// (/projektjeink/:slug). Minden projektnek külön, SEO-barát esettanulmány-oldala van.
// Kártya-mezők (tag, metric…) a rácshoz; a részlet-mezők (overview, scope, sections,
// process, highlights, tech, outcome, facts, stats) a gazdag aloldalhoz.

export const projectsHead = {
  crumb: 'Projektjeink',
  headPlaceholder: 'Fotó — ipari projekt / helyszín',
  title: ['Referenciák, amelyek', 'üzemelnek.'],
  lede: 'Több mint 320 átadott projekt az ipar, az energetika és a közlekedés területén. Íme egy válogatás azokból, amelyekre a legbüszkébbek vagyunk — mindegyikről részletes esettanulmánnyal.',
}

// Szűrő chip-ek (kategória-kulcsokkal).
export const projectFilters = [
  { key: 'all', label: 'Összes' },
  { key: 'automatizalas', label: 'Automatizálás' },
  { key: 'energetika', label: 'Energetika' },
  { key: 'kozlekedes', label: 'Közlekedés' },
  { key: 'szekreny', label: 'Kapcsolószekrény' },
]

export const projects = [
  {
    slug: 'bkv-etele-ter', cat: 'kozlekedes', tag: 'Közlekedés · Energetika', feat: true, videos: true,
    title: 'BKV Etele téri villamos-végállomás és áramellátás',
    desc: 'Új egyenirányító alállomás, a végállomás teljes villamos kiépítése és bekötés a BKV központi diszpécser-felügyeletébe.',
    metric: '0', metricLabel: 'nap forgalomkiesés', placeholder: 'BKV Etele tér / végállomás',
    lede: 'Új áramátalakító (egyenirányító) alállomás a felsővezeték egyenáramú táplálásához, a végállomás teljes villamos kiépítése, és a rendszer bekötése a BKV központi diszpécser-felügyeletébe — Budapest egyik legforgalmasabb csomópontjában.',
    overview: [
      'Az Etele tér Budapest délnyugati kapuja: metró, vasút, távolsági és helyi buszok, valamint a villamoshálózat találkozási pontja, naponta több százezer utassal. Az itt kialakított villamos-végállomás megbízható, folyamatos egyenáramú tápellátást és teljes távfelügyeletet kívánt.',
      'A Debaru a projekt teljes villamos- és energetikai gerincét kivitelezte: az egyenirányító alállomástól a végállomás betáplálásán át a diszpécserközponti integrációig — egyetlen felelős kivitelezőként, a napi menetrend fenntartása mellett.',
    ],
    scope: [
      'Egyenirányító (áramátalakító) alállomás építése 600 V DC táplálásra',
      'A végállomás teljes erős- és gyengeáramú kiépítése',
      'Táv- és helyi vezérlésű szakaszolók telepítése',
      'Védelmi, mérési és földelési rendszer kiépítése',
      'Bekötés a BKV központi diszpécser-felügyeletébe',
      'Üzembe helyezés és dokumentált átadás',
    ],
    sections: [
      { eyebrow: 'A kihívás', title: 'Megbízható tápellátás egy forgalmas csomópontban', paragraphs: [
        'Az új villamos-végállomás stabil egyenáramú tápellátást és folyamatos távfelügyeletet igényelt — mindezt a napi menetrend szerinti forgalom fenntartása mellett. A csúcsidei járatsűrűség jelentős és ingadozó terhelést ró a táphálózatra, amit a rendszernek biztonsággal kellett kezelnie.',
        'A helyszín szűkössége és a folyamatos utasforgalom miatt a kivitelezést pontosan ütemezni kellett: a munkavégzés egyetlen napra sem állíthatta le a villamosközlekedést.',
      ] },
      { eyebrow: 'A megoldás', title: 'Áramátalakító, végállomás és diszpécser egy rendszerben', paragraphs: [
        'Új áramátalakító (egyenirányító) alállomást építettünk a felsővezeték 600 V-os egyenáramú táplálásához, és kiépítettük a végállomás teljes villamos rendszerét — a betáplálástól a szakaszolókon át a védelmekig.',
        'A teljes energetikát bekötöttük a BKV diszpécserközpontjába, ahol a diszpécserek valós időben látják a feszültségszintet, a terhelést és a riasztásokat — egyetlen felületről, több telephely felett, távolról is beavatkozva.',
      ] },
      { eyebrow: 'Az eredmény', title: 'Stabil, távfelügyelt üzem', paragraphs: [
        'A végállomás azóta a csúcsidei járatsűrűséget is biztonságosan kiszolgálja, a diszpécserek pedig központilag felügyelik és kezelik a rendszert. A kivitelezés a napi forgalom fennakadása nélkül zajlott.',
        'A távfelügyeletnek köszönhetően a hibák már azok jelentkezésekor láthatók, a beavatkozás pedig sok esetben helyszíni kiszállás nélkül megoldható.',
      ] },
    ],
    process: [
      { n: '01', title: 'Felmérés és tervezés', desc: 'Helyszíni felmérés, terhelésszámítás és a teljes villamos terv elkészítése.' },
      { n: '02', title: 'Alállomás építése', desc: 'Az egyenirányító alállomás és a betáplálás kivitelezése, védelmekkel.' },
      { n: '03', title: 'Diszpécser-integráció', desc: 'A rendszer bekötése és jelzéseinek megjelenítése a központban.' },
      { n: '04', title: 'Üzembe helyezés', desc: 'Bevizsgálás, próbaüzem és dokumentált átadás, forgalom mellett.' },
    ],
    highlights: [
      { title: 'Egyenirányító alállomás', desc: '600 V DC táplálás a felsővezeték-hálózathoz, szabvány szerinti védelmekkel.' },
      { title: 'Teljes végállomás', desc: 'A végállomás komplett erős- és gyengeáramú villamos kiépítése.' },
      { title: 'Diszpécser-integráció', desc: 'Valós idejű feszültség-, terhelés- és riasztásfelügyelet a központból.' },
      { title: 'Távvezérelt szakaszolók', desc: 'A hálózat szakaszai távolról is ki- és bekapcsolhatók.' },
      { title: 'Védelem és mérés', desc: 'Túláram-, zárlat- és földzárlatvédelem hiteles méréssel.' },
      { title: 'Forgalom melletti kivitelezés', desc: 'Ütemezett munkavégzés a menetrend fennakadása nélkül.' },
    ],
    tech: ['600 V DC vontatási táplálás', '12-impulzusos egyenirányító', 'SIL 2 biztonsági szint', 'IEC 61850 kommunikáció', 'Távvezérelt szakaszolók', 'N+1 redundáns felügyelet'],
    outcome: [
      'Csúcsidei járatsűrűség biztonságos kiszolgálása',
      'Központi, valós idejű távfelügyelet és beavatkozás',
      'Gyorsabb hibafelismerés, kevesebb helyszíni kiszállás',
      'Nulla forgalomkiesés a kivitelezés alatt',
    ],
    facts: [
      { label: 'Megrendelő', value: 'BKV Zrt.' },
      { label: 'Helyszín', value: 'Budapest, Etele tér' },
      { label: 'Szolgáltatás', value: 'Energetika · Közlekedés · SCADA' },
      { label: 'Feladat', value: 'Áramátalakító · Végállomás · Diszpécser' },
    ],
    stats: [
      { to: 600, suffix: ' V', label: 'egyenáramú felsővezeték' },
      { to: 1, label: 'új áramátalakító alállomás' },
      { to: 24, suffix: '/7', label: 'diszpécser-felügyelet' },
      { to: 0, label: 'nap forgalomkiesés' },
    ],
  },
  {
    slug: '1-es-villamos', cat: 'kozlekedes', tag: 'Közlekedés',
    title: '1-es villamos — energiaellátás korszerűsítés',
    desc: 'Felsővezeték-hálózat és két új egyenirányító alállomás a teljes vonalon, üzemszünet nélkül.',
    metric: '18%', metricLabel: 'energia-megtakarítás', placeholder: 'Villamos vonal / felsővezeték',
    lede: 'A vonal teljes energiaellátásának korszerűsítése: felsővezeték-hálózat felújítása és két új egyenirányító alállomás építése — a napi villamosforgalom fenntartása mellett.',
    overview: [
      'A vonal energiaellátása évtizedek óta üzemelt, és elérte élettartama végét: nőttek a hálózati veszteségek, a csúcsidei terhelésnél pedig feszültségesések jelentkeztek. A cél egy korszerű, hatékonyabb és hosszú távra méretezett táprendszer volt.',
      'A korszerűsítést úgy terveztük és ütemeztük, hogy a villamosforgalom egyetlen napra se álljon le — a munkálatok szakaszosan, a menetrendhez igazítva folytak.',
    ],
    scope: [
      'Két új egyenirányító alállomás építése a vonal mentén',
      'A felsővezeték-hálózat szakaszos felújítása',
      'Korszerű szakaszoló- és védelmi rendszer telepítése',
      'Betáplálási pontok és kábelhálózat kiépítése',
      'Üzembe helyezés forgalom melletti ütemezéssel',
    ],
    sections: [
      { eyebrow: 'A kihívás', title: 'Öregedő táphálózat, folyamatos forgalom', paragraphs: [
        'A vonal eredeti energiaellátása elérte élettartama végét: nőttek a veszteségek, és egyre gyakoribbá váltak a feszültségesések a csúcsidei terhelésnél.',
        'A korszerűsítést úgy kellett megoldani, hogy a villamosforgalom egyetlen napra se álljon le, és a lakosságot a lehető legkevésbé zavarja a munkavégzés.',
      ] },
      { eyebrow: 'A megoldás', title: 'Két új alállomás és felújított felsővezeték', paragraphs: [
        'Két új egyenirányító alállomást építettünk a vonal mentén, és szakaszosan felújítottuk a felsővezeték-hálózatot. Az ütemezést a menetrendhez igazítottuk, így a munkálatok üzemszünet nélkül folytak.',
        'A korszerű egyenirányítók magasabb hatásfokkal dolgoznak, és a szakaszolás is finomabb lett — ez csökkenti a veszteséget és javítja a feszültségstabilitást.',
      ] },
      { eyebrow: 'Az eredmény', title: 'Alacsonyabb veszteség, stabilabb feszültség', paragraphs: [
        'A megújult táplálás mintegy 18%-os energia-megtakarítást hozott, és megszűntek a csúcsidei feszültségesések.',
        'A vonal így hosszú távra felkészült a sűrűbb járatkiosztásra is, a korszerűbb védelmek pedig a biztonságot is növelik.',
      ] },
    ],
    process: [
      { n: '01', title: 'Hálózati felmérés', desc: 'A meglévő táphálózat és a veszteségek felmérése, terhelésszámítás.' },
      { n: '02', title: 'Alállomások építése', desc: 'Két korszerű egyenirányító alállomás kivitelezése.' },
      { n: '03', title: 'Felsővezeték-felújítás', desc: 'Szakaszos csere és új szakaszolás a forgalom fenntartásával.' },
      { n: '04', title: 'Üzembe helyezés', desc: 'Mérések, próbaüzem és átadás, üzemszünet nélkül.' },
    ],
    highlights: [
      { title: 'Egyenirányító alállomások', desc: 'Két korszerű, magas hatásfokú alállomás a vonal egyenletes táplálásáért.' },
      { title: 'Felsővezeték-felújítás', desc: 'Szakaszos csere a folyamatos forgalom fenntartása mellett.' },
      { title: 'Finomabb szakaszolás', desc: 'Rugalmasabb védelmi és szakaszoló kialakítás a feszültségstabilitásért.' },
      { title: 'Alacsonyabb veszteség', desc: 'Korszerű berendezések, mérhetően kisebb hálózati veszteséggel.' },
    ],
    tech: ['600 V DC vontatási táplálás', '2 új egyenirányító alállomás', 'Távvezérelt szakaszolók', 'Korszerű túláram- és zárlatvédelem', '~18% energia-megtakarítás'],
    outcome: [
      'Mintegy 18% energia-megtakarítás',
      'Megszűnt csúcsidei feszültségesések',
      'Felkészülés a sűrűbb járatkiosztásra',
      'Nulla nap üzemszünet a kivitelezés alatt',
    ],
    facts: [
      { label: 'Ágazat', value: 'Városi közlekedés' },
      { label: 'Szolgáltatás', value: 'Energetika · Közlekedés' },
      { label: 'Feladat', value: 'Felsővezeték · 2 alállomás' },
      { label: 'Kivitelezés', value: 'Üzemszünet nélkül' },
    ],
    stats: [
      { to: 18, suffix: ' %', label: 'energia-megtakarítás' },
      { to: 2, label: 'új egyenirányító alállomás' },
      { to: 0, label: 'nap üzemszünet' },
    ],
  },
  {
    slug: 'elelmiszeripari-csomagolosor', cat: 'automatizalas', tag: 'Automatizálás',
    title: 'Élelmiszeripari csomagolósor integráció',
    desc: 'Nyolc gépegység egységes PLC-vezérlés alá vonása és központi SCADA-felügyelet kiépítése.',
    metric: '8', metricLabel: 'gépegység egy vezérlés alatt', placeholder: 'Gyártósor',
    lede: 'Nyolc, addig különálló gépegység egységes PLC-vezérlés alá vonása és központi SCADA-felügyelet kiépítése — egy folyamatosan üzemelő élelmiszeripari csomagolósoron.',
    overview: [
      'A megrendelő csomagolósora nyolc, egymástól függetlenül vezérelt gépegységből állt, eltérő kezelőfelületekkel. Az átállások lassúak voltak, a hibák forrását pedig nehéz volt azonosítani, mert nem volt közös, valós idejű adatkép a sorról.',
      'A Debaru a nyolc gépet egyetlen, összehangolt vezérlés alá vonta, és központi SCADA-felügyeletet épített — az élelmiszeripari higiéniai és nyomonkövetési igényeket is figyelembe véve.',
    ],
    scope: [
      'A nyolc gépegység egységes PLC-architektúrába illesztése',
      'Központi SCADA-felület kiépítése a teljes sorra',
      'Receptkezelés és gyors termékváltás megvalósítása',
      'Valós idejű darabszám-, állapot- és hibakijelzés',
      'Historikus adatnaplózás és riportálás',
    ],
    sections: [
      { eyebrow: 'A kihívás', title: 'Nyolc gép, nyolc külön vezérlés', paragraphs: [
        'A csomagolósor gépei külön szigetekként működtek, eltérő vezérlésekkel és kezelőfelületekkel. Az átállások lassúak voltak, a kezelőknek több felületet kellett párhuzamosan figyelniük.',
        'Közös adatkép híján a hibák forrását nehéz volt azonosítani, a karbantartás pedig inkább reaktív, mint tervezett volt.',
      ] },
      { eyebrow: 'A megoldás', title: 'Egységes PLC-vezérlés és központi felügyelet', paragraphs: [
        'A nyolc gépegységet egyetlen, összehangolt PLC-architektúra alá vontuk, és központi SCADA-felületet építettünk a teljes sor felügyeletére. A receptváltás és az átállás így néhány gombnyomással megoldható.',
        'A soron valós idejű darabszám-, állapot- és hibakijelzés fut, historikus naplózással — a karbantartás így a tényleges adatokra támaszkodhat.',
      ] },
      { eyebrow: 'Az eredmény', title: 'Gyorsabb átállás, kevesebb állásidő', paragraphs: [
        'Az egységes vezérléssel jelentősen csökkent az átállási idő, és a hibák forrása azonnal láthatóvá vált a SCADA-felületen.',
        'A sor rendelkezésre állása mérhetően javult, a kezelők pedig egyetlen, áttekinthető felületről irányítják a teljes csomagolási folyamatot.',
      ] },
    ],
    process: [
      { n: '01', title: 'Felmérés', desc: 'A meglévő gépek vezérléseinek és jeleinek feltérképezése.' },
      { n: '02', title: 'Vezérlés-egységesítés', desc: 'Közös PLC-logika és adatkapcsolatok kialakítása.' },
      { n: '03', title: 'SCADA-fejlesztés', desc: 'Központi felügyeleti felület, receptkezelés és riportok.' },
      { n: '04', title: 'Betanítás és átadás', desc: 'Üzembe helyezés és a kezelők betanítása.' },
    ],
    highlights: [
      { title: 'PLC-integráció', desc: 'Nyolc gépegység összehangolása egyetlen, karbantartható vezérlési logikába.' },
      { title: 'Központi SCADA', desc: 'A teljes sor darabszáma, állapota és hibái egyetlen felületen.' },
      { title: 'Gyors receptváltás', desc: 'Termékváltás és átállás néhány lépésben, kezelői hibalehetőség nélkül.' },
      { title: 'Adatnaplózás', desc: 'Historikus adatok és riportok a tervezhető karbantartáshoz.' },
    ],
    tech: ['Egységes PLC-architektúra', 'Központi SCADA-felügyelet', 'Receptkezelés', 'Valós idejű OEE-adatok', 'Historikus adatnaplózás'],
    outcome: [
      'Jelentősen rövidebb átállási idő',
      'Azonnal látható hibaforrás a SCADA-n',
      'Mérhetően jobb rendelkezésre állás',
      'Egy közös felület a teljes sorra',
    ],
    facts: [
      { label: 'Ágazat', value: 'Élelmiszeripar' },
      { label: 'Szolgáltatás', value: 'Automatizálás · SCADA' },
      { label: 'Feladat', value: 'Sorintegráció · Felügyelet' },
      { label: 'Platform', value: 'PLC + központi SCADA' },
    ],
    stats: [
      { to: 8, label: 'gépegység egy vezérlés alatt' },
      { to: 1, label: 'közös SCADA-felület' },
      { to: 24, suffix: '/7', label: 'valós idejű felügyelet' },
    ],
  },
  {
    slug: 'logisztikai-park-betaplalas', cat: 'energetika', tag: 'Energetika',
    title: 'Logisztikai park betáplálás',
    desc: 'Két transzformátorállomás és a teljes kisfeszültségű elosztás kiépítése egy új logisztikai parkban.',
    metric: '2×1000', metricLabel: 'kVA állomás', placeholder: 'Transzformátor',
    lede: 'Egy új logisztikai park teljes energetikai gerince: két transzformátorállomás és a hozzájuk tartozó kisfeszültségű fő- és alelosztás — bővíthetőségre tervezve.',
    overview: [
      'A park több nagy csarnokot, hűtést, világítást és elektromos töltőinfrastruktúrát lát el. A betáplálást úgy kellett méretezni, hogy a jelenlegi igényt biztonsággal kiszolgálja, de a későbbi bővítéseket is befogadja.',
      'A Debaru a park teljes energetikai gerincét kivitelezte: a középfeszültségű csatlakozástól a transzformátorállomásokon át a csarnokok végponti elosztásáig, energetikai monitoringgal kiegészítve.',
    ],
    scope: [
      'Két 1000 kVA-es transzformátorállomás építése',
      'Középfeszültségű csatlakozás kiépítése',
      'Kisfeszültségű fő- és alelosztók a csarnokokig',
      'Tartalék betáplálási pontok kialakítása',
      'Területenkénti energetikai mérés és monitoring',
    ],
    sections: [
      { eyebrow: 'A kihívás', title: 'Nagy csarnokterület, növekvő igény', paragraphs: [
        'A park több nagy csarnokot, hűtést és töltőinfrastruktúrát lát el, jelentős és növekvő teljesítményigénnyel.',
        'A betáplálást úgy kellett méretezni, hogy a jelenlegi igényt biztonsággal kiszolgálja, de a későbbi bővítéseket is befogadja, újabb nagyberuházás nélkül.',
      ] },
      { eyebrow: 'A megoldás', title: 'Két állomás, tartalékkal méretezve', paragraphs: [
        'Két 1000 kVA-es transzformátorállomást építettünk, és kiépítettük a teljes kisfeszültségű fő- és alelosztást a csarnokokig. A kialakítás tartalékkal és bővítési pontokkal készült.',
        'A fő elosztók mérésekkel és energetikai monitoringgal egészültek ki, így a park üzemeltetője követni tudja az egyes területek fogyasztását.',
      ] },
      { eyebrow: 'Az eredmény', title: 'Stabil ellátás, tervezhető bővítés', paragraphs: [
        'A park teljes területe megbízható betáplálást kapott, a monitoring pedig átláthatóvá tette a fogyasztást.',
        'A tartalékkapacitás miatt a következő bővítés újabb állomás építése nélkül megoldható.',
      ] },
    ],
    process: [
      { n: '01', title: 'Teljesítménytervezés', desc: 'Igényfelmérés és a betáplálás méretezése bővítési tartalékkal.' },
      { n: '02', title: 'Állomásépítés', desc: 'Két transzformátorállomás és a KÖF-csatlakozás kivitelezése.' },
      { n: '03', title: 'KIF-elosztás', desc: 'Fő- és alelosztók, kábelhálózat a csarnokokig.' },
      { n: '04', title: 'Mérés és átadás', desc: 'Energetikai monitoring beüzemelése és dokumentált átadás.' },
    ],
    highlights: [
      { title: 'Transzformátorállomások', desc: 'Két 1000 kVA-es állomás, szabvány szerinti védelemmel és mérésekkel.' },
      { title: 'Kisfeszültségű elosztás', desc: 'Fő- és alelosztók a csarnokokig, tartalék betáplálási pontokkal.' },
      { title: 'Bővíthető kialakítás', desc: 'Tartalékkapacitás a jövőbeli fejlesztésekhez, új állomás nélkül.' },
      { title: 'Energetikai monitoring', desc: 'Területenkénti fogyasztásmérés az átlátható üzemeltetésért.' },
    ],
    tech: ['2 × 1000 kVA transzformátor', 'KÖF/KIF kialakítás', 'Fő- és alelosztók', 'Tartalék betáplálási pontok', 'Területi energiamérés'],
    outcome: [
      'A teljes csarnokterület megbízható ellátása',
      'Átlátható, területenkénti fogyasztásmérés',
      'Bővítés újabb állomás építése nélkül',
      'Szabvány szerinti, dokumentált kivitelezés',
    ],
    facts: [
      { label: 'Ágazat', value: 'Logisztika · Ipar' },
      { label: 'Szolgáltatás', value: 'Villamos energetika' },
      { label: 'Feladat', value: '2 állomás · KIF-elosztás' },
      { label: 'Teljesítmény', value: '2 × 1000 kVA' },
    ],
    stats: [
      { to: 2000, suffix: ' kVA', label: 'összteljesítmény' },
      { to: 2, label: 'transzformátorállomás' },
      { to: 100, suffix: ' %', label: 'lefedett csarnokterület' },
    ],
  },
  {
    slug: 'vezerloszekreny-sorozat', cat: 'szekreny', tag: 'Kapcsolószekrény',
    title: 'Vezérlőszekrény-sorozat gyártás',
    desc: 'Negyvenkét egyedi vezérlőszekrény tervezése, gyártása és bevizsgálása hat hét alatt, teljes EPLAN-dokumentációval.',
    metric: '42 db', metricLabel: '6 hét alatt', placeholder: 'Kapcsolószekrény',
    lede: 'Negyvenkét egyedi vezérlőszekrény tervezése, szerelése és gyári bevizsgálása szoros határidőre — egységes kialakítással és teljes EPLAN-dokumentációval.',
    overview: [
      'A megrendelő egy nagyobb ütemű projekthez rövid időn belül több tucat, azonos felépítésű vezérlőszekrényt igényelt — egységes minőségben, hogy a helyszíni szerelés gyors és hibamentes legyen.',
      'A Debaru saját, 1 200 m²-es gyártóműhelyében sorozatgyártási elrendezésben szerelte a szekrényeket, teljes EPLAN-dokumentációval és gyári bevizsgálással, a megadott határidőre.',
    ],
    scope: [
      '42 db egyedi vezérlőszekrény tervezése és szerelése',
      'Teljes EPLAN kapcsolási és kábelrajz',
      'Egységes bekötési rend és jelölés',
      'Gyári bevizsgálás és tesztjegyzőkönyv darabonként',
      'Csomagolás és ütemezett kiszállítás',
    ],
    sections: [
      { eyebrow: 'A kihívás', title: 'Nagy darabszám, szoros határidő', paragraphs: [
        'A megrendelő egy nagyobb ütemű projekthez rövid időn belül több tucat, azonos felépítésű vezérlőszekrényt igényelt.',
        'A minőségnek egységesnek kellett lennie, hogy a helyszíni szerelés gyors és hibamentes legyen — a szoros határidő mellett is.',
      ] },
      { eyebrow: 'A megoldás', title: 'Sorozatgyártás saját műhelyben', paragraphs: [
        'A szekrényeket EPLAN-alapon terveztük, majd saját műhelyünkben, sorozatgyártási elrendezésben szereltük. Az egységes kábelrajz és bekötési rend miatt minden darab azonos, jól dokumentált.',
        'A kiszállítás előtt minden szekrényt gyárilag bevizsgáltunk és jegyzőkönyveztünk, így a helyszínen csak a bekötés és üzembe helyezés maradt.',
      ] },
      { eyebrow: 'Az eredmény', title: '42 szekrény, hat hét, azonos minőség', paragraphs: [
        'A teljes sorozat hat hét alatt, egységes minőségben elkészült és bevizsgálva került kiszállításra.',
        'A helyszíni szerelés a felkészített daraboknak köszönhetően gyorsan és hibamentesen haladt.',
      ] },
    ],
    process: [
      { n: '01', title: 'EPLAN-tervezés', desc: 'Egységes kapcsolási és kábelrajz a teljes sorozathoz.' },
      { n: '02', title: 'Sorozatszerelés', desc: 'Azonos elrendezésű szerelés a saját gyártóműhelyben.' },
      { n: '03', title: 'Bevizsgálás', desc: 'Minden darab tesztelése és jegyzőkönyvezése.' },
      { n: '04', title: 'Kiszállítás', desc: 'Ütemezett, dokumentált szállítás a helyszínre.' },
    ],
    highlights: [
      { title: 'EPLAN-alapú tervezés', desc: 'Egységes kapcsolási és kábelrajz minden szekrényhez.' },
      { title: 'Sorozatgyártás', desc: 'Azonos felépítés és bekötési rend a gyors helyszíni szereléshez.' },
      { title: 'Saját gyártóműhely', desc: '1 200 m²-es műhely, kézben tartott minőséggel és határidővel.' },
      { title: 'Gyári bevizsgálás', desc: 'Minden darab tesztelve és jegyzőkönyvezve a kiszállítás előtt.' },
    ],
    tech: ['42 db vezérlőszekrény', 'Teljes EPLAN-dokumentáció', 'Egységes bekötési rend', 'Gyári tesztjegyzőkönyv', '6 hét átfutási idő'],
    outcome: [
      '42 szekrény hat hét alatt, egységes minőségben',
      '100% gyárilag bevizsgálva és dokumentálva',
      'Gyors, hibamentes helyszíni szerelés',
      'Kiszámítható határidő és minőség',
    ],
    facts: [
      { label: 'Ágazat', value: 'Ipari kivitelezés' },
      { label: 'Szolgáltatás', value: 'Kapcsolószekrény-gyártás' },
      { label: 'Feladat', value: '42 db vezérlőszekrény' },
      { label: 'Dokumentáció', value: 'Teljes EPLAN + tesztjegyzőkönyv' },
    ],
    stats: [
      { to: 42, suffix: ' db', label: 'legyártott szekrény' },
      { to: 6, label: 'hét átfutási idő' },
      { to: 100, suffix: ' %', label: 'gyárilag bevizsgálva' },
    ],
  },
  {
    slug: 'regionalis-vizmu-scada', cat: 'automatizalas', tag: 'Automatizálás',
    title: 'Regionális vízmű SCADA',
    desc: 'Tizennégy telephely bekötése egyetlen SCADA-felületre — valós idejű felügyelettel és riasztáskezeléssel.',
    metric: '14', metricLabel: 'telephely egy felületen', placeholder: 'Vízmű SCADA',
    lede: 'Tizennégy vízmű-telephely egyesítése egyetlen, központi SCADA-felületen: valós idejű adatgyűjtés, riasztáskezelés és távfelügyelet egy régió teljes ellátórendszerére.',
    overview: [
      'A régió vízellátását tizennégy telephely biztosítja — kutak, szivattyúk, tározók és nyomásfokozók —, amelyek korábban egymástól függetlenül működtek. Az üzemeltetőknek nem volt közös, valós idejű rálátásuk a hálózatra.',
      'A Debaru a telephelyeket egyetlen, biztonságos SCADA-rendszerbe kötötte, historikus adatnaplózással és távoli hozzáféréssel — így a teljes régió egyetlen felületről felügyelhető.',
    ],
    scope: [
      'A 14 telephely mérési és vezérlési jeleinek bekötése',
      'Központi SCADA-felület és folyamatábrák',
      'Prioritásos riasztáskezelés és eseménynapló',
      'Historikus adatnaplózás és riportálás',
      'Biztonságos távoli hozzáférés az ügyeletnek',
    ],
    sections: [
      { eyebrow: 'A kihívás', title: 'Szétszórt telephelyek, közös felügyelet nélkül', paragraphs: [
        'A régió vízellátását tizennégy telephely biztosítja, amelyek korábban egymástól függetlenül működtek. Az üzemeltetőknek nem volt közös rálátásuk a szivattyúkra, tározókra és a hálózat állapotára.',
        'A beavatkozás gyakran csak helyszíni kiszállással volt lehetséges, ami lassította a reagálást és növelte az üzemeltetési költséget.',
      ] },
      { eyebrow: 'A megoldás', title: 'Egy központi SCADA, minden telephelyre', paragraphs: [
        'A telephelyeket egyetlen SCADA-rendszerbe kötöttük, ahol valós időben látszik minden szivattyú, tározószint és mérési adat. A prioritásos riasztások azonnal jeleznek, ha beavatkozásra van szükség.',
        'A biztonságos távoli hozzáférés miatt az ügyeletes szakember távolról is felügyelheti és kezelheti a rendszert, historikus adatnaplózással és riportokkal a háttérben.',
      ] },
      { eyebrow: 'Az eredmény', title: 'Átlátható üzem, gyorsabb reagálás', paragraphs: [
        'A tizennégy telephely egyetlen felületről felügyelhető, a hibákra pedig lényegesen gyorsabb a reagálás.',
        'A központi adatképnek köszönhetően az üzemeltetés tervezhetőbbé és költséghatékonyabbá vált.',
      ] },
    ],
    process: [
      { n: '01', title: 'Telephely-felmérés', desc: 'A 14 telephely jeleinek és vezérléseinek feltérképezése.' },
      { n: '02', title: 'Kommunikáció', desc: 'Biztonságos adatkapcsolat kiépítése a központ felé.' },
      { n: '03', title: 'SCADA-fejlesztés', desc: 'Folyamatábrák, riasztáskezelés és riportok.' },
      { n: '04', title: 'Éles indítás', desc: 'Beüzemelés, tesztelés és az ügyelet betanítása.' },
    ],
    highlights: [
      { title: 'Központi vezérlőpult', desc: 'A teljes régió szivattyúi és tározói egyetlen áttekinthető felületen.' },
      { title: 'Riasztáskezelés', desc: 'Prioritásos riasztások és eseménynapló a gyors beavatkozásért.' },
      { title: 'Biztonságos távfelügyelet', desc: 'Távoli hozzáférés az ügyeletes szakembernek, historikus naplózással.' },
      { title: 'Adatnaplózás és riportok', desc: 'Historikus adatok a tervezhető üzemeltetéshez és elemzéshez.' },
    ],
    tech: ['14 telephely integrációja', 'Központi SCADA-szerver', 'Prioritásos riasztáskezelés', 'Historikus adatnaplózás', 'Biztonságos távoli hozzáférés'],
    outcome: [
      '14 telephely egyetlen felületről felügyelve',
      'Lényegesen gyorsabb reagálás a hibákra',
      'Kevesebb helyszíni kiszállás',
      'Tervezhetőbb, költséghatékonyabb üzemeltetés',
    ],
    facts: [
      { label: 'Ágazat', value: 'Vízközmű' },
      { label: 'Szolgáltatás', value: 'SCADA · Automatizálás' },
      { label: 'Feladat', value: '14 telephely integráció' },
      { label: 'Hozzáférés', value: 'Biztonságos távfelügyelet' },
    ],
    stats: [
      { to: 14, label: 'telephely egy felületen' },
      { to: 24, suffix: '/7', label: 'valós idejű felügyelet' },
      { to: 1, label: 'központi vezérlőpult' },
    ],
  },
  {
    slug: 'elektromosbusz-depo-toltes', cat: 'kozlekedes', tag: 'Közlekedés',
    title: 'Elektromosbusz-depó töltés',
    desc: 'Huszonnégy töltőpont, a betáplálás és a töltésvezérlés kiépítése egy elektromosbusz-depóban.',
    metric: '24', metricLabel: 'töltőpont', placeholder: 'Busz depó',
    lede: 'Egy elektromosbusz-depó teljes töltőinfrastruktúrája: huszonnégy töltőpont, a szükséges betáplálás és az éjszakai töltést optimalizáló töltésvezérlés — a menetrend biztonságos kiszolgálásáért.',
    overview: [
      'Egy elektromos buszflotta éjszaka, viszonylag szűk időablakban töltődik. Ha minden jármű egyszerre venné fel a maximális teljesítményt, az túlterhelné a betáplálást — a töltést tehát okosan kellett elosztani.',
      'A Debaru kiépítette a depó megerősített betáplálását, a huszonnégy töltőpontot és egy intelligens töltésvezérlést, amely a rendelkezésre álló teljesítményt a járművek indulási rendjéhez igazítja.',
    ],
    scope: [
      'A depó megerősített betáplálásának kiépítése',
      '24 töltőpont telepítése és bekötése',
      'Intelligens töltésvezérlő (terheléselosztó) rendszer',
      'Menetrendhez igazított töltésütemezés',
      'Felügyeleti felület a töltöttségről és állapotról',
    ],
    sections: [
      { eyebrow: 'A kihívás', title: 'Egyszerre töltődő flotta, korlátos teljesítmény', paragraphs: [
        'Egy elektromos buszflotta éjszaka, viszonylag szűk időablakban töltődik.',
        'Ha minden jármű egyszerre venné fel a maximális teljesítményt, az túlterhelné a betáplálást — a töltést tehát okosan, a betáplálás túlméretezése nélkül kellett elosztani.',
      ] },
      { eyebrow: 'A megoldás', title: 'Betáplálás és intelligens töltésvezérlés', paragraphs: [
        'Kiépítettük a depó megerősített betáplálását és a huszonnégy töltőpontot, majd egy töltésvezérlő logikát, amely a rendelkezésre álló teljesítményt a járművek indulási rendjéhez igazítva osztja el.',
        'A rendszer figyeli az egyes járművek töltöttségét és indulási idejét, így reggelre minden busz a szükséges energiával áll ki — a betáplálás túlterhelése nélkül.',
      ] },
      { eyebrow: 'Az eredmény', title: 'Minden busz időben, feltöltve', paragraphs: [
        'A depó megbízhatóan kiszolgálja a reggeli kiállást: a járművek időben és a menetrendhez szükséges töltöttséggel indulnak.',
        'Az intelligens elosztás miatt nem kellett túlméretezni a betáplálást, ami a beruházási és üzemeltetési költséget is csökkenti.',
      ] },
    ],
    process: [
      { n: '01', title: 'Igényfelmérés', desc: 'A flotta töltési igénye és az indulási rend elemzése.' },
      { n: '02', title: 'Betáplálás', desc: 'A depó megerősített energiaellátásának kiépítése.' },
      { n: '03', title: 'Töltőpontok', desc: '24 töltőpont telepítése és bekötése.' },
      { n: '04', title: 'Töltésvezérlés', desc: 'Az intelligens terheléselosztó beüzemelése és hangolása.' },
    ],
    highlights: [
      { title: 'Depói betáplálás', desc: 'Megerősített energiaellátás a teljes töltőpark kiszolgálásához.' },
      { title: '24 töltőpont', desc: 'A flotta méretéhez igazított, bővíthető töltőinfrastruktúra.' },
      { title: 'Intelligens vezérlés', desc: 'A töltés az indulási rendhez igazodik, a betáplálás túlterhelése nélkül.' },
      { title: 'Felügyeleti felület', desc: 'A járművek töltöttsége és a töltők állapota egy helyen.' },
    ],
    tech: ['24 töltőpont', 'Intelligens terheléselosztás', 'Menetrendhez igazított ütemezés', 'Megerősített depói betáplálás', 'Központi töltésfelügyelet'],
    outcome: [
      'Minden busz időben, feltöltve áll ki',
      'A betáplálás túlméretezése nélkül',
      'Alacsonyabb beruházási és üzemi költség',
      'Átlátható töltésfelügyelet',
    ],
    facts: [
      { label: 'Ágazat', value: 'Városi közlekedés' },
      { label: 'Szolgáltatás', value: 'Közlekedés · Energetika' },
      { label: 'Feladat', value: 'Betáplálás · 24 töltőpont' },
      { label: 'Vezérlés', value: 'Intelligens töltéselosztás' },
    ],
    stats: [
      { to: 24, label: 'töltőpont' },
      { to: 1, label: 'központi töltésvezérlés' },
      { to: 100, suffix: ' %', label: 'reggeli kiállás időben' },
    ],
  },
  {
    slug: 'ipari-napelempark', cat: 'energetika', tag: 'Energetika',
    title: 'Ipari napelempark csatlakozás',
    desc: '1,2 MWp napelempark hálózati csatlakozása és betáplálása, védelmi és mérési rendszerrel.',
    metric: '1,2', metricLabel: 'MWp betáplálás', placeholder: 'Napelem',
    lede: 'Egy 1,2 MWp-os ipari napelempark hálózati csatlakozásának és betáplálásának kivitelezése — a szükséges védelmi, mérési és szabályozási rendszerrel együtt.',
    overview: [
      'A telephely tetőire és területére telepített napelempark termelését szabályosan és biztonságosan kellett a hálózatra juttatni — a hálózati előírások, a védelmek és a hiteles elszámolási mérés maradéktalan betartásával.',
      'A Debaru kiépítette a park hálózati csatlakozását, a védelmi és mérési rendszert, valamint a betáplálás-szabályozást, a telephely saját fogyasztásának figyelembevételével.',
    ],
    scope: [
      'Hálózati csatlakozási pont kiépítése',
      'Védelmi berendezések telepítése',
      'Hiteles elszámolási mérés kialakítása',
      'Betáplálás-szabályozás a hálózati előírások szerint',
      'Saját fogyasztás és betáplálás egyensúlyának figyelése',
    ],
    sections: [
      { eyebrow: 'A kihívás', title: 'Termelt energia a hálózatra, szabályosan', paragraphs: [
        'A telephely tetőire és területére telepített napelempark termelését szabályosan és biztonságosan kellett a hálózatra juttatni.',
        'A hálózati előírásokat, a védelmeket és a hiteles mérést maradéktalanul be kellett tartani, a park és a hálózat kölcsönös védelme mellett.',
      ] },
      { eyebrow: 'A megoldás', title: 'Csatlakozás, védelem és mérés egy kézben', paragraphs: [
        'Kiépítettük a park hálózati csatlakozását, a szükséges védelmi berendezéseket és a hiteles elszámolási mérést. A rendszer a hálózati követelményeknek megfelelően szabályozza a betáplálást.',
        'A telephely saját fogyasztása és a betáplálás egyensúlyát is figyeljük, így a megtermelt energia a lehető leghatékonyabban hasznosul.',
      ] },
      { eyebrow: 'Az eredmény', title: 'Kihasznált napenergia, alacsonyabb költség', paragraphs: [
        'A park 1,2 MWp csúcsteljesítménnyel táplál a hálózatra, a telephely energiaköltsége pedig érezhetően csökkent.',
        'A rendszer szabvány szerint, felügyelten üzemel, a mérések pedig átláthatóvá teszik a termelést és a felhasználást.',
      ] },
    ],
    process: [
      { n: '01', title: 'Csatlakozási terv', desc: 'A hálózati csatlakozás és a védelmek megtervezése.' },
      { n: '02', title: 'Kivitelezés', desc: 'A csatlakozási pont, védelem és mérés kiépítése.' },
      { n: '03', title: 'Szabályozás', desc: 'Betáplálás-szabályozás a hálózati előírások szerint.' },
      { n: '04', title: 'Üzembe helyezés', desc: 'Bevizsgálás, mérés-hitelesítés és átadás.' },
    ],
    highlights: [
      { title: 'Hálózati csatlakozás', desc: 'Szabályos betáplálási pont kiépítése a hálózati előírások szerint.' },
      { title: 'Védelmi rendszer', desc: 'A park és a hálózat védelmét biztosító berendezések.' },
      { title: 'Hiteles mérés', desc: 'Elszámolási mérés és betáplálás-szabályozás egy rendszerben.' },
      { title: 'Öntfogyasztás-optimalizálás', desc: 'A saját fogyasztás és a betáplálás egyensúlyának figyelése.' },
    ],
    tech: ['1,2 MWp betáplálási csúcs', 'Hálózati csatlakozási pont', 'Védelmi berendezések', 'Hiteles elszámolási mérés', 'Betáplálás-szabályozás'],
    outcome: [
      '1,2 MWp szabályos hálózati betáplálás',
      'Érezhetően alacsonyabb energiaköltség',
      'Szabvány szerinti, felügyelt üzem',
      'Átlátható termelés- és fogyasztásmérés',
    ],
    facts: [
      { label: 'Ágazat', value: 'Ipar · Energetika' },
      { label: 'Szolgáltatás', value: 'Villamos energetika' },
      { label: 'Feladat', value: 'Csatlakozás · Védelem · Mérés' },
      { label: 'Teljesítmény', value: '1,2 MWp' },
    ],
    stats: [
      { to: 1.2, suffix: ' MWp', label: 'betáplálási csúcs' },
      { to: 1, label: 'hálózati csatlakozási pont' },
      { to: 100, suffix: ' %', label: 'szabvány szerinti mérés' },
    ],
  },
  {
    slug: 'hegeszto-robotcella', cat: 'automatizalas', tag: 'Automatizálás',
    title: 'Hegesztő robotcella integráció',
    desc: 'Két hegesztőrobot és a teljes biztonsági rendszer integrációja egy meglévő gyártósorba.',
    metric: '2', metricLabel: 'robot + biztonsági rendszer', placeholder: 'Robotcella',
    lede: 'Két hegesztőrobot integrálása egy meglévő gyártósorba — a cellavezérléssel és a teljes, szabvány szerinti biztonsági rendszerrel együtt, minimális állásidővel.',
    overview: [
      'A megrendelő a kézi hegesztést szerette volna robotcellára váltani a magasabb és egyenletesebb minőségért — úgy, hogy a meglévő sor termelése a lehető legrövidebb ideig álljon.',
      'A Debaru két hegesztőrobotot integrált a sorba, kiépítette a cellavezérlést és a teljes, szabvány szerinti biztonságtechnikát, a meglévő gyártási folyamatba illesztve.',
    ],
    scope: [
      'Két hegesztőrobot beillesztése a gyártósorba',
      'Cellavezérlés és anyagmozgatás összehangolása',
      'Védőkerítés, reteszelt ajtók és fényfüggöny',
      'Vészleállító lánc és biztonsági PLC',
      'Illesztés a meglévő sor vezérlési logikájához',
    ],
    sections: [
      { eyebrow: 'A kihívás', title: 'Robotizálás működő gyártás mellett', paragraphs: [
        'A megrendelő a kézi hegesztést szerette volna robotcellára váltani a magasabb és egyenletesebb minőségért.',
        'Az átállásnak úgy kellett megtörténnie, hogy a meglévő sor termelése a lehető legrövidebb ideig álljon, és a kezelők biztonsága szabvány szerint garantált legyen.',
      ] },
      { eyebrow: 'A megoldás', title: 'Cellavezérlés és teljes biztonságtechnika', paragraphs: [
        'Két hegesztőrobotot integráltunk a sorba, kiépítettük a cellavezérlést és az anyagmozgatás összehangolását. A cellát teljes, szabvány szerinti biztonsági rendszerrel láttuk el: védőkerítés, reteszelt ajtók, fényfüggöny és vészleállító lánc.',
        'A vezérlést a meglévő sor logikájához illesztettük, így a robotcella zökkenőmentesen illeszkedik a gyártási folyamatba.',
      ] },
      { eyebrow: 'Az eredmény', title: 'Egyenletes minőség, biztonságos üzem', paragraphs: [
        'A robotcella egyenletes hegesztési minőséget és nagyobb kapacitást adott, a biztonsági rendszer pedig szabvány szerint védi a kezelőket.',
        'Az átállás minimális állásidővel valósult meg, a gyártás gyorsan visszaállt a megszokott ütemre.',
      ] },
    ],
    process: [
      { n: '01', title: 'Koncepció', desc: 'A cella elrendezésének és a biztonságtechnika megtervezése.' },
      { n: '02', title: 'Integráció', desc: 'A robotok és az anyagmozgatás beillesztése a sorba.' },
      { n: '03', title: 'Biztonságtechnika', desc: 'Védőkerítés, fényfüggöny és vészleállító lánc kiépítése.' },
      { n: '04', title: 'Beüzemelés', desc: 'Programozás, tesztelés és a kezelők betanítása.' },
    ],
    highlights: [
      { title: 'Robotintegráció', desc: 'Két hegesztőrobot beillesztése a meglévő gyártási folyamatba.' },
      { title: 'Cellavezérlés', desc: 'A robotok és az anyagmozgatás összehangolt, karbantartható logikája.' },
      { title: 'Biztonsági rendszer', desc: 'Védőkerítés, fényfüggöny és vészleállító lánc szabvány szerint.' },
      { title: 'Egyenletes minőség', desc: 'Ismételhető, stabil hegesztési minőség és nagyobb kapacitás.' },
    ],
    tech: ['2 hegesztőrobot', 'Összehangolt cellavezérlés', 'Biztonsági PLC', 'Fényfüggöny és reteszelt ajtók', 'Vészleállító lánc'],
    outcome: [
      'Egyenletes, ismételhető hegesztési minőség',
      'Nagyobb gyártási kapacitás',
      'Szabvány szerinti kezelővédelem',
      'Minimális állásidő az átálláskor',
    ],
    facts: [
      { label: 'Ágazat', value: 'Fémipar' },
      { label: 'Szolgáltatás', value: 'Automatizálás · Biztonságtechnika' },
      { label: 'Feladat', value: '2 robot · Cellavezérlés' },
      { label: 'Biztonság', value: 'Szabvány szerinti védelem' },
    ],
    stats: [
      { to: 2, label: 'integrált hegesztőrobot' },
      { to: 1, label: 'összehangolt cellavezérlés' },
      { to: 100, suffix: ' %', label: 'szabvány szerinti védelem' },
    ],
  },
  {
    slug: 'adatkozpont-fo-eloszto', cat: 'szekreny', tag: 'Kapcsolószekrény',
    title: 'Adatközpont fő elosztó',
    desc: 'N+1 redundanciájú fő elosztó tervezése és gyártása egy adatközpont folyamatos ellátásához.',
    metric: 'N+1', metricLabel: 'redundancia', placeholder: 'Elosztószekrény',
    lede: 'Egy adatközpont fő elosztójának tervezése és gyártása N+1 redundanciával — hogy a kritikus terhelés még karbantartás vagy egyetlen ág kiesése esetén is folyamatosan táplálva maradjon.',
    overview: [
      'Egy adatközpont energiaellátása nem állhat le — még karbantartáskor vagy egyetlen betáplálási ág meghibásodásakor sem. A fő elosztónak ezt a folyamatosságot kellett garantálnia.',
      'A Debaru saját műhelyében tervezte és gyártotta a fő elosztót N+1 redundanciával, automatikus átkapcsolással, teljes EPLAN-dokumentációval és gyári bevizsgálással.',
    ],
    scope: [
      'N+1 redundanciájú fő elosztó tervezése',
      'Két független betáplálási ág és automatikus átkapcsolás',
      'Terheléskövető mérések beépítése',
      'Teljes EPLAN-dokumentáció',
      'Gyári bevizsgálás és tesztjegyzőkönyv',
    ],
    sections: [
      { eyebrow: 'A kihívás', title: 'Nulla megengedett kiesés', paragraphs: [
        'Egy adatközpont energiaellátása nem állhat le — még karbantartáskor vagy egyetlen betáplálási ág meghibásodásakor sem.',
        'A fő elosztónak ezt a folyamatosságot kellett garantálnia, miközben a karbantarthatóság és a terhelés átláthatósága is elvárás volt.',
      ] },
      { eyebrow: 'A megoldás', title: 'N+1 redundanciájú fő elosztó', paragraphs: [
        'A fő elosztót N+1 redundanciával terveztük és saját műhelyünkben gyártottuk: a kritikus terhelés két, egymástól független ágról táplálható, automatikus átkapcsolással. A karbantartás így üzem közben, a terhelés kiesése nélkül elvégezhető.',
        'A szekrényhez teljes EPLAN-dokumentáció és gyári bevizsgálás készült, a mérések pedig folyamatosan követhetővé teszik a terhelés eloszlását.',
      ] },
      { eyebrow: 'Az eredmény', title: 'Folyamatos, karbantartható ellátás', paragraphs: [
        'Az adatközpont kritikus terhelése redundáns, folyamatos betáplálást kapott.',
        'A karbantartás üzemzavar nélkül végezhető, a mérések pedig átláthatóvá teszik az energiafelhasználást.',
      ] },
    ],
    process: [
      { n: '01', title: 'Redundancia-terv', desc: 'A betáplálási ágak és az átkapcsolás megtervezése.' },
      { n: '02', title: 'EPLAN-tervezés', desc: 'Teljes kapcsolási és kábelrajz a fő elosztóhoz.' },
      { n: '03', title: 'Gyártás', desc: 'Szerelés a saját műhelyben, terhelésmérésekkel.' },
      { n: '04', title: 'Bevizsgálás', desc: 'Gyári tesztelés, jegyzőkönyvezés és átadás.' },
    ],
    highlights: [
      { title: 'N+1 redundancia', desc: 'Két független ág és automatikus átkapcsolás a folyamatos ellátásért.' },
      { title: 'Üzem közbeni karbantartás', desc: 'A kritikus terhelés kiesése nélkül elvégezhető szerviz.' },
      { title: 'Terheléskövetés', desc: 'Mérések, amelyek átláthatóvá teszik az ágak terhelését.' },
      { title: 'Teljes dokumentáció', desc: 'EPLAN-rajzok, mérések és gyári bevizsgálás minden ponton.' },
    ],
    tech: ['N+1 redundancia', '2 független betáplálási ág', 'Automatikus átkapcsolás', 'Terheléskövető mérés', 'Teljes EPLAN + bevizsgálás'],
    outcome: [
      'Redundáns, folyamatos betáplálás',
      'Üzem közben végezhető karbantartás',
      'Átlátható terheléseloszlás',
      'Dokumentált, bevizsgált minőség',
    ],
    facts: [
      { label: 'Ágazat', value: 'Adatközpont · IT' },
      { label: 'Szolgáltatás', value: 'Kapcsolószekrény · Energetika' },
      { label: 'Feladat', value: 'Fő elosztó · Redundancia' },
      { label: 'Dokumentáció', value: 'Teljes EPLAN + bevizsgálás' },
    ],
    stats: [
      { to: 2, label: 'független betáplálási ág' },
      { to: 0, label: 'megengedett kiesés' },
      { to: 100, suffix: ' %', label: 'karbantarthatóság üzem közben' },
    ],
  },
]

// slug → projekt gyors lekérés (részletoldalhoz).
export const projectBySlug = Object.fromEntries(projects.map((p) => [p.slug, p]))
