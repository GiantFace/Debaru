// useContent() — a data/ SZERKEZETET fésüli össze az aktív nyelv i18n
// SZÖVEGÉVEL. A komponensek ezt használják a strukturált listákhoz (services,
// később jobs, projektek stb.), így a szöveg csak a szótárban van, a szerkezet
// (id/slug/ikon/szám) a data/ modulokban.
import { useMemo } from 'react'
import { useDict, makeT } from './index.jsx'
import { services as serviceStruct } from '../data/services.js'
import { aboutStats, values as aboutValues, milestones as aboutMilestones, team as aboutTeam } from '../data/about.js'

// Szerkezet + index szerinti szöveg összefésülése (about.<key>[i]).
const mergeByIndex = (t, struct, key) => struct.map((s, i) => ({ ...s, ...t(`${key}.${i}`) }))

export function buildContent(dict) {
  const t = makeT(dict)
  return {
    // Szolgáltatások: slug + sorszám (szerkezet) + szöveg (services.items.<slug>)
    servicesHead: t('services.head'),
    services: serviceStruct.map((s) => ({ ...s, ...t(`services.items.${s.slug}`) })),

    // Rólunk: fej/story szöveg + index szerint fésült listák
    about: {
      head: t('about.head'),
      story: t('about.story'),
      stats: mergeByIndex(t, aboutStats, 'about.stats'),
      values: mergeByIndex(t, aboutValues, 'about.values'),
      milestones: mergeByIndex(t, aboutMilestones, 'about.milestones'),
      team: mergeByIndex(t, aboutTeam, 'about.team'),
    },
  }
}

export function useContent() {
  const dict = useDict()
  return useMemo(() => buildContent(dict), [dict])
}
