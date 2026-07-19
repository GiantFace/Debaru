// Esettanulmány — BKV Etele téri villamos-végállomás és áramellátás (valós referencia).

export const projectDetail = {
  crumb: 'Esettanulmány',
  tag: 'Közlekedés · Energetika',
  headPlaceholder: 'Fő projektfotó — BKV Etele tér / végállomás',
  title: 'BKV Etele téri villamos-végállomás és áramellátás',
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
}
