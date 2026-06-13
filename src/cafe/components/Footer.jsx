import { Heart, MapPin, Phone, Clock } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <h3 className="footer__logo">
              <span className="footer__logo-text">CAFE</span>
              <span className="footer__logo-accent">007</span>
            </h3>
            <p className="footer__tagline">Where Every Bite is a Mission</p>
          </div>

          <div className="footer__links">
            <div className="footer__link-group">
              <h4 className="footer__link-title">Quick Links</h4>
              <a href="#home" className="footer__link">Home</a>
              <a href="#menu" className="footer__link">Menu</a>
              <a href="#about" className="footer__link">About</a>
              <a href="#location" className="footer__link">Location</a>
            </div>

            <div className="footer__link-group">
              <h4 className="footer__link-title">Contact</h4>
              <a href="tel:+919263975506" className="footer__link">
                <Phone size={12} /> +91 92639 75506
              </a>
              <a href="tel:+919304478850" className="footer__link">
                <Phone size={12} /> +91 93044 78850
              </a>
              <span className="footer__link">
                <Clock size={12} /> 10 AM – 10 PM Daily
              </span>
            </div>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} Cafe-007. All rights reserved.
          </p>
          <p className="footer__credit">
            <MapPin size={12} />
            Tarapur, Munger, Bihar
          </p>
        </div>
      </div>
    </footer>
  );
}
