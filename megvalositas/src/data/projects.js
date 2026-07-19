// Projektek — egységes forrás. A `slug` egyben a részletoldal útvonala
// (/projektjeink/:slug). Minden projektnek külön, SEO-barát esettanulmány-oldala van.
// A kártya-mezők (tag, metric…) az áttekintő rácshoz, a részlet-mezők
// (lede, sections, facts, stats, highlights) az aloldalhoz kellenek.

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
    sections: [
      { eyebrow: 'A kihívás', title: 'Megbízható tápellátás egy forgalmas csomópontban', paragraphs: [
        'Az Etele tér Budapest egyik legnagyobb közlekedési átszállópontja. Az új villamos-végállomás stabil egyenáramú tápellátást és folyamatos távfelügyeletet igényelt — mindezt a napi menetrend szerinti forgalom fenntartása mellett.',
      ] },
      { eyebrow: 'A megoldás', title: 'Áramátalakító, végállomás és diszpécser egy rendszerben', paragraphs: [
        'Új áramátalakító (egyenirányító) alállomást építettünk a felsővezeték 600 V-os egyenáramú táplálásához, és kiépítettük a végállomás teljes villamos rendszerét.',
        'A teljes energetikát bekötöttük a BKV diszpécserközpontjába, ahol a diszpécserek valós időben látják a feszültségszintet, a terhelést és a riasztásokat — egyetlen felületről, több telephely felett.',
      ] },
      { eyebrow: 'Az eredmény', title: 'Stabil, távfelügyelt üzem', paragraphs: [
        'A végállomás azóta a csúcsidei járatsűrűséget is biztonságosan kiszolgálja, a diszpécserek pedig központilag felügyelik és kezelik a rendszert. A kivitelezés a napi forgalom fennakadása nélkül zajlott.',
      ] },
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
    highlights: [
      { title: 'Egyenirányító alállomás', desc: '600 V DC táplálás a felsővezeték-hálózathoz, szabvány szerinti védelmekkel.' },
      { title: 'Teljes végállomás', desc: 'A végállomás komplett erős- és gyengeáramú villamos kiépítése.' },
      { title: 'Diszpécser-integráció', desc: 'Valós idejű feszültség-, terhelés- és riasztásfelügyelet a központból.' },
      { title: 'Forgalom melletti kivitelezés', desc: 'Ütemezett munkavégzés a menetrend fennakadása nélkül.' },
    ],
  },
  {
    slug: '1-es-villamos', cat: 'kozlekedes', tag: 'Közlekedés',
    title: '1-es villamos — energiaellátás korszerűsítés',
    desc: 'Felsővezeték-hálózat és két új egyenirányító alállomás a teljes vonalon, üzemszünet nélkül.',
    metric: '18%', metricLabel: 'energia-megtakarítás', placeholder: 'Villamos vonal / felsővezeték',
    lede: 'A vonal teljes energiaellátásának korszerűsítése: felsővezeték-hálózat felújítása és két új egyenirányító alállomás építése — a napi villamosforgalom fenntartása mellett.',
    sections: [
      { eyebrow: 'A kihívás', title: 'Öregedő táphálózat, folyamatos forgalom', paragraphs: [
        'A vonal eredeti energiaellátása elérte élettartama végét: nőttek a veszteségek, és egyre gyakoribbá váltak a feszültségesések a csúcsidei terhelésnél. A korszerűsítést úgy kellett megoldani, hogy a villamosforgalom egyetlen napra se álljon le.',
      ] },
      { eyebrow: 'A megoldás', title: 'Két új alállomás és felújított felsővezeték', paragraphs: [
        'Két új egyenirányító alállomást építettünk a vonal mentén, és szakaszosan felújítottuk a felsővezeték-hálózatot. Az ütemezést a menetrendhez igazítottuk, így a munkálatok üzemszünet nélkül folytak.',
        'A korszerű egyenirányítók magasabb hatásfokkal dolgoznak, és a szakaszolás is finomabb lett — ez csökkenti a veszteséget és javítja a feszültségstabilitást.',
      ] },
      { eyebrow: 'Az eredmény', title: 'Alacsonyabb veszteség, stabilabb feszültség', paragraphs: [
        'A megújult táplálás mintegy 18%-os energia-megtakarítást hozott, és megszűntek a csúcsidei feszültségesések. A vonal így hosszú távra felkészült a sűrűbb járatkiosztásra is.',
      ] },
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
    highlights: [
      { title: 'Egyenirányító alállomások', desc: 'Két korszerű, magas hatásfokú alállomás a vonal egyenletes táplálásáért.' },
      { title: 'Felsővezeték-felújítás', desc: 'Szakaszos csere a folyamatos forgalom fenntartása mellett.' },
      { title: 'Finomabb szakaszolás', desc: 'Rugalmasabb védelmi és szakaszoló kialakítás a feszültségstabilitásért.' },
    ],
  },
  {
    slug: 'elelmiszeripari-csomagolosor', cat: 'automatizalas', tag: 'Automatizálás',
    title: 'Élelmiszeripari csomagolósor integráció',
    desc: 'Nyolc gépegység egységes PLC-vezérlés alá vonása és központi SCADA-felügyelet kiépítése.',
    metric: '8', metricLabel: 'gépegység egy vezérlés alatt', placeholder: 'Gyártósor',
    lede: 'Nyolc, addig különálló gépegység egységes PLC-vezérlés alá vonása és központi SCADA-felügyelet kiépítése — egy folyamatosan üzemelő élelmiszeripari csomagolósoron.',
    sections: [
      { eyebrow: 'A kihívás', title: 'Nyolc gép, nyolc külön vezérlés', paragraphs: [
        'A csomagolósor gépei külön szigetekként működtek, eltérő vezérlésekkel és kezelőfelületekkel. Az átállások lassúak voltak, a hibák forrását pedig nehéz volt azonosítani, mert nem volt közös adatkép.',
      ] },
      { eyebrow: 'A megoldás', title: 'Egységes PLC-vezérlés és központi felügyelet', paragraphs: [
        'A nyolc gépegységet egyetlen, összehangolt PLC-architektúra alá vontuk, és központi SCADA-felületet építettünk a teljes sor felügyeletére. A receptváltás és az átállás így néhány gombnyomással megoldható.',
        'A soron valós idejű darabszám-, állapot- és hibakijelzés fut, historikus naplózással — a karbantartás így a tényleges adatokra támaszkodhat.',
      ] },
      { eyebrow: 'Az eredmény', title: 'Gyorsabb átállás, kevesebb állásidő', paragraphs: [
        'Az egységes vezérléssel jelentősen csökkent az átállási idő, és a hibák forrása azonnal láthatóvá vált a SCADA-felületen. A sor rendelkezésre állása mérhetően javult.',
      ] },
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
    highlights: [
      { title: 'PLC-integráció', desc: 'Nyolc gépegység összehangolása egyetlen, karbantartható vezérlési logikába.' },
      { title: 'Központi SCADA', desc: 'A teljes sor darabszáma, állapota és hibái egyetlen felületen.' },
      { title: 'Gyors receptváltás', desc: 'Termékváltás és átállás néhány lépésben, kezelői hibalehetőség nélkül.' },
    ],
  },
  {
    slug: 'logisztikai-park-betaplalas', cat: 'energetika', tag: 'Energetika',
    title: 'Logisztikai park betáplálás',
    desc: 'Két transzformátorállomás és a teljes kisfeszültségű elosztás kiépítése egy új logisztikai parkban.',
    metric: '2×1000', metricLabel: 'kVA állomás', placeholder: 'Transzformátor',
    lede: 'Egy új logisztikai park teljes energetikai gerince: két transzformátorállomás és a hozzájuk tartozó kisfeszültségű fő- és alelosztás — bővíthetőségre tervezve.',
    sections: [
      { eyebrow: 'A kihívás', title: 'Nagy csarnokterület, növekvő igény', paragraphs: [
        'A park több nagy csarnokot, hűtést és töltőinfrastruktúrát lát el. A betáplálást úgy kellett méretezni, hogy a jelenlegi igényt biztonsággal kiszolgálja, de a későbbi bővítéseket is befogadja.',
      ] },
      { eyebrow: 'A megoldás', title: 'Két állomás, tartalékkal méretezve', paragraphs: [
        'Két 1000 kVA-es transzformátorállomást építettünk, és kiépítettük a teljes kisfeszültségű fő- és alelosztást a csarnokokig. A kialakítás tartalékkal és bővítési pontokkal készült.',
        'A fő elosztók mérésekkel és energetikai monitoringgal egészültek ki, így a park üzemeltetője követni tudja az egyes területek fogyasztását.',
      ] },
      { eyebrow: 'Az eredmény', title: 'Stabil ellátás, tervezhető bővítés', paragraphs: [
        'A park teljes területe megbízható betáplálást kapott, a monitoring pedig átláthatóvá tette a fogyasztást. A tartalékkapacitás miatt a következő bővítés újabb állomás építése nélkül megoldható.',
      ] },
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
    highlights: [
      { title: 'Transzformátorállomások', desc: 'Két 1000 kVA-es állomás, szabvány szerinti védelemmel és mérésekkel.' },
      { title: 'Kisfeszültségű elosztás', desc: 'Fő- és alelosztók a csarnokokig, tartalék betáplálási pontokkal.' },
      { title: 'Energetikai monitoring', desc: 'Területenkénti fogyasztásmérés az átlátható üzemeltetésért.' },
    ],
  },
  {
    slug: 'vezerloszekreny-sorozat', cat: 'szekreny', tag: 'Kapcsolószekrény',
    title: 'Vezérlőszekrény-sorozat gyártás',
    desc: 'Negyvenkét egyedi vezérlőszekrény tervezése, gyártása és bevizsgálása hat hét alatt, teljes EPLAN-dokumentációval.',
    metric: '42 db', metricLabel: '6 hét alatt', placeholder: 'Kapcsolószekrény',
    lede: 'Negyvenkét egyedi vezérlőszekrény tervezése, szerelése és gyári bevizsgálása szoros határidőre — egységes kialakítással és teljes EPLAN-dokumentációval.',
    sections: [
      { eyebrow: 'A kihívás', title: 'Nagy darabszám, szoros határidő', paragraphs: [
        'A megrendelő egy nagyobb ütemű projekthez rövid időn belül több tucat, azonos felépítésű vezérlőszekrényt igényelt — egységes minőségben, hogy a helyszíni szerelés gyors és hibamentes legyen.',
      ] },
      { eyebrow: 'A megoldás', title: 'Sorozatgyártás saját műhelyben', paragraphs: [
        'A szekrényeket EPLAN-alapon terveztük, majd saját műhelyünkben, sorozatgyártási elrendezésben szereltük. Az egységes kábelrajz és bekötési rend miatt minden darab azonos, jól dokumentált.',
        'A kiszállítás előtt minden szekrényt gyárilag bevizsgáltunk és jegyzőkönyveztünk, így a helyszínen csak a bekötés és üzembe helyezés maradt.',
      ] },
      { eyebrow: 'Az eredmény', title: '42 szekrény, hat hét, azonos minőség', paragraphs: [
        'A teljes sorozat hat hét alatt, egységes minőségben elkészült és bevizsgálva került kiszállításra. A helyszíni szerelés a felkészített daraboknak köszönhetően gyorsan haladt.',
      ] },
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
    highlights: [
      { title: 'EPLAN-alapú tervezés', desc: 'Egységes kapcsolási és kábelrajz minden szekrényhez.' },
      { title: 'Sorozatgyártás', desc: 'Azonos felépítés és bekötési rend a gyors helyszíni szereléshez.' },
      { title: 'Gyári bevizsgálás', desc: 'Minden darab tesztelve és jegyzőkönyvezve a kiszállítás előtt.' },
    ],
  },
  {
    slug: 'regionalis-vizmu-scada', cat: 'automatizalas', tag: 'Automatizálás',
    title: 'Regionális vízmű SCADA',
    desc: 'Tizennégy telephely bekötése egyetlen SCADA-felületre — valós idejű felügyelettel és riasztáskezeléssel.',
    metric: '14', metricLabel: 'telephely egy felületen', placeholder: 'Vízmű SCADA',
    lede: 'Tizennégy vízmű-telephely egyesítése egyetlen, központi SCADA-felületen: valós idejű adatgyűjtés, riasztáskezelés és távfelügyelet egy régió teljes ellátórendszerére.',
    sections: [
      { eyebrow: 'A kihívás', title: 'Szétszórt telephelyek, közös felügyelet nélkül', paragraphs: [
        'A régió vízellátását tizennégy telephely biztosítja, amelyek korábban egymástól függetlenül működtek. Az üzemeltetőknek nem volt közös rálátásuk a szivattyúkra, tározókra és a hálózat állapotára — a beavatkozás gyakran csak helyszíni kiszállással volt lehetséges.',
      ] },
      { eyebrow: 'A megoldás', title: 'Egy központi SCADA, minden telephelyre', paragraphs: [
        'A telephelyeket egyetlen SCADA-rendszerbe kötöttük, ahol valós időben látszik minden szivattyú, tározószint és mérési adat. A prioritásos riasztások azonnal jeleznek, ha beavatkozásra van szükség.',
        'A biztonságos távoli hozzáférés miatt az ügyeletes szakember távolról is felügyelheti és kezelheti a rendszert, historikus adatnaplózással és riportokkal a háttérben.',
      ] },
      { eyebrow: 'Az eredmény', title: 'Átlátható üzem, gyorsabb reagálás', paragraphs: [
        'A tizennégy telephely egyetlen felületről felügyelhető, a hibákra pedig lényegesen gyorsabb a reagálás. A központi adatképnek köszönhetően az üzemeltetés tervezhetőbbé és költséghatékonyabbá vált.',
      ] },
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
    highlights: [
      { title: 'Központi vezérlőpult', desc: 'A teljes régió szivattyúi és tározói egyetlen áttekinthető felületen.' },
      { title: 'Riasztáskezelés', desc: 'Prioritásos riasztások és eseménynapló a gyors beavatkozásért.' },
      { title: 'Biztonságos távfelügyelet', desc: 'Távoli hozzáférés az ügyeletes szakembernek, historikus naplózással.' },
    ],
  },
  {
    slug: 'elektromosbusz-depo-toltes', cat: 'kozlekedes', tag: 'Közlekedés',
    title: 'Elektromosbusz-depó töltés',
    desc: 'Huszonnégy töltőpont, a betáplálás és a töltésvezérlés kiépítése egy elektromosbusz-depóban.',
    metric: '24', metricLabel: 'töltőpont', placeholder: 'Busz depó',
    lede: 'Egy elektromosbusz-depó teljes töltőinfrastruktúrája: huszonnégy töltőpont, a szükséges betáplálás és az éjszakai töltést optimalizáló töltésvezérlés — a menetrend biztonságos kiszolgálásáért.',
    sections: [
      { eyebrow: 'A kihívás', title: 'Egyszerre töltődő flotta, korlátos teljesítmény', paragraphs: [
        'Egy elektromos buszflotta éjszaka, viszonylag szűk időablakban töltődik. Ha minden jármű egyszerre venné fel a maximális teljesítményt, az túlterhelné a betáplálást — a töltést tehát okosan kellett elosztani.',
      ] },
      { eyebrow: 'A megoldás', title: 'Betáplálás és intelligens töltésvezérlés', paragraphs: [
        'Kiépítettük a depó megerősített betáplálását és a huszonnégy töltőpontot, majd egy töltésvezérlő logikát, amely a rendelkezésre álló teljesítményt a járművek indulási rendjéhez igazítva osztja el.',
        'A rendszer figyeli az egyes járművek töltöttségét és indulási idejét, így reggelre minden busz a szükséges energiával áll ki — a betáplálás túlterhelése nélkül.',
      ] },
      { eyebrow: 'Az eredmény', title: 'Minden busz időben, feltöltve', paragraphs: [
        'A depó megbízhatóan kiszolgálja a reggeli kiállást: a járművek időben és a menetrendhez szükséges töltöttséggel indulnak. Az intelligens elosztás miatt nem kellett túlméretezni a betáplálást.',
      ] },
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
    highlights: [
      { title: 'Depói betáplálás', desc: 'Megerősített energiaellátás a teljes töltőpark kiszolgálásához.' },
      { title: '24 töltőpont', desc: 'A flotta méretéhez igazított, bővíthető töltőinfrastruktúra.' },
      { title: 'Intelligens vezérlés', desc: 'A töltés az indulási rendhez igazodik, a betáplálás túlterhelése nélkül.' },
    ],
  },
  {
    slug: 'ipari-napelempark', cat: 'energetika', tag: 'Energetika',
    title: 'Ipari napelempark csatlakozás',
    desc: '1,2 MWp napelempark hálózati csatlakozása és betáplálása, védelmi és mérési rendszerrel.',
    metric: '1,2', metricLabel: 'MWp betáplálás', placeholder: 'Napelem',
    lede: 'Egy 1,2 MWp-os ipari napelempark hálózati csatlakozásának és betáplálásának kivitelezése — a szükséges védelmi, mérési és szabályozási rendszerrel együtt.',
    sections: [
      { eyebrow: 'A kihívás', title: 'Termelt energia a hálózatra, szabályosan', paragraphs: [
        'A telephely tetőire és területére telepített napelempark termelését szabályosan és biztonságosan kellett a hálózatra juttatni — a hálózati előírások, a védelmek és a mérés maradéktalan betartásával.',
      ] },
      { eyebrow: 'A megoldás', title: 'Csatlakozás, védelem és mérés egy kézben', paragraphs: [
        'Kiépítettük a park hálózati csatlakozását, a szükséges védelmi berendezéseket és a hiteles elszámolási mérést. A rendszer a hálózati követelményeknek megfelelően szabályozza a betáplálást.',
        'A telephely saját fogyasztása és a betáplálás egyensúlyát is figyeljük, így a megtermelt energia a lehető leghatékonyabban hasznosul.',
      ] },
      { eyebrow: 'Az eredmény', title: 'Kihasznált napenergia, alacsonyabb költség', paragraphs: [
        'A park 1,2 MWp csúcsteljesítménnyel táplál a hálózatra, a telephely energiaköltsége pedig érezhetően csökkent. A rendszer szabvány szerint, felügyelten üzemel.',
      ] },
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
    highlights: [
      { title: 'Hálózati csatlakozás', desc: 'Szabályos betáplálási pont kiépítése a hálózati előírások szerint.' },
      { title: 'Védelmi rendszer', desc: 'A park és a hálózat védelmét biztosító berendezések.' },
      { title: 'Hiteles mérés', desc: 'Elszámolási mérés és betáplálás-szabályozás egy rendszerben.' },
    ],
  },
  {
    slug: 'hegeszto-robotcella', cat: 'automatizalas', tag: 'Automatizálás',
    title: 'Hegesztő robotcella integráció',
    desc: 'Két hegesztőrobot és a teljes biztonsági rendszer integrációja egy meglévő gyártósorba.',
    metric: '2', metricLabel: 'robot + biztonsági rendszer', placeholder: 'Robotcella',
    lede: 'Két hegesztőrobot integrálása egy meglévő gyártósorba — a cellavezérléssel és a teljes, szabvány szerinti biztonsági rendszerrel együtt, minimális állásidővel.',
    sections: [
      { eyebrow: 'A kihívás', title: 'Robotizálás működő gyártás mellett', paragraphs: [
        'A megrendelő a kézi hegesztést szerette volna robotcellára váltani a magasabb és egyenletesebb minőségért — úgy, hogy a meglévő sor termelése a lehető legrövidebb ideig álljon.',
      ] },
      { eyebrow: 'A megoldás', title: 'Cellavezérlés és teljes biztonságtechnika', paragraphs: [
        'Két hegesztőrobotot integráltunk a sorba, kiépítettük a cellavezérlést és az anyagmozgatás összehangolását. A cellát teljes, szabvány szerinti biztonsági rendszerrel láttuk el: védőkerítés, reteszelt ajtók, fényfüggöny és vészleállító lánc.',
        'A vezérlést a meglévő sor logikájához illesztettük, így a robotcella zökkenőmentesen illeszkedik a gyártási folyamatba.',
      ] },
      { eyebrow: 'Az eredmény', title: 'Egyenletes minőség, biztonságos üzem', paragraphs: [
        'A robotcella egyenletes hegesztési minőséget és nagyobb kapacitást adott, a biztonsági rendszer pedig szabvány szerint védi a kezelőket. Az átállás minimális állásidővel valósult meg.',
      ] },
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
    highlights: [
      { title: 'Robotintegráció', desc: 'Két hegesztőrobot beillesztése a meglévő gyártási folyamatba.' },
      { title: 'Cellavezérlés', desc: 'A robotok és az anyagmozgatás összehangolt, karbantartható logikája.' },
      { title: 'Biztonsági rendszer', desc: 'Védőkerítés, fényfüggöny és vészleállító lánc szabvány szerint.' },
    ],
  },
  {
    slug: 'adatkozpont-fo-eloszto', cat: 'szekreny', tag: 'Kapcsolószekrény',
    title: 'Adatközpont fő elosztó',
    desc: 'N+1 redundanciájú fő elosztó tervezése és gyártása egy adatközpont folyamatos ellátásához.',
    metric: 'N+1', metricLabel: 'redundancia', placeholder: 'Elosztószekrény',
    lede: 'Egy adatközpont fő elosztójának tervezése és gyártása N+1 redundanciával — hogy a kritikus terhelés még karbantartás vagy egyetlen ág kiesése esetén is folyamatosan táplálva maradjon.',
    sections: [
      { eyebrow: 'A kihívás', title: 'Nulla megengedett kiesés', paragraphs: [
        'Egy adatközpont energiaellátása nem állhat le — még karbantartáskor vagy egyetlen betáplálási ág meghibásodásakor sem. A fő elosztónak ezt a folyamatosságot kellett garantálnia.',
      ] },
      { eyebrow: 'A megoldás', title: 'N+1 redundanciájú fő elosztó', paragraphs: [
        'A fő elosztót N+1 redundanciával terveztük és saját műhelyünkben gyártottuk: a kritikus terhelés két, egymástól független ágról táplálható, automatikus átkapcsolással. A karbantartás így üzem közben, a terhelés kiesése nélkül elvégezhető.',
        'A szekrényhez teljes EPLAN-dokumentáció és gyári bevizsgálás készült, a mérések pedig folyamatosan követhetővé teszik a terhelés eloszlását.',
      ] },
      { eyebrow: 'Az eredmény', title: 'Folyamatos, karbantartható ellátás', paragraphs: [
        'Az adatközpont kritikus terhelése redundáns, folyamatos betáplálást kapott. A karbantartás üzemzavar nélkül végezhető, a mérések pedig átláthatóvá teszik az energiafelhasználást.',
      ] },
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
    highlights: [
      { title: 'N+1 redundancia', desc: 'Két független ág és automatikus átkapcsolás a folyamatos ellátásért.' },
      { title: 'Üzem közbeni karbantartás', desc: 'A kritikus terhelés kiesése nélkül elvégezhető szerviz.' },
      { title: 'Teljes dokumentáció', desc: 'EPLAN-rajzok, mérések és gyári bevizsgálás minden ponton.' },
    ],
  },
]

// slug → projekt gyors lekérés (részletoldalhoz).
export const projectBySlug = Object.fromEntries(projects.map((p) => [p.slug, p]))
