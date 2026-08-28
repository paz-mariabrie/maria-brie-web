import { Link } from 'react-router-dom'
import { Instagram, Mail, Phone } from 'lucide-react'
import Wordmark from './Wordmark'

export default function Footer() {
  return (
    <footer style={{ background: '#8FA8BF', color: '#FFFFFF' }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">
          {/* Marca */}
          <div className="md:col-span-2">
            <Wordmark light small />
            <p
              className="mt-6 max-w-sm text-sm leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.85)' }}
            >
              Repostería artesanal para empresas, eventos y familias que
              cuidan cada detalle.
            </p>
            <div className="mt-8 flex flex-col gap-3 text-sm">
              <a
                href="mailto:comercial@maria-brie.com"
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                style={{ color: '#FFFFFF' }}
              >
                <Mail size={14} />
                comercial@maria-brie.com
              </a>
              <a
                href="https://wa.me/525578804384"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                style={{ color: '#FFFFFF' }}
              >
                <Phone size={14} />
                +52 55 7880 4384
              </a>
              <a
                href="https://instagram.com/mariabrie"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                style={{ color: '#FFFFFF' }}
              >
                <Instagram size={14} />
                @mariabrie
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <div
              className="text-xs mb-5"
              style={{
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.7)',
                fontWeight: 500,
              }}
            >
              Servicios
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/empresas" className="hover:opacity-70 transition-opacity" style={{ color: '#FFFFFF' }}>
                  Empresas
                </Link>
              </li>
              <li>
                <Link to="/eventos" className="hover:opacity-70 transition-opacity" style={{ color: '#FFFFFF' }}>
                  Eventos
                </Link>
              </li>
              <li>
                <Link to="/postres" className="hover:opacity-70 transition-opacity" style={{ color: '#FFFFFF' }}>
                  Postres
                </Link>
              </li>
              <li>
                <a
                  href="https://lunchbox.mariabrie.com.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                  style={{ color: '#FFFFFF' }}
                >
                  Lunch Box
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <div
              className="text-xs mb-5"
              style={{
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.7)',
                fontWeight: 500,
              }}
            >
              María Brie
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/nosotros" className="hover:opacity-70 transition-opacity" style={{ color: '#FFFFFF' }}>
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:opacity-70 transition-opacity" style={{ color: '#FFFFFF' }}>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Cierre */}
        <div
          className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}
        >
          <div className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>
            © {new Date().getFullYear()} María Brie. Todos los derechos reservados.
          </div>
          <div className="text-xs italic" style={{ color: 'rgba(255,255,255,0.6)' }}>
            "En los detalles se percibe el nivel."
          </div>
        </div>
      </div>
    </footer>
  )
}
