import { motion } from 'framer-motion'
import { galleryImages } from '../data/content'

export default function Gallery() {
  const track = [...galleryImages, ...galleryImages]

  return (
    <section className="py-20 sm:py-24 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-3xl sm:text-4xl text-wine"
        >
          From our workshop floor
        </motion.h2>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-ivory to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-ivory to-transparent z-10" />

        <div className="flex w-max gap-5 animate-marquee-slow">
          {track.map((src, i) => (
            <div
              key={i}
              className="relative h-56 sm:h-72 w-44 sm:w-56 shrink-0 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500"
            >
              <img src={src} alt="Bag craftsmanship" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
