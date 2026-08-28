import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, margin: '-100px' },
}

const eventos = [
  { src: '/images/eventos-3anos.jpg', label: 'Cumpleaños infantil', description: 'Celebraciones familiares con detalles temáticos y postres a la medida.' },
  { src: '/images/eventos-halloween.jpg', label: 'Estacional · Otoño', description: 'Mesas curadas con paleta y sabores de temporada.' },
  { src: '/images/eventos-valentina.jpg', label: 'Primer año', description: 'Momentos únicos diseñados con dulzura y precisión.' },
  { src: '/images/eventos-otono.jpg', label: 'Halloween', description: 'Piezas temáticas con detalles cuidados hasta el último elemento.' },
  { src: '/images/eventos-navidad.jpg', label: 'Navidad', description: 'Mesas navideñas premium para cerrar el año con estilo.' },
  { src: '/images/eventos-perfumeria.jpg', label: 'Corporativo · Perfumería', description: 'Eventos corporativos de alta gama y branding integrado.' },
]

export default function Eventos() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-24 md:pt-52 md:pb-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/eventos-navidad.jpg" alt="Mesas de postres María Brie" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(250,248,245,0.55) 0%, rgba(250,248,245,0.3) 60%, rgba(250,248,245,0.95) 100%)' }} />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="mb-8 text-xs" style={{ letterSpacing: '0.4em', textTransform: 'uppercase', color: '#8FA8BF', fontWeight: 500 }}>— Eventos</div>
            <h1 className="mb-8" style={{ fontFamily: 'Montserrat', fontSize: 'clamp(40px, 6vw, 76px)', fontWeight: 200, letterSpacing: '0.02em', lineHeight: 1.05, color: '#2C3844' }}>
              Mesas y momentos<br />
              <span style={{ fontStyle: 'italic', fontWeight: 300 }}>que se quedan.</span>
            </h1>
            <p className="text-lg leading-relaxed max-w-xl" style={{ color: '#6B7A8A', fontWeight: 300 }}>
              Diseñamos mesas de postres y experiencias para bodas, cumpleaños, XV años, baby showers y eventos corporativos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* QUÉ OFRECEMOS */}
      <section className="py-24 md:py-32" style={{ background: '#FAF8F5' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <motion.div {...fadeUp} className="mb-16 max-w-2xl">
            <div className="mb-6 text-xs" style={{ letterSpacing: '0.4em', textTransform: 'uppercase', color: '#8FA8BF', fontWeight: 500 }}>— Qué ofrecemos</div>
            <h2 style={{ fontFamily: 'Montserrat', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 200, letterSpacing: '0.02em', lineHeight: 1.1, color: '#2C3844' }}>
              Dos formas de<br />
              <span style={{ fontStyle: 'italic', fontWeight: 300 }}>celebrar en grande.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            <motion.div {...fadeUp} className="rounded-2xl overflow-hidden" style={{ background: '#FFFFFF' }}>
              <div className="aspect-[4/3] overflow-hidden"><img src="/images/eventos-valentina.jpg" alt="Mesa de postres" className="w-full h-full object-cover" /></div>
              <div className="p-8 md:p-10">
                <div className="mb-3 text-xs" style={{ letterSpacing: '0.32em', textTransform: 'uppercase', color: '#8FA8BF', fontWeight: 500 }}>01</div>
                <h3 className="mb-4" style={{ fontFamily: 'Montserrat', fontSize: 24, fontWeight: 300, color: '#2C3844', letterSpacing: '0.01em', lineHeight: 1.2 }}>Mesas de postres</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#6B7A8A', fontWeight: 300 }}>Diseñadas a la medida de tu evento. Cada mesa se cura con variedad de postres artesanales, presentación estética alineada con tu paleta y estilo, y utensilios de servicio incluidos.</p>
                <ul className="space-y-2 text-sm" style={{ color: '#2C3844' }}>
                  <li>• Bodas y aniversarios</li>
                  <li>• Cumpleaños de 3 a 100 personas</li>
                  <li>• XV años y celebraciones especiales</li>
                </ul>
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="rounded-2xl overflow-hidden" style={{ background: '#FFFFFF' }}>
              <div className="aspect-[4/3] overflow-hidden"><img src="/images/eventos-perfumeria.jpg" alt="Eventos corporativos" className="w-full h-full object-cover" /></div>
              <div className="p-8 md:p-10">
                <div className="mb-3 text-xs" style={{ letterSpacing: '0.32em', textTransform: 'uppercase', color: '#8FA8BF', fontWeight: 500 }}>02</div>
                <h3 className="mb-4" style={{ fontFamily: 'Montserrat', fontSize: 24, fontWeight: 300, color: '#2C3844', letterSpacing: '0.01em', lineHeight: 1.2 }}>Eventos privados</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#6B7A8A', fontWeight: 300 }}>Postres para reuniones íntimas: baby showers, brunches, cumpleaños familiares o cualquier ocasión especial. Diseñamos propuestas para grupos desde 10 personas.</p>
                <ul className="space-y-2 text-sm" style={{ color: '#2C3844' }}>
                  <li>• Baby showers y bridals</li>
                  <li>• Brunches en casa</li>
                  <li>• Reuniones corporativas VIP</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="py-24 md:py-32" style={{ background: '#8FA8BF' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <motion.div {...fadeUp} className="mb-16 max-w-2xl">
            <div className="mb-6 text-xs" style={{ letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>— Un vistazo</div>
            <h2 style={{ fontFamily: 'Montserrat', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 200, letterSpacing: '0.02em', lineHeight: 1.15, color: '#FFFFFF' }}>
              Cada mesa,<br /><span style={{ fontStyle: 'italic', fontWeight: 300 }}>un momento único.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventos.map((e, i) => (
              <motion.div key={i} {...fadeUp} className="group">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] mb-4">
                  <img src={e.src} alt={e.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="text-xs mb-2" style={{ letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{e.label}</div>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 300 }}>{e.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="py-24 md:py-32" style={{ background: '#FAF8F5' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <motion.div {...fadeUp} className="mb-16 max-w-2xl">
            <div className="mb-6 text-xs" style={{ letterSpacing: '0.4em', textTransform: 'uppercase', color: '#8FA8BF', fontWeight: 500 }}>— Proceso</div>
            <h2 style={{ fontFamily: 'Montserrat', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 200, letterSpacing: '0.02em', lineHeight: 1.15, color: '#2C3844' }}>
              Del brief<br /><span style={{ fontStyle: 'italic', fontWeight: 300 }}>al último brindis.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { n: '01', t: 'Consulta', d: 'Nos cuentas del evento: tema, número de invitados, fecha y visión.' },
              { n: '02', t: 'Diseño', d: 'Curamos una propuesta alineada a tu evento y paleta de color.' },
              { n: '03', t: 'Cotización', d: 'Enviamos propuesta formal detallada con visualización.' },
              { n: '04', t: 'Montaje', d: 'Llegamos con tiempo, montamos y dejamos todo impecable.' },
            ].map((s) => (
              <motion.div key={s.n} {...fadeUp}>
                <div className="mb-4" style={{ fontFamily: 'Montserrat', fontSize: 40, fontWeight: 200, color: '#8FA8BF', lineHeight: 1 }}>{s.n}</div>
                <h3 className="mb-3" style={{ fontFamily: 'Montserrat', fontSize: 18, fontWeight: 400, color: '#2C3844' }}>{s.t}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7A8A', fontWeight: 300 }}>{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32" style={{ background: '#2C3844' }}>
        <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center">
          <motion.div {...fadeUp}>
            <h2 className="mb-6" style={{ fontFamily: 'Montserrat', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 200, letterSpacing: '0.02em', lineHeight: 1.15, color: '#FFFFFF' }}>
              ¿Estás planeando un evento?
            </h2>
            <p className="mb-10 max-w-lg mx-auto text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 300 }}>
              Cuéntanos los detalles y diseñamos una propuesta a la medida.
            </p>
            <Link to="/contacto" className="group inline-flex items-center gap-3 px-10 py-5 rounded-full transition-all" style={{ background: '#8FA8BF', color: '#FFFFFF', fontSize: 13, letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 500 }}>
              Cotizar mi evento
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
