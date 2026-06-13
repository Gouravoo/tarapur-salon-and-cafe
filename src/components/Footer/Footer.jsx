import { Link } from 'react-scroll'
import { FiInstagram, FiFacebook, FiMapPin, FiClock, FiPhone } from 'react-icons/fi'
import './Footer.css'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-9xm">9XM</span>
              <span className="footer-logo-salon">SALON</span>
            </div>
            <p className="footer-tagline">
              Tarapur's most premium men's grooming salon. Crafting excellence, one cut at a time.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Instagram" className="footer-social-link" target="_blank" rel="noopener noreferrer">
                <FiInstagram />
              </a>
              <a href="#" aria-label="Facebook" className="footer-social-link" target="_blank" rel="noopener noreferrer">
                <FiFacebook />
              </a>
              <a
                href="https://wa.me/917482079243"
                aria-label="WhatsApp"
                className="footer-social-link footer-social-link--wa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            {['services', 'about', 'gallery', 'pricing', 'testimonials', 'contact'].map(to => (
              <Link key={to} to={to} smooth duration={800} offset={-80} className="footer-link">
                {to.charAt(0).toUpperCase() + to.slice(1)}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            {['Haircut & Fade', 'Beard Grooming', 'Skin & Facial', 'Hair Color', 'Keratin Treatment', 'Grooming Packages'].map(s => (
              <span key={s} className="footer-link footer-link--plain">{s}</span>
            ))}
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Find Us</h4>
            <div className="footer-contact-item">
              <FiMapPin />
              <span>Opposite Food Plaza, Deoghar Rd, Tarapur, Munger, Bihar 813221</span>
            </div>
            <div className="footer-contact-item">
              <FiClock />
              <span>Mon–Sun: 9 AM – 8 PM</span>
            </div>
            <div className="footer-contact-item">
              <FiPhone />
              <a href="tel:+917482079243">+91 7482079243</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} 9XM Salon, Tarapur, Munger, Bihar. All rights reserved.</p>
          <p className="footer-made">Crafted with <span>♥</span> for the men of Munger</p>
        </div>
      </div>

      {/* Decorative logo watermark */}
      <div className="footer-watermark" aria-hidden="true">9XM</div>
    </footer>
  )
}
