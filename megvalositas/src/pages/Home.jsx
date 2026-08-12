import { Hero } from '../components/sections/Hero.jsx'
import { RefStrip } from '../components/sections/RefStrip.jsx'
import { Bento } from '../components/sections/Bento.jsx'
import { VideoBand } from '../components/sections/VideoBand.jsx'
import { Process } from '../components/sections/Process.jsx'
import { Faq } from '../components/sections/Faq.jsx'
import { Cta } from '../components/sections/Cta.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { useT } from '../i18n/index.jsx'

// Kezdőlap — a szekciók az eredeti index.html sorrendjét követik.
export default function Home() {
  const t = useT()
  useDocumentTitle(t('home.meta.title'), t('home.meta.desc'))
  return (
    <>
      <Hero />
      <RefStrip />
      <Bento />
      <VideoBand videoId="5SEyZPixMFk" eyebrow={t('home.video.eyebrow')} title={t('home.video.title')} />
      <hr className="divider" />
      <Process />
      <hr className="divider" />
      <Faq />
      <Cta />
    </>
  )
}
