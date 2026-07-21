// ============================================================================
// KARRIER — adatvezérelt tartalom.
//
// Ez a fájl a karrier oldal EGYETLEN forrása. Később könnyen DB-re cserélhető:
// a `jobs` tömb minden eleme egy állásajánlat, a mezői 1:1 leképezhetők
// adatbázis-oszlopokra (slug, title, department, location, type, ... ).
// Új pozíció = új objektum a tömbben; szerkesztés = a mezők átírása.
//
// Amikor jön a backend: ezt a fájlt egy API-hívás váltja ki, a komponensek
// (Careers.jsx, JobDetail.jsx) változatlanul működnek — ugyanezt a szerkezetet
// várják.
// ============================================================================

// Ide érkeznek a jelentkezések (később: karrier@debaru.hu vagy ATS-integráció).
export const applyEmail = 'info@debaru.hu'

export const careersHead = {
  crumb: 'Karrier',
  title: ['Építsd velünk', 'a kritikus infrastruktúrát!'],
  lede: 'Villamosmérnökök, automatizálók és szerelők csapata vagyunk, akik olyan rendszereket építenek, amelyek városokat, üzemeket és közműveket tartanak működésben. Ha te is kézzelfogható munkát keresel, itt a helyed.',
  headPlaceholder: 'Karrier — mérnöki csapat / helyszíni munka',
}

export const careerIntro = {
  eyebrow: 'Miért a Debaru',
  title: 'Nem irodai szoftvert fejlesztünk — valós rendszereket építünk.',
  paragraphs: [
    'Nálunk a munkád eredménye kézzelfogható: egy felújított villamos-végállomás, egy hibátlanul induló gyártósor, egy szünetmentesen működő adatközpont. A tervezőasztaltól az üzembe helyezésig végigkíséred a projekteket, és látod, ahogy életre kelnek.',
    'Kis-közepes, de erős mérnökcsapat vagyunk, ahol nincs elveszve az ember a hierarchiában. Van kitől tanulni, van felelősség, és van tér a fejlődésre — junior szerelőtől a senior projektvezetőig.',
  ],
}

// Számláló-statisztikák (a Rólunk/Home mintájára).
export const cultureStats = [
  { to: 45, label: 'mérnök és technikus' },
  { to: 15, suffix: '+', label: 'év a szakmában' },
  { to: 4, label: 'ország aktív projektjei' },
  { to: 24, suffix: '/7', label: 'ügyeleti csapat' },
]

// Juttatások / előnyök — az `icon` egy kulcs, a Careers.jsx képezi le SVG-re.
export const benefits = [
  { icon: 'growth', title: 'Valódi szakmai fejlődés', desc: 'A kisfeszültségtől a SCADA-ig, tervezéstől a helyszíni üzembe helyezésig — nálunk a teljes vertikumot megismered, nem egy szűk résfeladatot.' },
  { icon: 'projects', title: 'Kézzelfogható projektek', desc: 'Városi közlekedés, energetika, ipari üzemek, adatközpontok. Olyan rendszereken dolgozol, amelyeket nap mint nap használnak.' },
  { icon: 'learning', title: 'Folyamatos képzés', desc: 'Gyártói tréningek és tanúsítványok: Siemens TIA Portal, Schneider, B&R, EPLAN. A fejlődésedbe befektetünk.' },
  { icon: 'team', title: 'Erős mérnökcsapat', desc: '45 fős, tapasztalt csapat, ahol a tudásmegosztás alap. Mentorálás pályakezdőknek, szakmai kihívás a tapasztaltaknak.' },
  { icon: 'stability', title: 'Stabil háttér', desc: '15+ év, hazai és nemzetközi referenciák, kiszámítható működés. Nem startup-hullámvasút — biztos alapokon álló cég.' },
  { icon: 'balance', title: 'Rugalmasság & korrektség', desc: 'Hibrid munkarend ott, ahol a pozíció engedi, korrekt túlóra- és kiszállás-elszámolás, minőségi eszközök és védőfelszerelés.' },
]

