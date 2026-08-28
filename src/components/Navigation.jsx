import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Wordmark from './Wordmark'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/empresas', label: 'Empresas' },
  { to: '/eventos', label: 'Eventos' },
  { to: '/postres', label: 'Postres' },
  { to: 'https://lunchbox.mariabrie.com.mx', label: 'Lunch Box', external: true },
  { to: '/contacto', label: 'Contacto' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(250, 248, 245, 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(143, 168, 191, 0.1)' : '1px solid transparent',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <Wordmark small />

          {/* Menú desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => {
              const isActive = !link.external && location.pathname === link.to
              const isLunchBox = link.label === 'Lunch Box'

              if (link.external) {
                return (
                  <a
                    key={link.to}
                    href={link.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-widest font-medium transition-colors relative"
                    style={{
                      color: isLunchBox ? '#8FA8BF' : '#2C3844',
                      letterSpacing: '0.22em',
                    }}
                  >
                    {link.label}
                    {isLunchBox && (
                      <span
                        className="absolute -top-2 -right-3 w-1.5 h-1.5 rounded-full"
                        style={{ background: '#D4A574' }}
                      />
                    )}
                  </a>
                )
              }
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-xs uppercase tracking-widest font-medium transition-colors relative"
                  style={{
                    color: isActive ? '#8FA8BF' : '#2C3844',
                    letterSpacing: '0.22em',
                  }}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute -bottom-2 left-0 right-0 h-px"
                      style={{ background: '#8FA8BF' }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Menú móvil - botón */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {menuOpen ? (
              <X size={22} color="#2C3844" />
            ) : (
              <Menu size={22} color="#2C3844" />
            )}
          </button>
        </div>
      </nav>

      {/* Menú móvil - overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ background: '#FAF8F5', paddingTop: '80px' }}
          >
            <div className="flex flex-col items-center gap-8 pt-16">
              {links.map((link) => {
                if (link.external) {
                  return (
                    <a
                      key={link.to}
                      href={link.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg uppercase tracking-widest font-light relative"
                      style={{
                        color: '#8FA8BF',
                        letterSpacing: '0.3em',
                      }}
                    >
                      {link.label}
                    </a>
                  )
                }
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-lg uppercase tracking-widest font-light"
                    style={{
                      color: location.pathname === link.to ? '#8FA8BF' : '#2C3844',
                      letterSpacing: '0.3em',
                    }}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
