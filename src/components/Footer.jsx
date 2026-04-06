import { Phone, Mail, Globe, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  'Quick Links': [
    { name: 'About', href: '#about' },
    { name: 'Materials', href: '#materials' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Network', href: '#network' },
    { name: 'Contact', href: '#contact' },
  ],
  'Materials': [
    { name: 'Copper Scrap', href: '#materials' },
    { name: 'Aluminum Scrap', href: '#materials' },
    { name: 'Zorba', href: '#materials' },
    { name: 'Electric Motor Scrap', href: '#materials' },
    { name: 'Auto Batteries', href: '#materials' },
    { name: 'Copper Wire Scrap', href: '#materials' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-5 group">
              <img 
                src="/logo.png" 
                alt="Indigo Scrap Metal" 
                className="h-16 w-auto object-contain drop-shadow-[0_0_10px_rgba(99,102,241,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300"
              />
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Global scrap metal brokerage and sourcing. Connecting suppliers, recyclers, 
              and smelters across international markets.
            </p>
            <div className="space-y-3">
              <a href="tel:+14126208915" className="flex items-center gap-2 text-slate-400 hover:text-indigo-300 text-sm transition-colors">
                <Phone className="w-4 h-4" />
                +1 412-620-8915
              </a>
              <a href="mailto:info@indigoscrapmetal.com" className="flex items-center gap-2 text-slate-400 hover:text-indigo-300 text-sm transition-colors">
                <Mail className="w-4 h-4" />
                info@indigoscrapmetal.com
              </a>
              <a href="https://www.indigoscrapmetal.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-indigo-300 text-sm transition-colors">
                <Globe className="w-4 h-4" />
                www.indigoscrapmetal.com
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-outfit font-semibold text-white text-sm uppercase tracking-wider mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-500 hover:text-indigo-300 text-sm transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA column */}
          <div>
            <h4 className="font-outfit font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Ready to Trade?
            </h4>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              Get in touch for scrap offers, supply inquiries, or international trade opportunities.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-xl text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              Send Inquiry
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Indigo Scrap Metal LLC. Global Scrap Brokerage & Metal Trading.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
