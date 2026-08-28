import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, margin: '-100px' },
}

export default function Empresas() {
  return (
    <>
      {/* HERO con imagen */}
      <section className="relative pt-40 pb-24 md:pt-52 md:pb-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/empresas-parfaits.jpg"
            alt="Personalización corporativa María Brie"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(250,248,245,0.5) 0%, rgba(250,248,245,0.3) 60%, rgba(250,248,245,0.95) 100%)',
            }}
          />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
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
              — Empresas
            </div>
            <h1
              className="mb-8"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(40px, 6vw, 76px)',
                fontWeight: 200,
                letterSpacing: '0.02em',
                lineHeight: 1.05,
                color: '#2C3844',
              }}
            >
              Detalles que<br />
              <span style={{ fontStyle: 'italic', fontWeight: 300 }}>
                fortalecen tu equipo.
              </span>
            </h1>
            <p
              className="text-lg leading-relaxed max-w-xl"
              style={{ color: '#6B7A8A', fontWeight: 300 }}
            >
              Cumpleaños corporativos, coffee breaks, regalos y experiencias
              diseñadas para elevar tu cultura y tu marca.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TRES SERVICIOS */}
      <section className="py-24 md:py-32" style={{ background: '#FAF8F5' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <motion.div {...fadeUp} className="mb-16 max-w-2xl">
            <div
              className="mb-6 text-xs"
              style={{
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: '#8FA8BF',
                fontWeight: 500,
              }}
            >
              — Qué ofrecemos
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
              Tres formas de<br />
              <span style={{ fontStyle: 'italic', fontWeight: 300 }}>
                elevar tu marca.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <SolutionCard
              image="/images/empresas-cupcakes-oro.jpg"
              number="01"
              title="Cumpleaños corporativos"
              text="Un detalle que dice: aquí importas. Transforma cada cumpleaños laboral en un momento auténtico de reconocimiento."
            />
            <SolutionCard
              image="/images/empresas-onu.jpg"
              number="02"
              title="Coffee breaks y reuniones"
              text="Pausas que elevan la conversación. Repostería horneada, práctica y sofisticada para acompañar reuniones ejecutivas."
            />
            <SolutionCard
              image="/images/empresas-cajas.jpg"
              number="03"
              title="Regalos corporativos"
              text="Impresiones que permanecen. Cajas cuidadosamente diseñadas para sorprender y comunicar profesionalismo y gratitud."
            />
          </div>
        </div>
      </section>

      {/* CUMPLEAÑOS DETALLE — planes */}
      <section className="py-24 md:py-32" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <motion.div {...fadeUp} className="mb-16 md:mb-20 text-center max-w-2xl mx-auto">
            <div
              className="mb-6 text-xs"
              style={{
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: '#8FA8BF',
                fontWeight: 500,
              }}
            >
              — Cumpleaños corporativos
            </div>
            <h2
              className="mb-6"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 200,
                letterSpacing: '0.02em',
                lineHeight: 1.15,
                color: '#2C3844',
              }}
            >
              "Tu esfuerzo se valora."
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: '#6B7A8A', fontWeight: 300 }}
            >
              Más que un postre, entregamos un mensaje claro y poderoso.
              Tres planes para adaptarse a tu cultura y presupuesto.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <PlanCard
              name="Standard"
              price="280"
              tag="El clásico"
              features={[
                'Cupcakes de vainilla',
                'Panqué de plátano',
                'Galletas chispas de chocolate',
                'Brownies',
              ]}
            />
            <PlanCard
              name="Prime"
              price="560"
              tag="Más elegido"
              highlight
              features={[
                'Tiramisú',
                'Pastel zanahoria y chocolate',
                'Pastel de coco',
                'Galletas chispas y nueces',
              ]}
            />
            <PlanCard
              name="Fit"
              price="530"
              tag="Consciente"
              features={[
                'Donuts proteína',
                'Pastel vainilla (sin huevo)',
                'Pastel calabaza (sin lácteos)',
                'Opciones balanceadas',
              ]}
            />
          </div>
        </div>
      </section>

      {/* COFFEE BREAKS COMPARATIVO */}
      <section className="py-24 md:py-32" style={{ background: '#FAF8F5' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <motion.div {...fadeUp} className="mb-16 max-w-2xl">
            <div
              className="mb-6 text-xs"
              style={{
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: '#8FA8BF',
                fontWeight: 500,
              }}
            >
              — Coffee breaks y reuniones ejecutivas
            </div>
            <h2
              className="mb-6"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 200,
                letterSpacing: '0.02em',
                lineHeight: 1.15,
                color: '#2C3844',
              }}
            >
              Pausas que elevan<br />
              <span style={{ fontStyle: 'italic', fontWeight: 300 }}>
                la conversación.
              </span>
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: '#6B7A8A', fontWeight: 300 }}
            >
              Diseñadas para disfrutarse con facilidad, sin interrumpir el
              ritmo ni la dinámica profesional.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <CoffeeBreakCard
              title="Standard"
              subtitle="Práctico y sofisticado"
              sections={[
                {
                  label: 'Repostería y bocados',
                  items: ['Panqué de plátano casero', 'Mini croissants jamón y queso'],
                },
                {
                  label: 'Estación de bebidas',
                  items: ['Café gourmet', 'Variedad de tés', 'Agua mineral'],
                },
                {
                  label: 'Servicio',
                  items: ['Staff capacitado', 'Insumos completos', 'Endulzantes naturales'],
                },
              ]}
            />
            <CoffeeBreakCard
              title="Premium"
              subtitle="Todo incluido"
              highlight
              sections={[
                {
                  label: 'Bebidas especializadas',
                  items: ['Café gourmet', 'Selección de tés', 'Matcha latte'],
                },
                {
                  label: 'Hidratación natural',
                  items: ['Jugo verde revitalizante', 'Jugo de naranja', 'Aguas frescas'],
                },
                {
                  label: 'Selección de bocados',
                  items: ['Magdalenas con cobertura', 'Parfait de yogurt con frutos rojos', 'Mini croissants gourmet'],
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* REGALOS CORPORATIVOS */}
      <section
        className="py-24 md:py-32"
        style={{ background: '#8FA8BF', color: '#FFFFFF' }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <motion.div {...fadeUp} className="mb-16 max-w-2xl">
            <div
              className="mb-6 text-xs"
              style={{
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.8)',
                fontWeight: 500,
              }}
            >
              — Regalos corporativos y días especiales
            </div>
            <h2
              className="mb-6"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 200,
                letterSpacing: '0.02em',
                lineHeight: 1.15,
                color: '#FFFFFF',
              }}
            >
              Impresiones que<br />
              <span style={{ fontStyle: 'italic', fontWeight: 300 }}>
                permanecen.
              </span>
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 300 }}
            >
              Cajas cuidadosamente diseñadas para clientes VIP, socios estratégicos
              y fechas clave como Navidad, Día de la Madre o del Padre.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'Galletas en plato artesanal',
                text: 'Selección horneada diariamente sobre plato de cerámica. El destinatario conserva una pieza de diseño única.',
              },
              {
                title: 'Brownies decadentes',
                text: 'Bocados perfectos sobre plato artesanal exclusivo. La combinación del sabor y el objeto contenedor.',
              },
              {
                title: 'Kit vino caliente y tazas',
                text: 'Mezcla exclusiva de especias con dos tazas de cerámica personalizadas con el logo de tu empresa.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                className="rounded-2xl p-8 md:p-10"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}
              >
                <div
                  className="mb-4"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 32,
                    fontWeight: 200,
                    color: 'rgba(255,255,255,0.4)',
                  }}
                >
                  0{i + 1}
                </div>
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 20,
                    fontWeight: 400,
                    color: '#FFFFFF',
                    letterSpacing: '0.02em',
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 300 }}
                >
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONALIZACIÓN CON FOTO LANCÔME */}
      <section className="py-24 md:py-32" style={{ background: '#FAF8F5' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div {...fadeUp} className="rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src="/images/empresas-lancome.jpg"
                alt="Personalización con marca corporativa"
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
                — Personalización
              </div>
              <h2
                className="mb-8"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(28px, 4vw, 44px)',
                  fontWeight: 200,
                  letterSpacing: '0.02em',
                  lineHeight: 1.15,
                  color: '#2C3844',
                }}
              >
                Tu marca,<br />
                <span style={{ fontStyle: 'italic', fontWeight: 300 }}>
                  en cada detalle.
                </span>
              </h2>
              <p
                className="mb-8 text-base leading-relaxed"
                style={{ color: '#6B7A8A', fontWeight: 300 }}
              >
                Sabemos que cada empresa comunica algo distinto. Por eso ofrecemos
                opciones de personalización que aseguran coherencia con tu identidad de marca.
              </p>
              <ul className="space-y-3">
                {[
                  'Tarjetas con logo y mensaje corporativo',
                  'Selección de sabores a medida',
                  'Presentaciones individuales o grupales',
                  'Empaques alineados a tu identidad',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: '#2C3844' }}
                  >
                    <Check size={16} style={{ color: '#8FA8BF', marginTop: 3, flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="py-24 md:py-32" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <motion.div {...fadeUp} className="mb-16 md:mb-20 max-w-2xl">
            <div
              className="mb-6 text-xs"
              style={{
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: '#8FA8BF',
                fontWeight: 500,
              }}
            >
              — Cómo funciona
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
              Configuras una vez.<br />
              <span style={{ fontStyle: 'italic', fontWeight: 300 }}>
                Nosotros nos encargamos.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {[
              {
                number: '01',
                title: 'Elige tu plan',
                text: 'Ofrecemos un esquema de precios por colaborador, optimizado por volumen, que se ajusta a las necesidades de cada empresa.',
              },
              {
                number: '02',
                title: 'Compártenos tu calendario',
                text: 'Tú defines las fechas. Integramos la información a nuestro sistema. Solo requerimos las fechas clave y el plan asignado.',
              },
              {
                number: '03',
                title: 'Nosotros hacemos todo',
                text: 'Elaboración fresca y artesanal, empaque estético, tarjeta personalizada y entrega puntual en el lugar indicado.',
              },
            ].map((step) => (
              <motion.div key={step.number} {...fadeUp}>
                <div
                  className="mb-6"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 48,
                    fontWeight: 200,
                    color: '#8FA8BF',
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </div>
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 20,
                    fontWeight: 400,
                    color: '#2C3844',
                    letterSpacing: '0.02em',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#6B7A8A', fontWeight: 300 }}
                >
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32" style={{ background: '#2C3844' }}>
        <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center">
          <motion.div {...fadeUp}>
            <h2
              className="mb-6"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 200,
                letterSpacing: '0.02em',
                lineHeight: 1.15,
                color: '#FFFFFF',
              }}
            >
              Tu equipo recibe la experiencia.<br />
              <span style={{ fontStyle: 'italic', fontWeight: 300 }}>
                Tú recibes tranquilidad.
              </span>
            </h2>
            <p
              className="mb-10 max-w-lg mx-auto text-base leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 300 }}
            >
              Cuéntanos las necesidades de tu empresa y diseñamos una propuesta a la medida.
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
              Cotizar ahora
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

/* Componentes internos */

function SolutionCard({ image, number, title, text }) {
  return (
    <motion.div {...fadeUp} className="group">
      <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[3/4]">
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
        {number}
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
        className="text-sm leading-relaxed"
        style={{ color: '#6B7A8A', fontWeight: 300 }}
      >
        {text}
      </p>
    </motion.div>
  )
}

function PlanCard({ name, price, tag, features, highlight }) {
  return (
    <motion.div
      {...fadeUp}
      className="relative rounded-2xl p-8 md:p-10"
      style={{
        background: highlight ? '#8FA8BF' : '#FFFFFF',
        color: highlight ? '#FFFFFF' : '#2C3844',
        border: highlight ? 'none' : '1.5px solid #EDF1F5',
        boxShadow: highlight ? '0 20px 40px -20px rgba(143, 168, 191, 0.5)' : 'none',
      }}
    >
      {highlight && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px]"
          style={{
            background: '#D4A574',
            color: '#FFFFFF',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          ★ Más elegido
        </div>
      )}
      <div
        className="mb-2 text-xs"
        style={{
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: highlight ? 'rgba(255,255,255,0.7)' : '#8FA8BF',
          fontWeight: 500,
        }}
      >
        {tag}
      </div>
      <h3
        className="mb-6"
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 24,
          fontWeight: 300,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}
      >
        {name}
      </h3>
      <div className="flex items-baseline gap-2 mb-8">
        <span
          style={{
            fontFamily: 'Montserrat',
            fontSize: 48,
            fontWeight: 200,
            lineHeight: 1,
          }}
        >
          ${price}
        </span>
        <span
          className="text-xs"
          style={{
            color: highlight ? 'rgba(255,255,255,0.7)' : '#6B7A8A',
          }}
        >
          MXN por persona
        </span>
      </div>
      <ul className="space-y-3">
        {features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-3 text-sm leading-relaxed"
            style={{ fontWeight: 300 }}
          >
            <Check
              size={14}
              style={{
                marginTop: 4,
                flexShrink: 0,
                color: highlight ? '#FFFFFF' : '#8FA8BF',
              }}
            />
            {f}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

function CoffeeBreakCard({ title, subtitle, sections, highlight }) {
  return (
    <motion.div
      {...fadeUp}
      className="rounded-2xl p-8 md:p-10"
      style={{
        background: highlight ? '#2C3844' : '#FFFFFF',
        color: highlight ? '#FFFFFF' : '#2C3844',
      }}
    >
      {highlight && (
        <div
          className="mb-3 text-xs inline-block px-3 py-1 rounded-full"
          style={{
            background: 'rgba(212, 165, 116, 0.2)',
            color: '#D4A574',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          Más completo
        </div>
      )}
      <h3
        className="mb-2"
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 28,
          fontWeight: 300,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}
      >
        {title}
      </h3>
      <p
        className="mb-8 text-sm"
        style={{
          color: highlight ? 'rgba(255,255,255,0.7)' : '#6B7A8A',
          fontWeight: 300,
        }}
      >
        {subtitle}
      </p>
      <div className="space-y-6">
        {sections.map((section, i) => (
          <div key={i}>
            <div
              className="mb-3 text-xs"
              style={{
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: highlight ? '#8FA8BF' : '#8FA8BF',
                fontWeight: 500,
              }}
            >
              {section.label}
            </div>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed"
                  style={{ fontWeight: 300 }}
                >
                  <Check
                    size={13}
                    style={{
                      marginTop: 4,
                      flexShrink: 0,
                      color: highlight ? '#FFFFFF' : '#8FA8BF',
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
