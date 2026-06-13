import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { FiChevronUp } from 'react-icons/fi'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import MarqueeStrip from './components/Marquee/Marquee'
import Services from './components/Services/Services'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Pricing from './components/Pricing/Pricing'
import Testimonials from './components/Testimonials/Testimonials'
import CTABanner from './components/CTABanner/CTABanner'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './styles/globals.css'
import './App.css'

export default function SalonApp() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <Services />
        <About />
        <Gallery />
        <Pricing />
        <Testimonials />
        <CTABanner />
        <Contact />
      </main>
      <Footer />

      {/* WhatsApp float */}
      <motion.a
        href="https://wa.me/917482079243?text=Hi%209XM%20Salon!%20I%27d%20like%20to%20book%20an%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp />
        <span className="whatsapp-tooltip">Book via WhatsApp</span>
      </motion.a>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiChevronUp />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
