import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, Mail, Globe, User, Building2, MapPin } from 'lucide-react'

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="contact" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="section-divider mb-32" />

      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-semibold text-sm tracking-[0.2em] uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Contact <span className="gradient-text">Indigo Scrap Metal</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            For scrap offers, supply inquiries, or international trade opportunities, 
            please reach out to us.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-3xl p-8 sm:p-10"
          >
            <h3 className="font-outfit font-bold text-2xl text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Person */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 flex items-center justify-center shrink-0 group-hover:from-indigo-500/30 group-hover:to-indigo-600/30 transition-all duration-300">
                  <User className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Representative</p>
                  <p className="text-white font-semibold">Somesh Loonker</p>
                </div>
              </div>

              {/* Company */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 flex items-center justify-center shrink-0 group-hover:from-cyan-500/30 group-hover:to-cyan-600/30 transition-all duration-300">
                  <Building2 className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Company</p>
                  <p className="text-white font-semibold">Indigo Scrap Metal LLC</p>
                </div>
              </div>

              {/* Phone */}
              <a href="tel:+14126208915" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center shrink-0 group-hover:from-emerald-500/30 group-hover:to-emerald-600/30 transition-all duration-300">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Mobile</p>
                  <p className="text-white font-semibold group-hover:text-indigo-300 transition-colors">+1 412-620-8915</p>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:info@indigoscrapmetal.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center shrink-0 group-hover:from-amber-500/30 group-hover:to-amber-600/30 transition-all duration-300">
                  <Mail className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Email</p>
                  <p className="text-white font-semibold group-hover:text-indigo-300 transition-colors">info@indigoscrapmetal.com</p>
                </div>
              </a>

              {/* Website */}
              <a href="https://www.indigoscrapmetal.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 flex items-center justify-center shrink-0 group-hover:from-indigo-500/30 group-hover:to-indigo-600/30 transition-all duration-300">
                  <Globe className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Website</p>
                  <p className="text-white font-semibold group-hover:text-indigo-300 transition-colors">www.indigoscrapmetal.com</p>
                </div>
              </a>

              {/* Address */}
              <a href="https://www.google.com/maps/search/4512+Legacy+Drive+100+Plano+Texas+75024" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500/20 to-rose-600/20 flex items-center justify-center shrink-0 group-hover:from-rose-500/30 group-hover:to-rose-600/30 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-rose-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Address</p>
                  <p className="text-white font-semibold group-hover:text-indigo-300 transition-colors leading-snug">4512 Legacy Drive 100,<br />Plano, Texas 75024</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass rounded-3xl p-8 sm:p-10"
          >
            <h3 className="font-outfit font-bold text-2xl text-white mb-8">
              Send an Inquiry
            </h3>

            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Thank you for your inquiry! We will get back to you shortly.') }}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="text-sm text-slate-400 font-medium mb-2 block">Full Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 transition-all duration-300 text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-sm text-slate-400 font-medium mb-2 block">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 transition-all duration-300 text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-company" className="text-sm text-slate-400 font-medium mb-2 block">Company</label>
                <input
                  type="text"
                  id="contact-company"
                  placeholder="Your company name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 transition-all duration-300 text-sm"
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="text-sm text-slate-400 font-medium mb-2 block">Subject</label>
                <select
                  id="contact-subject"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 transition-all duration-300 text-sm appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236366f1' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`, backgroundPosition: 'right 16px center', backgroundRepeat: 'no-repeat' }}
                >
                  <option value="" className="bg-slate-900">Select a topic</option>
                  <option value="scrap-offer" className="bg-slate-900">Scrap Offer</option>
                  <option value="supply-inquiry" className="bg-slate-900">Supply Inquiry</option>
                  <option value="trade-opportunity" className="bg-slate-900">Trade Opportunity</option>
                  <option value="pricing" className="bg-slate-900">Pricing Request</option>
                  <option value="other" className="bg-slate-900">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="text-sm text-slate-400 font-medium mb-2 block">Message</label>
                <textarea
                  id="contact-message"
                  rows="4"
                  placeholder="Tell us about your scrap requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 transition-all duration-300 text-sm resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-xl text-white font-semibold text-base shadow-2xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
