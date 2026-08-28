import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WhatsAppFloat() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring' }}
      whileHover={{ scale: 1.05 }}
      href="https://wa.me/525578804384?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20María%20Brie"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-shadow"
      style={{
        background: '#25D366',
        color: '#FFFFFF',
        width: 56,
        height: 56,
        boxShadow: '0 10px 30px -10px rgba(37, 211, 102, 0.5)',
      }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={26} strokeWidth={2} />
    </motion.a>
  )
}
