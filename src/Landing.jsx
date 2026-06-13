import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './Landing.css'

export default function Landing() {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(null) // 'salon' | 'cafe' | null

  return (
    <div className="landing">
      {/* Background */}
      <div className="landing-bg" aria-hidden="true">
        <div className="landing-bg-gradient" />
        <div className="landing-grid" />
        {[...Array(12)].map((_, i) => (
          <span key={i} className="landing-particle" style={{
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`,
            '--delay': `${Math.random() * 6}s`,
            '--dur': `${4 + Math.random() * 4}s`,
          }} />
        ))}
      </div>

      {/* Header */}
      <motion.header
        className="landing-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="landing-logo">
          <span className="landing-logo-007">007</span>
          <span className="landing-logo-tarapur">TARAPUR</span>
        </div>
        <p className="landing-header-sub">Deoghar Rd, Tarapur, Munger 813221</p>
      </motion.header>

      {/* Main content */}
      <main className="landing-main">
        <motion.div
          className="landing-intro"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="landing-intro-tag">Welcome to</span>
          <h1 className="landing-title">
            The <em>007</em> Experience
          </h1>
          <p className="landing-subtitle">
            Two premium destinations. One address. Choose your experience below.
          </p>
        </motion.div>

        {/* Choice Cards */}
        <div className="landing-choices">
          {/* Salon Card */}
          <motion.div
            className={`choice-card choice-card--salon ${hovered === 'cafe' ? 'choice-card--dimmed' : ''}`}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onHoverStart={() => setHovered('salon')}
            onHoverEnd={() => setHovered(null)}
            onClick={() => navigate('/salon')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="choice-bg choice-bg--salon" />
            <div className="choice-content">
              <div className="choice-icon choice-icon--salon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3a2 2 0 0 1 2 2c0 1.1-.9 2-2 2a2 2 0 0 1-2-2 2 2 0 0 1 2-2"/>
                  <path d="M18 3a2 2 0 0 1 2 2c0 1.1-.9 2-2 2a2 2 0 0 1-2-2 2 2 0 0 1 2-2"/>
                  <path d="M6 7c0 6.08 2.686 11 6 11s6-4.92 6-11"/>
                  <line x1="12" y1="7" x2="12" y2="18"/>
                </svg>
              </div>
              <div className="choice-number">01</div>
              <h2 className="choice-title">9XM Salon</h2>
              <p className="choice-desc">Premium men's grooming. Expert cuts, beard styling, facials & more. Tarapur's finest.</p>
              <ul className="choice-tags">
                <li>✦ Haircut & Fade</li>
                <li>✦ Beard Grooming</li>
                <li>✦ Skin & Facial</li>
                <li>✦ Hair Color & Spa</li>
                <li>❄️ Fully AC</li>
              </ul>
              <div className="choice-cta">
                <span>Enter Salon</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
            <div className="choice-glow choice-glow--salon" />
          </motion.div>

          {/* Divider */}
          <motion.div
            className="landing-divider"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="divider-line" />
            <span className="divider-or">OR</span>
            <div className="divider-line" />
          </motion.div>

          {/* Cafe Card */}
          <motion.div
            className={`choice-card choice-card--cafe ${hovered === 'salon' ? 'choice-card--dimmed' : ''}`}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onHoverStart={() => setHovered('cafe')}
            onHoverEnd={() => setHovered(null)}
            onClick={() => navigate('/cafe')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="choice-bg choice-bg--cafe" />
            <div className="choice-content">
              <div className="choice-icon choice-icon--cafe">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 8h1a4 4 0 1 1 0 8h-1"/>
                  <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/>
                  <line x1="6" y1="2" x2="6" y2="4"/>
                  <line x1="10" y1="2" x2="10" y2="4"/>
                  <line x1="14" y1="2" x2="14" y2="4"/>
                </svg>
              </div>
              <div className="choice-number">02</div>
              <h2 className="choice-title">Cafe 007</h2>
              <p className="choice-desc">Artisan coffee, fresh snacks, burgers & more. Your favourite hangout in Tarapur.</p>
              <ul className="choice-tags">
                <li>✦ Coffee & Beverages</li>
                <li>✦ Burgers & Snacks</li>
                <li>✦ Dosa & Momos</li>
                <li>✦ Pizza & Sandwiches</li>
              </ul>
              <div className="choice-cta">
                <span>Enter Cafe</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
            <div className="choice-glow choice-glow--cafe" />
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <motion.footer
        className="landing-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <p>© {new Date().getFullYear()} 007 Tarapur · Munger, Bihar · All rights reserved</p>
      </motion.footer>
    </div>
  )
}
