import { useEffect, useRef, useState } from 'react'
import { Reveal } from '../ui/Reveal.jsx'
import { Arrow, Play, Pause } from '../ui/Icons.jsx'

// Háttérvideó paraméterek: némán, automatikusan, loopolva, vezérlők nélkül.
// enablejsapi=1 → a saját szüneteltető gombunk postMessage-dzsel vezérli a lejátszást.
const BG = 'autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&fs=0&iv_load_policy=3&enablejsapi=1'

// Full-bleed háttérvideó-sáv. Teljesítmény: a poszter azonnal látszik, a nehéz
// YouTube-iframe (~900KB) CSAK akkor töltődik, amikor a sáv a nézetbe ér — így
// nem terheli a kezdeti oldalbetöltést. A néma videó "csökkentett mozgás" esetén is
// elindul, de kézzel szüneteltethető (WCAG 2.2.2 — a mozgás megállítható).
export function VideoBand({ videoId, start = 0, eyebrow, title, watchLabel = 'Teljes videó a YouTube-on' }) {
  const watch = `https://www.youtube.com/watch?v=${videoId}`
  const src = `https://www.youtube-nocookie.com/embed/${videoId}?${BG}&loop=1&playlist=${videoId}${start ? `&start=${start}` : ''}`
  const thumb = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  const ref = useRef(null)
  const iframeRef = useRef(null)
  const [load, setLoad] = useState(false)
  const [playing, setPlaying] = useState(true)

  useEffect(() => {
    if (load) return
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => { if (entries.some((e) => e.isIntersecting)) { setLoad(true); io.disconnect() } },
      { rootMargin: '250px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [load])

  // Szüneteltetés/folytatás a YouTube iframe-nek postMessage-dzsel (enablejsapi=1).
  const toggle = () => {
    const win = iframeRef.current?.contentWindow
    if (!win) return
    const func = playing ? 'pauseVideo' : 'playVideo'
    win.postMessage(JSON.stringify({ event: 'command', func, args: [] }), '*')
    setPlaying(!playing)
  }

  return (
    <section className="video-band" ref={ref}>
      <div className="vb-poster-bg" style={{ backgroundImage: `url(${thumb})` }} aria-hidden="true" />
      {load && (
        <iframe
          ref={iframeRef}
          className="vb-iframe"
          src={src}
          title={title || 'Debaru bemutató videó'}
          allow="autoplay; encrypted-media; picture-in-picture"
        />
      )}
      <div className="vb-scrim" />
      {load && (
        <button type="button" className="vb-toggle" onClick={toggle} aria-label={playing ? 'Videó szüneteltetése' : 'Videó lejátszása'}>
          {playing ? <Pause /> : <Play />}
        </button>
      )}
      <div className="vb-inner wrap">
        {eyebrow && <Reveal className="eyebrow">{eyebrow}</Reveal>}
        {title && <Reveal as="h2" delay={80}>{title}</Reveal>}
        <Reveal delay={160}>
          <a className="btn btn-outline-light btn-arrow" href={watch} target="_blank" rel="noopener noreferrer">{watchLabel}<Arrow /></a>
        </Reveal>
      </div>
    </section>
  )
}
