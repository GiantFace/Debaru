import { useEffect } from 'react'

const ORIGIN = 'https://debaru.hu'

// Tetszőleges JSON-LD strukturált adat beszúrása a <head>-be (unmountra törli).
// Falsy adat esetén nem csinál semmit. A dep a szerializált tartalom, így csak
// akkor fut újra, ha ténylegesen változik (nem minden rendernél).
export function useJsonLd(data) {
  const json = data ? JSON.stringify(data) : null
  useEffect(() => {
    if (!json) return
    const el = document.createElement('script')
    el.type = 'application/ld+json'
    el.textContent = json
    document.head.appendChild(el)
    return () => el.remove()
  }, [json])
}

// BreadcrumbList strukturált adat morzsamenü-elemekből: [{ name, url? }, …]
export function breadcrumbLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      ...(it.url ? { item: ORIGIN + it.url } : {}),
    })),
  }
}
