// ---------------------------------------------------------------------------
// Central content file. Edit business details, copy, and links here.
// ---------------------------------------------------------------------------

export const business = {
  legalName: 'A.B. Industries',
  brandName: 'A.B. Bags',
  tagline: 'Carry Your Style',
  established: 1997,
  email: 'abindustries729@gmail.com',
  // Stored without the leading "+" for wa.me links, with country code.
  whatsappNumber: '919250130858',
  displayPhone: '+91 92501 30858',
}

/** Builds a wa.me deep link with a prefilled, URL-encoded message. */
export function buildWhatsAppLink(message) {
  const base = `https://wa.me/${business.whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Collections', href: '#collections' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export const heroImage =
  'https://images.unsplash.com/photo-1546333456-3e8ed81f41e2?auto=format&fit=crop&w=1800&q=80'

export const aboutImage =
  'https://images.unsplash.com/photo-1613482184972-f9c1022d0928?auto=format&fit=crop&w=1200&q=80'

export const categories = [
  {
    id: 'fashion-bags',
    name: 'Ladies Fashion Bags',
    tag: 'Bestseller',
    description:
      'Trendy, elegant and stylish bags designed for daily wear, parties and formal occasions.',
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80',
    moq: 'MOQ 50 pcs',
    priceText: 'Direct Factory Rates',
    specs: ['Premium PU & Leatherette', 'Custom Colors', 'Export Finish'],
    featured: true,
  },
  {
    id: 'box-bags',
    name: 'Box Bags / Structured Bags',
    tag: 'Trending Design',
    description:
      'High-finish box-style handbags with rigid framing, premium linings and contemporary hardware.',
    image:
      'https://images.unsplash.com/photo-1605733513597-a8f8341084e6?auto=format&fit=crop&w=1000&q=80',
    moq: 'MOQ 50 pcs',
    priceText: 'Direct Factory Rates',
    specs: ['Rigid Framing', 'Metallic Clasp', 'Shape Retention'],
  },
  {
    id: 'crossbody-sling',
    name: 'Crossbody & Sling Bags',
    tag: 'Popular Choice',
    description:
      'Compact, functional and hands-free bags crafted with adjustable straps and secure compartments.',
    image:
      'https://images.unsplash.com/photo-1603219527847-24c87f552a77?auto=format&fit=crop&w=1000&q=80',
    moq: 'MOQ 50 pcs',
    priceText: 'Direct Factory Rates',
    specs: ['Adjustable Strap', 'Secure Zippers', 'Everyday Comfort'],
  },
  {
    id: 'shoulder-handbags',
    name: 'Shoulder & Handbags',
    tag: 'Signature Line',
    description:
      'Spacious, fashionable designs crafted from high-quality PU leather, fabrics and textured materials.',
    image:
      'https://images.unsplash.com/photo-1612902456551-333ac5afa26e?auto=format&fit=crop&w=1000&q=80',
    moq: 'MOQ 50 pcs',
    priceText: 'Direct Factory Rates',
    specs: ['Spacious Capacity', 'Reinforced Handles', 'Bespoke Lining'],
  },
]

export const galleryImages = [
  'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1637868796504-32f45a96d5a0?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1691480150204-66dd1eb77391?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1624687943971-e86af76d57de?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1622560257067-108402fcedc0?auto=format&fit=crop&w=900&q=80',
]

export const stats = [
  { value: 25, suffix: '+', label: 'Years of manufacturing experience' },
  { value: 1997, suffix: '', label: 'Established, and still crafting' },
  { value: 100, suffix: '%', label: 'Factory-direct pricing' },
  { value: 4, suffix: '', label: 'Core bag categories in production' },
]

export const whyUs = [
  {
    title: 'Legacy of excellence',
    description: '25+ years of industry experience manufacturing ladies bags, since 1997.',
  },
  {
    title: 'Direct factory pricing',
    description: 'Transparent, cost-effective rates straight from the manufacturer — no middlemen.',
  },
  {
    title: 'Trendsetting designs',
    description: 'A constantly updated catalog that keeps pace with global fashion trends.',
  },
  {
    title: 'Capacity & timely delivery',
    description: 'Good production capacity built to support bulk orders and reliable timelines.',
  },
]

export const bagTypeOptions = [
  'Ladies Fashion Bags',
  'Box Bags / Structured Bags',
  'Crossbody & Sling Bags',
  'Shoulder & Handbags',
  'Not sure yet / custom requirement',
]

export const factoryImage =
  'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&w=1000&q=80'

export const heritageTimeline = [
  {
    year: '1997',
    badge: 'Foundation',
    title: 'Master Workshop Founded',
    subtitle: 'Old Delhi Craftsmanship',
    description:
      'A.B. Industries was founded with a dedicated team of master leathercraft artisans, focused on precision hand-stitching, durable framing, and bespoke ladies handbags.',
  },
  {
    year: '2008',
    badge: 'Modernization',
    title: 'Factory Scaling & Mechanization',
    subtitle: 'Industrial Precision',
    description:
      'Invested in computerized pattern-cutting, imported edge-inking lines, and scaled production to supply major domestic wholesale hubs across North India.',
  },
  {
    year: '2016',
    badge: 'Private Label',
    title: 'OEM & Pan-India Expansion',
    subtitle: 'Trusted Manufacturing Partner',
    description:
      'Launched end-to-end private-label OEM manufacturing for regional retail chains, fashion boutiques, and D2C brands, introducing bespoke hardware stamping.',
  },
  {
    year: 'Today',
    badge: 'High-Volume Hub',
    title: '50,000+ Units Monthly Capacity',
    subtitle: 'Direct-to-Buyer Efficiency',
    description:
      'Operating a multi-line facility shipping thousands of trendsetting handbags weekly with zero middlemen, 100% factory-direct rates, and rapid pan-India dispatch.',
  },
]

export const manufacturingCapabilities = [
  {
    value: '50,000+',
    unit: 'Units / Mo',
    label: 'Monthly Production Capacity',
    description: 'Scalable production lines ready for quick turnarounds and peak festive demands.',
    iconKey: 'Factory',
  },
  {
    value: '10,000+',
    unit: 'Sq. Ft.',
    label: 'Dedicated Facility & Workshop',
    description: 'Integrated facility with raw material inventory, assembly lines & packaging bays.',
    iconKey: 'Building2',
  },
  {
    value: '100+',
    unit: 'Artisans',
    label: 'Master Craftsmen & Operators',
    description: 'Skilled pattern makers, stitchers, and auditors with decades of handbag expertise.',
    iconKey: 'Users',
  },
  {
    value: '3-Stage',
    unit: 'Inspection',
    label: 'Rigorous Quality Audit',
    description: 'Raw material verification, in-line seam checks, and final zipper pull/weight stress test.',
    iconKey: 'ShieldCheck',
  },
]

export const craftsmanshipPillars = [
  {
    title: 'High-Density Bonded Stitching',
    detail: 'Reinforced stress points with 6-ply nylon bonded thread to prevent seam slippage.',
  },
  {
    title: 'Multi-Coat Edge Finishing',
    detail: '3-layer edge inking with heat cure for flawless, smooth rims that never peel.',
  },
  {
    title: 'Electroplated Brass Hardware',
    detail: 'Heavy-duty zinc alloy and brass zippers with anti-tarnish protective lacquer.',
  },
  {
    title: 'Eco-Grade PU & Vegan Leather',
    detail: 'Pliable, anti-peel synthetic leather with soft-touch feel and authentic grain.',
  },
]

