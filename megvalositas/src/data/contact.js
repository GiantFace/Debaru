// Kapcsolat oldal tartalma (a terv kapcsolat.html alapján).

export const contactHead = {
  crumb: 'Kapcsolat',
  headPlaceholder: 'Fotó, iroda / telephely',
  title: ['Beszéljünk a', 'projektjéről!'],
  lede: 'Írja le röviden a feladatot, és mérnökeink 3 munkanapon belül visszajeleznek egy első szakmai állásfoglalással. A konzultáció díjmentes.',
}

// Az "egyéb" opció külön konstans — kiválasztva pontosító mező jelenik meg.
export const OTHER_AREA = 'Egyéb / nem tudom még'
export const contactAreas = [
  'Ipari automatizálás', 'Kapcsolószekrény-gyártás', 'SCADA & felügyelet',
  'Villamos energetika', 'Közlekedési rendszerek', 'Üzemeltetés & szerviz', OTHER_AREA,
]

// Opcionális gyors-választók (legördülő listák).
export const timelines = ['Sürgős (< 1 hó)', '1–3 hónap', '3–6 hónap', 'Rugalmas']

// A telephely térkép-linkjei.
export const MAP_EMBED = 'https://maps.google.com/maps?q=Budafoki%20%C3%BAt%2097%2C%201117%20Budapest&z=15&hl=hu&output=embed'
export const MAP_DIRECTIONS = 'https://www.google.com/maps/dir/?api=1&destination=Budafoki%20%C3%BAt%2097%2C%201117%20Budapest'

export const contactCards = [
  { icon: 'pin', title: 'Telephely', lines: ['1117 Budapest,', 'Budafoki út 97.'] },
  { icon: 'phone', title: 'Telefon & e-mail', links: [
    { label: '+36 1 445 4166', href: 'tel:+3614454166' },
    { label: 'info@debaru.hu', href: 'mailto:info@debaru.hu' },
  ] },
]
