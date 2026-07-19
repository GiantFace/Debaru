import { useEffect, useRef, useState } from 'react'

// Egyedi görgetősáv: a natív scrollbar rejtve; ez a jobb szélen jelenik meg,
// ha az egér oda ér vagy görgetéskor. Halvány sín + vékony, húzható zöld csúszka.
const EDGE = 48 // ennyivel a jobb szél előtt jelenik meg
const INSET = 8 // sín felső/alsó behúzása
const MIN_THUMB = 44 // csúszka minimális magassága (könnyen megfogható)

export function CustomScrollbar() {
  const [show, setShow] = useState(false)
  const thumbRef = useRef(null)
  const flags = useRef({ near: false, dragging: false, scrolling: false })
  const hideT = useRef(null)

  useEffect(() => {
    const doc = document.documentElement
    const thumb = thumbRef.current
    if (!thumb) return

    const sync = () => setShow(flags.current.near || flags.current.dragging || flags.current.scrolling)

    // csúszka pozíció/magasság a görgetésből (húzás közben a drag kezeli — ne írjuk felül)
    const layout = () => {
      if (flags.current.dragging) return
      const vh = doc.clientHeight
      const sh = doc.scrollHeight
      const trackH = vh - INSET * 2
      if (sh <= vh + 1) { thumb.style.opacity = '0'; return }
      thumb.style.opacity = ''
      const thumbH = Math.max(MIN_THUMB, (vh / sh) * trackH)
      const maxTop = trackH - thumbH
      const top = maxTop * (window.scrollY / (sh - vh))
      thumb.style.height = `${thumbH}px`
      thumb.style.transform = `translateY(${top}px)`
    }

    let raf = null
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(() => { layout(); raf = null })
      flags.current.scrolling = true; sync()
      clearTimeout(hideT.current)
      hideT.current = setTimeout(() => { flags.current.scrolling = false; sync() }, 1100)
    }
    const onMove = (e) => {
      const near = window.innerWidth - e.clientX <= EDGE
      if (near !== flags.current.near) { flags.current.near = near; sync() }
    }
    const onResize = () => layout()

    layout()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('resize', onResize)
    // az oldalmagasság változásaira (lazy tartalom, reveal) is frissítsük a csúszkát
    const ro = new ResizeObserver(() => layout())
    ro.observe(document.body)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', onResize)
      ro.disconnect()
      clearTimeout(hideT.current)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  // csúszka húzása — a csúszkát KÖZVETLENÜL mozgatjuk (1:1 az egérrel), és a
  // görgetést azonnalira kapcsoljuk (a globális smooth-scroll ne lassítsa)
  const onDown = (e) => {
    e.preventDefault()
    const doc = document.documentElement
    const thumb = thumbRef.current
    const vh = doc.clientHeight
    const sh = doc.scrollHeight
    const trackH = vh - INSET * 2
    const thumbH = Math.max(MIN_THUMB, (vh / sh) * trackH)
    const maxTop = trackH - thumbH
    const range = sh - vh
    const startY = e.clientY
    const startTop = range > 0 ? maxTop * (window.scrollY / range) : 0

    flags.current.dragging = true
    setShow(true)
    document.body.style.userSelect = 'none'
    const prevBehavior = doc.style.scrollBehavior
    doc.style.scrollBehavior = 'auto' // azonnali görgetés húzás közben

    const move = (ev) => {
      const top = Math.max(0, Math.min(maxTop, startTop + (ev.clientY - startY)))
      thumb.style.transform = `translateY(${top}px)` // azonnali vizuális követés
      window.scrollTo(0, maxTop > 0 ? (top / maxTop) * range : 0)
    }
    const up = () => {
      flags.current.dragging = false
      setShow(flags.current.near)
      document.body.style.userSelect = ''
      doc.style.scrollBehavior = prevBehavior
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseup', up)
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseup', up)
  }

  return (
    <div className={`custom-sb${show ? ' show' : ''}`} aria-hidden="true">
      <div className="custom-sb-track" />
      <div className="custom-sb-thumb" ref={thumbRef} onMouseDown={onDown} />
    </div>
  )
}
