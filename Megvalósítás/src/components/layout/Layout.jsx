import { Outlet } from 'react-router-dom'
import { Background } from './Background.jsx'
import { Navbar } from './Navbar.jsx'
import { Footer } from './Footer.jsx'
import { ScrollToTop } from './ScrollToTop.jsx'

// Közös váz minden oldalhoz: háttér + nav + tartalom (Outlet) + footer.
export function Layout() {
  return (
    <>
      <ScrollToTop />
      <Background />
      <Navbar />
      <main><Outlet /></main>
      <Footer />
    </>
  )
}
