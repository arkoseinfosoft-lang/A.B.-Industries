import { motion } from 'framer-motion'
import { aboutImage, business } from '../data/content'

const badges = ['Est. 1997', 'Factory-direct pricing', 'Pan-India dispatch']

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* image */}
        <motion.div
          initial={{ opacity: 0, x: -40, clipPath: 'inset(0 100% 0 0)' }}
          whileInView={{ opacity: 1, x: 0, clipPath: 'inset(0 0% 0 0)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-2 lg:order-1 px-2 sm:px-0"
        >
          <div className="relative aspect-[4/5] max-w-[280px] sm:max-w-sm mx-auto">
            <div className="absolute -inset-2 sm:-inset-3 border border-brass/50" />
            <img
              src={aboutImage}
              alt="Craftsmanship behind A.B. Industries bags"
              className="relative h-full w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-wine text-ivory px-6 py-5 max-w-[190px] shadow-xl">
              <p className="font-display text-3xl leading-none">
                {new Date().getFullYear() - business.established}+
              </p>
              <p className="text-xs text-ivory/80 mt-1 leading-snug">
                years designing bags women trust
              </p>
            </div>
          </div>
        </motion.div>

        {/* copy */}
        <div className="order-1 lg:order-2">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brass text-sm tracking-[0.14em] mb-3"
          >
            Our story
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl sm:text-5xl text-wine leading-[1.1]"
          >
            Twenty-five years in the making.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 space-y-4 text-ink/80 leading-relaxed max-w-xl"
          >
            <p>
              Established in {business.established}, {business.legalName} has
              over 25+ years of rich experience in designing and manufacturing
              premium ladies' bags and fashion accessories. Founded by our
              visionaries, our factory blends classic craftsmanship with the
              latest fashion trends.
            </p>
            <p className="font-display italic text-xl text-wine/90 border-l-2 border-brass pl-4">
              Classic craftsmanship, tailored to modern trends.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center rounded-full border border-wine/25 px-4 py-2 text-sm text-wine/90"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
