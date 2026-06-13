import { useEffect, useRef } from 'react';
import { MapPin, Phone, Navigation } from 'lucide-react';
import './Location.css';

export default function Location() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <section className="location" id="location">
      <div className="container">
        <div className="section-header animate-on-scroll" ref={sectionRef}>
          <span className="section-label">Visit Us</span>
          <h2 className="section-title">Find Cafe-007</h2>
          <p className="section-subtitle">
            We're waiting to serve you the best food in Tarapur
          </p>
        </div>

        <div className="location__content">
          <div className="location__map glass-card">
            <iframe
              src="https://maps.google.com/maps?q=25.091642,86.662898&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cafe-007 Location Map"
            />
          </div>

          <div className="location__info">
            <div className="location__card glass-card">
              <div className="location__card-icon">
                <MapPin size={22} />
              </div>
              <div>
                <h4 className="location__card-title">Address</h4>
                <p className="location__card-text">
                  Opposite Food Plaza, Deoghar Rd,<br />
                  Tarapur, Munger, Bihar 813221
                </p>
              </div>
            </div>

            <div className="location__card glass-card">
              <div className="location__card-icon">
                <Phone size={22} />
              </div>
              <div>
                <h4 className="location__card-title">Contact</h4>
                <p className="location__card-text">
                  <a href="tel:+917482079243" className="location__phone">+91 7482079243</a>
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=25.091642,86.662898"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold location__directions-btn"
            >
              <Navigation size={16} />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
