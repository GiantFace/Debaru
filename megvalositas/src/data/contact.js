// Kapcsolat oldal tartalma (a terv kapcsolat.html alapján).

export const contactHead = {
  crumb: 'Kapcsolat',
  headPlaceholder: 'Fotó — iroda / telephely',
  title: ['Beszéljünk a', 'projektjéről.'],
  lede: 'Írja le röviden a feladatot, és mérnökeink 3 munkanapon belül visszajeleznek egy első szakmai állásfoglalással. A konzultáció díjmentes.',
}

export const contactAreas = [
  'Ipari automatizálás', 'Kapcsolószekrény-gyártás', 'SCADA & felügyelet',
  'Villamos energetika', 'Közlekedési rendszerek', 'Üzemeltetés & szerviz', 'Egyéb / nem tudom még',
]

// Opcionális gyors-választók (chipek).
export const budgets = ['< 5 M Ft', '5–20 M Ft', '20–50 M Ft', '50 M Ft felett', 'Nem tudom még']
export const timelines = ['Sürgős (< 1 hó)', '1–3 hónap', '3–6 hónap', 'Rugalmas']

// A telephely térkép-linkjei.
export const MAP_EMBED = 'https://maps.google.com/maps?q=Budafoki%20%C3%BAt%2097%2C%201117%20Budapest&z=15&hl=hu&output=embed'
export const MAP_DIRECTIONS = 'https://www.google.com/maps/dir/?api=1&destination=Budafoki%20%C3%BAt%2097%2C%201117%20Budapest'

export const contactCards = [
  { icon: 'pin', title: 'Telephely', lines: ['1117 Budapest,', 'Budafoki út 97.'] },
  { icon: 'phone', title: 'Telefon & e-mail', links: [
    { label: '+36 1 200 1234', href: 'tel:+3612001234' },
    { label: 'info@debaru.hu', href: 'mailto:info@debaru.hu' },
  ] },
  { icon: 'clock', title: 'Ügyelet', lines: ['Iroda: H–P 8:00–17:00', 'Hibaügyelet: 24/7'] },
]
