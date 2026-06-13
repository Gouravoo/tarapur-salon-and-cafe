import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiCalendar, FiArrowDown } from 'react-icons/fi'
import './Hero.css'

const words = ['DEFINE', 'REFINE', 'COMMAND']

const stats = [
  { num: '5000+', label: 'Happy Clients' },
  { num: '2', label: 'Expert Stylists' },
  { num: '5+', label: 'Years of Excellence' },
]

export default function Hero() {
  const heroRef = useRef(null)
  const wordRef = useRef(null)
  const wordIndex = useRef(0)

  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 600], [0, 160])
  const textY = useTransform(scrollY, [0, 600], [0, 80])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  // Cycling word animation
  useEffect(() => {
    const el = wordRef.current
    if (!el) return
    el.textContent = words[0]

    const cycle = setInterval(() => {
      wordIndex.current = (wordIndex.current + 1) % words.length
      el.classList.add('word-exit')
      setTimeout(() => {
        el.textContent = words[wordIndex.current]
        el.classList.remove('word-exit')
        el.classList.add('word-enter')
        setTimeout(() => el.classList.remove('word-enter'), 600)
      }, 300)
    }, 2500)
    return () => clearInterval(cycle)
  }, [])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
  }
  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section id="hero" className="hero" ref={heroRef}>
      {/* Background */}
      <motion.div className="hero-bg" style={{ y: bgY }}>
        <img src="/assets/hero.png" alt="9XM Salon luxury interior" className="hero-bg-img" loading="eager" />
        <div className="hero-overlay" />
        <div className="hero-overlay-gradient" />
      </motion.div>

      {/* Gold particle dots */}
      <div className="hero-particles" aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <span key={i} className="particle" style={{
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`,
            '--delay': `${Math.random() * 4}s`,
            '--size': `${Math.random() * 3 + 1}px`,
          }} />
        ))}
      </div>

      {/* Content */}
      <motion.div className="hero-content" style={{ y: textY, opacity }}>
        <motion.div
          className="hero-inner"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="hero-badge">
            <span className="badge-dot" />
            <span>Tarapur's #1 Premium Men's Salon</span>
          </motion.div>

          <motion.h1 variants={item} className="hero-title">
            <span className="hero-title-line">
              <span ref={wordRef} className="hero-word">DEFINE</span>
            </span>
            <span className="hero-title-line hero-title-line--serif">
              Your <em>Style</em>
            </span>
          </motion.h1>

          <motion.p variants={item} className="hero-sub">
            Premium cuts. Precision grooming. Unforgettable transformations.
            <br />
            <span className="hero-location">
              <FiCalendar size={13} />
              9XM Salon · Opp. Food Plaza, Tarapur, Munger
            </span>
          </motion.p>

          <motion.div variants={item} className="hero-actions">
            <Link to="contact" smooth duration={900} offset={-80}>
              <button className="btn-primary">
                <FiCalendar />
                <span>Book Appointment</span>
              </button>
            </Link>
            <Link to="services" smooth duration={900} offset={-80}>
              <button className="btn-ghost">
                Explore Services
              </button>
            </Link>
          </motion.div>

          <motion.div variants={item} className="hero-stats">
            {stats.map(({ num, label }, i) => (
              <div key={i} className="hero-stat">
                <span className="hero-stat-num">{num}</span>
                <span className="hero-stat-label">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <Link to="services" smooth duration={900} offset={-80}>
          <motion.div
            className="hero-scroll-inner"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <FiArrowDown size={18} />
          </motion.div>
        </Link>
        <span className="hero-scroll-text">Scroll</span>
      </motion.div>

      {/* Decorative lines */}
      <div className="hero-deco-lines" aria-hidden="true">
        <div className="deco-line deco-line--1" />
        <div className="deco-line deco-line--2" />
      </div>
    </section>
  )
}
