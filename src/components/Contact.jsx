import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, Send } from 'lucide-react'
import { business, buildWhatsAppLink, bagTypeOptions } from '../data/content'
import WhatsAppIcon from './WhatsAppIcon'

const initialForm = {
  name: '',
  phone: '',
  quantity: '',
  bagType: bagTypeOptions[0],
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.quantity) return

    setStatus('sending')

    const message = [
      `Hi ${business.brandName}, I'd like to enquire about a bulk order.`,
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Quantity required: ${form.quantity}`,
      `Bag type: ${form.bagType}`,
      form.message ? `Message: ${form.message}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    const link = buildWhatsAppLink(message)

    setTimeout(() => {
      window.open(link, '_blank', 'noopener,noreferrer')
      setStatus('sent')
      setTimeout(() => {
        setStatus('idle')
        setForm(initialForm)
      }, 2600)
    }, 700)
  }

  const directChat = buildWhatsAppLink(
    `Hi ${business.brandName}, I have a question about your bags.`
  )

  return (
    <section id="contact" className="py-24 sm:py-32 bg-paper">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-14">
        {/* left: info */}
        <div className="lg:col-span-5">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brass text-sm tracking-[0.14em] mb-3"
          >
            Get in touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl text-wine leading-[1.1]"
          >
            Let's talk bulk orders.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-5 text-ink/70 leading-relaxed max-w-md"
          >
            Share your quantity and requirement, and our team will get back to
            you directly on WhatsApp with pricing and timelines.
          </motion.p>

          <div className="mt-10 space-y-5">
            <a
              href={`mailto:${business.email}`}
              className="flex items-center gap-4 group"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-wine/25 text-wine group-hover:bg-wine group-hover:text-ivory transition-colors">
                <Mail className="h-4 w-4" />
              </span>
              <span className="text-ink/80 group-hover:text-wine transition-colors">
                {business.email}
              </span>
            </a>
            <a
              href={`tel:+${business.whatsappNumber}`}
              className="flex items-center gap-4 group"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-wine/25 text-wine group-hover:bg-wine group-hover:text-ivory transition-colors">
                <Phone className="h-4 w-4" />
              </span>
              <span className="text-ink/80 group-hover:text-wine transition-colors">
                {business.displayPhone}
              </span>
            </a>
            <a
              href={directChat}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-wine/25 text-wine group-hover:bg-wine group-hover:text-ivory transition-colors">
                <WhatsAppIcon className="h-4 w-4" />
              </span>
              <span className="text-ink/80 group-hover:text-wine transition-colors">
                Chat with us on WhatsApp
              </span>
            </a>
          </div>
        </div>

        {/* right: form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 relative border border-brass/40 p-6 sm:p-10 bg-ivory"
        >
          <AnimatePresence mode="wait">
            {status === 'sent' ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center text-center py-16"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-wine text-ivory mb-5">
                  <WhatsAppIcon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-2xl text-wine">Opening WhatsApp…</h3>
                <p className="mt-2 text-ink/60 text-sm max-w-xs">
                  We've prefilled your message. Just hit send on WhatsApp.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid sm:grid-cols-2 gap-6"
              >
                <Field label="Full name" required>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Your name"
                    className="input"
                  />
                </Field>
                <Field label="Phone number" required>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="+91 XXXXX XXXXX"
                    className="input"
                  />
                </Field>
                <Field label="Quantity required" required>
                  <input
                    required
                    type="number"
                    min="1"
                    value={form.quantity}
                    onChange={update('quantity')}
                    placeholder="e.g. 200 pieces"
                    className="input"
                  />
                </Field>
                <Field label="Bag type">
                  <select value={form.bagType} onChange={update('bagType')} className="input">
                    {bagTypeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Message" full>
                  <textarea
                    value={form.message}
                    onChange={update('message')}
                    rows={4}
                    placeholder="Tell us more about what you need (optional)"
                    className="input resize-none"
                  />
                </Field>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="sm:col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-wine text-ivory font-medium px-7 py-4 hover:bg-wine-dark transition-all duration-300 disabled:opacity-70"
                >
                  {status === 'sending' ? (
                    'Preparing your message…'
                  ) : (
                    <>
                      Send via WhatsApp
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
                <p className="sm:col-span-2 text-xs text-muted -mt-2">
                  * Required. Submitting opens WhatsApp with your details filled in.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

function Field({ label, children, required, full }) {
  return (
    <label className={`block ${full ? 'sm:col-span-2' : ''}`}>
      <span className="block text-xs tracking-wide uppercase text-muted mb-2">
        {label}
        {required && <span className="text-wine"> *</span>}
      </span>
      {children}
    </label>
  )
}
