import React from 'react'
import { Phone, MapPin, MessageCircle, Heart, Navigation, ExternalLink, Sparkles } from 'lucide-react'
import { BUSINESS_CONFIG } from '../config/parlour'
import { FloralDivider } from './FloralMotif'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const whatsappFloatingUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent(
    'Hello Sree Radha Beauty Parlour, I would like to inquire about beauty services and appointments.'
  )}`

  return (
    <>
      <footer className="site-footer" role="contentinfo">
        <div className="container footer-container">
          {/* Top Brand Grid */}
          <div className="footer-top-grid">
            {/* Brand Column */}
            <div className="footer-brand-column">
              <div className="footer-brand-title-wrap">
                <span className="footer-monogram">R</span>
                <div>
                  <h3 className="footer-brand-name">{BUSINESS_CONFIG.name}</h3>
                  <span className="footer-beautician-tag">By {BUSINESS_CONFIG.beautician}</span>
                </div>
              </div>

              <p className="footer-tagline-text">{BUSINESS_CONFIG.subTagline}</p>

              <div className="footer-badge">
                <Sparkles size={12} className="gold-icon" />
                <span>{BUSINESS_CONFIG.badgeText}</span>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="footer-links-column">
              <h4 className="footer-col-heading">Navigation</h4>
              <ul className="footer-nav-list">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About the Parlour</a>
                </li>
                <li>
                  <a href="#services">Beauty Services</a>
                </li>
                <li>
                  <a href="#gallery">Gallery & Looks</a>
                </li>
                <li>
                  <a href="#booking">Appointment Booking</a>
                </li>
                <li>
                  <a href="#contact">Location & Contact</a>
                </li>
              </ul>
            </div>

            {/* Services Highlights Column */}
            <div className="footer-links-column">
              <h4 className="footer-col-heading">Popular Services</h4>
              <ul className="footer-nav-list">
                <li>
                  <a href="#services">Bridal Makeup</a>
                </li>
                <li>
                  <a href="#services">Party Makeup</a>
                </li>
                <li>
                  <a href="#services">Facial & Skincare</a>
                </li>
                <li>
                  <a href="#services">Hair Styling & Spa</a>
                </li>
                <li>
                  <a href="#services">Saree Draping</a>
                </li>
                <li>
                  <a href="#services">Beauty Packages</a>
                </li>
              </ul>
            </div>

            {/* Direct Connect Column */}
            <div className="footer-contact-column">
              <h4 className="footer-col-heading">Connect</h4>
              <div className="footer-contact-items">
                <p className="footer-contact-item">
                  <Phone size={15} className="gold-icon" />
                  <a href={`tel:${BUSINESS_CONFIG.phoneRaw}`}>{BUSINESS_CONFIG.phone}</a>
                </p>

                <p className="footer-contact-item">
                  <MapPin size={15} className="gold-icon" />
                  <a
                    href={BUSINESS_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-map-link"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink size={12} />
                  </a>
                </p>
              </div>

              <div className="footer-cta-wrapper">
                <a
                  href={whatsappFloatingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-luxury-wine btn-sm btn-block"
                >
                  <MessageCircle size={15} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          <FloralDivider className="footer-divider" />

          {/* Bottom Bar */}
          <div className="footer-bottom-bar">
            <p className="copyright-text">
              © {currentYear} {BUSINESS_CONFIG.name}. All rights reserved.
            </p>
            <p className="footer-gentle-note">
              Personalized beauty care by {BUSINESS_CONFIG.beautician}.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
      <aside aria-label="Quick WhatsApp Contact">
        <a
          href={whatsappFloatingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-whatsapp-btn"
          aria-label="Enquire directly on WhatsApp"
        >
          <div className="floating-pulse-ring" aria-hidden="true"></div>
          <div className="floating-icon-wrap">
            <MessageCircle size={24} />
          </div>
          <span className="floating-tooltip">Chat with D. Sunitha</span>
        </a>
      </aside>
    </>
  )
}