// Értékek / kultúra.
export const values = [
  { title: 'Biztonság mindenek előtt', desc: 'A villamos szakmában a biztonság nem szlogen. Szabványos munkavégzés, oktatás és fegyelem — magunkért és a megrendelőért.' },
  { title: 'Precizitás', desc: 'A rendezett terv és a tiszta szekrény évekre előre megtérül. Amit leszállítunk, arra büszkék vagyunk.' },
  { title: 'Felelősség', desc: 'Amit átadunk, azért helytállunk. A 24/7 ügyelet nem véletlen — a megrendelő számíthat ránk.' },
  { title: 'Csapatmunka', desc: 'Tervező, szerelő, üzemeltető együtt visz sikerre egy projektet. A jó ötlet bárhonnan jöhet.' },
]

// Jelentkezési folyamat.
export const hiringSteps = [
  { n: '01', title: 'Jelentkezés', desc: 'Küldd el önéletrajzod (és ha van, referenciamunkáid) — pár mondat is elég arról, mi érdekel.' },
  { n: '02', title: 'Szakmai beszélgetés', desc: 'Kötetlen beszélgetés a leendő csapatvezetővel: tapasztalat, elvárások, a konkrét feladatok.' },
  { n: '03', title: 'Gyakorlati kép', desc: 'A pozíciótól függően rövid szakmai feladat vagy műhely-/helyszíni bejárás, hogy mindkét fél lássa a valóságot.' },
  { n: '04', title: 'Ajánlat', desc: 'Konkrét ajánlat, tiszta feltételekkel. Döntés után egyeztetjük a beilleszkedés menetét.' },
]

// Szűrő a nyitott pozíciókhoz (a `dept` kulcsokra épül).
export const departments = [
  { key: 'all', label: 'Összes' },
  { key: 'tervezes', label: 'Tervezés' },
  { key: 'automatizalas', label: 'Automatizálás' },
  { key: 'gyartas', label: 'Gyártás' },
  { key: 'kivitelezes', label: 'Kivitelezés' },
  { key: 'gyakornok', label: 'Gyakornoki' },
]

