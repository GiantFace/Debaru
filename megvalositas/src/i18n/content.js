// useContent() — a data/ SZERKEZETET fésüli össze az aktív nyelv i18n
// SZÖVEGÉVEL. A komponensek ezt használják a strukturált listákhoz (services,
// később jobs, projektek stb.), így a szöveg csak a szótárban van, a szerkezet
// (id/slug/ikon/szám) a data/ modulokban.
import { useMemo } from 'react'
import { useDict, makeT } from './index.jsx'
import { services as serviceStruct } from '../data/services.js'
import { aboutStats, values as aboutValues, milestones as aboutMilestones, team as aboutTeam } from '../data/about.js'
import { projectFilters as projectFilterStruct, featuredProjects as featuredStruct, referenceList as referenceStruct } from '../data/projects.js'

// Szerkezet + index szerinti szöveg összefésülése (about.<key>[i]).
const mergeByIndex = (t, struct, key) => struct.map((s, i) => ({ ...s, ...t(`${key}.${i}`) }))

export function buildContent(dict) {
  const t = makeT(dict)

  // Kiemelt projektek: szerkezet (id/év/cégnév) + szöveg (projects.featured.<id>)
  const featured = featuredStruct.map((p) => ({ ...p, ...t(`projects.featured.${p.id}`) }))

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

    // Projektek: fej + szűrők + kiemeltek + teljes lista (proj/fel index szerint)
    projects: {
      head: t('projects.head'),
      filters: projectFilterStruct.map((f) => ({ key: f.key, label: t(`projects.filters.${f.key}`) })),
      catLabel: t('projects.catLabel'),
      accentLabel: t('projects.accentLabel'),
      featured,
      featuredById: Object.fromEntries(featured.map((p) => [p.id, p])),
      reference: referenceStruct.map((r, i) => ({ ...r, ...t(`projects.reference.${i}`) })),
    },
  }
}

export function useContent() {
  const dict = useDict()
  return useMemo(() => buildContent(dict), [dict])
}
