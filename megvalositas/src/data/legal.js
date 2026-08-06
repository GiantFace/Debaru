// Jogi oldalak tartalma (Adatvédelem · ÁSZF · Impresszum).
// A blokkok típusai: { p } bekezdés · { h3 } alcím · { ul: [] } lista ·
// { rows: [{label, value, href?}] } kulcs–érték adatok.
// FONTOS: a [SABLON] jelölésű helyeket a tényleges cégadatokkal kell kitölteni,
// és a szövegeket érdemes jogásszal ellenőriztetni a közzététel előtt.

const COMPANY = {
  name: 'Debaru Kft.',
  seat: '1117 Budapest, Budafoki út 97.',
  email: 'info@debaru.hu',
  phone: '+36 1 445 4166',
}

export const legalDocs = {
  privacy: {
    crumb: 'Adatvédelem',
    headPlaceholder: 'Adatkezelési tájékoztató',
    title: 'Adatkezelési tájékoztató',
    updated: 'Hatályos: 2026. július 19.',
    intro: 'Ez a tájékoztató a Debaru Kft. által a weboldalon és a kapcsolatfelvétel során kezelt személyes adatok kezeléséről ad tájékoztatást, az EU 2016/679 rendelete (GDPR) és a hatályos magyar jogszabályok szerint.',
    sections: [
      { id: 'adatkezelo', title: 'Az adatkezelő', body: [
        { p: 'A személyes adatok kezelője:' },
        { rows: [
          { label: 'Cégnév', value: COMPANY.name },
          { label: 'Székhely', value: COMPANY.seat },
          { label: 'E-mail', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
          { label: 'Telefon', value: COMPANY.phone, href: `tel:${COMPANY.phone.replace(/\s/g, '')}` },
        ] },
      ] },
      { id: 'kezelt-adatok', title: 'A kezelt adatok köre', body: [
        { p: 'A kapcsolatfelvételi űrlap kitöltésekor az alábbi adatokat kezeljük:' },
        { ul: [
          'Név (kötelező) — a megkeresés azonosításához és a megszólításhoz.',
          'E-mail cím (kötelező) — a válaszadáshoz.',
          'Cégnév (opcionális) — az igény pontosabb megértéséhez.',
          'Telefonszám (opcionális) — a gyorsabb egyeztetéshez.',
          'Az üzenet szövege és az esetleg csatolt fájlok — a feladat felméréséhez.',
        ] },
        { p: 'A weboldal működéséhez kapcsolódóan a rendszer technikai adatokat (pl. IP-cím) is kezelhet a visszaélések megelőzése érdekében.' },
      ] },
      { id: 'cel-jogalap', title: 'Az adatkezelés célja és jogalapja', body: [
        { p: 'A megkeresés megválaszolásának és a szakmai konzultációnak a célja a kapcsolatfelvétel és az ajánlatadás előkészítése.' },
        { p: 'Jogalap: az érintett hozzájárulása (GDPR 6. cikk (1) a) pont), amelyet az űrlap elküldésével és az adatkezelési tájékoztató elfogadásával ad meg; szerződéskötési szándék esetén a szerződés megkötését megelőző lépések megtétele (GDPR 6. cikk (1) b) pont).' },
        { p: 'A visszaélések (spam, automatizált beküldés) megelőzéséhez fűződő jogos érdek (GDPR 6. cikk (1) f) pont) alapján CAPTCHA-védelmet alkalmazunk.' },
      ] },
      { id: 'megorzes', title: 'Az adatok megőrzési ideje', body: [
        { p: 'A kapcsolatfelvétel során megadott adatokat a megkeresés megválaszolásához, illetve — ha együttműködés jön létre — annak lezárásáig, azt követően a jogszabályi kötelezettségeknek megfelelő ideig őrizzük.' },
        { p: 'Ha a megkeresésből nem jön létre együttműködés, az adatokat legkésőbb 12 hónap elteltével, illetve a hozzájárulás visszavonásakor töröljük.' },
      ] },
      { id: 'adatfeldolgozok', title: 'Adatfeldolgozók és adattovábbítás', body: [
        { p: 'Az adatok kezeléséhez az alábbi adatfeldolgozók szolgáltatásait vesszük igénybe:' },
        { rows: [
          { label: 'Tárhely / CDN', value: 'Cloudflare, Inc. (101 Townsend St, San Francisco, CA 94107, USA)' },
          { label: 'Botvédelem (CAPTCHA)', value: 'Cloudflare Turnstile' },
        ] },
        { p: 'Az adatokat harmadik félnek — a fenti adatfeldolgozókon és a jogszabályi kötelezettségeken túl — nem adjuk át, és marketing célból nem használjuk fel.' },
      ] },
      { id: 'sutik', title: 'Sütik (cookies)', body: [
        { p: 'A weboldal a működéséhez szükséges sütiket használ. A CAPTCHA-védelem (Cloudflare Turnstile) a visszaélések megelőzéséhez technikai sütit / azonosítót helyezhet el.' },
        { p: 'A böngésző beállításaiban a sütik bármikor törölhetők vagy letilthatók; ez azonban egyes funkciók működését korlátozhatja.' },
      ] },
      { id: 'jogok', title: 'Az Ön jogai', body: [
        { p: 'A vonatkozó jogszabályok szerint Önt az alábbi jogok illetik meg a személyes adataival kapcsolatban:' },
        { ul: [
          'Hozzáférés a kezelt adatokhoz és tájékoztatás az adatkezelésről.',
          'Helyesbítés — pontatlan adatok kijavítása.',
          'Törlés („az elfeledtetéshez való jog”).',
          'Az adatkezelés korlátozása.',
          'Tiltakozás az adatkezelés ellen.',
          'Adathordozhatóság.',
          'A hozzájárulás bármikori, díjmentes visszavonása (a visszavonás a korábbi adatkezelés jogszerűségét nem érinti).',
        ] },
        { p: `A jogai gyakorlásához írjon a(z) ${COMPANY.email} címre.` },
      ] },
      { id: 'adatbiztonsag', title: 'Adatbiztonság', body: [
        { p: 'Az adatokat titkosított kapcsolaton (HTTPS) keresztül továbbítjuk és megfelelő technikai, valamint szervezési intézkedésekkel védjük a jogosulatlan hozzáférés, módosítás és megsemmisítés ellen.' },
      ] },
      { id: 'jogorvoslat', title: 'Jogorvoslat', body: [
        { p: 'Ha úgy érzi, hogy adatkezelésünk sérti a jogait, kérjük, először forduljon hozzánk. Panaszával a felügyeleti hatósághoz is fordulhat:' },
        { rows: [
          { label: 'Hatóság', value: 'Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)' },
          { label: 'Cím', value: '1055 Budapest, Falk Miksa utca 9–11.' },
          { label: 'Web', value: 'naih.hu', href: 'https://naih.hu' },
        ] },
        { p: 'Jogsérelem esetén bírósághoz is fordulhat.' },
      ] },
    ],
  },

  terms: {
    crumb: 'ÁSZF',
    headPlaceholder: 'Általános Szerződési Feltételek',
    title: 'Általános Szerződési Feltételek',
    updated: 'Hatályos: 2026. május 28. napjától visszavonásig vagy módosításig.',
    intro: 'A Debaru Kft. Általános Szerződési Feltételei a villamos, irányítástechnikai, automatizálási, berendezésgyártási, szoftverfejlesztési és helyszíni kivitelezési projektekre. A teljes, hatályos dokumentum alább letölthető és megtekinthető — magyar, német és angol nyelven.',
    sections: [
      { id: 'szolgaltato', title: 'A Szolgáltató adatai', body: [
        { rows: [
          { label: 'Cégnév', value: 'Debaru Kft.' },
          { label: 'Székhely', value: '1117 Budapest, Budafoki út 97.' },
          { label: 'Adószám', value: '14277148-2-43 / HU14277148' },
          { label: 'Cégjegyzékszám', value: '01-09-896759' },
          { label: 'E-mail', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
          { label: 'Telefon', value: COMPANY.phone, href: `tel:${COMPANY.phone.replace(/\s/g, '')}` },
        ] },
      ] },
      { id: 'dokumentum', title: 'A teljes ÁSZF dokumentum', body: [
        { p: 'Vevői/értékesítési Általános Szerződési Feltételeink a villamos, automatizálási, berendezésgyártási, szoftver- és kivitelezési projektek egységes, átlátható és előre kalkulálható szerződéses szabályozását tartalmazzák. Az alábbiakban a hatályos, teljes dokumentum érhető el — töltse le, vagy olvassa el itt az oldalon.' },
        { pdf: {
          hu: '/dokumentumok/Debaru_ASZF_HU.pdf',
          de: '/dokumentumok/Debaru_AGB_DE.pdf',
          en: '/dokumentumok/Debaru_Terms_EN.pdf',
        } },
      ] },
    ],
  },

  imprint: {
    crumb: 'Impresszum',
    headPlaceholder: 'Impresszum',
    title: 'Impresszum',
    updated: 'Utolsó frissítés: 2026. július 19.',
    intro: 'A weboldal üzemeltetőjének és a szolgáltató cég adatai, a tárhelyszolgáltató, valamint a felügyeleti szervek elérhetőségei.',
    sections: [
      { id: 'cegadatok', title: 'Cégadatok', body: [
        { rows: [
          { label: 'Cégnév', value: COMPANY.name },
          { label: 'Székhely', value: COMPANY.seat },
          { label: 'Cégjegyzékszám', value: '01-09-896759' },
          { label: 'Adószám', value: '14277148-2-43' },
          { label: 'Nyilvántartó bíróság', value: 'Fővárosi Törvényszék Cégbírósága' },
          { label: 'Képviselő', value: 'Takács Gergő ügyvezető' },
        ] },
      ] },
      { id: 'elerhetoseg', title: 'Elérhetőség', body: [
        { rows: [
          { label: 'E-mail', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
          { label: 'Telefon', value: COMPANY.phone, href: `tel:${COMPANY.phone.replace(/\s/g, '')}` },
          { label: 'Ügyfélfogadás', value: 'Hétfő–Péntek 8:00–17:00' },
        ] },
      ] },
      { id: 'tarhely', title: 'Tárhelyszolgáltató', body: [
        { p: 'A weboldal a Cloudflare infrastruktúráján érhető el.' },
        { rows: [
          { label: 'Név', value: 'Cloudflare, Inc.' },
          { label: 'Cím', value: '101 Townsend Street, San Francisco, CA 94107, USA' },
          { label: 'Web', value: 'cloudflare.com', href: 'https://www.cloudflare.com' },
        ] },
      ] },
      { id: 'felugyelet', title: 'Felügyeleti szervek és jogorvoslat', body: [
        { p: 'A tevékenységgel kapcsolatos fogyasztói, adatvédelmi vagy egyéb panasz esetén az alábbi szervekhez lehet fordulni:' },
        { rows: [
          { label: 'Adatvédelem', value: 'Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH) — naih.hu', href: 'https://naih.hu' },
          { label: 'Fogyasztóvédelem', value: 'Területileg illetékes kormányhivatal fogyasztóvédelmi hatósága' },
          { label: 'Békéltető testület', value: 'A székhely szerint illetékes békéltető testület' },
        ] },
        { p: 'Az adatkezelés részleteit az Adatkezelési tájékoztató, az együttműködés feltételeit az ÁSZF tartalmazza.' },
      ] },
    ],
  },
}
