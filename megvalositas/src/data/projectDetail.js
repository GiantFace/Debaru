// Esettanulmány oldal tartalma (a terv projekt.html alapján).

export const projectDetail = {
  crumb: 'Esettanulmány',
  tag: 'Közlekedés',
  headPlaceholder: 'Fő projektfotó — felsővezeték / villamos',
  title: '1-es villamos — energiaellátás korszerűsítés',
  lede: 'A teljes vonal felsővezeték-hálózatának cseréje és két új egyenirányító alállomás kivitelezése — mindezt a menetrend szerinti forgalom fenntartása mellett, éjszakai munkavégzéssel.',
  sections: [
    { eyebrow: 'A kihívás', title: 'Korszerűsítés forgalomkiesés nélkül', paragraphs: [
      'A vonal 40 éves felsővezeték-hálózata elérte élettartama végét, a régi alállomások pedig nem bírták a megnövekedett járatsűrűséget. A megrendelő kikötése egyértelmű volt: a napközbeni forgalom egyetlen napra sem állhat le.',
    ] },
    { eyebrow: 'A megoldás', title: 'Szakaszos, éjszakai kivitelezés', paragraphs: [
      'A hálózatot 11 szakaszra bontottuk, és minden éjjel az utolsó járat után dolgoztunk az első hajnali indulásig. Két új, távfelügyelt egyenirányító alállomást építettünk, amelyek automatikusan osztják el a terhelést.',
      'A teljes rendszert saját SCADA-felületünkre kötöttük, így a diszpécserek valós időben látják a feszültségszinteket és a terhelést a teljes vonalon.',
    ] },
    { eyebrow: 'Az eredmény', title: 'Stabilabb, hatékonyabb üzem', paragraphs: [
      'A korszerűsítés óta a vonal energiavesztesége 18%-kal csökkent, a feszültségesésből adódó lassítások pedig gyakorlatilag megszűntek. A projekt a tervezett 9 hónap helyett 8 hónap alatt készült el, forgalomkiesés nélkül.',
    ] },
  ],
  facts: [
    { label: 'Megrendelő', value: 'Városi Közlekedési Vállalat' },
    { label: 'Helyszín', value: 'Budapest' },
    { label: 'Időtartam', value: '8 hónap (2023)' },
    { label: 'Szolgáltatás', value: 'Energetika · SCADA · Kivitelezés' },
  ],
  stats: [
    { to: 18, suffix: '%', label: 'energiamegtakarítás' },
    { to: 2, label: 'új alállomás' },
    { to: 11, label: 'munkaszakasz' },
    { to: 0, label: 'nap forgalomkiesés' },
  ],
  gallery: ['Galéria 1', 'Galéria 2', 'Galéria 3'],
}
