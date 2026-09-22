import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Factory,
  Building2,
  Users,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  Award,
  Layers,
} from 'lucide-react'
import {
  aboutImage,
  factoryImage,
  business,
  heritageTimeline,
  manufacturingCapabilities,
  craftsmanshipPillars,
  buildWhatsAppLink,
} from '../data/content'
import WhatsAppIcon from './WhatsAppIcon'

const capabilityIcons = {
  Factory,
  Building2,
  Users,
  ShieldCheck,
}

export default function About() {
  const [activeMilestone, setActiveMilestone] = useState(0)

  const oemInquiryLink = buildWhatsAppLink(
    `Hi ${business.brandName}, I'm interested in private-label OEM manufacturing / bulk wholesale orders. Please share your factory profile and catalog.`
  )

  const currentEra = heritageTimeline[activeMilestone]

  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-32 bg-ivory overflow-hidden">
      {/* Decorative background subtle watermark & grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none flex items-center justify-center">
        <span className="font-display text-[26vw] font-bold text-wine tracking-widest uppercase">
          1997
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brass/10 border border-brass/30 mb-4"
          >
            <Sparkles className="h-3.5 w-3.5 text-brass" />
            <span className="text-xs uppercase tracking-[0.18em] font-medium text-brass">
              Our Heritage & Scale
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl text-wine leading-[1.08]"
          >
            Twenty-five years of mastering <br className="hidden sm:block" />
            <span className="italic text-brass font-normal">the art of handbag manufacturing.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-base sm:text-lg text-ink/75 leading-relaxed"
          >
            From our artisan workshop founded in {business.established} to an integrated, modern
            manufacturing hub, {business.legalName} delivers export-grade ladies bags to wholesalers,
            retail chains, and fashion labels across India with 100% factory-direct efficiency.
          </motion.p>
        </div>

        {/* Top Split: Visual Legacy Showcase + Brand Story */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Dual Layer Image Composition (7 cols on large) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Primary Main Image: Craftsmanship */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[16/11] border-2 border-brass/30">
                <img
                  src={aboutImage}
                  alt="A.B. Industries leathercraft and bag assembly"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine-dark/75 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-ivory">
                  <span className="inline-block px-2.5 py-1 rounded bg-brass/90 text-wine-dark text-[11px] font-semibold tracking-wider uppercase mb-2">
                    Handmade Precision
                  </span>
                  <p className="font-display text-lg sm:text-2xl font-light text-ivory">
                    Precision hand-stitching & structural framing
                  </p>
                </div>
              </div>

              {/* Secondary Overlapping Thumbnail: Factory / Workshop */}
              <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:right-6 w-44 sm:w-56 aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border-2 border-ivory hidden xs:block">
                <img
                  src={factoryImage}
                  alt="A.B. Industries factory workshop floor"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-wine-dark/30" />
                <div className="absolute inset-0 p-2.5 flex flex-col justify-end bg-gradient-to-t from-wine-dark/85 to-transparent">
                  <span className="text-[10px] text-brass uppercase tracking-wider font-medium">
                    Integrated Facility
                  </span>
                  <span className="text-xs font-semibold text-ivory leading-tight">
                    Delhi NCR Workshop
                  </span>
                </div>
              </div>

              {/* Floating Wax-Seal Heritage Badge */}
              <div className="absolute -top-4 -left-3 sm:-top-6 sm:-left-6 bg-gradient-to-br from-brass to-brass-light text-wine-dark rounded-2xl p-4 sm:p-5 shadow-xl flex items-center gap-3.5 border border-ivory/50">
                <Award className="h-7 w-7 sm:h-8 sm:w-8 shrink-0 text-wine-dark" />
                <div>
                  <p className="font-display text-2xl sm:text-3xl font-bold leading-none">
                    25+ Years
                  </p>
                  <p className="text-[11px] font-medium tracking-wider uppercase text-wine-dark/80 mt-0.5">
                    Industry Legacy
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Narrative Story + Philosophy (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="border-l-2 border-brass pl-5 py-1 mb-6">
              <p className="font-display italic text-xl sm:text-2xl text-wine leading-snug">
                "We don't just assemble bags; we engineer statement pieces that elevate our partners'
                storefronts and retail margins."
              </p>
              <p className="text-xs tracking-wider text-muted uppercase mt-2">
                — Founders, {business.legalName}
              </p>
            </div>

            <p className="text-ink/80 text-[15px] leading-relaxed mb-6">
              Founded on the pillars of uncompromising quality and transparent factory pricing,
              we have evolved with shifting fashion aesthetics while staying true to our core craft:
              flawless stitching, rigid shape retention, and scratch-resistant hardware that lasts.
            </p>

            {/* Craftsmanship Spec Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {craftsmanshipPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-3 rounded-lg bg-paper border border-brass/15 shadow-sm"
                >
                  <div className="flex items-center gap-2 text-wine font-medium text-xs sm:text-sm">
                    <CheckCircle2 className="h-4 w-4 text-brass shrink-0" />
                    <span>{pillar.title}</span>
                  </div>
                  <p className="text-ink/65 text-xs mt-1.5 leading-relaxed">{pillar.detail}</p>
                </div>
              ))}
            </div>

            {/* Direct Factory WhatsApp Button */}
            <div>
              <a
                href={oemInquiryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-wine hover:bg-wine-dark text-ivory text-sm font-medium px-6 py-3.5 shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Discuss OEM / Bulk Order Requirements
                <ArrowRight className="h-4 w-4 text-brass" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Interactive 25-Year Heritage Timeline */}
        <div className="mt-20 sm:mt-28 pt-16 border-t border-brass/20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-brass text-xs uppercase tracking-[0.16em] mb-2 font-medium">
                <Calendar className="h-3.5 w-3.5" />
                <span>Our 25-Year Milestones</span>
              </div>
              <h3 className="font-display text-2xl sm:text-4xl text-wine">
                The Journey From Workshop to Industry Hub
              </h3>
            </div>
            <p className="text-sm text-ink/70 max-w-md">
              Click on each era to discover how our manufacturing capabilities, tooling, and partner
              network evolved across two and a half decades.
            </p>
          </div>

          {/* Timeline Tab Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 p-1.5 rounded-2xl bg-paper border border-brass/25 shadow-sm">
            {heritageTimeline.map((item, index) => {
              const isActive = activeMilestone === index
              return (
                <button
                  key={item.year}
                  onClick={() => setActiveMilestone(index)}
                  className={`relative px-4 py-3 sm:py-4 rounded-xl text-left transition-all duration-300 ${
                    isActive
                      ? 'bg-wine text-ivory shadow-md'
                      : 'hover:bg-blush-light/30 text-ink/80'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-display text-xl sm:text-2xl font-bold leading-none ${
                        isActive ? 'text-brass-light' : 'text-wine'
                      }`}
                    >
                      {item.year}
                    </span>
                    <span
                      className={`text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full font-medium ${
                        isActive
                          ? 'bg-ivory/15 text-ivory'
                          : 'bg-brass/15 text-wine'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <p
                    className={`text-xs mt-2 font-medium truncate ${
                      isActive ? 'text-ivory/90' : 'text-ink/70'
                    }`}
                  >
                    {item.title}
                  </p>
                </button>
              )
            })}
          </div>

          {/* Active Era Milestone Card Content */}
          <div className="mt-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMilestone}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl bg-gradient-to-br from-paper via-ivory to-paper p-6 sm:p-8 lg:p-10 border border-brass/30 shadow-md relative overflow-hidden"
              >
                <div className="absolute -right-8 -bottom-8 pointer-events-none opacity-5 font-display text-9xl font-bold text-wine select-none">
                  {currentEra.year}
                </div>

                <div className="relative z-10 grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-8">
                    <div className="inline-flex items-center gap-2 text-brass text-xs uppercase tracking-widest font-semibold mb-2">
                      <span>Era {activeMilestone + 1} of 4</span>
                      <span>•</span>
                      <span>{currentEra.subtitle}</span>
                    </div>
                    <h4 className="font-display text-2xl sm:text-3xl text-wine font-medium">
                      {currentEra.title}
                    </h4>
                    <p className="mt-3 text-ink/80 text-sm sm:text-base leading-relaxed max-w-2xl">
                      {currentEra.description}
                    </p>
                  </div>

                  <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-center md:border-l md:border-brass/20 md:pl-8">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-brass/15 flex items-center justify-center shrink-0">
                        <Layers className="h-5 w-5 text-brass" />
                      </div>
                      <div>
                        <span className="block text-xs uppercase tracking-wider text-muted">
                          Quality Standard
                        </span>
                        <span className="text-sm font-semibold text-wine">
                          Export-Grade Craftsmanship
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-brass/15 flex items-center justify-center shrink-0">
                        <ShieldCheck className="h-5 w-5 text-brass" />
                      </div>
                      <div>
                        <span className="block text-xs uppercase tracking-wider text-muted">
                          Business Model
                        </span>
                        <span className="text-sm font-semibold text-wine">
                          Factory Direct • No Middlemen
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Manufacturing Capabilities & Scale Metrics Grid */}
        <div className="mt-20 sm:mt-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-brass text-xs uppercase tracking-[0.2em] font-medium">
              Scale & Infrastructure
            </span>
            <h3 className="font-display text-2xl sm:text-4xl text-wine mt-1">
              Built for High-Volume Reliability
            </h3>
            <p className="text-sm text-ink/70 mt-2">
              Our infrastructure is engineered to support fast replenishment, seasonal peaks, and
              stringent batch uniformity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {manufacturingCapabilities.map((cap, i) => {
              const Icon = capabilityIcons[cap.iconKey] || Factory
              return (
                <motion.div
                  key={cap.label}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative p-6 sm:p-7 rounded-2xl bg-paper border border-brass/25 hover:border-brass transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div className="absolute top-0 inset-x-6 h-[2px] bg-gradient-to-r from-transparent via-brass/40 to-transparent group-hover:via-brass transition-all duration-300" />

                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="h-12 w-12 rounded-xl bg-blush-light/40 group-hover:bg-wine group-hover:text-ivory text-wine flex items-center justify-center transition-colors duration-300">
                        <Icon className="h-6 w-6" strokeWidth={1.6} />
                      </div>
                      <span className="text-[11px] font-semibold tracking-wider uppercase text-brass bg-brass/10 px-2.5 py-1 rounded-full">
                        {cap.unit}
                      </span>
                    </div>

                    <div className="font-display text-4xl sm:text-5xl font-bold text-wine leading-none">
                      {cap.value}
                    </div>
                    <h4 className="font-medium text-base text-ink mt-3">{cap.label}</h4>
                    <p className="text-ink/65 text-xs sm:text-sm mt-2 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-brass/15 flex items-center text-[11px] text-muted group-hover:text-wine font-medium transition-colors">
                    <span>Verified Factory Spec</span>
                    <ArrowRight className="h-3 w-3 ml-auto text-brass group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
