import { useEffect, useRef } from 'react';
import { Clock, Wifi, Wind, Star } from 'lucide-react';
import './About.css';

const features = [
  { icon: <Clock size={20} />, title: 'Open Daily', desc: '10 AM – 10 PM' },
  { icon: <Wifi size={20} />, title: 'Free WiFi', desc: 'Stay connected' },
  { icon: <Wind size={20} />, title: 'Fully AC', desc: 'Cool ambiance' },
  { icon: <Star size={20} />, title: 'Top Rated', desc: 'Local favorite' },
];

export default function About() {
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
    <section className="about" id="about">
      <div className="container">
        <div className="section-header animate-on-scroll" ref={sectionRef}>
          <span className="section-label">Our Story</span>
          <h2 className="section-title">A Taste of Excellence</h2>
          <p className="section-subtitle">
            Welcome to Tarapur's favorite hangout spot
          </p>
        </div>

        <div className="about__content">
          <div className="about__text glass-card">
            <p className="about__paragraph">
              Nestled in the heart of <strong>Tarapur, Munger</strong>, Cafe-007 is more than just a café — 
              it's a culinary mission. From our signature crispy pizzas and juicy burgers to our 
              soul-warming momos and masala dosas, every dish is crafted with passion.
            </p>
            <p className="about__paragraph">
              Step into our fully air-conditioned space, grab your favorite coffee, and enjoy the 
              vibe. Whether you're catching up with friends or fueling up for the day — 
              <em>Cafe-007 has got you covered.</em>
            </p>
            <div className="about__signature">
              <span className="about__signature-line" />
              <span className="about__signature-text">— Team Cafe-007</span>
            </div>
          </div>

          <div className="about__features">
            {features.map((feat, i) => (
              <div className="about__feature glass-card" key={i}>
                <div className="about__feature-icon">{feat.icon}</div>
                <div>
                  <h4 className="about__feature-title">{feat.title}</h4>
                  <p className="about__feature-desc">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
