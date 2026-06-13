import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Pricing.css'

const tabs = ['Haircut & Grooming', 'Skincare', 'Packages']

const plans = {
  'Haircut & Grooming': [
    { service: 'Regular Haircut', price: '₹ 100+' },
    { service: 'Fade Haircut', price: '₹ 150+' },
    { service: 'Skin Fade + Design', price: '₹ 200+' },
    { service: 'Beard Trim & Shape', price: '₹ 80+' },
    { service: 'Fade + Beard Combo', price: '₹ 199+', popular: true },
    { service: 'Straight Razor Shave', price: '₹ 120+' },
    { service: 'Hair Color (Global)', price: '₹ 499+' },
    { service: 'Hair Spa', price: '₹ 349+' },
    { service: 'Keratin Treatment', price: '₹ 1,999+' },
    { service: 'Head Massage', price: '₹ 149+' },
  ],
  'Skincare': [
    { service: 'Basic Cleanup', price: '₹ 199+' },
    { service: 'D-tan Cleanup', price: '₹ 299+', popular: true },
    { service: 'Premium Facial', price: '₹ 499+' },
    { service: 'Anti-acne Treatment', price: '₹ 399+' },
    { service: 'Charcoal Mask', price: '₹ 249+' },
    { service: 'Under-eye Treatment', price: '₹ 349+' },
    { service: 'Waxing (Arms)', price: '₹ 149+' },
    { service: 'Waxing (Full Body)', price: '₹ 499+' },
    { service: 'Eyebrow Threading', price: '₹ 40+' },
  ],
  'Packages': [
    { service: 'Groom Package (Basic)', price: '₹ 499+' },
    { service: 'Groom Package (Premium)', price: '₹ 999+', popular: true },
    { service: 'Dulha Special Package', price: '₹ 1,999+' },
    { service: 'Monthly Grooming Plan', price: '₹ 599/mo+' },
    { service: 'VIP Membership (3 mo)', price: '₹ 1,499+' },
  ],
}

export default function Pricing() {
  const [activeTab, setActiveTab] = useState(tabs[0])

  return (
    <section id="pricing" className="section pricing-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-tag">Transparent Pricing</span>
          <h2 className="section-title">Fair &amp; Clear <em>Pricing</em></h2>
          <p className="section-desc">Premium quality at honest prices. No surprises, no hidden costs — ever.</p>
        </motion.div>

        <motion.div
          className="pricing-tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {tabs.map(tab => (
            <button
              key={tab}
              className={`pricing-tab ${activeTab === tab ? 'pricing-tab--active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="pricing-grid"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {plans[activeTab].map((item, i) => (
              <motion.div
                key={item.service}
                className={`pricing-row ${item.popular ? 'pricing-row--popular' : ''}`}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
              >
                <span className="pricing-service">
                  {item.popular && <span className="pricing-popular-badge">Popular</span>}
                  {item.service}
                </span>
                <span className="pricing-line" />
                <span className="pricing-price">{item.price}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <p className="pricing-note">
          * Prices may vary based on hair type, length, and products used. Contact us for a custom quote.
        </p>
      </div>
    </section>
  )
}
