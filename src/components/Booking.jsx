import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MessageCircle, Phone, Sparkles, AlertCircle, ShieldCheck, Send } from 'lucide-react'
import { BUSINESS_CONFIG, SERVICES_DATA } from '../config/parlour'
import { FloralDivider } from './FloralMotif'

export default function Booking({ preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Bridal Makeup',
    date: '',
    message: '',
  })

  const [errors, setErrors] = useState({})

  // Update selected service if passed from a service card
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }))
    }
  }, [preselectedService])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const errs = {}
    const trimmedName = formData.name.trim()
    const cleanPhone = formData.phone.replace(/[\s-]/g, '')

    if (!trimmedName) {
      errs.name = 'Please provide your name.'
    } else if (trimmedName.length < 2) {
      errs.name = 'Name must be at least 2 characters.'
    }

    if (!cleanPhone) {
      errs.phone = 'Please provide your mobile number.'
    } else {
      const phoneRegex = /^(\+91)?[6-9]\d{9}$/
      if (!phoneRegex.test(cleanPhone)) {
        errs.phone = 'Please enter a valid 10-digit mobile number.'
      }
    }

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const generateWhatsAppMessage = () => {
    const parts = [
      `Hello ${BUSINESS_CONFIG.name}, I would like to enquire about an appointment with ${BUSINESS_CONFIG.beautician}.`,
      `Name: ${formData.name.trim() || '[Your Name]'}`,
      `Phone: ${formData.phone.trim() || '[Your Phone]'}`,
      `Service: ${formData.service}`,
    ]

    if (formData.date) {
      parts.push(`Preferred Date: ${formData.date}`)
    }

    if (formData.message.trim()) {
      parts.push(`Message: ${formData.message.trim()}`)
    }

    return parts.join('\n')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    const message = generateWhatsAppMessage()
    const encoded = encodeURIComponent(message)
    const url = `https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encoded}`

    window.open(url, '_blank', 'noopener,noreferrer')
  }

  // Calculate today's date for date input min
  const todayString = new Date().toISOString().split('T')[0]

  return (
    <section id="booking" className="booking-section" aria-labelledby="booking-heading">
      <div className="container">
        <div className="booking-card-wrapper">
          <div className="section-header text-center">
            <div className="section-eyebrow-wrap">
              <Sparkles size={14} className="gold-icon" aria-hidden="true" />
              <span className="section-eyebrow">Personalized Scheduling</span>
            </div>

            {/* Exact Required Heading */}
            <h2 id="booking-heading" className="section-title">
              Let's Make You Feel Beautiful
            </h2>

            <FloralDivider className="booking-divider" />

            <p className="section-subtitle">
              Fill out your details below to prepare your appointment enquiry. You will review and
              send it directly to D. Sunitha on WhatsApp.
            </p>
          </div>

          <div className="booking-grid">
            {/* Form Column */}
            <motion.div
              className="booking-form-box"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} noValidate>
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="customer-name" className="form-label">
                    Your Name <span className="required-star">*</span>
                  </label>
                  <input
                    id="customer-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Ananya Rao"
                    className={`form-input ${errors.name ? 'input-error' : ''}`}
                    required
                  />
                  {errors.name && (
                    <p className="form-error-msg">
                      <AlertCircle size={14} />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="customer-phone" className="form-label">
                    Mobile Number <span className="required-star">*</span>
                  </label>
                  <div className="phone-prefix-wrap">
                    <span className="phone-prefix">+91</span>
                    <input
                      id="customer-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="7702956873"
                      maxLength={15}
                      className={`form-input phone-field ${errors.phone ? 'input-error' : ''}`}
                      required
                    />
                  </div>
                  {errors.phone && (
                    <p className="form-error-msg">
                      <AlertCircle size={14} />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Preferred Service */}
                <div className="form-group">
                  <label htmlFor="preferred-service" className="form-label">
                    Preferred Service
                  </label>
                  <select
                    id="preferred-service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={srv.name}>
                        {srv.name} ({srv.category})
                      </option>
                    ))}
                    <option value="Custom Bridal Package">Custom Bridal Package</option>
                    <option value="General Consultation">General Consultation / Other</option>
                  </select>
                </div>

                {/* Preferred Date */}
                <div className="form-group">
                  <label htmlFor="appointment-date" className="form-label">
                    Preferred Date
                  </label>
                  <input
                    id="appointment-date"
                    type="date"
                    name="date"
                    min={todayString}
                    value={formData.date}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                  <span className="form-hint">Choose any tentative date suited for you</span>
                </div>

                {/* Optional Message */}
                <div className="form-group">
                  <label htmlFor="appointment-message" className="form-label">
                    Special Requests or Message (Optional)
                  </label>
                  <textarea
                    id="appointment-message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Mention specific look preferences, timings, or event details..."
                    className="form-textarea"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button type="submit" className="btn btn-luxury-wine btn-block btn-lg">
                  <Send size={18} aria-hidden="true" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>

                {/* Explicit Transparency Notice */}
                <div className="booking-privacy-box">
                  <ShieldCheck size={16} className="gold-icon flex-shrink-0" aria-hidden="true" />
                  <p>
                    <strong>Direct WhatsApp Enquiry:</strong> Submitting prepares a message and opens
                    WhatsApp on your device so you can directly discuss your appointment with D. Sunitha.
                    Appointments are finalized directly in conversation. No personal information is
                    collected or stored on any external server.
                  </p>
                </div>
              </form>
            </motion.div>

            {/* Live Message Preview & Direct Call Alternate */}
            <motion.div
              className="booking-preview-box"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="preview-card-header">
                <div className="preview-header-brand">
                  <MessageCircle size={18} className="text-wine" />
                  <span>WhatsApp Message Preview</span>
                </div>
                <span className="preview-live-tag">Live</span>
              </div>

              <div className="preview-chat-body">
                <div className="chat-bubble-beauty">
                  <div className="bubble-recipient">
                    <span>To: {BUSINESS_CONFIG.name}</span>
                    <span className="bubble-number">{BUSINESS_CONFIG.phone}</span>
                  </div>
                  <pre className="bubble-message-content">{generateWhatsAppMessage()}</pre>
                  <span className="bubble-time">Ready to review & send</span>
                </div>
              </div>

              <div className="preview-call-fallback">
                <span className="fallback-title">Prefer to call directly?</span>
                <p className="fallback-text">
                  You are welcome to ring us directly during normal hours for immediate enquiries.
                </p>
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                  className="btn btn-gold-outline btn-block"
                >
                  <Phone size={16} />
                  <span>Call {BUSINESS_CONFIG.phone}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
