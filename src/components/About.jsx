import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Heart, Crown, CheckCircle2, Phone, Calendar } from 'lucide-react'
import { BUSINESS_CONFIG } from '../config/parlour'
import { FloralDivider, CornerFlourish } from './FloralMotif'

export default function About({ onBookClick }) {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Elegant Visual with Arched Framing */}
          <motion.div
            className="about-visual-column"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInVariants}
          >
            <div className="about-arch-frame">
              <CornerFlourish className="frame-corner top-left" />
              <CornerFlourish className="frame-corner bottom-right" />

              <div className="about-img-box">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80"
                  alt="Personalized beauty care and styling at Sree Radha Beauty Parlour"
                  className="about-image"
                  loading="lazy"
                />
                <div className="about-image-gradient" aria-hidden="true"></div>
              </div>

              {/* Floating Beautician Card */}
              <div className="about-floating-card">
                <span className="card-pretitle">Personal Care</span>
                <h4 className="card-title">Meet {BUSINESS_CONFIG.beautician}</h4>
                <p className="card-text">
                  Dedicated to helping you feel confident and beautiful through thoughtful beauty
                  care and personalized attention.
                </p>
                <div className="card-divider" aria-hidden="true"></div>
                <div className="card-footer-tag">
                  <Sparkles size={13} className="gold-icon" />
                  <span>Sree Radha Beauty Parlour</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Copy */}
          <motion.div
            className="about-text-column"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInVariants}
          >
            <div className="section-eyebrow-wrap">
              <Sparkles size={14} className="gold-icon" aria-hidden="true" />
              <span className="section-eyebrow">The Sree Radha Philosophy</span>
            </div>

            {/* Exact Section Heading */}
            <h2 id="about-heading" className="section-title">
              Beauty That Celebrates You
            </h2>

            <FloralDivider className="about-divider" />

            <div className="about-prose">
              <p className="lead-paragraph">
                At Sree Radha Beauty Parlour, we believe beauty is not merely about styling—it is an
                intimate expression of confidence, self-care, and joy. Every visit is crafted as a
                calm, welcoming sanctuary where you can pause, unwind, and celebrate your individuality.
              </p>

              <p className="body-paragraph">
                Whether you are stepping in for essential grooming, preparing for a festive milestone,
                or envisioning your complete bridal radiance, we take the time to listen to what makes
                you feel comfortable, radiant, and truly yourself.
              </p>
            </div>

            {/* Meet Beautician Feature Box */}
            <div className="beautician-intro-box">
              <div className="intro-icon-circle">
                <Crown size={22} className="gold-icon" aria-hidden="true" />
              </div>
              <div>
                <h3 className="intro-heading">Meet {BUSINESS_CONFIG.beautician}</h3>
                <p className="intro-text">
                  Dedicated to helping you feel confident and beautiful through thoughtful beauty
                  care and personalized attention.
                </p>
              </div>
            </div>

            {/* Care Promises */}
            <div className="about-care-points">
              <div className="care-point">
                <CheckCircle2 size={18} className="gold-icon" aria-hidden="true" />
                <span>Personalized consultations for your skin & hair needs</span>
              </div>
              <div className="care-point">
                <CheckCircle2 size={18} className="gold-icon" aria-hidden="true" />
                <span>Relaxing, hygienic, and comfortable parlour setting</span>
              </div>
              <div className="care-point">
                <CheckCircle2 size={18} className="gold-icon" aria-hidden="true" />
                <span>Dedicated attention without rushed appointments</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="about-actions">
              <button
                type="button"
                onClick={onBookClick}
                className="btn btn-luxury-wine"
              >
                <Calendar size={17} aria-hidden="true" />
                <span>Book an Appointment</span>
              </button>

              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="btn btn-gold-outline"
                aria-label={`Call ${BUSINESS_CONFIG.phone}`}
              >
                <Phone size={17} aria-hidden="true" />
                <span>Call {BUSINESS_CONFIG.phone}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
