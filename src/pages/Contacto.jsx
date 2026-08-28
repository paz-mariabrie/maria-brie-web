import { motion } from 'framer-motion'
import { Mail, MessageCircle, Instagram, ArrowUpRight } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, margin: '-100px' },
}

export default function Contacto() {
  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-16 md:pt-52 md:pb-24" style={{ background: '#FAF8F5' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="mb-8 text-xs" style={{ letterSpacing: '0.4em', textTransform: 'uppercase', color: '#8FA8BF', fontWeight: 500 }}>— Contacto</div>
            <h1 className="mb-8" style={{ fontFamily: 'Montserrat', fontSize: 'clamp(40px, 6vw, 76px)', fontWeight: 200, letterSpacing: '0.02em', lineHeight: 1.05, color: '#2C3844' }}>
              Hacerlo bien también<br />
              <span style={{ fontStyle: 'italic', fontWeight: 300 }}>puede ser sencillo.</span>
            </h1>
            <p className="text-lg leading-relaxed max-w-xl" style={{ color: '#6B7A8A', fontWeight: 300 }}>
              Cuéntanos qué necesitas y diseñamos una propuesta a tu medida.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3 CANALES */}
      <section className="py-16 md:py-24" style={{ background: '#FAF8F5' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <ContactCard
              icon={Mail}
              label="Correo"
              value="comercial@maria-brie.com"
              action="Enviar correo"
              href="mailto:comercial@maria-brie.com"
              text="Respuesta en menos de 24 hrs."
            />
            <ContactCard
              icon={MessageCircle}
              label="WhatsApp"
              value="+52 55 7880 4384"
              action="Escribir ahora"
              href="https://wa.me/525578804384?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20María%20Brie"
              text="Directo con María, respuesta rápida."
              highlight
            />
            <ContactCard
              icon={Instagram}
              label="Instagram"
              value="@mariabrie"
              action="Ver más"
              href="https://instagram.com/mariabrie"
              text="Descubre nuestro portafolio."
            />
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="py-24 md:py-32" style={{ background: '#8FA8BF' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <motion.div {...fadeUp} className="mb-16 max-w-2xl">
            <div className="mb-6 text-xs" style={{ letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>— Cómo trabajamos</div>
            <h2 style={{ fontFamily: 'Montserrat', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 200, letterSpacing: '0.02em', lineHeight: 1.15, color: '#FFFFFF' }}>
              Del primer mensaje<br /><span style={{ fontStyle: 'italic', fontWeight: 300 }}>a la última entrega.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {[
              { n: '01', t: 'Consulta', d: 'Conversamos sobre tus necesidades y presupuesto.' },
              { n: '02', t: 'Propuesta', d: 'Diseñamos una solución a la medida y te la enviamos.' },
              { n: '03', t: 'Entrega', d: 'Recibes tu pedido fresco, puntual y bien presentado.' },
            ].map((step) => (
              <motion.div key={step.n} {...fadeUp}>
                <div className="mb-6" style={{ fontFamily: 'Montserrat', fontSize: 48, fontWeight: 200, color: 'rgba(255,255,255,0.4)', lineHeight: 1 }}>{step.n}</div>
                <h3 className="mb-3" style={{ fontFamily: 'Montserrat', fontSize: 20, fontWeight: 400, color: '#FFFFFF', letterSpacing: '0.02em' }}>{step.t}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 300 }}>{step.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="py-24 md:py-32" style={{ background: '#FAF8F5' }}>
        <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center">
          <motion.div {...fadeUp}>
            <p style={{ fontFamily: 'Montserrat', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 200, lineHeight: 1.15, color: '#2C3844', letterSpacing: '0.01em', fontStyle: 'italic' }}>
              "Porque en los detalles<br />se percibe el nivel."
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

function ContactCard({ icon: Icon, label, value, action, href, text, highlight }) {
  return (
    <motion.a {...fadeUp} href={href} target="_blank" rel="noopener noreferrer" className="group block rounded-2xl p-8 md:p-10 transition-all" style={{ background: highlight ? '#2C3844' : '#FFFFFF', color: highlight ? '#FFFFFF' : '#2C3844', border: highlight ? 'none' : '1.5px solid #EDF1F5' }}>
      <div className="mb-8 flex items-start justify-between">
        <div className="p-3 rounded-full" style={{ background: highlight ? 'rgba(143, 168, 191, 0.2)' : '#EDF1F5' }}>
          <Icon size={20} color={highlight ? '#8FA8BF' : '#8FA8BF'} />
        </div>
        <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" color={highlight ? 'rgba(255,255,255,0.5)' : '#8FA8BF'} />
      </div>
      <div className="mb-2 text-xs" style={{ letterSpacing: '0.28em', textTransform: 'uppercase', color: highlight ? 'rgba(255,255,255,0.6)' : '#8FA8BF', fontWeight: 500 }}>{label}</div>
      <div className="mb-3" style={{ fontFamily: 'Montserrat', fontSize: 18, fontWeight: 400, color: highlight ? '#FFFFFF' : '#2C3844' }}>{value}</div>
      <p className="text-sm leading-relaxed mb-8" style={{ color: highlight ? 'rgba(255,255,255,0.7)' : '#6B7A8A', fontWeight: 300 }}>{text}</p>
      <div className="text-xs" style={{ letterSpacing: '0.25em', textTransform: 'uppercase', color: highlight ? '#8FA8BF' : '#8FA8BF', fontWeight: 500 }}>{action} →</div>
    </motion.a>
  )
}
