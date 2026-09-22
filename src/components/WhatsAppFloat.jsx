import { motion } from 'framer-motion'
import { business, buildWhatsAppLink } from '../data/content'
import WhatsAppIcon from './WhatsAppIcon'

export default function WhatsAppFloat() {
  const link = buildWhatsAppLink(
    `Hi ${business.brandName}, I have a question about your bags.`
  )

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_-4px_rgba(0,0,0,0.35)]"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </motion.a>
  )
}
