import { motion } from 'framer-motion'
import { FiAward, FiShield, FiMapPin, FiStar } from 'react-icons/fi'
import './About.css'

const features = [
  { icon: <FiAward />, title: 'Certified Experts', desc: 'All stylists are trained and certified professionals.' },
  { icon: <FiStar />, title: 'Premium Products', desc: 'We use only top international grooming brands.' },
  { icon: <FiShield />, title: 'Hygiene First', desc: 'Strict sanitization protocols after every client.' },
  { icon: <FiMapPin />, title: 'Prime Location', desc: 'Opposite Food Plaza, Tarapur, Munger, Bihar.' },
]

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Image Column */}
          <motion.div
            className="about-img-col"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about-img-frame">
              <img
                src="/assets/about.png"
                alt="9XM Salon professional team in Tarapur Munger Bihar"
                loading="lazy"
                className="about-img"
              />
              <div className="about-img-border" />
              <motion.div
                className="about-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="about-badge-icon"><FiAward /></div>
                <div>
                  <strong>Tarapur's Best</strong>
                  <span>Premium Grooming</span>
                </div>
              </motion.div>
              <div className="about-img-accent" />
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            className="about-text-col"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-tag">Our Story</span>
            <h2 className="section-title">Style Is Not<br />Just a Look — <em>It's You</em></h2>
            <p className="about-lead">
              9XM Salon was built on one conviction: every man deserves to look and feel extraordinary.
            </p>
            <p className="about-body">
              Established in the heart of Tarapur, Munger, we've become Bihar's go-to destination for premium men's grooming. Our master stylists blend technical precision with artistic vision to craft looks that turn heads. From your very first visit, you'll feel the difference — in the atmosphere, the expertise, and the results.
            </p>

            <div className="about-features">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  className="about-feat"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="about-feat-icon">{f.icon}</div>
                  <div>
                    <strong>{f.title}</strong>
                    <span>{f.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="about-bg-text" aria-hidden="true">9XM</div>
    </section>
  )
}
