import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Search, Globe, Ship, TrendingUp } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Scrap Sourcing',
    description: 'We source non-ferrous and ferrous scrap materials from recycling yards, processors, and industrial suppliers across the United States.',
    gradient: 'from-indigo-500 to-indigo-600',
    iconBg: 'from-indigo-500/20 to-indigo-600/20',
    hoverGlow: 'hover:shadow-indigo-500/10',
    number: '01',
  },
  {
    icon: Globe,
    title: 'International Brokerage',
    description: 'Connecting global buyers and sellers while ensuring fair pricing, reliable documentation, and transparent transactions.',
    gradient: 'from-cyan-500 to-cyan-600',
    iconBg: 'from-cyan-500/20 to-cyan-600/20',
    hoverGlow: 'hover:shadow-cyan-500/10',
    number: '02',
  },
  {
    icon: Ship,
    title: 'Export Coordination',
    description: 'Assisting suppliers and buyers with shipment planning, container booking coordination, and export documentation.',
    gradient: 'from-emerald-500 to-emerald-600',
    iconBg: 'from-emerald-500/20 to-emerald-600/20',
    hoverGlow: 'hover:shadow-emerald-500/10',
    number: '03',
  },
  {
    icon: TrendingUp,
    title: 'Market Intelligence',
    description: 'Providing market insights on scrap pricing trends, supply availability, and global metal demand.',
    gradient: 'from-amber-500 to-amber-600',
    iconBg: 'from-amber-500/20 to-amber-600/20',
    hoverGlow: 'hover:shadow-amber-500/10',
    number: '04',
  },
]

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="services" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="section-divider mb-32" />

      {/* Background */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[180px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-semibold text-sm tracking-[0.2em] uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            End-to-end scrap metal trading services from sourcing to delivery, 
            tailored for global market participants.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className={`glass rounded-3xl p-8 group hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-500 shadow-2xl shadow-transparent ${service.hoverGlow} cursor-default relative overflow-hidden`}
            >
              {/* Number watermark */}
              <span className="absolute top-4 right-6 text-6xl font-outfit font-bold text-white/[0.03] group-hover:text-white/[0.06] transition-colors duration-500">
                {service.number}
              </span>

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-7 h-7 bg-gradient-to-br ${service.gradient} bg-clip-text`} style={{ color: 'currentColor' }} />
                </div>

                <h3 className="font-outfit font-bold text-white text-xl mb-3 group-hover:text-indigo-200 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r ${service.gradient} group-hover:w-full transition-all duration-700`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
