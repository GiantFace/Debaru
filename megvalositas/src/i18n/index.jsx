// Könnyű, saját i18n réteg — nincs nehéz függőség.
// - HU a fő bundle-ben (0 késés az első festésnél)
// - EN/DE külön, lazy chunk (import()), idle-előtöltéssel → azonnali váltás
// - állapot-alapú: NINCS URL-váltás → a görgetési pozíció magától megmarad
// - hiányzó kulcsra HU-fallback, így részleges fordítás is biztonságos
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import huDict from './hu.json'

export const LANGS = ['HU', 'EN', 'DE']
const STORAGE_KEY = 'debaru-lang'

// Nem-alapértelmezett nyelvek lazy betöltői (külön chunk-ok).
const loaders = {
  EN: () => import('./en.json').then((m) => m.default),
  DE: () => import('./de.json').then((m) => m.default),
}
const cache = { HU: huDict }

function loadDict(lang) {
  if (cache[lang]) return Promise.resolve(cache[lang])
  const loader = loaders[lang]
  if (!loader) return Promise.resolve(huDict)
  return loader().then((d) => { cache[lang] = d; return d }).catch(() => huDict)
}

function resolvePath(dict, path) {
  return path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), dict)
}
function interpolate(val, vars) {
  if (typeof val !== 'string' || !vars) return val
  return val.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m))
}

// Fordító gyár egy adott szótárhoz: aktív szótár → HU-fallback → {var} interpoláció.
// A visszatérés lehet string, tömb (split-headline / listák) vagy objektum.
export function makeT(dict) {
  return (path, vars) => {
    let v = resolvePath(dict, path)
    if (v === undefined) v = resolvePath(huDict, path)
    if (v === undefined) return path // hiányzó kulcs → maga a kulcs (fejlesztői jelzés)
    return interpolate(v, vars)
  }
}

function normalize(l) {
  const up = String(l || '').toUpperCase()
  return LANGS.includes(up) ? up : 'HU'
}

const I18nContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('HU') // HU-first festés (bundle-ben)
  const [dict, setDict] = useState(huDict)

  // Mentett nyelv visszatöltése (nem-HU esetén async chunk).
  useEffect(() => {
    const stored = normalize(localStorage.getItem(STORAGE_KEY))
    document.documentElement.lang = stored.toLowerCase()
    if (stored !== 'HU') loadDict(stored).then((d) => { setDict(d); setLangState(stored) })
  }, [])

  // A többi nyelv előtöltése tétlen időben → a váltás azonnali (nincs várakozás).
  useEffect(() => {
    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 1200))
    const cancel = window.cancelIdleCallback || clearTimeout
    const id = idle(() => LANGS.forEach((l) => { if (l !== 'HU') loadDict(l) }))
    return () => cancel(id)
  }, [])

  const setLang = useCallback((l) => {
    const next = normalize(l)
    localStorage.setItem(STORAGE_KEY, next)
    document.documentElement.lang = next.toLowerCase()
    loadDict(next).then((d) => { setDict(d); setLangState(next) })
  }, [])

  const value = useMemo(() => ({ lang, dict, setLang }), [lang, dict, setLang])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useLang() {
  const { lang, setLang } = useContext(I18nContext)
  return { lang, setLang }
}

// t(path, vars) — nyelvre memoizált fordítófüggvény (HU-fallback + interpoláció).
export function useT() {
  const { dict } = useContext(I18nContext)
  return useMemo(() => makeT(dict), [dict])
}

// Nyers aktív szótár (a useContent összefésüléshez).
export function useDict() {
  return useContext(I18nContext).dict
}
