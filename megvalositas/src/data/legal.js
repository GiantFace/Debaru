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
        { p: 'Ha a megkeresésből nem jön létre együttműködés, az adatokat legkésőbb [SABLON: pl. 12 hónap] elteltével, illetve a hozzájárulás visszavonásakor töröljük.' },
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
    updated: 'Hatályos: 2026. július 19.',
    intro: 'A jelen Általános Szerződési Feltételek (ÁSZF) a Debaru Kft. mint szolgáltató és megrendelői közötti együttműködés általános kereteit rögzítik. Az egyedi szerződésben foglaltak eltérés esetén elsőbbséget élveznek.',
    sections: [
      { id: 'bevezeto', title: '1. Bevezető rendelkezések', body: [
        { p: 'A jelen ÁSZF a Debaru Kft. által nyújtott mérnöki, gyártási, kivitelezési és üzemeltetési szolgáltatásokra vonatkozik.' },
        { p: 'Az ÁSZF-től eltérni kizárólag a felek közös, írásbeli megállapodásával lehet. Az esetleges eltérő egyedi feltételeket az adott projektre vonatkozó szerződés vagy megrendelés tartalmazza.' },
      ] },
      { id: 'szolgaltato', title: '2. A Szolgáltató adatai', body: [
        { rows: [
          { label: 'Cégnév', value: COMPANY.name },
          { label: 'Székhely', value: COMPANY.seat },
          { label: 'E-mail', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
          { label: 'Telefon', value: COMPANY.phone, href: `tel:${COMPANY.phone.replace(/\s/g, '')}` },
        ] },
        { p: 'A további cégadatok (cégjegyzékszám, adószám, képviselő) az Impresszum oldalon érhetők el.' },
      ] },
      { id: 'szolgaltatasok', title: '3. A szolgáltatások köre', body: [
        { p: 'A Szolgáltató ipari automatizálást, kapcsolószekrény-gyártást, SCADA- és folyamatfelügyeleti rendszereket, villamos energetikai kivitelezést, közlekedési rendszereket, valamint üzemeltetési és szerviz szolgáltatásokat nyújt.' },
        { p: 'A szolgáltatások pontos tartalmát, terjedelmét és műszaki paramétereit minden esetben az egyedi ajánlat és szerződés rögzíti.' },
      ] },
      { id: 'ajanlat', title: '4. Ajánlatkérés és szerződéskötés', body: [
        { p: 'A megrendelő a weboldali űrlapon, e-mailben vagy telefonon kérhet ajánlatot. A beérkező megkeresést a Szolgáltató felméri, és — szükség esetén helyszíni bejárást követően — egyedi ajánlatot ad.' },
        { p: 'A szerződés a felek egyező akaratnyilvánításával, az ajánlat írásbeli elfogadásával vagy a megrendelés Szolgáltató általi visszaigazolásával jön létre.' },
      ] },
      { id: 'arak', title: '5. Árak és fizetési feltételek', body: [
        { p: 'A szolgáltatások díját az egyedi ajánlat és szerződés tartalmazza. Az árak — eltérő megjelölés hiányában — nettó árak, amelyekhez a mindenkori hatályos áfa hozzáadódik.' },
        { p: 'A fizetési ütemezést és határidőket a szerződés rögzíti. Nagyobb projektek esetén a Szolgáltató előleget vagy részszámlázást alkalmazhat.' },
      ] },
      { id: 'teljesites', title: '6. Teljesítés és határidők', body: [
        { p: 'A Szolgáltató a szerződésben vállalt határidőkre, a vonatkozó szabványok és biztonsági előírások betartásával teljesít.' },
        { p: 'A megrendelő köteles a teljesítéshez szükséges feltételeket (helyszín, hozzáférés, adatok, közreműködés) biztosítani. Az ebből eredő késedelemért a Szolgáltató nem felel.' },
      ] },
      { id: 'szavatossag', title: '7. Szavatosság és jótállás', body: [
        { p: 'A Szolgáltató az elvégzett munkára és a leszállított berendezésekre a jogszabályok és az egyedi szerződés szerinti szavatosságot, illetve jótállást vállalja.' },
        { p: 'A jótállás nem terjed ki a nem rendeltetésszerű használatból, a megrendelő vagy harmadik fél beavatkozásából, illetve elháríthatatlan külső okból eredő hibákra.' },
      ] },
      { id: 'felelosseg', title: '8. Felelősség', body: [
        { p: 'A Szolgáltató a szolgáltatás nyújtása során a tőle elvárható gondossággal jár el. Felelőssége — a jogszabály által kötelezően előírt körön túl — a szerződés szerinti díj mértékéig terjed.' },
        { p: 'A Szolgáltató nem felel a közvetett károkért, elmaradt haszonért, valamint a megrendelő által szolgáltatott hibás adatokból eredő következményekért.' },
      ] },
      { id: 'panasz', title: '9. Panaszkezelés', body: [
        { p: `A megrendelő az esetleges panaszát írásban, a(z) ${COMPANY.email} címen jelezheti. A Szolgáltató a panaszt kivizsgálja, és arra ésszerű határidőn belül érdemi választ ad.` },
        { p: 'Fogyasztói jogvita esetén a megrendelő a lakóhelye szerinti békéltető testülethez, illetve bírósághoz fordulhat.' },
      ] },
      { id: 'zaro', title: '10. Vegyes és záró rendelkezések', body: [
        { p: 'A jelen ÁSZF-ben nem szabályozott kérdésekben a Polgári Törvénykönyv és a vonatkozó magyar jogszabályok az irányadók.' },
        { p: 'A Szolgáltató fenntartja a jogot az ÁSZF egyoldalú módosítására; a módosítás a közzététellel lép hatályba, a már megkötött szerződéseket nem érinti.' },
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
          { label: 'Hibaügyelet', value: '24/7' },
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
