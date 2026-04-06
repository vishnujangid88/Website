import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Globe, Handshake } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Reliable Sourcing',
    description: 'Direct connections with recycling yards and processors across the United States.',
    color: 'from-emerald-500 to-emerald-600',
    shadow: 'shadow-emerald-500/20',
  },
  {
    icon: Globe,
    title: 'Global Buyers',
    description: 'Supplying scrap to smelters, traders, and metal processors internationally.',
    color: 'from-cyan-500 to-cyan-600',
    shadow: 'shadow-cyan-500/20',
  },
  {
    icon: Handshake,
    title: 'Brokerage Expertise',
    description: 'Experienced coordination between suppliers and buyers for efficient trade execution.',
    color: 'from-amber-500 to-amber-600',
    shadow: 'shadow-amber-500/20',
  },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="section-divider mb-32" />

      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-indigo-400 font-semibold text-sm tracking-[0.2em] uppercase mb-4 block">
                About Us
              </span>
              <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight">
                Your Trusted Partner in{' '}
                <span className="gradient-text">Global Scrap Trading</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Indigo Scrap Metal LLC is an international scrap sourcing and brokerage 
                company specializing in ferrous and non-ferrous scrap materials. We work 
                closely with recycling yards, exporters, processors, and smelters to 
                facilitate efficient global scrap trading.
              </p>
              <p className="text-slate-500 leading-relaxed">
                Our role is to connect reliable suppliers with serious buyers, ensuring 
                competitive pricing, transparent communication, and smooth shipment 
                coordination. Through our strong network of recycling partners in the 
                United States, we help supply scrap materials to foundries and metal 
                processors worldwide.
              </p>
            </motion.div>
          </div>

          {/* Right column - Feature cards */}
          <div className="space-y-5">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="glass rounded-2xl p-6 hover:bg-white/[0.07] transition-all duration-500 group cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shrink-0 shadow-lg ${feature.shadow} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-outfit font-semibold text-white text-lg mb-1 group-hover:text-indigo-200 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
