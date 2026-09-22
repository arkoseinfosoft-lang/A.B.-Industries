import { motion } from 'framer-motion'
import { business, heroImage, buildWhatsAppLink } from '../data/content'
import Sparkle from './Sparkle'
import WhatsAppIcon from './WhatsAppIcon'

const wordVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const wordItem = {
  hidden: { y: '110%' },
  visible: {
    y: '0%',
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

const headline = 'Twenty-five years of crafting bags women reach for every day.'

export default function Hero() {
  const orderLink = buildWhatsAppLink(
    `Hi ${business.brandName}, I'd like to place a bulk order. Please share your latest catalog and pricing.`
  )

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-end overflow-hidden bg-wine-dark"
    >
      {/* background image + overlays */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elegant leather handbag, boutique styling"
          className="h-full w-full object-cover object-center scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wine-dark via-wine-dark/70 to-wine-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-wine-dark/70 via-transparent to-transparent" />
      </div>

      {/* twinkling sparkles */}
      <Sparkle className="hidden sm:block absolute top-[22%] left-[12%] h-5 w-5 text-blush animate-twinkle" />
      <Sparkle
        className="hidden sm:block absolute top-[36%] right-[18%] h-4 w-4 text-brass animate-twinkle"
        style={{ animationDelay: '1.1s' }}
      />
      <Sparkle
        className="hidden sm:block absolute top-[15%] right-[32%] h-3 w-3 text-blush animate-twinkle"
        style={{ animationDelay: '2s' }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 pb-16 sm:pb-20 pt-40">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-blush/40 bg-ivory/10 px-4 py-1.5 mb-7 backdrop-blur-sm"
        >
          <Sparkle className="h-3.5 w-3.5 text-brass" />
          <span className="text-ivory/90 text-xs tracking-[0.14em] uppercase">
            {business.legalName} · Manufacturer since {business.established}
          </span>
        </motion.div>

        <h1 className="font-display text-ivory max-w-4xl text-[2.6rem] leading-[1.08] sm:text-6xl sm:leading-[1.06] lg:text-7xl lg:leading-[1.04]">
          <motion.span
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            className="block"
          >
            {headline.split(' ').map((word, i) => (
              <span key={i} className="inline-block overflow-hidden pb-2 mr-[0.28em]">
                <motion.span variants={wordItem} className="inline-block">
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="mt-6 max-w-xl text-ivory/80 text-base sm:text-lg leading-relaxed"
        >
          We design and manufacture ladies fashion bags, box bags, crossbody
          styles and handbags — blending classic craftsmanship with the latest
          trends, at factory-direct pricing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href={orderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-brass text-wine-dark font-semibold px-7 py-3.5 transition-all duration-300 hover:bg-blush hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_rgba(185,138,78,0.6)]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Order in Bulk
          </a>
          <a
            href="#collections"
            className="inline-flex items-center gap-2 text-ivory/90 border-b border-ivory/40 pb-1 hover:border-brass hover:text-brass transition-colors duration-300"
          >
            Explore collections
          </a>
        </motion.div>
      </div>
    </section>
  )
}
