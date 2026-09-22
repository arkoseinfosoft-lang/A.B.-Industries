import logo from '../assets/logo.jpg'
import { business, navLinks } from '../data/content'
import Sparkle from './Sparkle'

export default function Footer() {
  return (
    <footer className="bg-wine-dark text-ivory pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-3 gap-10 pb-12 border-b border-ivory/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt={business.brandName} className="h-12 w-12 rounded-md" />
              <div>
                <p className="font-display text-2xl">{business.brandName}</p>
                <p className="text-[11px] uppercase tracking-[0.16em] text-ivory/50">
                  {business.tagline}
                </p>
              </div>
            </div>
            <p className="text-ivory/60 text-sm leading-relaxed max-w-xs">
              {business.legalName} — premium ladies bags & fashion accessories
              manufacturer since {business.established}.
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.14em] text-brass mb-4">Navigate</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-ivory/70 hover:text-ivory transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.14em] text-brass mb-4">Contact</p>
            <ul className="space-y-2.5 text-ivory/70">
              <li>
                <a href={`mailto:${business.email}`} className="hover:text-ivory transition-colors">
                  {business.email}
                </a>
              </li>
              <li>
                <a href={`tel:+${business.whatsappNumber}`} className="hover:text-ivory transition-colors">
                  {business.displayPhone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-ivory/50 text-sm">
          <p className="flex items-center gap-2">
            <Sparkle className="h-3 w-3 text-brass" />
            &copy; {new Date().getFullYear()} {business.legalName}. All rights reserved.Designed & Developed by Arkose Infosoft.
          </p>
          <p>Carry Your Style.</p>
        </div>
      </div>
    </footer>
  )
}
