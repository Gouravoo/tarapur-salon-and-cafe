import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiZoomIn } from 'react-icons/fi'
import './Gallery.css'

const images = [
  { id: 1, src: '/assets/gallery1.png', alt: 'Sharp fade haircut transformation at 9XM Salon', span: 'tall', label: 'Textured Crop + Fade' },
  { id: 2, src: '/assets/gallery2.png', alt: 'Luxury straight razor shave at 9XM Salon Tarapur', span: '', label: 'Straight Razor Shave' },
  { id: 3, src: '/assets/gallery3.png', alt: 'Premium hairstyling at 9XM Salon Munger', span: '', label: 'Styled Quiff' },
  { id: 4, src: '/assets/beard.png', alt: 'Beard sculpting and shaping at 9XM Salon', span: '', label: 'Beard Sculpt' },
  { id: 5, src: '/assets/haircut.png', alt: 'Master barber at work in 9XM Salon', span: 'wide', label: 'Master Craftwork' },
  { id: 6, src: '/assets/facial.png', alt: "Premium men's facial at 9XM Salon", span: '', label: 'Luxury Facial' },
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  const openLightbox = useCallback((img) => setSelected(img), [])
  const closeLightbox = useCallback(() => setSelected(null), [])

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-tag">Our Work</span>
          <h2 className="section-title">Transformations <em>Gallery</em></h2>
          <p className="section-desc">Every cut tells a story. Every client leaves transformed. Browse our finest work.</p>
        </motion.div>

        <div className="gallery-grid">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              className={`gallery-item ${img.span ? `gallery-item--${img.span}` : ''}`}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => openLightbox(img)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" className="gallery-img" />
              <div className="gallery-overlay">
                <span className="gallery-label">{img.label}</span>
                <div className="gallery-zoom"><FiZoomIn /></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="lightbox-inner"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
                <FiX />
              </button>
              <img src={selected.src} alt={selected.alt} className="lightbox-img" />
              <div className="lightbox-label">{selected.label}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
