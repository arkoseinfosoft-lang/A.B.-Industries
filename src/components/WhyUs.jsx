import { motion } from 'framer-motion'
import { Award, Factory, Sparkles, Truck } from 'lucide-react'
import { whyUs, stats } from '../data/content'
import { useCountUp } from '../hooks/useCountUp'

const icons = [Award, Factory, Sparkles, Truck]

function Stat({ stat, isLast }) {
  const [ref, value] = useCountUp(stat.value)
  return (
    <div
      ref={ref}
      className={`flex-1 px-6 py-8 sm:py-0 text-center sm:text-left ${
        !isLast ? 'sm:border-r border-ivory/15' : ''
      }`}
    >
      <p className="font-display text-4xl sm:text-5xl text-brass">
        {value.toLocaleString()}
        {stat.suffix}
      </p>
      <p className="mt-2 text-ivory/70 text-sm max-w-[16ch] mx-auto sm:mx-0">
        {stat.label}
      </p>
    </div>
  )
}

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-wine-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-24 sm:pt-28">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brass text-sm tracking-[0.14em] mb-3"
        >
          Why choose us
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl text-ivory leading-[1.1] max-w-2xl"
        >
          Built for manufacturers who need to move fast.
        </motion.h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {whyUs.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Icon className="h-7 w-7 text-brass" strokeWidth={1.4} />
                <h3 className="font-display text-2xl text-ivory mt-4">{item.title}</h3>
                <p className="mt-2 text-ivory/65 text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>

      <div className="mt-20 border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row divide-y sm:divide-y-0 divide-ivory/10 pb-10 sm:pb-16">
          {stats.map((stat, i) => (
            <Stat key={stat.label} stat={stat} isLast={i === stats.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
