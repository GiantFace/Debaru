import { Hero } from '../components/sections/Hero.jsx'
import { RefStrip } from '../components/sections/RefStrip.jsx'
import { Bento } from '../components/sections/Bento.jsx'
import { VideoBand } from '../components/sections/VideoBand.jsx'
import { Process } from '../components/sections/Process.jsx'
import { Faq } from '../components/sections/Faq.jsx'
import { Cta } from '../components/sections/Cta.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'

// Kezdőlap — a szekciók az eredeti index.html sorrendjét követik.
export default function Home() {
  useDocumentTitle('Ipari automatizálás és villamos rendszerek', 'Ipari automatizálás, villamos energetika és vezérléstechnika egy kézben — tervezés, kapcsolószekrény-gyártás, SCADA és kivitelezés a koncepciótól a folyamatos üzemig.')
  return (
    <>
      <Hero />
      <RefStrip />
      <Bento />
      <VideoBand videoId="5SEyZPixMFk" eyebrow="Kiemelt referencia" title="BKV Etele téri villamos-végállomás" />
      <hr className="divider" />
      <Process />
      <hr className="divider" />
      <Faq />
      <Cta />
    </>
  )
}
