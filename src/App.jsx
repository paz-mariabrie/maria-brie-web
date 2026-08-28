import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Empresas from './pages/Empresas'
import Eventos from './pages/Eventos'
import Postres from './pages/Postres'
import Contacto from './pages/Contacto'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div style={{ background: '#FAF8F5' }}>
      <ScrollToTop />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/postres" element={<Postres />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
