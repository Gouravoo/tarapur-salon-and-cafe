import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'

const navLinks = [
  { label: 'Services', to: 'services' },
  { label: 'About', to: 'about' },
  { label: 'Gallery', to: 'gallery' },
  { label: 'Pricing', to: 'pricing' },
  { label: 'Reviews', to: 'testimonials' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <motion.header
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="nav-container">
          <Link to="hero" smooth duration={800} className="nav-logo" aria-label="9XM Salon Home">
            <span className="nav-logo-9xm">9XM</span>
            <div className="nav-logo-divider" />
            <span className="nav-logo-salon">SALON</span>
          </Link>

          <nav className="nav-links" aria-label="Main navigation">
            {navLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                smooth
                duration={800}
                offset={-80}
                className="nav-link"
                activeClass="nav-link--active"
                spy
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="nav-right">
            <Link to="contact" smooth duration={800} offset={-80} className="nav-cta">
              Book Now
            </Link>
            <button
              className="hamburger"
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="mobile-nav">
              {navLinks.map(({ label, to }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={to}
                    smooth
                    duration={800}
                    offset={-80}
                    className="mobile-link"
                    onClick={closeMenu}
                  >
                    <span className="mobile-link-num">0{i + 1}</span>
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
              >
                <Link
                  to="contact"
                  smooth
                  duration={800}
                  offset={-80}
                  className="mobile-cta"
                  onClick={closeMenu}
                >
                  Book Appointment
                </Link>
              </motion.div>
            </nav>
            <div className="mobile-footer">
              <p>Opposite Food Plaza, Tarapur, Munger</p>
              <p>Mon–Sun: 9 AM – 8 PM</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
