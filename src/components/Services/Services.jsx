import { motion } from 'framer-motion'
import { FiScissors, FiUser, FiDroplet, FiStar, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-scroll'
import './Services.css'

const services = [
  {
    id: 'haircut',
    icon: <FiScissors />,
    title: 'Haircut & Styling',
    desc: 'Precision fades, textured crops, classic cuts — every line razor-sharp. Our master stylists craft looks that define you.',
    img: '/assets/haircut.png',
    items: ['Skin Fade', 'Textured Crop', 'Classic Taper', 'Pompadour', 'Hair Design'],
    tag: 'Most Popular',
  },
  {
    id: 'beard',
    icon: <FiUser />,
    title: 'Beard Grooming',
    desc: 'From sculpted designer stubble to a full thick beard — we shape, trim, and define your beard to perfection.',
    img: '/assets/beard.png',
    items: ['Beard Trim & Shape', 'Straight Razor Shave', 'Beard Coloring', 'Beard Spa', 'Mustache Styling'],
    tag: 'Signature',
  },
  {
    id: 'skin',
    icon: <FiDroplet />,
    title: 'Skin & Facial',
    desc: "Men's skin needs expert care. Our advanced facials and cleanup treatments give you clean, fresh, glowing skin.",
    img: '/assets/facial.png',
    items: ['D-tan Cleanup', 'Premium Facial', 'Hydrating Mask', 'Anti-acne Treatment', 'Under-eye Care'],
    tag: 'Luxury',
  },
  {
    id: 'color',
    icon: <FiStar />,
    title: 'Hair Color & Spa',
    desc: 'Express your edge with premium hair color, highlights, or a deep conditioning hair spa that revitalizes your scalp.',
    img: '/assets/hair_color.png',
    items: ['Global Hair Color', 'Highlights', 'Keratin Treatment', 'Hair Spa', 'Scalp Treatment'],
    tag: 'Premium',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }
  })
}

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">Our <em>Signature</em> Services</h2>
          <p className="section-desc">Crafted for the modern man who values excellence in every detail of his appearance.</p>
        </motion.div>

        <div className="services-grid">
          {services.map((s, i) => (
            <motion.article
              key={s.id}
              className="service-card"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              whileHover="hover"
            >
              {s.tag && <div className="service-tag">{s.tag}</div>}
              <div className="service-img-wrap">
                <motion.img
                  src={s.img}
                  alt={`${s.title} at 9XM Salon Tarapur`}
                  loading="lazy"
                  className="service-img"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="service-img-overlay" />
              </div>
              <div className="service-body">
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <ul className="service-list">
                  {s.items.map((item) => (
                    <li key={item}>
                      <span className="service-check">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="contact" smooth duration={800} offset={-80}>
                  <button className="service-cta">
                    Book This <FiArrowRight />
                  </button>
                </Link>
              </div>
              <div className="service-card-glow" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
