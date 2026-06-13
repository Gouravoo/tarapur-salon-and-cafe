import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiCalendar, FiArrowRight } from 'react-icons/fi'
import './CTABanner.css'

export default function CTABanner() {
  return (
    <section className="cta-section">
      <div className="cta-bg" aria-hidden="true">
        <div className="cta-grain" />
        <div className="cta-glow cta-glow--1" />
        <div className="cta-glow cta-glow--2" />
        {[...Array(6)].map((_, i) => (
          <div key={i} className="cta-line" style={{ '--i': i }} />
        ))}
      </div>
      <div className="container">
        <motion.div
          className="cta-inner"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="cta-tag">Limited Slots Daily</span>
          <h2 className="cta-title">
            Ready for Your<br />
            <em>Best Look Yet?</em>
          </h2>
          <p className="cta-desc">
            Walk in or book ahead. Our expert stylists are waiting to craft your perfect style.
            <br />
            9XM Salon — Opposite Food Plaza, Deoghar Rd, Tarapur, Munger 813221.
          </p>
          <div className="cta-actions">
            <Link to="contact" smooth duration={800} offset={-80}>
              <button className="btn-primary">
                <FiCalendar />
                <span>Book Appointment</span>
              </button>
            </Link>
            <a
              href="https://wa.me/917482079243?text=Hi%209XM%20Salon!%20I'd%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="cta-whatsapp"
            >
              Chat on WhatsApp <FiArrowRight />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
