// Rólunk oldal — SZERKEZET. A szövegek az i18n szótárban élnek (about.*).
// A tulajdonnevek (vezetők neve) itt maradnak.

// Statisztikák: szám + suffix (szerkezet); a 4. szöveges (text). Felirat: about.stats[i].
export const aboutStats = [
  { to: 17, suffix: '+' },
  { to: 100, suffix: '+' },
  { to: 15, suffix: '+' },
  { text: true },
]

// Értékek: ikon-kulcs (szerkezet); cím/leírás: about.values[i].
export const values = [
  { icon: 'shield' },
  { icon: 'clock' },
  { icon: 'gear' },
  { icon: 'wrench' },
]

// Mérföldkövek: évszám (szerkezet); cím/leírás: about.milestones[i].
export const milestones = [
  { year: '2008' },
  { year: '2010' },
  { year: '2014' },
  { year: '2016' },
  { year: '2017' },
  { year: '2024' },
  { year: '2025' },
]

// Vezetőség: a név tulajdonnév (szerkezet); a pozíció: about.team[i].role.
export const team = [
  { name: 'Takács Gergő' },
  { name: 'Barcsa Levente Koppány' },
]