// ============================================================================
// NYITOTT POZÍCIÓK
// employmentType: JSON-LD-hez (FULL_TIME | PART_TIME | INTERN | CONTRACTOR).
// A `facts` a detail-oldal oldalsávját tölti; a `*[]` tömbök a szekciókat.
// ============================================================================
export const jobs = [
  {
    slug: 'villamos-tervezomernok',
    title: 'Villamos tervezőmérnök',
    dept: 'tervezes',
    department: 'Tervezés',
    location: 'Budapest',
    type: 'Teljes munkaidő',
    arrangement: 'Hibrid',
    level: 'Medior / Senior',
    employmentType: 'FULL_TIME',
    postedAt: '2026-07-01',
    validThrough: '2026-09-30',
    placeholder: 'Tervezőmérnök — EPLAN / villamos tervek',
    summary: 'Kisfeszültségű elosztó- és vezérlőrendszerek villamos tervezése EPLAN-ban, a koncepciótól a gyártási dokumentációig.',
    overview: [
      'Tervezőcsapatunk a projektek szíve: itt születnek meg a kapcsolószekrények, elosztók és vezérlések tervei, amelyek alapján a műhely gyárt és a helyszíni csapat kivitelez. Az elképzeléstől a kész, gyártásra kész dokumentációig kíséred végig a munkát.',
      'Sokféle iparágban dolgozunk — közlekedés, energetika, gyártás, adatközpontok —, így változatos, technikailag igényes feladatok várnak, valós felelősséggel.',
    ],
    responsibilities: [
      'Kisfeszültségű elosztók és vezérlőszekrények villamos tervezése EPLAN Electric P8-ban',
      'Kapcsolási rajzok, elrendezési tervek, sorkapocs- és kábellisták készítése',
      'Készülékkiválasztás, méretezés és a vonatkozó szabványok (IEC 61439, MSZ HD 60364) betartása',
      'Együttműködés a gyártással és a helyszíni csapattal a kivitelezhetőségért',
      'Dokumentáció karbantartása, revíziók kezelése a projekt teljes életciklusában',
    ],
    requirements: [
      'Villamosmérnöki végzettség (BSc/MSc) vagy egyenértékű szakmai tapasztalat',
      'Legalább 2–3 év villamos tervezői tapasztalat',
      'Magabiztos EPLAN Electric P8 ismeret',
      'Kisfeszültségű elosztás és a vonatkozó szabványok ismerete',
      'Önálló, precíz munkavégzés és jó együttműködési készség',
    ],
    niceToHave: [
      'PLC/automatizálási alapismeretek (Siemens, Schneider)',
      'Tapasztalat közlekedési vagy energetikai projektekben',
      'Angol vagy német nyelvtudás',
    ],
    offer: [
      'Változatos, technikailag igényes projektek valós felelősséggel',
      'EPLAN- és gyártói tréningek, tanúsítványok',
      'Hibrid munkarend, korszerű eszközök',
      'Stabil, kiszámítható háttér és erős mérnökcsapat',
    ],
    facts: [
      { label: 'Terület', value: 'Tervezés' },
      { label: 'Helyszín', value: 'Budapest' },
      { label: 'Munkaidő', value: 'Teljes munkaidő' },
      { label: 'Munkarend', value: 'Hibrid' },
      { label: 'Tapasztalat', value: '2+ év' },
    ],
  },
  {
    slug: 'plc-scada-mernok',
    title: 'PLC / SCADA automatizálási mérnök',
    dept: 'automatizalas',
    department: 'Automatizálás',
    location: 'Budapest + helyszíni',
    type: 'Teljes munkaidő',
    arrangement: 'Helyszíni / Hibrid',
    level: 'Medior',
    employmentType: 'FULL_TIME',
    postedAt: '2026-07-01',
    validThrough: '2026-09-30',
    placeholder: 'Automatizálási mérnök — PLC / SCADA / HMI',
    summary: 'PLC- és SCADA-rendszerek programozása, üzembe helyezése és integrációja gyártósorokon és közmű-infrastruktúrán.',
    overview: [
      'Az automatizálási csapatban a rendszerek "eszét" építed: PLC-programot írsz, HMI/SCADA felületet fejlesztesz, majd a helyszínen életre kelted a berendezést. A tervezőasztaltól az üzembe helyezésig végigviszed a feladatot.',
      'Munkád nyomán gyártósorok, szivattyútelepek és alállomások indulnak el és működnek megbízhatóan — kézzelfogható, azonnal látható eredménnyel.',
    ],
    responsibilities: [
      'PLC-programozás (Siemens TIA Portal, Schneider, B&R)',
      'HMI és SCADA felületek fejlesztése és integrációja',
      'Helyszíni üzembe helyezés, bekötés-ellenőrzés, éles indítás',
      'Meglévő rendszerek bővítése, hibakeresés és optimalizálás',
      'Dokumentáció és betanítás a megrendelő üzemeltetőinek',
    ],
    requirements: [
      'Villamosmérnöki / mechatronikai végzettség vagy erős szakmai tapasztalat',
      'Legalább 2 év PLC-programozási tapasztalat (lehetőleg Siemens TIA)',
      'SCADA/HMI rendszerek ismerete',
      'Helyszíni munkára és alkalmankénti utazásra való nyitottság',
      'B kategóriás jogosítvány',
    ],
    niceToHave: [
      'Hajtástechnika (frekvenciaváltók) tapasztalat',
      'Ipari hálózatok (Profinet, Modbus, OPC UA) ismerete',
      'Angol vagy német nyelvtudás',
    ],
    offer: [
      'Teljes projektek a koncepciótól az éles indításig',
      'Gyártói tréningek (Siemens, Schneider, B&R)',
      'Korrekt kiszállás-elszámolás, minőségi eszközök',
      'Változatos iparágak, folyamatos szakmai kihívás',
    ],
    facts: [
      { label: 'Terület', value: 'Automatizálás' },
      { label: 'Helyszín', value: 'Budapest + helyszíni' },
      { label: 'Munkaidő', value: 'Teljes munkaidő' },
      { label: 'Munkarend', value: 'Helyszíni / Hibrid' },
      { label: 'Tapasztalat', value: '2+ év' },
    ],
  },
  {
    slug: 'kapcsoloszekreny-szerelo',
    title: 'Kapcsolószekrény-szerelő',
    dept: 'gyartas',
    department: 'Gyártás',
    location: 'Budapest (műhely)',
    type: 'Teljes munkaidő',
    arrangement: 'Helyszíni',
    level: 'Pályakezdő is',
    employmentType: 'FULL_TIME',
    postedAt: '2026-07-01',
    validThrough: '2026-09-30',
    placeholder: 'Szekrényszerelő — műhely / kábelezés',
    summary: 'Egyedi vezérlő- és elosztószekrények szerelése saját műhelyünkben, tervek alapján, precíz kivitelben.',
    overview: [
      'A műhelyünkben készülnek azok a szekrények, amelyek később üzemek és közművek szívében dolgoznak. A tervező rajzai alapján te építed meg őket: készülékek felszerelése, kábelezés, bekötés, ellenőrzés.',
      'Ha szereted a rendezett, precíz kézi munkát és fontos számodra, hogy amit csinálsz, az látványos és tartós legyen, itt a helyed. Pályakezdőket is szívesen betanítunk.',
    ],
    responsibilities: [
      'Vezérlő- és elosztószekrények szerelése kapcsolási rajz alapján',
      'Készülékek felszerelése, sorkapcsok, kábelcsatornák kiépítése',
      'Vezetékezés, bekötés, jelölés és a kivitel precíz kidolgozása',
      'Szemrevételezés és alap villamos ellenőrzések a kiszállítás előtt',
      'Rend és a minőségi elvárások betartása a műhelyben',
    ],
    requirements: [
      'Villanyszerelő / erősáramú szakképzettség',
      'Kapcsolási rajz olvasásának ismerete',
      'Precíz, igényes kézi munkavégzés',
      'Megbízhatóság és csapatszellem',
    ],
    niceToHave: [
      'Szekrényszerelési tapasztalat',
      'Kisfeszültségű készülékek (megszakítók, relék) ismerete',
    ],
    offer: [
      'Tiszta, jól felszerelt műhely és minőségi szerszámok',
      'Betanítás és szakmai fejlődés a pályakezdőknek is',
      'Kiszámítható munkarend, elsősorban műhelymunka',
      'Hosszú távú, stabil munkalehetőség',
    ],
    facts: [
      { label: 'Terület', value: 'Gyártás' },
      { label: 'Helyszín', value: 'Budapest (műhely)' },
      { label: 'Munkaidő', value: 'Teljes munkaidő' },
      { label: 'Munkarend', value: 'Helyszíni' },
      { label: 'Tapasztalat', value: 'Pályakezdő is' },
    ],
  },
  {
    slug: 'villamos-projektvezeto',
    title: 'Villamos kivitelezési projektvezető',
    dept: 'kivitelezes',
    department: 'Kivitelezés',
    location: 'Budapest + országos',
    type: 'Teljes munkaidő',
    arrangement: 'Helyszíni',
    level: 'Senior',
    employmentType: 'FULL_TIME',
    postedAt: '2026-07-01',
    validThrough: '2026-09-30',
    placeholder: 'Projektvezető — helyszíni villamos kivitelezés',
    summary: 'Villamos kivitelezési projektek felelős vezetése a szerződéstől az átadásig — határidő, költség, minőség és biztonság kézben tartásával.',
    overview: [
      'Projektvezetőként a kivitelezés karmestere vagy: te fogod össze a tervezőt, a műhelyt, a helyszíni csapatot és az alvállalkozókat, hogy a projekt időben, a kereten belül és hibátlan minőségben készüljön el.',
      'Nagy volumenű, szakmailag igényes projektjeink valós döntési felelősséget és láthatóságot adnak. A jó munkádnak közvetlen, mérhető eredménye lesz.',
    ],
    responsibilities: [
      'Villamos kivitelezési projektek teljes körű vezetése (határidő, költség, minőség)',
      'Erőforrás- és ütemterv készítése, a helyszíni csapatok koordinálása',
      'Kapcsolattartás a megrendelővel, tervezővel és alvállalkozókkal',
      'Munkavédelmi és minőségi előírások betartatása a helyszínen',
      'Előrehaladás, elszámolás és dokumentáció felügyelete',
    ],
    requirements: [
      'Villamosmérnöki végzettség',
      'Legalább 4–5 év villamos kivitelezési tapasztalat, ebből vezetői gyakorlat',
      'Kivitelezési folyamatok, szabványok és munkavédelem ismerete',
      'Határozott, jó szervező- és kommunikációs készség',
      'B kategóriás jogosítvány',
    ],
    niceToHave: [
      'Felelős műszaki vezetői (FMV) jogosultság',
      'Tapasztalat közlekedési vagy energetikai projektekben',
      'Angol vagy német nyelvtudás',
    ],
    offer: [
      'Nagy, referenciaértékű projektek valós felelősséggel',
      'Versenyképes juttatás és céges autó/eszközök',
      'Erős háttércsapat (tervezés, gyártás, üzemeltetés)',
      'Hosszú távú, kiszámítható együttműködés',
    ],
    facts: [
      { label: 'Terület', value: 'Kivitelezés' },
      { label: 'Helyszín', value: 'Budapest + országos' },
      { label: 'Munkaidő', value: 'Teljes munkaidő' },
      { label: 'Munkarend', value: 'Helyszíni' },
      { label: 'Tapasztalat', value: '4+ év' },
    ],
  },
  {
    slug: 'helyszini-villanyszerelo',
    title: 'Helyszíni villanyszerelő',
    dept: 'kivitelezes',
    department: 'Kivitelezés',
    location: 'Országos',
    type: 'Teljes munkaidő',
    arrangement: 'Helyszíni',
    level: 'Tapasztalt',
    employmentType: 'FULL_TIME',
    postedAt: '2026-07-01',
    validThrough: '2026-09-30',
    placeholder: 'Villanyszerelő — helyszíni kivitelezés',
    summary: 'Villamos rendszerek helyszíni szerelése és üzembe helyezése ipari és közlekedési projekteken, tapasztalt csapatban.',
    overview: [
      'A helyszíni csapat viszi véghez, amit a tervező megálmodott és a műhely legyártott: kábelezés, bekötés, szerelés, majd az éles indítás. Változatos helyszíneken, valódi, látható eredménnyel dolgozol.',
      'Megbecsült szakmunkás-csapat vagyunk, minőségi eszközökkel és korrekt feltételekkel. A szakértelmed itt tényleg számít.',
    ],
    responsibilities: [
      'Kis- és középfeszültségű rendszerek helyszíni szerelése, kábelezése',
      'Szekrények, elosztók telepítése és bekötése tervek alapján',
      'Mérések, ellenőrzések, közreműködés az üzembe helyezésben',
      'Munkavédelmi előírások betartása a helyszínen',
      'Együttműködés a projektvezetővel és a mérnökcsapattal',
    ],
    requirements: [
      'Villanyszerelő / erősáramú szakképzettség',
      'Legalább 2–3 év helyszíni szerelési tapasztalat',
      'Kapcsolási és elrendezési rajzok magabiztos olvasása',
      'Utazásra való nyitottság (országos projektek)',
      'B kategóriás jogosítvány',
    ],
    niceToHave: [
      'Kisfeszültségű felülvizsgálói (ÉV) jogosultság',
      'Középfeszültségű vagy közlekedési tapasztalat',
    ],
    offer: [
      'Minőségi szerszámok, védőfelszerelés, céges szállás/kiszállás korrekt elszámolással',
      'Változatos, érdekes helyszínek és projektek',
      'Megbecsült szakmunkás-csapat, stabil háttér',
      'Szakmai továbbképzés, jogosultságok megszerzésének támogatása',
    ],
    facts: [
      { label: 'Terület', value: 'Kivitelezés' },
      { label: 'Helyszín', value: 'Országos' },
      { label: 'Munkaidő', value: 'Teljes munkaidő' },
      { label: 'Munkarend', value: 'Helyszíni' },
      { label: 'Tapasztalat', value: '2+ év' },
    ],
  },
  {
    slug: 'mernok-gyakornok',
    title: 'Mérnök gyakornok (villamos)',
    dept: 'gyakornok',
    department: 'Gyakornoki',
    location: 'Budapest',
    type: 'Részmunkaidő',
    arrangement: 'Hibrid',
    level: 'Gyakornok',
    employmentType: 'INTERN',
    postedAt: '2026-07-01',
    validThrough: '2026-09-30',
    placeholder: 'Gyakornok — villamosmérnök hallgató',
    summary: 'Villamosmérnök-hallgatóként éles projektekbe kapcsolódsz be a tervezés és az automatizálás mellett, mentor támogatásával.',
    overview: [
      'Nem kávéfőzés és fénymásolás: valódi projektekbe kapcsolódsz be, tapasztalt mérnökök mellett. Belelátsz a tervezésbe, az automatizálásba és a kivitelezésbe, és a végén tényleg tudsz majd valamit.',
      'Rugalmas, a tanulmányaidhoz igazított munkarend, és reális esély a végzés utáni belépésre — sok kollégánk így kezdte.',
    ],
    responsibilities: [
      'Közreműködés villamos tervezési feladatokban (EPLAN) mentor mellett',
      'Segítés a dokumentáció, listák és mérési jegyzőkönyvek készítésében',
      'Bekapcsolódás automatizálási / üzembe helyezési feladatokba',
      'Tanulás a valós projektek folyamatából',
    ],
    requirements: [
      'Aktív villamosmérnök / mechatronikai hallgatói jogviszony',
      'Alapvető villamosságtani ismeretek',
      'Érdeklődés a tervezés vagy az automatizálás iránt',
      'Heti 20–30 óra elérhetőség',
    ],
    niceToHave: [
      'EPLAN vagy PLC alapismeretek',
      'Saját, iskolai vagy hobbiprojekt',
    ],
    offer: [
      'Valós projektek és tapasztalt mentor',
      'Rugalmas, tanulmányokhoz igazított munkarend',
      'Reális esély a végzés utáni belépésre',
      'Betekintés a teljes mérnöki folyamatba',
    ],
    facts: [
      { label: 'Terület', value: 'Gyakornoki' },
      { label: 'Helyszín', value: 'Budapest' },
      { label: 'Munkaidő', value: 'Részmunkaidő (heti 20–30 óra)' },
      { label: 'Munkarend', value: 'Hibrid' },
      { label: 'Tapasztalat', value: 'Nem szükséges' },
    ],
  },
]

// Slug → állás gyors kikereséshez (a detail-oldalnak).
export const jobBySlug = Object.fromEntries(jobs.map((j) => [j.slug, j]))
