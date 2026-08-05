import { lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ToastProvider } from './hooks/useToast.jsx'
import { Layout } from './components/layout/Layout.jsx'

// Route-onkénti code-splitting — így pl. a telefon-lib csak a Kapcsolat oldallal töltődik.
const Home = lazy(() => import('./pages/Home.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Services = lazy(() => import('./pages/Services.jsx'))
const Projects = lazy(() => import('./pages/Projects.jsx'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail.jsx'))
const Careers = lazy(() => import('./pages/Careers.jsx'))
const JobDetail = lazy(() => import('./pages/JobDetail.jsx'))
const JobApply = lazy(() => import('./pages/JobApply.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const Legal = lazy(() => import('./pages/Legal.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

// Útvonalak — közös Layout (nav + footer), alatta az oldalak.
export default function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/rolunk" element={<About />} />
            <Route path="/szolgaltatasok" element={<Services />} />
            {/* régi szolgáltatás-aloldalak → az áttekintőre (a kliens kérésére nincs külön aloldal) */}
            <Route path="/szolgaltatasok/:slug" element={<Navigate to="/szolgaltatasok" replace />} />
            <Route path="/projektjeink" element={<Projects />} />
            <Route path="/projektjeink/:slug" element={<ProjectDetail />} />
            <Route path="/karrier" element={<Careers />} />
            <Route path="/karrier/:slug" element={<JobDetail />} />
            <Route path="/karrier/:slug/jelentkezes" element={<JobApply />} />
            {/* régi útvonal → a BKV esettanulmányra irányítjuk */}
            <Route path="/projekt" element={<Navigate to="/projektjeink/bkv-etele-ter" replace />} />
            <Route path="/kapcsolat" element={<Contact />} />
            <Route path="/adatvedelem" element={<Legal doc="privacy" />} />
            <Route path="/aszf" element={<Legal doc="terms" />} />
            <Route path="/impresszum" element={<Legal doc="imprint" />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  )
}
