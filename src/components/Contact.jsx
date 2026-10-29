import React from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, MessageCircle, Navigation, ExternalLink, Sparkles, Heart } from 'lucide-react'
import { BUSINESS_CONFIG } from '../config/parlour'
import { FloralDivider } from './FloralMotif'

export default function Contact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-eyebrow-wrap">
            <Sparkles size={14} className="gold-icon" aria-hidden="true" />
            <span className="section-eyebrow">Connect With Us</span>
          </div>

          <h2 id="contact-heading" className="section-title">
            Visit Sree Radha Beauty Parlour
          </h2>

          <FloralDivider className="contact-divider" />

          <p className="section-subtitle">
            We look forward to welcoming you for your beauty and bridal sessions. Reach out via
            phone, WhatsApp, or navigate to our parlour location.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Details Cards */}
          <div className="contact-info-col">
            {/* Main Parlour Identity Card */}
            <motion.div
              className="contact-card primary-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="contact-card-tag">Beauty Studio</span>
              <h3 className="contact-card-title">{BUSINESS_CONFIG.name}</h3>
              <p className="contact-beautician-name">
                <Sparkles size={15} className="gold-icon" />
                <span>Beautician: <strong>{BUSINESS_CONFIG.beautician}</strong></span>
              </p>
              <p className="contact-card-desc">
                Thoughtful and personalized beauty care tailored for your weddings, celebrations, and
                everyday radiance.
              </p>
            </motion.div>

            {/* Telephone Contact Card */}
            <motion.div
              className="contact-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="contact-card-header">
                <div className="contact-icon-circle">
                  <Phone size={20} className="gold-icon" />
                </div>
                <div>
                  <span className="card-mini-label">Direct Phone Connect</span>
                  <h4 className="card-value-phone">
                    <a href={`tel:${BUSINESS_CONFIG.phoneRaw}`} className="phone-link">
                      {BUSINESS_CONFIG.phone}
                    </a>
                  </h4>
                </div>
              </div>
              <p className="contact-subtext">Tap below to call directly or connect for an appointment.</p>
              <div className="contact-card-btns">
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                  className="btn btn-luxury-wine btn-sm"
                  aria-label="Call parlour directly"
                >
                  <Phone size={14} />
                  <span>Call Now</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                    `Hello Sree Radha Beauty Parlour, I would like to inquire about beauty services.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold-outline btn-sm"
                >
                  <MessageCircle size={14} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </motion.div>

            {/* Directions Card */}
            <motion.div
              className="contact-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="contact-card-header">
                <div className="contact-icon-circle">
                  <MapPin size={20} className="gold-icon" />
                </div>
                <div>
                  <span className="card-mini-label">Google Maps Location</span>
                  <h4 className="card-value-title">Find Sree Radha on Maps</h4>
                </div>
              </div>
              <p className="contact-subtext">
                Use the Google Maps link to get driving directions directly on your phone or computer.
              </p>
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-beige-soft btn-sm"
              >
                <Navigation size={14} />
                <span>Get Directions on Google Maps</span>
                <ExternalLink size={12} />
              </a>
            </motion.div>
          </div>

          {/* Right Map Card Frame */}
          <motion.div
            className="contact-map-col"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="map-aesthetic-frame">
              <div className="map-frame-header">
                <div className="frame-header-info">
                  <MapPin size={16} className="gold-icon" />
                  <span className="map-title-text">{BUSINESS_CONFIG.name}</span>
                </div>
                <a
                  href={BUSINESS_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-header-link"
                >
                  <span>Open Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* Aesthetic Map Visual Card with Direction Callout */}
              <div className="map-view-box">
                {/* Fallback & Visual Aesthetic Map Presentation */}
                <div className="map-visual-cover">
                  <div className="map-pin-pulse">
                    <div className="pulse-ring"></div>
                    <div className="pulse-dot">
                      <Sparkles size={16} />
                    </div>
                  </div>

                  <div className="map-destination-card">
                    <span className="dest-tag">Destination</span>
                    <h4 className="dest-name">{BUSINESS_CONFIG.name}</h4>
                    <p className="dest-sub">Beautician: {BUSINESS_CONFIG.beautician}</p>
                    <a
                      href={BUSINESS_CONFIG.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-luxury-gold btn-sm btn-block dest-btn"
                    >
                      <Navigation size={15} />
                      <span>Get Turn-by-Turn Directions</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="map-frame-footer">
                <p className="map-footer-note">
                  Clicking "Get Directions" opens Google Maps with the verified location for Sree Radha Beauty Parlour.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
