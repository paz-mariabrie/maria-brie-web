import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, margin: '-100px' },
}

export default function Nosotros() {
  return (
    <>
      {/* HERO */}
      <section
        className="pt-40 pb-20 md:pt-48 md:pb-32"
        style={{ background: '#FAF8F5' }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div
              className="mb-8 text-xs"
              style={{
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: '#8FA8BF',
                fontWeight: 500,
              }}
            >
              — Nosotros
            </div>
            <h1
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(40px, 6vw, 76px)',
                fontWeight: 200,
                letterSpacing: '0.02em',
                lineHeight: 1.05,
                color: '#2C3844',
              }}
            >
              Repostería que<br />
              <span style={{ fontStyle: 'italic', fontWeight: 300 }}>
                reconoce, celebra
              </span>
              <br />
              y conecta.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* IMAGEN + TEXTO PRINCIPAL */}
      <section className="pb-24 md:pb-32" style={{ background: '#FAF8F5' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div {...fadeUp} className="rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src="/images/postres-cake-vainilla.jpg"
                alt="Cake artesanal María Brie"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div {...fadeUp}>
              <div
                className="mb-6 text-xs"
                style={{
                  letterSpacing: '0.4em',
                  textTransform: 'uppercase',
                  color: '#8FA8BF',
                  fontWeight: 500,
                }}
              >
                — Quiénes somos
              </div>
              <h2
                className="mb-8"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  fontWeight: 200,
                  letterSpacing: '0.02em',
                  lineHeight: 1.15,
                  color: '#2C3844',
                }}
              >
                Diseñamos experiencias dulces con{' '}
                <span style={{ fontStyle: 'italic' }}>propósito.</span>
              </h2>
              <div className="space-y-5 text-base leading-relaxed" style={{ color: '#6B7A8A', fontWeight: 300 }}>
                <p>
                  En <strong style={{ color: '#2C3844', fontWeight: 500 }}>María Brie</strong> creemos
                  que los vínculos más sólidos se fortalecen a través de gestos bien pensados.
                </p>
                <p>
                  Por eso nuestra repostería artesanal va más allá de un postre: es una
                  herramienta para <strong style={{ color: '#2C3844', fontWeight: 500 }}>honrar a las personas, celebrar momentos clave</strong> y elevar
                  cada experiencia corporativa o personal.
                </p>
                <p>
                  Cada pieza se elabora de manera artesanal, con ingredientes de la más alta
                  calidad y un cuidado absoluto en sabor, estética y presentación.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRES PILARES */}
      <section className="py-24 md:py-32" style={{ background: '#8FA8BF' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <motion.div {...fadeUp} className="mb-16 md:mb-20 text-center max-w-2xl mx-auto">
            <div
              className="mb-6 text-xs"
              style={{
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.8)',
                fontWeight: 500,
              }}
            >
              — Nuestros principios
            </div>
            <h2
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 200,
                letterSpacing: '0.02em',
                lineHeight: 1.15,
                color: '#FFFFFF',
              }}
            >
              Tres cosas que cuidamos<br />
              <span style={{ fontStyle: 'italic', fontWeight: 300 }}>
                en cada entrega.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {[
              {
                number: '01',
                title: 'Artesanal',
                text: 'Cada pieza se elabora a mano, en lotes pequeños, con la receta y el tiempo que cada postre necesita.',
              },
              {
                number: '02',
                title: 'Alta calidad',
                text: 'Ingredientes seleccionados con cuidado. Sin conservantes innecesarios ni atajos que comprometan el sabor.',
              },
              {
                number: '03',
                title: 'Puntualidad',
                text: 'Frescura y entrega impecable. Llegamos en el momento acordado, con el producto en perfectas condiciones.',
              },
            ].map((pilar) => (
              <motion.div key={pilar.number} {...fadeUp}>
                <div
                  className="mb-6"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 48,
                    fontWeight: 200,
                    color: 'rgba(255,255,255,0.4)',
                    lineHeight: 1,
                  }}
                >
                  {pilar.number}
                </div>
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 22,
                    fontWeight: 400,
                    color: '#FFFFFF',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  {pilar.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 300 }}
                >
                  {pilar.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FRASE GRANDE */}
      <section className="py-24 md:py-40" style={{ background: '#FAF8F5' }}>
        <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center">
          <motion.div {...fadeUp}>
            <div
              className="mb-8 text-xs"
              style={{
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: '#8FA8BF',
                fontWeight: 500,
              }}
            >
              — Nuestra convicción
            </div>
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(32px, 5vw, 64px)',
                fontWeight: 200,
                lineHeight: 1.15,
                color: '#2C3844',
                letterSpacing: '0.01em',
                fontStyle: 'italic',
              }}
            >
              "Porque en los detalles<br />
              se percibe el nivel."
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center">
          <motion.div {...fadeUp}>
            <h2
              className="mb-10"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 200,
                lineHeight: 1.15,
                color: '#2C3844',
                letterSpacing: '0.02em',
              }}
            >
              ¿Trabajamos juntos?
            </h2>
            <Link
              to="/contacto"
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-full transition-all"
              style={{
                background: '#8FA8BF',
                color: '#FFFFFF',
                fontSize: 13,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}
            >
              Contactar
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
