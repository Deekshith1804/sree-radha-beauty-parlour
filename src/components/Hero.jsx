import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Sparkles, ChevronDown, Heart, ArrowRight } from 'lucide-react'
import { BUSINESS_CONFIG } from '../config/parlour'
import { FloralDivider, CornerFlourish } from './FloralMotif'

export default function Hero({ onBookClick }) {
  const headlineWords = ['Your', 'Beauty,', 'Our', 'Passion.']

  const wordContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.2,
      },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 35, rotateX: -20 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section id="home" className="hero-section" aria-label="Welcome to Sree Radha Beauty Parlour">
      {/* Soft Ambient Radial Glows */}
      <div className="hero-glow-top" aria-hidden="true"></div>
      <div className="hero-glow-bottom" aria-hidden="true"></div>

      <div className="container hero-container">
        {/* Left Editorial Copy */}
        <div className="hero-text-col">
          {/* Small Elegant Label */}
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles size={13} className="gold-icon" aria-hidden="true" />
            <span>{BUSINESS_CONFIG.badgeText}</span>
          </motion.div>

          {/* Word-by-word headline animation */}
          <motion.h1
            className="hero-heading"
            variants={wordContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {headlineWords.map((word, idx) => (
              <motion.span
                key={idx}
                variants={wordVariants}
                className={`hero-word ${word.includes('Passion') ? 'hero-word-italic' : ''}`}
              >
                {word}{' '}
              </motion.span>
            ))}
          </motion.h1>

          <FloralDivider className="hero-divider" />

          {/* Supporting Text */}
          <motion.p
            className="hero-lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {BUSINESS_CONFIG.subTagline}
          </motion.p>

          {/* Beautician Intro Card */}
          <motion.div
            className="hero-beautician-chip"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
          >
            <div className="chip-avatar">
              <span className="avatar-initial">S</span>
            </div>
            <div className="chip-info">
              <span className="chip-role">Personalized Care</span>
              <span className="chip-name">{BUSINESS_CONFIG.beauticianIntro}</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <button
              type="button"
              onClick={onBookClick}
              className="btn btn-luxury-wine btn-lg hero-cta-btn"
            >
              <Calendar size={18} aria-hidden="true" />
              <span>Book Your Appointment</span>
            </button>

            <a href="#services" className="btn btn-gold-outline btn-lg">
              <span>Explore Our Services</span>
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </motion.div>

          {/* Editorial Highlights */}
          <motion.div
            className="hero-highlights"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <div className="highlight-pill">
              <Heart size={14} className="gold-icon" aria-hidden="true" />
              <span>Thoughtful Bridal Styling</span>
            </div>
            <div className="highlight-pill">
              <Sparkles size={14} className="gold-icon" aria-hidden="true" />
              <span>Premium Skincare & Glow</span>
            </div>
          </motion.div>
        </div>

        {/* Right Editorial Visual Frame */}
        <motion.div
          className="hero-visual-col"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-arch-frame">
            <CornerFlourish className="frame-corner top-left" />
            <CornerFlourish className="frame-corner bottom-right" />

            <div className="hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1000&q=85"
                alt="Bridal and beauty styling at Sree Radha Beauty Parlour"
                className="hero-main-img"
                loading="eager"
              />
              <div className="hero-image-overlay" aria-hidden="true"></div>
            </div>

            {/* Floating Floating Accent Badge */}
            <motion.div
              className="hero-floating-card floating-card-left"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="floating-card-icon">
                <Sparkles size={18} className="gold-icon" />
              </div>
              <div className="floating-card-text">
                <span className="floating-title">Timeless Radiance</span>
                <span className="floating-sub">Customized for your style</span>
              </div>
            </motion.div>

            {/* Floating Floating Accent Badge Right */}
            <motion.div
              className="hero-floating-card floating-card-right"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            >
              <span className="floating-accent-tag">Sree Radha</span>
              <span className="floating-title">Signature Care</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <motion.a
        href="#about"
        className="scroll-indicator"
        aria-label="Scroll to About Section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
      >
        <span className="scroll-indicator-text">Discover More</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} className="gold-icon" />
        </motion.div>
      </motion.a>
    </section>
  )
}
