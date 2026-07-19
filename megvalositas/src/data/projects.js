// Projektjeink oldal tartalma (a terv projektjeink.html alapján).

export const projectsHead = {
  crumb: 'Projektjeink',
  headPlaceholder: 'Fotó — ipari projekt / helyszín',
  title: ['Referenciák, amelyek', 'üzemelnek.'],
  lede: 'Több mint 320 átadott projekt az ipar, az energetika és a közlekedés területén. Íme egy válogatás azokból, amelyekre a legbüszkébbek vagyunk.',
}

// Szűrő chip-ek (kategória-kulcsokkal).
export const projectFilters = [
  { key: 'all', label: 'Összes' },
  { key: 'automatizalas', label: 'Automatizálás' },
  { key: 'energetika', label: 'Energetika' },
  { key: 'kozlekedes', label: 'Közlekedés' },
  { key: 'szekreny', label: 'Kapcsolószekrény' },
]

export const projectCards = [
  { cat: 'kozlekedes', tag: 'Közlekedés', feat: true, title: '1-es villamos — energiaellátás korszerűsítés', desc: 'Felsővezeték-hálózat és két új egyenirányító alállomás a teljes vonalon, üzemszünet nélkül.', metric: '18%', metricLabel: 'energia-megtakarítás', placeholder: 'Villamos vonal / felsővezeték' },
  { cat: 'automatizalas', tag: 'Automatizálás', title: 'Élelmiszeripari csomagolósor', metric: '8', metricLabel: 'gépegység egy vezérlés alatt', placeholder: 'Gyártósor' },
  { cat: 'energetika', tag: 'Energetika', title: 'Logisztikai park betáplálás', metric: '2×1000', metricLabel: 'kVA állomás', placeholder: 'Transzformátor' },
  { cat: 'szekreny', tag: 'Kapcsolószekrény', title: 'Vezérlőszekrény-sorozat', metric: '42 db', metricLabel: '6 hét alatt', placeholder: 'Kapcsolószekrény' },
  { cat: 'automatizalas', tag: 'Automatizálás', title: 'Regionális vízmű SCADA', metric: '14', metricLabel: 'telephely egy felületen', placeholder: 'Vízmű SCADA' },
  { cat: 'kozlekedes', tag: 'Közlekedés', title: 'Elektromosbusz-depó töltés', metric: '24', metricLabel: 'töltőpont', placeholder: 'Busz depó' },
  { cat: 'energetika', tag: 'Energetika', title: 'Ipari napelempark csatlakozás', metric: '1,2', metricLabel: 'MWp betáplálás', placeholder: 'Napelem' },
  { cat: 'automatizalas', tag: 'Automatizálás', title: 'Hegesztő robotcella integráció', metric: '2', metricLabel: 'robot + biztonsági rendszer', placeholder: 'Robotcella' },
  { cat: 'szekreny', tag: 'Kapcsolószekrény', title: 'Adatközpont fő elosztó', metric: 'N+1', metricLabel: 'redundancia', placeholder: 'Elosztószekrény' },
]
