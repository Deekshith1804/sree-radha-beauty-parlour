import React, { useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import SignatureExperience from './components/SignatureExperience'
import Gallery from './components/Gallery'
import WhyChooseUs from './components/WhyChooseUs'
import Booking from './components/Booking'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [preselectedService, setPreselectedService] = useState('')

  // Scroll Progress Indicator
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Handle Book an Appointment button click anywhere on page
  const handleBookClick = () => {
    const bookingSection = document.getElementById('booking')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Handle service pre-selection from a service card
  const handleSelectService = (serviceName) => {
    setPreselectedService(serviceName)
    const bookingSection = document.getElementById('booking')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="beauty-app">
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX }}
        aria-hidden="true"
      />

      {/* Accessibility Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Top Navigation */}
      <Navbar onBookClick={handleBookClick} />

      {/* Main Content Area */}
      <main id="main-content">
        <Hero onBookClick={handleBookClick} />
        <About onBookClick={handleBookClick} />
        <Services onSelectService={handleSelectService} />
        <SignatureExperience />
        <Gallery />
        <WhyChooseUs />
        <Booking preselectedService={preselectedService} />
        <Contact />
      </main>

      {/* Footer & Floating WhatsApp */}
      <Footer />
    </div>
  )
}
