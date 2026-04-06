import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin } from 'lucide-react'

const regions = [
  {
    name: 'United States',
    description: 'Primary sourcing hub with extensive recycling yard network',
    flag: '🇺🇸',
    connections: '50+ Partners',
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'India',
    description: 'Major buyer market for non-ferrous scrap materials',
    flag: '🇮🇳',
    connections: '30+ Partners',
    color: 'from-orange-500 to-orange-600',
  },
  {
    name: 'Southeast Asia',
    description: 'Growing market for recycled metal materials',
    flag: '🌏',
    connections: '20+ Partners',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    name: 'Middle East',
    description: 'Key trading hub for international metal commerce',
    flag: '🌍',
    connections: '15+ Partners',
    color: 'from-amber-500 to-amber-600',
  },
]

export default function Network() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="network" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="section-divider mb-32" />

      {/* Background */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[180px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-semibold text-sm tracking-[0.2em] uppercase mb-4 block">
            Our Reach
          </span>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Global Trading <span className="gradient-text">Network</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Our network spans across major metal recycling hubs worldwide, helping 
            move scrap materials efficiently from suppliers to buyers.
          </p>
        </motion.div>

        {/* Network map visualization */}
        <div className="relative mb-16">
          {/* Connection lines (decorative) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, i) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                className="glass rounded-3xl p-6 text-center group hover:bg-white/[0.07] hover:-translate-y-2 transition-all duration-500 relative cursor-default"
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-b ${region.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Flag emoji */}
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                    {region.flag}
                  </div>

                  {/* Location dot */}
                  <div className="flex items-center justify-center gap-1.5 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    <h3 className="font-outfit font-bold text-white text-lg">
                      {region.name}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    {region.description}
                  </p>

                  {/* Connection badge */}
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${region.color} bg-opacity-10 text-xs font-semibold`}
                    style={{ background: `linear-gradient(to right, rgba(99,102,241,0.1), rgba(99,102,241,0.05))` }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                    <span className="text-indigo-300">{region.connections}</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Network summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass rounded-3xl p-8 sm:p-10 text-center max-w-3xl mx-auto"
        >
          <p className="text-slate-300 text-lg leading-relaxed">
            Indigo Scrap Metal LLC works with recycling yards, traders, and smelters 
            across international markets. Our network helps move scrap materials 
            efficiently from <span className="text-indigo-300 font-semibold">suppliers to buyers</span> in 
            major metal recycling hubs.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
