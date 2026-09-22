import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { categories, business, buildWhatsAppLink } from '../data/content'

function CategoryCard({ category, large }) {
  const link = buildWhatsAppLink(
    `Hi ${business.brandName}, I'm interested in your "${category.name}" collection. Could you share details, MOQ and pricing for a bulk order?`
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative ${large ? 'lg:col-span-7' : 'lg:col-span-5'}`}
    >
      <div className="relative overflow-hidden">
        <div className={`relative ${large ? 'aspect-[16/11]' : 'aspect-[4/3]'} overflow-hidden`}>
          <img
            src={category.image}
            alt={category.name}
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wine-dark/70 via-wine-dark/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="absolute -top-3 -left-3 h-full w-full border border-brass/60 -z-10 group-hover:top-0 group-hover:left-0 transition-all duration-500" />
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl sm:text-3xl text-wine">{category.name}</h3>
          <p className="mt-2 text-ink/70 text-sm sm:text-[15px] leading-relaxed max-w-md">
            {category.description}
          </p>
        </div>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 text-wine text-sm font-medium border-b border-transparent hover:border-wine transition-colors"
      >
        Enquire on WhatsApp
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </motion.div>
  )
}

export default function Collections() {
  return (
    <section id="collections" className="py-24 sm:py-32 bg-paper">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brass text-sm tracking-[0.14em] mb-3"
          >
            What we manufacture
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl sm:text-5xl text-wine leading-[1.1]"
          >
            Four categories, one factory.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-5 text-ink/70 leading-relaxed"
          >
            We manufacture for boutiques, retailers and bulk buyers — not as an
            online store. Browse what we make, then reach out on WhatsApp with
            your quantity and requirement for a quote.
          </motion.p>
        </div>

        <div className="mt-16 grid lg:grid-cols-12 gap-x-8 gap-y-16">
          <CategoryCard category={categories[0]} large />
          <CategoryCard category={categories[1]} />
          <CategoryCard category={categories[2]} />
          <CategoryCard category={categories[3]} large />
        </div>
      </div>
    </section>
  )
}
