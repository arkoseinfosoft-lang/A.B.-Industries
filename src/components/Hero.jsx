import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { business, heroImage, buildWhatsAppLink, categories } from '../data/content'
import WhatsAppIcon from './WhatsAppIcon'
import Sparkle from './Sparkle'

/* ─── stat counter that ticks up on mount ─── */
function StatCounter({ value, suffix, label }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    let start = 0
    const end = parseInt(value)
    if (start === end) return
    const duration = 1200
    const step = Math.ceil(end / (duration / 16))
    const timer = setInterval(() => {
      start = Math.min(start + step, end)
      setDisplay(start)
      if (start === end) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [value])

  return (
    <div className="flex flex-col">
      <span className="font-display text-3xl sm:text-4xl text-ivory font-bold leading-none">
        {display}{suffix}
      </span>
      <span className="mt-1 text-ivory/55 text-[11px] tracking-wider uppercase leading-tight">{label}</span>
    </div>
  )
}

/* ─── floating product thumbnail card ─── */
function ProductFloat({ src, alt, delay, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute overflow-hidden rounded-xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)] border border-white/15 ${className}`}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </motion.div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const orderLink = buildWhatsAppLink(
    `Hi ${business.brandName}, I'd like to place a bulk order. Please share your latest catalog and pricing.`
  )

  const catalogLink = buildWhatsAppLink(
    `Hi ${business.brandName}, please share your latest product catalog.`
  )

  const lines = [
    { text: 'Premium Bags,', italic: false },
    { text: 'Factory Direct.', italic: true },
  ]

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-wine-dark"
    >
      {/* ── Parallax Background Image ── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 scale-110 will-change-transform"
      >
        <img
          src={heroImage}
          alt="Luxury leather handbag"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
        {/* Gradient overlay layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-wine-dark/95 via-wine-dark/75 to-wine-dark/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-wine-dark/90 via-transparent to-wine-dark/40" />
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: '256px 256px',
          }}
        />
      </motion.div>

      {/* ── Floating Sparkles ── */}
      <Sparkle className="hidden sm:block absolute top-[18%] left-[42%] h-4 w-4 text-brass/80 animate-twinkle" />
      <Sparkle className="hidden sm:block absolute top-[32%] right-[26%] h-3 w-3 text-blush/70 animate-twinkle" style={{ animationDelay: '1.3s' }} />
      <Sparkle className="hidden sm:block absolute top-[60%] left-[38%] h-5 w-5 text-brass/60 animate-twinkle" style={{ animationDelay: '0.7s' }} />
      <Sparkle className="hidden sm:block absolute top-[12%] right-[40%] h-3 w-3 text-blush/50 animate-twinkle" style={{ animationDelay: '2.1s' }} />

      {/* ── Decorative vertical line ── */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.2, ease: 'easeInOut' }}
        style={{ transformOrigin: 'top' }}
        className="absolute left-[50%] top-0 hidden lg:block h-full w-px bg-gradient-to-b from-transparent via-brass/25 to-transparent pointer-events-none"
      />

      {/* ── Main Content ── */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 pt-28 pb-20 sm:pt-32 sm:pb-24 grid lg:grid-cols-2 gap-16 lg:gap-8 items-center"
      >
        {/* LEFT COLUMN — copy */}
        <div className="flex flex-col">
          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-8 inline-flex items-center gap-2.5 self-start rounded-full border border-brass/35 bg-wine-dark/40 backdrop-blur-md px-4 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
            </span>
            <span className="text-ivory/80 text-[11px] font-medium tracking-[0.18em] uppercase">
              {business.legalName} · Since {business.established}
            </span>
          </motion.div>

          {/* Big headline */}
          <h1 className="font-display text-ivory overflow-hidden">
            {lines.map((line, li) => (
              <motion.span
                key={li}
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ delay: 0.35 + li * 0.18, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className={`block text-[3.2rem] leading-[1.02] sm:text-7xl lg:text-[5.2rem] xl:text-[5.8rem] lg:leading-[1] ${
                  line.italic ? 'italic text-brass' : ''
                }`}
              >
                {line.text}
              </motion.span>
            ))}
          </h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="mt-7 max-w-md text-ivory/65 text-base sm:text-[17px] leading-relaxed"
          >
            Ladies fashion bags, structured designs, crossbody and shoulder bags —
            manufactured since&nbsp;1997 at direct factory pricing.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href={orderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm px-7 py-3.5 shadow-[0_8px_30px_-6px_rgba(37,211,102,0.5)] hover:shadow-[0_12px_36px_-6px_rgba(37,211,102,0.65)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              Order in Bulk
            </a>

            <a
              href="#collections"
              className="group inline-flex items-center gap-2 rounded-full border border-ivory/20 hover:border-brass/60 bg-white/5 hover:bg-brass/10 backdrop-blur-sm text-ivory/85 hover:text-brass text-sm font-medium px-6 py-3.5 transition-all duration-300"
            >
              Explore Catalog
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-14 pt-8 border-t border-ivory/10 grid grid-cols-3 gap-6"
          >
            <StatCounter value={25} suffix="+" label="Years Experience" />
            <StatCounter value={4} suffix="" label="Bag Categories" />
            <StatCounter value={100} suffix="%" label="Factory Direct" />
          </motion.div>
        </div>

        {/* RIGHT COLUMN — image showcase */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="relative hidden lg:flex justify-center items-center h-[580px]"
        >
          {/* Main showcase frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.55, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-[320px] h-[420px] rounded-2xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)] border border-white/10"
          >
            <img
              src={categories[0]?.image || heroImage}
              alt="Ladies Fashion Bags showcase"
              className="h-full w-full object-cover animate-floaty"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-wine-dark/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="text-ivory/60 text-[10px] tracking-widest uppercase">Featured</span>
              <p className="font-display text-xl text-ivory mt-0.5">Ladies Fashion Bags</p>
            </div>
          </motion.div>

          {/* Floating thumbnail — top right */}
          <ProductFloat
            src={categories[1]?.image}
            alt="Box Bags"
            delay={0.9}
            className="w-[150px] h-[180px] top-4 right-4 rotate-3"
          />

          {/* Floating thumbnail — bottom left */}
          <ProductFloat
            src={categories[2]?.image}
            alt="Crossbody & Sling"
            delay={1.1}
            className="w-[140px] h-[165px] bottom-6 left-2 -rotate-2"
          />

          {/* Floating info chip — top left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="absolute top-12 left-0 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-4 py-3 shadow-lg"
          >
            <p className="text-[10px] text-ivory/50 tracking-widest uppercase mb-0.5">Est.</p>
            <p className="font-display text-2xl text-brass font-bold leading-none">1997</p>
          </motion.div>

          {/* Floating badge — bottom right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.35, duration: 0.7 }}
            className="absolute bottom-14 right-0 flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-4 py-3 shadow-lg"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#25D366]" />
            <p className="text-ivory/80 text-[12px] font-medium">Bulk Orders Open</p>
          </motion.div>

          {/* Decorative orbit ring */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-brass/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full border border-brass/08" />
          </div>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-ivory/35"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
