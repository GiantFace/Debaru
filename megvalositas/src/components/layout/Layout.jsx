import { lazy, Suspense, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Background } from './Background.jsx'
import { Navbar } from './Navbar.jsx'
import { Footer } from './Footer.jsx'
import { ScrollToTop } from './ScrollToTop.jsx'
import { ScrollProgress } from './ScrollProgress.jsx'
import { CustomScrollbar } from './CustomScrollbar.jsx'

// Süti-sáv lazy-vel — nem blokkolja a kezdeti betöltést.
const CookieBanner = lazy(() => import('../ui/CookieBanner.jsx'))

// Közös váz. A footer fixen alul van, a tartalom (page-shell) fölécsúszik és
// görgetéskor feltárul — ezért a page-shell alsó margója = a footer magassága.
export function Layout() {
  useEffect(() => {
    const shell = document.querySelector('.page-shell')
    const footer = document.querySelector('.footer')
    if (!shell || !footer) return
    const apply = () => { shell.style.marginBottom = `${footer.offsetHeight}px` }
    apply()
    const ro = new ResizeObserver(apply)
    ro.observe(footer)
    window.addEventListener('resize', apply)
    return () => { ro.disconnect(); window.removeEventListener('resize', apply) }
  }, [])

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <ScrollProgress />
      <CustomScrollbar />
      <div className="page-shell">
        <Background />
        <main>
          <Suspense fallback={<div style={{ minHeight: '70vh' }} />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
      <Footer />
      <Suspense fallback={null}><CookieBanner /></Suspense>
    </>
  )
}
