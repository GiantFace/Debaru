import { lazy, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Background } from './Background.jsx'
import { Navbar } from './Navbar.jsx'
import { Footer } from './Footer.jsx'
import { ScrollToTop } from './ScrollToTop.jsx'

// Süti-sáv lazy-vel — nem blokkolja a kezdeti betöltést.
const CookieBanner = lazy(() => import('../ui/CookieBanner.jsx'))

// Közös váz minden oldalhoz: háttér + nav + tartalom (Outlet) + footer.
// A lazy oldalak betöltéséig a nav/footer megmarad; a tartalomterület helyet tart.
export function Layout() {
  return (
    <>
      <ScrollToTop />
      <Background />
      <Navbar />
      <main>
        <Suspense fallback={<div style={{ minHeight: '70vh' }} />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <Suspense fallback={null}><CookieBanner /></Suspense>
    </>
  )
}
