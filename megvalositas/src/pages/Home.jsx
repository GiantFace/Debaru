import { Hero } from '../components/sections/Hero.jsx'
import { RefStrip } from '../components/sections/RefStrip.jsx'
import { Bento } from '../components/sections/Bento.jsx'
import { FeaturedProjects } from '../components/sections/FeaturedProjects.jsx'
import { VideoBand } from '../components/sections/VideoBand.jsx'
import { Sectors } from '../components/sections/Sectors.jsx'
import { Process } from '../components/sections/Process.jsx'
import { Faq } from '../components/sections/Faq.jsx'
import { Cta } from '../components/sections/Cta.jsx'

// Kezdőlap — a szekciók az eredeti index.html sorrendjét követik.
export default function Home() {
  return (
    <>
      <Hero />
      <RefStrip />
      <Bento />
      <FeaturedProjects />
      <VideoBand videoId="5SEyZPixMFk" eyebrow="Kiemelt referencia" title="BKV Etele téri villamos-végállomás" />
      <Sectors />
      <hr className="divider" />
      <Process />
      <hr className="divider" />
      <Faq />
      <Cta />
    </>
  )
}
