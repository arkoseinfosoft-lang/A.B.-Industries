import Sparkle from './Sparkle'
import { business } from '../data/content'

const items = [
  `Established ${business.established}`,
  'Premium PU Leather & Fabrics',
  'Direct Factory Pricing',
  'Pan-India Bulk Dispatch',
  '25+ Years of Craftsmanship',
]

export default function MarqueeStrip() {
  const track = [...items, ...items]

  return (
    <div className="relative bg-wine text-ivory py-3.5 overflow-hidden">
      <div className="flex w-max animate-marquee">
        {[...track, ...track].map((item, i) => (
          <div key={i} className="flex items-center gap-3 px-6 shrink-0">
            <span className="text-sm sm:text-[15px] tracking-wide whitespace-nowrap">
              {item}
            </span>
            <Sparkle className="h-3 w-3 text-brass shrink-0" />
          </div>
        ))}
      </div>
    </div>
  )
}
