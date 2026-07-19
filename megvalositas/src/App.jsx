import { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastProvider } from './hooks/useToast.jsx'
import { Layout } from './components/layout/Layout.jsx'

// Route-onkénti code-splitting — így pl. a telefon-lib csak a Kapcsolat oldallal töltődik.
const Home = lazy(() => import('./pages/Home.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Services = lazy(() => import('./pages/Services.jsx'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail.jsx'))
const Projects = lazy(() => import('./pages/Projects.jsx'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
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
            <Route path="/szolgaltatasok/:slug" element={<ServiceDetail />} />
            <Route path="/projektjeink" element={<Projects />} />
            <Route path="/projekt" element={<ProjectDetail />} />
            <Route path="/kapcsolat" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  )
}
