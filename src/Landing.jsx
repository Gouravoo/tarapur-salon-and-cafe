import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import './Landing.css'

/* Logo letters split for stagger */
const logoLetters = 'SINGH WORKS'.split('')

/* Particle data generated once */
const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 1.5 + Math.random() * 3,
  delay: Math.random() * 7,
  dur: 5 + Math.random() * 6,
  type: i % 3, // 0=dot 1=ring 2=cross
}))

export default function Landing() {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(null)
  const [phase, setPhase] = useState(0) // 0=hidden 1=logo 2=cards

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 200)
    const t2 = setTimeout(() => setPhase(2), 400)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <div className="landing">

      {/* ── Rich Background ── */}
      <div className="landing-bg" aria-hidden="true">
        <div className="lbg-aurora" />
        <div className="lbg-aurora lbg-aurora--2" />
        <div className="lbg-aurora lbg-aurora--3" />
        <div className="lbg-grid" />
        <div className="lbg-vignette" />
        {PARTICLES.map(p => (
          <span
            key={p.id}
            className={`lbg-particle lbg-particle--${p.type}`}
            style={{
              '--px': `${p.x}%`,
              '--py': `${p.y}%`,
              '--ps': `${p.size}px`,
              '--pd': `${p.delay}s`,
              '--pu': `${p.dur}s`,
            }}
          />
        ))}
      </div>

      {/* ── Header / Logo ── */}
      <motion.header
        className="landing-header"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Burst ring behind logo */}
        <motion.div
          className="logo-burst"
          initial={{ scale: 0.3, opacity: 0 }}
          animate={phase >= 1 ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />

        <div className="landing-logo">
          <div className="landing-logo-brand">
            {logoLetters.map((char, i) => (
              <motion.span
                key={i}
                className={`landing-logo-letter${char === ' ' ? ' landing-logo-space' : ''}`}
                initial={{ opacity: 0, y: 50, rotateX: -120, scale: 0.6 }}
                animate={phase >= 1 ? { opacity: 1, y: 0, rotateX: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.05 + i * 0.065,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Glowing underline */}
          <motion.div
            className="landing-logo-line"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={phase >= 1 ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Tagline */}
          <motion.span
            className="landing-logo-tagline"
            initial={{ opacity: 0, letterSpacing: '0.6em', y: 8 }}
            animate={phase >= 1 ? { opacity: 1, letterSpacing: '0.32em', y: 0 } : {}}
            transition={{ duration: 0.9, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            ✦ &nbsp; Premium Salon &amp; Cafe &nbsp; ✦
          </motion.span>
        </div>

        {/* Sub address */}
        <motion.p
          className="landing-header-sub"
          initial={{ opacity: 0, y: 6 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.5 }}
        >
          Deoghar Rd, Tarapur, Munger 813221
        </motion.p>
      </motion.header>

      {/* ── Main ── */}
      <main className="landing-main">

        {/* Intro */}
        <motion.div
          className="landing-intro"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="landing-intro-tag">✦ &nbsp; Welcome to Singh Works</span>
          <h1 className="landing-title">
            The&nbsp;<em>Premium</em>&nbsp;Experience
          </h1>
          <p className="landing-subtitle">
            Two premium destinations. One address. Choose your experience.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="landing-choices">

          {/* ── Cafe Card ── */}
          <motion.div
            className={`choice-card choice-card--cafe ${hovered === 'salon' ? 'choice-card--dimmed' : ''}`}
            initial={{ opacity: 0, x: -80, filter: 'blur(12px)' }}
            animate={phase >= 2 ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            onHoverStart={() => setHovered('cafe')}
            onHoverEnd={() => setHovered(null)}
            onClick={() => navigate('/cafe')}
            whileHover={{ scale: 1.03, y: -6 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="choice-bg choice-bg--cafe" />
            <div className="choice-scan choice-scan--cafe" />
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
              <div className="choice-number">01</div>
              <h2 className="choice-title">Cafe 007</h2>
              <p className="choice-desc">Artisan coffee, fresh snacks, burgers & more. Your favourite hangout in Tarapur.</p>
              <ul className="choice-tags">
                <li>✦ Coffee &amp; Beverages</li>
                <li>✦ Burgers &amp; Snacks</li>
                <li>✦ Dosa &amp; Momos</li>
                <li>✦ Pizza &amp; Sandwiches</li>
                <li>❄️ Fully AC</li>
              </ul>
              <div className="choice-cta">
                <span>Enter Cafe</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
            <div className="choice-glow choice-glow--cafe" />
            <div className="choice-corner choice-corner--tl" />
            <div className="choice-corner choice-corner--br" />
          </motion.div>

          {/* ── Divider ── */}
          <motion.div
            className="landing-divider"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={phase >= 2 ? { opacity: 1, scaleY: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="divider-line" />
            <span className="divider-or">OR</span>
            <div className="divider-line" />
          </motion.div>

          {/* ── Salon Card ── */}
          <motion.div
            className={`choice-card choice-card--salon ${hovered === 'cafe' ? 'choice-card--dimmed' : ''}`}
            initial={{ opacity: 0, x: 80, filter: 'blur(12px)' }}
            animate={phase >= 2 ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onHoverStart={() => setHovered('salon')}
            onHoverEnd={() => setHovered(null)}
            onClick={() => navigate('/salon')}
            whileHover={{ scale: 1.03, y: -6 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="choice-bg choice-bg--salon" />
            <div className="choice-scan choice-scan--salon" />
            <div className="choice-content">
              <div className="choice-icon choice-icon--salon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3a2 2 0 0 1 2 2c0 1.1-.9 2-2 2a2 2 0 0 1-2-2 2 2 0 0 1 2-2"/>
                  <path d="M18 3a2 2 0 0 1 2 2c0 1.1-.9 2-2 2a2 2 0 0 1-2-2 2 2 0 0 1 2-2"/>
                  <path d="M6 7c0 6.08 2.686 11 6 11s6-4.92 6-11"/>
                  <line x1="12" y1="7" x2="12" y2="18"/>
                </svg>
              </div>
              <div className="choice-number">02</div>
              <h2 className="choice-title">9XM Salon</h2>
              <p className="choice-desc">Premium men's grooming. Expert cuts, beard styling, facials & more. Tarapur's finest.</p>
              <ul className="choice-tags">
                <li>✦ Haircut &amp; Fade</li>
                <li>✦ Beard Grooming</li>
                <li>✦ Skin &amp; Facial</li>
                <li>✦ Hair Color &amp; Spa</li>
                <li>❄️ Fully AC</li>
              </ul>
              <div className="choice-cta">
                <span>Enter Salon</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
            <div className="choice-glow choice-glow--salon" />
            <div className="choice-corner choice-corner--tl" />
            <div className="choice-corner choice-corner--br" />
          </motion.div>

        </div>
      </main>

      {/* ── Footer ── */}
      <motion.footer
        className="landing-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <p>© {new Date().getFullYear()} SINGH WORKS · Munger, Bihar · All rights reserved</p>
      </motion.footer>
    </div>
  )
}
