import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Sparkles, Heart } from 'lucide-react'
import { BUSINESS_CONFIG } from '../config/parlour'
import { FloralDivider } from './FloralMotif'

export default function SignatureExperience() {
  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent(
    'Hello Sree Radha Beauty Parlour, I would like to talk about my look and beauty styling options with D. Sunitha.'
  )}`

  return (
    <section className="signature-section" aria-label="Signature Beauty Experience">
      {/* Background Image with Deep Luxury Gradient Overlay */}
      <div className="signature-bg-wrapper" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1800&q=85"
          alt=""
          className="signature-bg-img"
          loading="lazy"
        />
        <div className="signature-gradient-overlay"></div>
      </div>

      <div className="container signature-container">
        <motion.div
          className="signature-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="signature-badge">
            <Sparkles size={14} className="gold-icon" aria-hidden="true" />
            <span>The Signature Sree Radha Experience</span>
          </div>

          {/* Exact Required Headline */}
          <h2 className="signature-headline">
            Every Occasion Deserves a Beautiful You.
          </h2>

          <FloralDivider className="signature-divider" />

          {/* Exact Required Supporting Text */}
          <p className="signature-subtext">
            From everyday elegance to special celebrations, discover beauty care tailored to your
            style.
          </p>

          <div className="signature-points">
            <div className="sig-point">
              <Heart size={15} className="gold-icon" />
              <span>Personalized styling consultations</span>
            </div>
            <div className="sig-point">
              <Sparkles size={15} className="gold-icon" />
              <span>Attentive care by D. Sunitha</span>
            </div>
          </div>

          <div className="signature-cta-wrap">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-luxury-gold btn-lg signature-btn"
            >
              <MessageCircle size={18} aria-hidden="true" />
              <span>Let's Talk About Your Look</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
