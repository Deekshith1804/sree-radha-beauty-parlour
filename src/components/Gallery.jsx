import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, X, ChevronLeft, ChevronRight, Eye, Maximize2 } from 'lucide-react'
import { GALLERY_ITEMS } from '../config/parlour'
import { FloralDivider } from './FloralMotif'

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const categories = [
    'All',
    'Bridal Looks',
    'Party Makeup',
    'Hair Styling',
    'Skincare',
    'Beauty Transformations',
  ]

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === 'All') return true
    return item.category === selectedCategory
  })

  // Lightbox navigation
  const openLightbox = (index) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const nextImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev + 1) % filteredItems.length)
    }
  }, [lightboxIndex, filteredItems.length])

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
    }
  }, [lightboxIndex, filteredItems.length])

  // Keyboard controls for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, nextImage, prevImage])

  return (
    <section id="gallery" className="gallery-section" aria-labelledby="gallery-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-eyebrow-wrap">
            <Sparkles size={14} className="gold-icon" aria-hidden="true" />
            <span className="section-eyebrow">Visual Inspiration</span>
          </div>

          <h2 id="gallery-heading" className="section-title">
            The Sree Radha Gallery
          </h2>

          <FloralDivider className="gallery-divider" />

          <p className="section-subtitle">
            A glimpse into bridal looks, festive styling, and beauty transformations designed to
            inspire your next look with D. Sunitha.
          </p>

          <p className="gallery-disclaimer-note">
            Note: Curated portfolio lookbook. Easily replaceable with client-approved photographs.
          </p>

          {/* Category Filter Tabs */}
          <div className="gallery-filter-tabs" role="tablist" aria-label="Gallery Categories">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                onClick={() => {
                  setSelectedCategory(cat)
                  setLightboxIndex(null)
                }}
                className={`gallery-filter-pill ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              className="gallery-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
              onClick={() => openLightbox(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  openLightbox(idx)
                }
              }}
              aria-label={`View ${item.title} image`}
            >
              <div className="gallery-image-box">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-hover-overlay">
                  <div className="gallery-zoom-badge">
                    <Maximize2 size={16} />
                    <span>Expand Look</span>
                  </div>
                  <span className="gallery-item-category">{item.category}</span>
                  <h4 className="gallery-item-title">{item.title}</h4>
                  <p className="gallery-item-caption">{item.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image Lightbox"
          >
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={closeLightbox}
                aria-label="Close Lightbox"
              >
                <X size={24} />
              </button>

              <button
                type="button"
                className="lightbox-nav-btn prev"
                onClick={prevImage}
                aria-label="Previous Image"
              >
                <ChevronLeft size={28} />
              </button>

              <button
                type="button"
                className="lightbox-nav-btn next"
                onClick={nextImage}
                aria-label="Next Image"
              >
                <ChevronRight size={28} />
              </button>

              <div className="lightbox-image-container">
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="lightbox-img"
                />
              </div>

              <div className="lightbox-caption-bar">
                <div className="caption-text-wrap">
                  <span className="lightbox-cat">
                    {filteredItems[lightboxIndex].category}
                  </span>
                  <h3 className="lightbox-title">
                    {filteredItems[lightboxIndex].title}
                  </h3>
                  <p className="lightbox-caption">
                    {filteredItems[lightboxIndex].caption}
                  </p>
                </div>
                <div className="lightbox-counter">
                  {lightboxIndex + 1} of {filteredItems.length}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
