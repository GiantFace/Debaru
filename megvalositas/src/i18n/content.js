// useContent() — a data/ SZERKEZETET fésüli össze az aktív nyelv i18n
// SZÖVEGÉVEL. A komponensek ezt használják a strukturált listákhoz (services,
// később jobs, projektek stb.), így a szöveg csak a szótárban van, a szerkezet
// (id/slug/ikon/szám) a data/ modulokban.
import { useMemo } from 'react'
import { useDict, makeT } from './index.jsx'
import { services as serviceStruct } from '../data/services.js'

export function buildContent(dict) {
  const t = makeT(dict)
  return {
    // Szolgáltatások: slug + sorszám (szerkezet) + szöveg (services.items.<slug>)
    servicesHead: t('services.head'),
    services: serviceStruct.map((s) => ({ ...s, ...t(`services.items.${s.slug}`) })),
  }
}

export function useContent() {
  const dict = useDict()
  return useMemo(() => buildContent(dict), [dict])
}
