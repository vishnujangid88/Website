import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'

// Gallery data - local images in public/gallery
const galleryImages = [
  {
    id: 1,
    src: '/gallery/scrap-yard.png',
    alt: 'Scrap metal yard overview',
    caption: 'Our Partner Recycling Yard',
    category: 'Facility',
  },
  {
    id: 2,
    src: '/gallery/copper-scrap.png',
    alt: 'Copper scrap materials',
    caption: 'Copper Scrap Processing',
    category: 'Materials',
  },
  {
    id: 3,
    src: '/gallery/electric-motors.png',
    alt: 'Electric motor scrap',
    caption: 'Electric Motor Scrap',
    category: 'Operations',
  },
  {
    id: 4,
    src: '/gallery/container-loading.png',
    alt: 'Container loading for export',
    caption: 'Container Loading & Export',
    category: 'Logistics',
  },
  {
    id: 5,
    src: '/gallery/aluminum-sorting.png',
    alt: 'Aluminum scrap sorting',
    caption: 'Aluminum Scrap Sorting',
    category: 'Materials',
  },
  {
    id: 6,
    src: '/gallery/shipping-port.png',
    alt: 'Global shipping operations',
    caption: 'Global Shipping Network',
    category: 'Logistics',
  },
  {
    id: 7,
    src: '/gallery/warehouse.png',
    alt: 'Scrap metal warehouse',
    caption: 'Storage & Warehousing',
    category: 'Facility',
  },
  {
    id: 8,
    src: '/gallery/quality-inspection.png',
    alt: 'Quality inspection process',
    caption: 'Quality Inspection',
    category: 'Operations',
  },
]

const categories = ['All', ...new Set(galleryImages.map(img => img.category))]

export default function Gallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length)
    }
  }

  return (
    <section id="gallery" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="section-divider mb-32" />

      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-indigo-400 font-semibold text-sm tracking-[0.2em] uppercase mb-4 block">
            Our Work
          </span>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Business <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A glimpse into our operations, facilities, and the materials we handle 
            across our global trading network.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                  : 'glass text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-5">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white font-outfit font-semibold text-base mb-1">{image.caption}</p>
                    <p className="text-indigo-300 text-xs font-medium">{image.category}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredImages[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lightbox-overlay"
            onClick={closeLightbox}
          >
            <div className="relative max-w-5xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <motion.img
                key={filteredImages[lightboxIndex].id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                className="w-full rounded-2xl object-contain max-h-[80vh]"
              />

              {/* Caption */}
              <div className="text-center mt-4">
                <p className="text-white font-outfit font-semibold text-lg">
                  {filteredImages[lightboxIndex].caption}
                </p>
                <p className="text-slate-400 text-sm mt-1">
                  {lightboxIndex + 1} / {filteredImages.length}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
