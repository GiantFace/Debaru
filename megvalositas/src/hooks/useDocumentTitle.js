import { useEffect } from 'react'

// Oldalankénti <title> beállítása (SEO). Elhagyáskor visszaáll az alap címre.
const BASE = 'Debaru Kft.'
export function useDocumentTitle(title) {
  useEffect(() => {
    const prev = document.title
    document.title = title ? `${title} — ${BASE}` : BASE
    return () => { document.title = prev }
  }, [title])
}
