import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, margin: '-100px' },
}

export default function Home() {
  return (
    <>
      {/* ============ HERO — Foto lateral izquierda + texto derecha ============ */}
      <section
        className="relative min-h-screen flex items-center pt-24 md:pt-0"
        style={{ background: '#FAF8F5' }}
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* IZQUIERDA - Foto */}
          <div className="relative order-1 lg:order-1 h-[60vh] lg:h-screen">
            <img
              src="/images/hero-cakes.jpg"
              alt="Repostería artesanal María Brie"
              className="w-full h-full object-cover"
            />
          </div>

          {/* DERECHA - Texto */}
          <div className="order-2 lg:order-2 flex items-center px-6 md:px-10 lg:px-16 xl:px-24 py-16 lg:py-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl"
            >
              {/* Eyebrow */}
              <div
                className="mb-8 text-xs"
                style={{
                  letterSpacing: '0.4em',
                  textTransform: 'uppercase',
                  color: '#8FA8BF',
                  fontWeight: 500,
                }}
              >
                — Repostería artesanal
              </div>

              {/* Título principal */}
              <h1
                className="mb-8"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(36px, 5.5vw, 72px)',
                  fontWeight: 200,
                  letterSpacing: '0.02em',
                  lineHeight: 1.05,
                  color: '#2C3844',
                }}
              >
                Diseñamos<br />
                <span style={{ fontStyle: 'italic', fontWeight: 300 }}>
                  experiencias dulces
                </span>
                <br />
                con intención.
              </h1>

              {/* Subtítulo */}
              <p
                className="mb-12 text-lg leading-relaxed"
                style={{ color: '#6B7A8A', fontWeight: 300 }}
              >
                Repostería premium para empresas, eventos y familias
                que cuidan cada detalle.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/empresas"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full transition-all"
                  style={{
                    background: '#8FA8BF',
                    color: '#FFFFFF',
                    fontSize: 13,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                  }}
                >
                  Explorar servicios
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full transition-all"
                  style={{
                    background: 'transparent',
                    color: '#2C3844',
                    border: '1.5px solid rgba(44, 56, 68, 0.2)',
                    fontSize: 13,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                  }}
                >
                  Contactar
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ FILOSOFÍA (transición) ============ */}
      <section className="py-24 md:py-32" style={{ background: '#FAF8F5' }}>
        <div className="max-w-[1000px] mx-auto px-6 md:px-10 text-center">
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
              — Filosofía
            </div>
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(24px, 3.5vw, 40px)',
                fontWeight: 200,
                lineHeight: 1.3,
                color: '#2C3844',
                letterSpacing: '0.01em',
              }}
            >
              Creemos que los <em style={{ fontWeight: 300 }}>vínculos más sólidos</em> se
              fortalecen a través de gestos bien pensados.
            </p>
            <p
              className="mt-8 max-w-2xl mx-auto text-base leading-relaxed"
              style={{ color: '#6B7A8A', fontWeight: 300 }}
            >
              Por eso nuestra repostería va más allá de un postre: es una
              herramienta para honrar a las personas, celebrar momentos clave
              y elevar cada experiencia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ TRES LÍNEAS DE NEGOCIO ============ */}
      <section className="py-24 md:py-32" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <motion.div {...fadeUp} className="mb-16 md:mb-24 max-w-2xl">
            <div
              className="mb-6 text-xs"
              style={{
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: '#8FA8BF',
                fontWeight: 500,
              }}
            >
              — Qué hacemos
            </div>
            <h2
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(32px, 5vw, 56px)',
                fontWeight: 200,
                letterSpacing: '0.02em',
                lineHeight: 1.1,
                color: '#2C3844',
              }}
            >
              Cuatro líneas.<br />
              <span style={{ fontStyle: 'italic', fontWeight: 300 }}>
                Una misma esencia.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <ServiceCard
              image="/images/empresas-cajas.jpg"
              eyebrow="01 · Empresas"
              title="Detalles que fortalecen equipos"
              description="Cumpleaños corporativos, coffee breaks, regalos y experiencias diseñadas para elevar tu cultura."
              link="/empresas"
            />
            <ServiceCard
              image="/images/eventos-navidad.jpg"
              eyebrow="02 · Eventos"
              title="Mesas y experiencias memorables"
              description="Bodas, cumpleaños, XV años y celebraciones especiales curadas hasta el último detalle."
              link="/eventos"
            />
            <ServiceCard
              image="/images/postres-cake-vainilla.jpg"
              eyebrow="03 · Postres"
              title="Repostería por encargo"
              description="Cakes, brownies, cupcakes y creaciones artesanales para tus momentos especiales."
              link="/postres"
            />
          </div>

          {/* Lunch Box — tarjeta especial ancho completo */}
          <motion.div
            {...fadeUp}
            className="mt-8 lg:mt-12"
          >
            <a
              href="https://lunchbox.mariabrie.com.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden rounded-2xl"
              style={{
                background: '#8FA8BF',
                minHeight: 280,
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="p-10 md:p-14 flex flex-col justify-center">
                  <div
                    className="mb-4 text-xs"
                    style={{
                      letterSpacing: '0.4em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.8)',
                      fontWeight: 500,
                    }}
                  >
                    04 · Lunch Box
                  </div>
                  <h3
                    className="mb-4"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 'clamp(28px, 3vw, 40px)',
                      fontWeight: 200,
                      color: '#FFFFFF',
                      letterSpacing: '0.02em',
                      lineHeight: 1.15,
                    }}
                  >
                    La lonchera resuelta,<br />
                    <span style={{ fontStyle: 'italic' }}>cada semana.</span>
                  </h3>
                  <p
                    className="mb-6 text-base max-w-md"
                    style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 300 }}
                  >
                    Suscripción semanal de loncheras balanceadas para tus peques.
                    Menú personalizable, entrega los domingos.
                  </p>
                  <div
                    className="inline-flex items-center gap-2 text-xs"
                    style={{
                      color: '#FFFFFF',
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      fontWeight: 500,
                    }}
                  >
                    Suscríbete
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
                <div
                  className="hidden md:block"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(212, 165, 116, 0.15) 0%, rgba(255,255,255,0.05) 100%)',
                    position: 'relative',
                  }}
                >
                  {/* Pattern decorativo */}
                  <svg
                    className="absolute inset-0 w-full h-full opacity-20"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    viewBox="0 0 400 400"
                  >
                    <defs>
                      <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="20" cy="20" r="1.5" fill="#FFFFFF" />
                      </pattern>
                    </defs>
                    <rect width="400" height="400" fill="url(#dots)" />
                  </svg>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ============ CLIENTES ============ */}
      <section className="py-24 md:py-32" style={{ background: '#FAF8F5' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <div
              className="mb-6 text-xs"
              style={{
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: '#8FA8BF',
                fontWeight: 500,
              }}
            >
              — Confían en nosotros
            </div>
            <h2
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 200,
                letterSpacing: '0.02em',
                lineHeight: 1.15,
                color: '#2C3844',
              }}
            >
              Marcas que eligen cada detalle.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            <motion.div
              {...fadeUp}
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img
                src="/images/empresas-lancome.jpg"
                alt="Personalización corporativa Lancôme"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-8"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 0%, rgba(44, 56, 68, 0.85) 100%)',
                }}
              >
                <div
                  className="text-xs mb-2"
                  style={{
                    color: 'rgba(255,255,255,0.7)',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                  }}
                >
                  Personalización · Lancôme
                </div>
                <div
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Montserrat',
                    fontWeight: 300,
                    fontSize: 20,
                    letterSpacing: '0.02em',
                  }}
                >
                  Postres individuales con tu marca.
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img
                src="/images/empresas-amazon.jpg"
                alt="Cupcakes personalizados para Amazon"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-8"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 0%, rgba(44, 56, 68, 0.85) 100%)',
                }}
              >
                <div
                  className="text-xs mb-2"
                  style={{
                    color: 'rgba(255,255,255,0.7)',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                  }}
                >
                  Personalización · Amazon
                </div>
                <div
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Montserrat',
                    fontWeight: 300,
                    fontSize: 20,
                    letterSpacing: '0.02em',
                  }}
                >
                  Cupcakes con tu marca en cada detalle.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="py-24 md:py-32" style={{ background: '#2C3844' }}>
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
              — Empecemos
            </div>
            <h2
              className="mb-8"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(32px, 5vw, 56px)',
                fontWeight: 200,
                letterSpacing: '0.02em',
                lineHeight: 1.1,
                color: '#FFFFFF',
              }}
            >
              En los detalles<br />
              <span style={{ fontStyle: 'italic', fontWeight: 300 }}>
                se percibe el nivel.
              </span>
            </h2>
            <p
              className="mb-12 max-w-lg mx-auto text-base leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 300 }}
            >
              Cuéntanos qué necesitas y diseñamos una propuesta a la medida
              de tu marca, tu evento o tu familia.
            </p>
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
              Contactar ahora
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

/* ============ Card de servicio ============ */
function ServiceCard({ image, eyebrow, title, description, link }) {
  return (
    <motion.div {...fadeUp}>
      <Link to={link} className="group block">
        <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/5]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div
          className="mb-3 text-xs"
          style={{
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: '#8FA8BF',
            fontWeight: 500,
          }}
        >
          {eyebrow}
        </div>
        <h3
          className="mb-3"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 22,
            fontWeight: 300,
            color: '#2C3844',
            letterSpacing: '0.01em',
            lineHeight: 1.2,
          }}
        >
          {title}
        </h3>
        <p
          className="mb-4 text-sm leading-relaxed"
          style={{ color: '#6B7A8A', fontWeight: 300 }}
        >
          {description}
        </p>
        <div
          className="inline-flex items-center gap-2 text-xs"
          style={{
            color: '#8FA8BF',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontWeight: 500,
          }}
        >
          Ver más
          <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.div>
  )
}
