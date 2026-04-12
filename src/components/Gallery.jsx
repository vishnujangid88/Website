import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Camera } from 'lucide-react'

const galleryItems = [
  { src: '/gallery/IMG_4564.jpeg', title: 'Facility Overview', span: 'col-span-1 sm:col-span-2 lg:col-span-2 row-span-2' },
  { src: '/gallery/brass honey scrap.jpg.jpeg', title: 'Brass Honey', span: 'col-span-1 sm:col-span-1 lg:col-span-1 row-span-1' },
  { src: '/gallery/aluminium-zorba-scrap.jpg.jpeg', title: 'Aluminum Zorba', span: 'col-span-1 sm:col-span-1 lg:col-span-1 row-span-1' },
  { src: '/gallery/alternator.jpg.jpeg', title: 'Alternators', span: 'col-span-1 sm:col-span-2 lg:col-span-1 row-span-1' },
  { src: '/gallery/ac compressors.jpg.jpeg', title: 'AC Compressors', span: 'col-span-1 sm:col-span-1 lg:col-span-1 row-span-1' },
  { src: '/gallery/battey scrap.jpg.jpeg', title: 'Battery Scrap', span: 'col-span-1 sm:col-span-1 lg:col-span-1 row-span-1' },
  { src: '/gallery/al nosed starters.jpg.jpeg', title: 'AL Nosed Starters', span: 'col-span-1 sm:col-span-1 lg:col-span-1 row-span-1' },
  { src: '/gallery/motor-scrap-1.jpg.jpeg', title: 'Motor Scrap', span: 'col-span-1 sm:col-span-1 lg:col-span-1 row-span-1' },
  { src: '/gallery/dirty aluminium radiators.jpg.jpeg', title: 'Dirty Radiators', span: 'col-span-1 sm:col-span-1 lg:col-span-1 row-span-1' },
  { src: '/gallery/sealed unit.jpg.jpeg', title: 'Sealed Units', span: 'col-span-1 sm:col-span-1 lg:col-span-1 row-span-1' },
  { src: '/gallery/tense scrap.jpg.jpeg', title: 'Tense Scrap', span: 'col-span-1 sm:col-span-2 lg:col-span-2 row-span-1' }
];

export default function Gallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="gallery" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="section-divider mb-32" />

      {/* Background */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[180px]" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-semibold text-sm tracking-[0.2em] uppercase mb-4 block">
            Our Facility & Stock
          </span>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Image <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A closer look at the high-quality non-ferrous and ferrous scrap materials 
            we process, inspect, and ship globally.
          </p>
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[250px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (i % 5) }}
              className={`relative group rounded-3xl overflow-hidden glass ${item.span}`}
            >
              <div className="absolute inset-0 bg-slate-900">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 backdrop-blur-md flex items-center justify-center border border-indigo-500/30">
                      <Camera className="w-5 h-5 text-indigo-300" />
                    </div>
                    <h3 className="font-outfit font-bold text-white text-xl drop-shadow-md">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
