import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, margin: '-100px' },
}

const catalogo = [
  { src: '/images/postres-cupcakes-pascua.jpg', name: 'Cupcakes', desc: 'Vainilla, chocolate y estacionales' },
  { src: '/images/postres-cake-vainilla.jpg', name: 'Cakes clásicos', desc: 'Vainilla, chocolate y sabores por encargo' },
  { src: '/images/postres-tiramisu.jpg', name: 'Tiramisú', desc: 'Individual o para compartir' },
  { src: '/images/postres-panque-peras.jpg', name: 'Panqués', desc: 'Peras caramelizadas, plátano y más' },
  { src: '/images/postres-galletas.jpg', name: 'Galletas', desc: 'Chispas de chocolate, nueces y clásicas' },
  { src: '/images/postres-galleta-partida.jpg', name: 'Galletas premium', desc: 'Con chispas doradas y textura perfecta' },
  { src: '/images/postres-donuts.jpg', name: 'Donuts', desc: 'Clásicas y opción proteína' },
]

export default function Postres() {
  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-20 md:pt-52 md:pb-32" style={{ background: '#FAF8F5' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="mb-8 text-xs" style={{ letterSpacing: '0.4em', textTransform: 'uppercase', color: '#8FA8BF', fontWeight: 500 }}>— Postres</div>
            <h1 className="mb-8" style={{ fontFamily: 'Montserrat', fontSize: 'clamp(40px, 6vw, 76px)', fontWeight: 200, letterSpacing: '0.02em', lineHeight: 1.05, color: '#2C3844' }}>
              Repostería artesanal<br />
              <span style={{ fontStyle: 'italic', fontWeight: 300 }}>por encargo.</span>
            </h1>
            <p className="text-lg leading-relaxed max-w-xl" style={{ color: '#6B7A8A', fontWeight: 300 }}>
              Cakes, cupcakes, brownies, galletas, tiramisú, panqués. Todo horneado con ingredientes seleccionados y presentado con cuidado.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GALERÍA CATÁLOGO */}
      <section className="py-16 md:py-24" style={{ background: '#FAF8F5' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {catalogo.map((item, i) => (
              <motion.div key={i} {...fadeUp} className="group">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] mb-4">
                  <img src={item.src} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="mb-2" style={{ fontFamily: 'Montserrat', fontSize: 18, fontWeight: 400, color: '#2C3844', letterSpacing: '0.02em' }}>{item.name}</h3>
                <p className="text-sm" style={{ color: '#6B7A8A', fontWeight: 300 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeUp} className="mt-16 text-center text-base italic" style={{ color: '#6B7A8A', fontWeight: 300 }}>
            ¿Buscas algo específico? Cotizamos pasteles y postres por encargo con diseños y sabores personalizados.
          </motion.p>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="py-24 md:py-32" style={{ background: '#8FA8BF' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <motion.div {...fadeUp} className="mb-16 max-w-2xl">
            <div className="mb-6 text-xs" style={{ letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>— Categorías</div>
            <h2 style={{ fontFamily: 'Montserrat', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 200, letterSpacing: '0.02em', lineHeight: 1.15, color: '#FFFFFF' }}>
              Tres líneas.<br />
              <span style={{ fontStyle: 'italic', fontWeight: 300 }}>Un mismo estándar.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Clásicos', items: ['Cupcakes de vainilla', 'Panqué de plátano', 'Brownies', 'Galletas chispas de chocolate'] },
              { title: 'Indulgentes', items: ['Tiramisú', 'Pastel zanahoria y chocolate', 'Pastel de coco', 'Galletas chispas y nueces'] },
              { title: 'Conscientes', items: ['Donuts proteína', 'Pastel vainilla (sin huevo)', 'Pastel calabaza (sin lácteos)', 'Opciones balanceadas'] },
            ].map((c, i) => (
              <motion.div key={i} {...fadeUp} className="rounded-2xl p-8" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
                <h3 className="mb-6" style={{ fontFamily: 'Montserrat', fontSize: 22, fontWeight: 400, color: '#FFFFFF', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{c.title}</h3>
                <ul className="space-y-3">
                  {c.items.map((item) => (
                    <li key={item} className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 300 }}>· {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO PEDIR */}
      <section className="py-24 md:py-32" style={{ background: '#FAF8F5' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <motion.div {...fadeUp} className="mb-16 max-w-2xl">
            <div className="mb-6 text-xs" style={{ letterSpacing: '0.4em', textTransform: 'uppercase', color: '#8FA8BF', fontWeight: 500 }}>— Cómo pedir</div>
            <h2 style={{ fontFamily: 'Montserrat', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 200, letterSpacing: '0.02em', lineHeight: 1.15, color: '#2C3844' }}>
              Tres pasos.<br /><span style={{ fontStyle: 'italic', fontWeight: 300 }}>Fresco y a tiempo.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {[
              { n: '01', t: 'Elige', d: 'Selecciona el postre y compártenos cuántas piezas necesitas.' },
              { n: '02', t: 'Cotiza', d: 'Enviamos cotización y tiempo de entrega en menos de 24 horas.' },
              { n: '03', t: 'Recibe', d: 'Entregamos tu pedido fresco, empacado con cuidado y puntual.' },
            ].map((step) => (
              <motion.div key={step.n} {...fadeUp}>
                <div className="mb-6" style={{ fontFamily: 'Montserrat', fontSize: 48, fontWeight: 200, color: '#8FA8BF', lineHeight: 1 }}>{step.n}</div>
                <h3 className="mb-3" style={{ fontFamily: 'Montserrat', fontSize: 20, fontWeight: 400, color: '#2C3844' }}>{step.t}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7A8A', fontWeight: 300 }}>{step.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center">
          <motion.div {...fadeUp}>
            <h2 className="mb-6" style={{ fontFamily: 'Montserrat', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 200, letterSpacing: '0.02em', lineHeight: 1.15, color: '#2C3844' }}>
              ¿Antojaste algo?
            </h2>
            <p className="mb-10 text-base leading-relaxed" style={{ color: '#6B7A8A', fontWeight: 300 }}>
              Escríbenos por WhatsApp y coordinamos tu pedido.
            </p>
            <a href="https://wa.me/525578804384?text=Hola,%20quisiera%20cotizar%20un%20pedido%20de%20postres" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 px-10 py-5 rounded-full transition-all" style={{ background: '#8FA8BF', color: '#FFFFFF', fontSize: 13, letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 500 }}>
              Cotizar por WhatsApp
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
