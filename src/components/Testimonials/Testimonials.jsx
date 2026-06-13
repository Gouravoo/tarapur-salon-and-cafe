import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import './Testimonials.css'

const reviews = [
  {
    id: 1,
    name: 'Amit Kumar',
    role: 'Regular Client, Tarapur',
    avatar: 'A',
    rating: 5,
    text: 'Best haircut and beard styling in Munger, hands down! The fade is always razor-sharp. I\'ve been coming here every month. 9XM is simply unmatched in this entire area.',
  },
  {
    id: 2,
    name: 'Rohit Sharma',
    role: 'Client, Munger',
    avatar: 'R',
    rating: 5,
    text: 'The keratin treatment I got here was a total game changer! My hair is so smooth and manageable now. Very skilled team, great ambiance. Prices are very reasonable too.',
  },
  {
    id: 3,
    name: 'Suraj Verma',
    role: 'Client, Tarapur',
    avatar: 'S',
    rating: 5,
    text: 'Went for a premium facial and head massage combo. Absolutely loved it — felt completely refreshed. The staff is very professional and the salon is spotlessly clean.',
  },
  {
    id: 4,
    name: 'Deepak Singh',
    role: 'Regular Client, Munger',
    avatar: 'D',
    rating: 5,
    text: 'Got the Dulha package done for my wedding and I looked incredible. The whole team was very attentive and made sure every detail was perfect. Highly recommend 9XM Salon!',
  },
  {
    id: 5,
    name: 'Vishal Pandey',
    role: 'Client, Tarapur',
    avatar: 'V',
    rating: 5,
    text: 'Premium membership is totally worth it! Monthly grooming visits and they know exactly how I like my cut. Feels like a 5-star experience every single time.',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent(c => (c + 1) % reviews.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent(c => (c - 1 + reviews.length) % reviews.length)
  }, [])

  useEffect(() => {
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [next])

  const variants = {
    enter: (d) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d < 0 ? 80 : -80, opacity: 0 }),
  }

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-tag">Client Love</span>
          <h2 className="section-title">What Our <em>Clients</em> Say</h2>
        </motion.div>

        <div className="testimonials-wrap">
          <div className="testimonials-slider">
            <AnimatePresence custom={direction} mode="wait">
              <motion.article
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="testimonial-card"
              >
                <div className="testi-quote">"</div>
                <div className="testi-stars">
                  {'★'.repeat(reviews[current].rating)}
                </div>
                <blockquote className="testi-text">
                  {reviews[current].text}
                </blockquote>
                <div className="testi-author">
                  <div className="testi-avatar">{reviews[current].avatar}</div>
                  <div>
                    <strong>{reviews[current].name}</strong>
                    <span>{reviews[current].role}</span>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="testi-controls">
            <button className="testi-btn" onClick={prev} aria-label="Previous review">
              <FiChevronLeft />
            </button>
            <div className="testi-dots">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  className={`testi-dot ${i === current ? 'testi-dot--active' : ''}`}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>
            <button className="testi-btn" onClick={next} aria-label="Next review">
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
      <div className="testi-bg-quote" aria-hidden="true">"</div>
    </section>
  )
}
