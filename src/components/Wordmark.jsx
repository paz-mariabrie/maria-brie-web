import { Link } from 'react-router-dom'

/**
 * Wordmark - Logo oficial de María Brie
 *
 * Props:
 *  - light: si es true, usa versión clara (blanco) — sobre fondos oscuros
 *  - small: si es true, muestra versión chica (para el menú superior)
 *
 * Nota: usamos el logo oficial en PNG. Para versión "light" aplicamos
 * un filtro CSS que invierte los colores para que se vea blanco sobre
 * fondos oscuros (footer azul).
 */
export default function Wordmark({ light = false, small = false }) {
  const height = small ? 32 : 56

  return (
    <Link to="/" className="inline-flex items-center no-underline">
      <img
        src="/images/logo-maria-brie-transparent.png"
        alt="María Brie · Baked Goods"
        style={{
          height: `${height}px`,
          width: 'auto',
          // Si es light (fondo oscuro/azul), invertimos para blanquear
          // el texto azul del logo. Si no, se ve el logo original azul.
          filter: light
            ? 'brightness(0) invert(1)'
            : 'none',
          transition: 'filter 0.3s ease',
        }}
      />
    </Link>
  )
}
