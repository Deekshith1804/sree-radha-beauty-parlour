import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, MessageCircle, ArrowRight, Check } from 'lucide-react'
import { SERVICES_DATA, BUSINESS_CONFIG } from '../config/parlour'
import { FloralDivider } from './FloralMotif'

export default function Services({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'Occasion & Bridal', 'Skincare Wellness', 'Hair Artistry & Care', 'Grooming & Packages']

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (activeCategory === 'All') return true
    if (activeCategory === 'Occasion & Bridal')
      return service.category.includes('Bridal') || service.category.includes('Glamour') || service.category.includes('Traditional')
    if (activeCategory === 'Skincare Wellness')
      return service.category.includes('Skincare') || service.category.includes('Smooth') || service.category.includes('Nail')
    if (activeCategory === 'Hair Artistry & Care')
      return service.category.includes('Hair')
    if (activeCategory === 'Grooming & Packages')
      return service.category.includes('Grooming') || service.category.includes('Combinations')
    return true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section id="services" className="services-section" aria-labelledby="services-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-eyebrow-wrap">
            <Sparkles size={14} className="gold-icon" aria-hidden="true" />
            <span className="section-eyebrow">Curated Service Menu</span>
          </div>

          <h2 id="services-heading" className="section-title">
            Tailored Beauty Services
          </h2>

          <FloralDivider className="services-divider" />

          <p className="section-subtitle">
            Explore our customizable service menu designed to enhance your natural grace.
            Every service is tailored by D. Sunitha with gentle care and thoughtful styling.
          </p>

          <div className="services-menu-note">
            <span>✨ Customizable Menu • Contact for personalized pricing and consultations</span>
          </div>

          {/* Filter Pills */}
          <div className="service-filters" role="tablist" aria-label="Filter Services">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`service-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {filteredServices.map((service) => (
            <motion.article
              key={service.id}
              className="service-card"
              variants={cardVariants}
            >
              <div className="service-img-frame">
                <img
                  src={service.image}
                  alt={service.name}
                  className="service-img"
                  loading="lazy"
                />
                <div className="service-img-overlay" aria-hidden="true"></div>
                <span className="service-tag">{service.tag}</span>
              </div>

              <div className="service-content">
                <span className="service-category">{service.category}</span>
                <h3 className="service-name">{service.name}</h3>
                <p className="service-desc">{service.description}</p>

                <div className="service-details-box">
                  <Check size={14} className="gold-icon flex-shrink-0" aria-hidden="true" />
                  <span className="service-details-text">{service.details}</span>
                </div>

                <div className="service-card-footer">
                  <span className="service-pricing-badge">Contact for Pricing</span>

                  <button
                    type="button"
                    onClick={() => onSelectService(service.name)}
                    className="service-enquire-btn"
                    aria-label={`Enquire about ${service.name}`}
                  >
                    <span>Enquire Now</span>
                    <ArrowRight size={15} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Custom Consultation Callout */}
        <div className="services-custom-callout">
          <div className="callout-inner">
            <div className="callout-text">
              <h3 className="callout-heading">Need a Custom Beauty or Bridal Package?</h3>
              <p className="callout-sub">
                We are happy to craft personalized packages tailored for your specific date,
                look preference, and comfort. Connect with D. Sunitha on WhatsApp for details.
              </p>
            </div>
            <div className="callout-btn-wrap">
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                  `Hello Sree Radha Beauty Parlour, I would like to inquire about a customized beauty package with D. Sunitha.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-luxury-wine"
              >
                <MessageCircle size={18} aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
