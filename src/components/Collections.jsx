import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, Factory, Truck } from 'lucide-react'
import { categories, business, buildWhatsAppLink } from '../data/content'
import WhatsAppIcon from './WhatsAppIcon'

function CategoryCard({ category, index }) {
  const link = buildWhatsAppLink(
    `Hi ${business.brandName}, I'm interested in your "${category.name}" collection. Could you please share the latest catalog, bulk pricing, and MOQ details?`
  )

  return (
    <div
      className="group flex flex-col h-auto sm:h-full bg-white rounded-xl sm:rounded-2xl border border-brass/20 hover:border-brass/60 shadow-[0_4px_20px_-4px_rgba(42,33,29,0.08)] hover:shadow-[0_20px_40px_-10px_rgba(92,18,32,0.14)] transition-shadow duration-300 overflow-hidden w-[68vw] xs:w-[250px] max-w-[270px] sm:max-w-none sm:w-auto shrink-0 sm:shrink snap-start"
    >
      {/* Product Image Area */}
      <div className="relative aspect-square sm:aspect-[4/5] w-full overflow-hidden bg-[#F4EFEB]">
        <img
          src={category.image}
          alt={category.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          loading="lazy"
        />

        {/* Hover subtle darkening */}
        <div className="absolute inset-0 bg-gradient-to-t from-wine-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-3 sm:left-3 sm:right-3 flex items-center justify-between gap-1.5 pointer-events-none z-10">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/95 backdrop-blur-md px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-bold text-wine tracking-wider uppercase shadow-sm border border-brass/25">
            <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-brass" />
            {category.tag || 'Featured'}
          </span>

          <span className="rounded-full bg-wine/90 backdrop-blur-md px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-semibold text-ivory tracking-wide uppercase shadow-sm">
            {category.moq || 'MOQ 50 pcs'}
          </span>
        </div>
      </div>

      {/* Product Information Body */}
      <div className="p-3.5 sm:p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* Eyebrow / Catalog SKU */}
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-brass font-medium mb-1">
            <span>Catalogue 0{index + 1}</span>
            <span className="text-muted/80">Direct Factory</span>
          </div>

          {/* Title */}
          <h3 className="font-display text-lg sm:text-[22px] text-wine font-semibold leading-tight group-hover:text-wine-light transition-colors min-h-0 sm:min-h-[3.25rem] flex items-center">
            {category.name}
          </h3>

          {/* Description */}
          <p className="mt-1.5 sm:mt-2 text-ink/70 text-xs sm:text-[13px] leading-relaxed line-clamp-2">
            {category.description}
          </p>

          {/* Spec tags */}
          {category.specs && category.specs.length > 0 && (
            <div className="mt-2.5 sm:mt-3.5 flex flex-wrap gap-1 sm:gap-1.5">
              {category.specs.map((spec, i) => (
                <span
                  key={i}
                  className="inline-block text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 rounded-md bg-ivory text-ink/80 border border-brass/20 font-medium"
                >
                  {spec}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Pricing & Dedicated WhatsApp CTA Button */}
        <div className="mt-3.5 sm:mt-5 pt-2.5 sm:pt-3.5 border-t border-brass/15">
          <div className="flex items-center justify-between mb-2 sm:mb-3 text-[11px] sm:text-xs">
            <span className="text-muted">Wholesale:</span>
            <span className="font-semibold text-wine tracking-wide">
              {category.priceText || 'Direct Factory Rates'}
            </span>
          </div>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${category.name} on WhatsApp`}
            className="w-full inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 sm:py-3 px-3 sm:px-4 font-semibold text-xs sm:text-sm shadow-[0_4px_14px_-2px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_20px_-2px_rgba(37,211,102,0.5)] transition-all duration-200 active:scale-[0.98] group/btn"
          >
            <WhatsAppIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 transition-transform duration-300 group-hover/btn:scale-115" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Collections() {
  const wholesaleInquiryLink = buildWhatsAppLink(
    `Hi ${business.brandName}, I'm looking for a custom manufacturing quote for ladies bags. Please share your catalog.`
  )

  const highlights = [
    { icon: Factory, text: 'Direct Factory Manufacturing' },
    { icon: Sparkles, text: 'Custom Branding & Embossing' },
    { icon: ShieldCheck, text: 'Quality Inspected Guarantee' },
    { icon: Truck, text: 'Reliable Dispatch Across India' },
  ]

  return (
    <section id="collections" className="py-24 sm:py-32 bg-paper">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6 border-b border-brass/20">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brass text-sm tracking-[0.16em] uppercase mb-2 font-medium"
            >
              Wholesale Product Catalog
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl text-wine leading-[1.1]"
            >
              Four categories, one factory.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-3 text-ink/70 leading-relaxed text-sm sm:text-base"
            >
              Manufactured for boutiques, retailers, and bulk buyers. Select any
              category below to get instant pricing, specs, and MOQ on WhatsApp.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="shrink-0"
          >
            <a
              href={wholesaleInquiryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-wine/30 bg-ivory/60 hover:bg-wine hover:text-ivory text-wine text-xs sm:text-sm font-semibold px-5 py-2.5 transition-all duration-300 shadow-sm"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              Need Custom Catalog? Chat with Us
            </a>
          </motion.div>
        </div>

        {/* 4 Equal Bags Track (Horizontal Scroll on Mobile, Grid on Tablet/Desktop) */}
        <div
          className="mt-12 flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-6 xl:gap-8 overflow-x-auto overflow-y-hidden sm:overflow-visible py-3 sm:py-0 snap-x snap-proximity scroll-smooth no-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="flex sm:hidden items-center justify-center gap-2 mt-4 text-xs text-muted font-medium">
          <span className="inline-block animate-pulse">← Swipe to explore all 4 collections →</span>
        </div>

        {/* E-Commerce Trust Badges Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 p-4 sm:p-5 rounded-xl bg-ivory/70 border border-brass/20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center sm:text-left"
        >
          {highlights.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="flex items-center gap-3 justify-center sm:justify-start px-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-wine/10 text-wine">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-xs sm:text-[13px] font-medium text-ink/80">
                  {item.text}
                </span>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
