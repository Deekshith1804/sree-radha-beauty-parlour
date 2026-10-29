import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, HeartHandshake, Smile, Crown } from 'lucide-react'
import { PILLARS_DATA } from '../config/parlour'
import { FloralDivider } from './FloralMotif'

export default function WhyChooseUs() {
  const iconMap = {
    Sparkles: Sparkles,
    HeartHandshake: HeartHandshake,
    Smile: Smile,
    Crown: Crown,
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section className="why-section" aria-labelledby="why-heading">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-eyebrow-wrap">
            <Sparkles size={14} className="gold-icon" aria-hidden="true" />
            <span className="section-eyebrow">The Difference</span>
          </div>

          <h2 id="why-heading" className="section-title">
            Why Choose Sree Radha
          </h2>

          <FloralDivider className="why-divider" />

          <p className="section-subtitle">
            Our commitment is to offer you a thoughtful, unhurried, and comfortable beauty experience
            where you leave feeling radiant and refreshed.
          </p>
        </div>

        <motion.div
          className="why-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {PILLARS_DATA.map((pillar) => {
            const IconComponent = iconMap[pillar.icon] || Sparkles
            return (
              <motion.div key={pillar.id} className="why-card" variants={cardVariants}>
                <div className="why-icon-box">
                  <IconComponent size={24} className="gold-icon" aria-hidden="true" />
                </div>
                <h3 className="why-card-title">{pillar.title}</h3>
                <p className="why-card-desc">{pillar.description}</p>
                <div className="why-card-accent" aria-hidden="true"></div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
