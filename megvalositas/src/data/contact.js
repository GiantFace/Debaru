// Kapcsolat oldal — SZERKEZET. A szövegek az i18n szótárban élnek (contact.*, forms.*).
// A telephely-cím, telefon, e-mail és a térkép-URL tulajdonnév/szerkezet — itt maradnak.

// A telephely térkép-linkjei.
export const MAP_EMBED = 'https://maps.google.com/maps?q=Budafoki%20%C3%BAt%2097%2C%201117%20Budapest&z=15&hl=hu&output=embed'
export const MAP_DIRECTIONS = 'https://www.google.com/maps/dir/?api=1&destination=Budafoki%20%C3%BAt%2097%2C%201117%20Budapest'

// Elérhetőség-kártyák — ikon + cím-kulcs (i18n) + tulajdonnév (cím/telefon/e-mail).
export const contactCards = [
  { icon: 'pin', titleKey: 'contact.cards.location', lines: ['1117 Budapest,', 'Budafoki út 97.'] },
  { icon: 'phone', titleKey: 'contact.cards.phone', links: [
    { label: '+36 1 445 4166', href: 'tel:+3614454166' },
    { label: 'info@debaru.hu', href: 'mailto:info@debaru.hu' },
  ] },
]
