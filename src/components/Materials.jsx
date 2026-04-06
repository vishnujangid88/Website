import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Zap, Cpu, Disc, Layers, Battery, Settings, Wind, 
  CircuitBoard, Car, Shuffle, Box, Cable
} from 'lucide-react'

const materials = [
  { name: 'Electric Motor Scrap', icon: Zap, desc: 'High-grade electric motor components' },
  { name: 'Zorba', icon: Shuffle, desc: 'Mixed shredded non-ferrous metals' },
  { name: 'Copper Scrap', icon: Disc, desc: 'Various grades of copper scrap' },
  { name: 'Aluminum Scrap', icon: Layers, desc: 'Multiple aluminum alloy grades' },
  { name: 'Alternators', icon: Cpu, desc: 'Automotive alternator units' },
  { name: 'Starters', icon: Settings, desc: 'Vehicle starter motor assemblies' },
  { name: 'AC Compressors', icon: Wind, desc: 'Air conditioning compressor units' },
  { name: 'Aluminum Radiators', icon: CircuitBoard, desc: 'Automotive aluminum radiators' },
  { name: 'Auto Batteries', icon: Battery, desc: 'Used automotive lead-acid batteries' },
  { name: 'Mixed Non-Ferrous', icon: Box, desc: 'Assorted non-ferrous metal mix' },
  { name: 'Aluminum Tense', icon: Car, desc: 'Aluminum tense scrap material' },
  { name: 'Copper Wire Scrap', icon: Cable, desc: 'Insulated and bare copper wire' },
]

export default function Materials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="materials" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="section-divider mb-32" />

      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-semibold text-sm tracking-[0.2em] uppercase mb-4 block">
            What We Handle
          </span>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Scrap Materials <span className="gradient-text">We Trade</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Comprehensive range of ferrous and non-ferrous scrap materials sourced from 
            trusted recycling yards across the United States.
          </p>
        </motion.div>

        {/* Materials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {materials.map((material, i) => (
            <motion.div
              key={material.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="glass rounded-2xl p-5 group hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-500 cursor-default"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 flex items-center justify-center mb-4 group-hover:from-indigo-500/30 group-hover:to-indigo-600/30 transition-all duration-300">
                <material.icon className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
              </div>
              <h3 className="font-outfit font-semibold text-white text-base mb-1 group-hover:text-indigo-200 transition-colors">
                {material.name}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {material.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
