import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'
import { navLinks, business, buildWhatsAppLink } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'
import WhatsAppIcon from './WhatsAppIcon'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const activeId = useActiveSection(navLinks.map((l) => l.href.replace('#', '')))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const orderLink = buildWhatsAppLink(
    `Hi ${business.brandName}, I'd like to place a bulk order. Please share your latest catalog and pricing.`
  )

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ivory/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(185,138,78,0.35)] py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          <a href="#home" className="flex items-center shrink-0 group">
            <div className="relative flex items-center">
              {/* Ambient gold glow halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brass/40 via-brass-light/60 to-brass/40 rounded-xl blur-[5px] opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Luxury Gold-Framed Plaque */}
              <div
                className={`relative px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-xl border-2 border-brass-light shadow-[0_4px_20px_rgba(0,0,0,0.45)] transition-all duration-300 group-hover:scale-[1.02] ${
                  scrolled
                    ? 'bg-wine-dark'
                    : 'bg-gradient-to-b from-[#4A0B17] to-[#2B040C]'
                }`}
              >
                <img
                  src={logo}
                  alt={`${business.brandName} logo`}
                  className="h-8 sm:h-10 md:h-11 w-auto object-contain brightness-110 contrast-105"
                />
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = activeId === id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 text-[15px] transition-colors duration-500 ${
                    scrolled
                      ? 'text-ink/80 hover:text-wine'
                      : 'text-ivory/90 hover:text-ivory'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[1.5px] bg-brass transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={orderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-wine text-ivory text-sm font-medium px-5 py-2.5 hover:bg-wine-dark transition-colors duration-300"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Order Now
            </a>
            <button
              onClick={() => setOpen(true)}
              className={`md:hidden p-2 transition-colors duration-500 ${
                scrolled ? 'text-wine' : 'text-ivory'
              }`}
              aria-label="Open menu"
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-wine-dark/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-full w-[78%] max-w-sm bg-ivory shadow-2xl px-7 py-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="px-2.5 py-1 rounded-xl bg-wine-dark border border-brass-light shadow-md">
                  <img src={logo} alt={business.brandName} className="h-8 w-auto object-contain brightness-110" />
                </div>
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 text-wine">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                    className="font-display text-3xl text-wine py-3 border-b border-blush-light"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <a
                href={orderLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-wine text-ivory font-medium px-5 py-3.5"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Order Now on WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
