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
    description:
      'Trendy, elegant and stylish bags designed for daily wear, parties and formal occasions.',
    image:
      'https://images.unsplash.com/photo-1637759292654-a12cb2be085e?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    id: 'box-bags',
    name: 'Box Bags / Structured Bags',
    description:
      'High-finish box-style handbags with rigid framing, premium linings and contemporary hardware.',
    image:
      'https://images.unsplash.com/photo-1605733513597-a8f8341084e6?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'crossbody-sling',
    name: 'Crossbody & Sling Bags',
    description:
      'Compact, functional and hands-free bags crafted with adjustable straps and secure compartments.',
    image:
      'https://images.unsplash.com/photo-1603219527847-24c87f552a77?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'shoulder-handbags',
    name: 'Shoulder & Handbags',
    description:
      'Spacious, fashionable designs crafted from high-quality PU leather, fabrics and textured materials.',
    image:
      'https://images.unsplash.com/photo-1612902456551-333ac5afa26e?auto=format&fit=crop&w=1000&q=80',
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
