import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Calendar, Menu, X, Sparkles, MapPin } from 'lucide-react'
import { BUSINESS_CONFIG } from '../config/parlour'

export default function Navbar({ onBookClick }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={`site-navbar ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}
        role="banner"
      >
        <div className="container nav-container">
          {/* Brand Logo */}
          <a href="#home" className="nav-brand" aria-label="Sree Radha Beauty Parlour Home">
            <span className="brand-monogram" aria-hidden="true">
              R
            </span>
            <div className="brand-titles">
              <span className="brand-name">{BUSINESS_CONFIG.name}</span>
              <span className="brand-tagline">
                <Sparkles size={11} className="gold-icon" aria-hidden="true" />
                <span>{BUSINESS_CONFIG.beauticianIntro}</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                <span>{link.name}</span>
                <span className="nav-link-line" aria-hidden="true"></span>
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="nav-actions">
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="nav-phone-btn"
              aria-label={`Call ${BUSINESS_CONFIG.phone}`}
            >
              <Phone size={15} aria-hidden="true" />
              <span>{BUSINESS_CONFIG.phone}</span>
            </a>

            <button
              type="button"
              onClick={onBookClick}
              className="btn btn-luxury-gold nav-book-btn"
              aria-label="Book an Appointment"
            >
              <Calendar size={15} aria-hidden="true" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              className="mobile-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="drawer-header">
                <div className="drawer-brand">
                  <span className="brand-monogram">R</span>
                  <span className="drawer-brand-name">{BUSINESS_CONFIG.name}</span>
                </div>
                <button
                  type="button"
                  className="drawer-close-btn"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close Menu"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="drawer-beautician-badge">
                <Sparkles size={14} className="gold-icon" />
                <span>{BUSINESS_CONFIG.beauticianIntro}</span>
              </div>

              <nav className="mobile-nav-list" aria-label="Mobile Navigation Menu">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="mobile-nav-item"
                    onClick={handleLinkClick}
                  >
                    <span>{link.name}</span>
                  </a>
                ))}
              </nav>

              <div className="drawer-actions">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onBookClick()
                  }}
                  className="btn btn-luxury-gold btn-block"
                >
                  <Calendar size={16} />
                  <span>Book Appointment</span>
                </button>

                <a
                  href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                  className="btn btn-wine-outline btn-block"
                  onClick={handleLinkClick}
                >
                  <Phone size={16} />
                  <span>Call {BUSINESS_CONFIG.phone}</span>
                </a>

                <a
                  href={BUSINESS_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-beige-soft btn-block"
                  onClick={handleLinkClick}
                >
                  <MapPin size={16} />
                  <span>View Location on Maps</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
