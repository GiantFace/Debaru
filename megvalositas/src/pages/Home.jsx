import { Hero } from '../components/sections/Hero.jsx'
import { RefStrip } from '../components/sections/RefStrip.jsx'
import { Bento } from '../components/sections/Bento.jsx'
import { FeaturedProjects } from '../components/sections/FeaturedProjects.jsx'
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
      <Sectors />
      <hr className="divider" />
      <Process />
      <hr className="divider" />
      <Faq />
      <Cta />
    </>
  )
}
