import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiClock, FiPhone, FiInstagram, FiSend } from 'react-icons/fi'
import './Contact.css'

const details = [
  {
    icon: <FiMapPin />,
    label: 'Our Location',
    value: 'Opposite Food Plaza, Deoghar Rd, Tarapur,\nMunger, Bihar 813221',
    link: 'https://maps.google.com/?q=25.091642,86.662898',
    linkLabel: 'Get Directions',
  },
  {
    icon: <FiClock />,
    label: 'Working Hours',
    value: 'Monday – Sunday\n9:00 AM – 8:00 PM',
  },
  {
    icon: <FiPhone />,
    label: 'Call / WhatsApp',
    value: '+91 7482079243',
    link: 'tel:+917482079243',
    linkLabel: 'Call Now',
  },
  {
    icon: <FiInstagram />,
    label: 'Instagram',
    value: '@9xmsalon',
    link: 'https://instagram.com',
    linkLabel: 'Follow Us',
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-tag">Visit Us</span>
          <h2 className="section-title">Get In <em>Touch</em></h2>
          <p className="section-desc">Walk in anytime or book ahead. We're here to make you look your best.</p>
        </motion.div>

        <div className="contact-grid">
          {/* Details */}
          <motion.div
            className="contact-details"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {details.map((d, i) => (
              <div key={i} className="contact-detail">
                <div className="contact-detail-icon">{d.icon}</div>
                <div className="contact-detail-body">
                  <span className="contact-detail-label">{d.label}</span>
                  <p className="contact-detail-value">{d.value}</p>
                  {d.link && (
                    <a href={d.link} target="_blank" rel="noopener noreferrer" className="contact-detail-link">
                      {d.linkLabel} →
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* Map embed */}
            <div className="contact-map">
              <iframe
                title="9XM Salon Location Tarapur Munger Bihar"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7211.8!2d86.46!3d25.26!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE1JzM2LjAiTiA4NsKwMjcnMzYuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '10px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="contact-form-wrap"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {sent ? (
              <motion.div
                className="form-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="form-success-icon">✓</div>
                <h3>Booking Request Sent!</h3>
                <p>Thank you! We'll confirm your appointment via WhatsApp or call shortly.</p>
                <button className="btn-outline" onClick={() => setSent(false)}>Book Another</button>
              </motion.div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <h3 className="form-title">Book an Appointment</h3>
                <p className="form-subtitle">Fill in the details below and we'll get back to you promptly.</p>

                <div className="form-group">
                  <label htmlFor="contact-name">Full Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone / WhatsApp</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      autoComplete="tel"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-service">Service</label>
                    <select
                      id="contact-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Choose service</option>
                      <option value="haircut">Haircut &amp; Styling</option>
                      <option value="beard">Beard Grooming</option>
                      <option value="facial">Skin &amp; Facial</option>
                      <option value="color">Hair Color / Spa</option>
                      <option value="package">Grooming Package</option>
                      <option value="bridal">Wedding Package</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message (optional)</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Any special requests, preferred time, etc."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="form-submit">
                  <FiSend />
                  Send Booking Request
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
