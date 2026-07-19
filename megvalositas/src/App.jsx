import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastProvider } from './hooks/useToast.jsx'
import { Layout } from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Contact from './pages/Contact.jsx'

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
            <Route path="/projektjeink" element={<Projects />} />
            <Route path="/projekt" element={<ProjectDetail />} />
            <Route path="/kapcsolat" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  )
}
