import { useEffect, useRef } from 'react';
import { ChevronDown, MapPin, Star, Utensils } from 'lucide-react';
import './Hero.css';

const menuHighlights = ['Pizza', 'Burger', 'Momos', 'Dosa', 'Coffee', 'Sandwich'];

const foodShowcase = [
  { src: '/cafe/images/pizza.png', label: 'Pizza', delay: '0s' },
  { src: '/cafe/images/burger.png', label: 'Burger', delay: '0.15s' },
  { src: '/cafe/images/momos.png', label: 'Momos', delay: '0.3s' },
  { src: '/cafe/images/coffee.png', label: 'Coffee', delay: '0.45s' },
];

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const particles = heroRef.current?.querySelector('.hero__particles');
    if (!particles) return;
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'hero__particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      const size = Math.random() * 60 + 15;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.animationDuration = `${Math.random() * 12 + 6}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particle.style.opacity = `${Math.random() * 0.25 + 0.05}`;
      particles.appendChild(particle);
    }
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      {/* Background Image */}
      <div className="hero__bg">
        <img
          src="/cafe/images/hero-bg.png"
          alt=""
          className="hero__bg-image"
        />
      </div>
      <div className="hero__bg-overlay" />
      <div className="hero__particles" />

      {/* Glowing orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      <div className="hero__content">

        {/* Title */}
        <div className="hero__title-group">
          <span className="hero__pre-title">Welcome to</span>
          <h1 className="hero__title">
            <span className="hero__title-cafe">CAFE</span>
            <span className="hero__title-dash">—</span>
            <span className="hero__title-007">007</span>
          </h1>
          <div className="hero__title-line" />
        </div>

        {/* Tagline */}
        <p className="hero__tagline">Where Every Bite is a Mission</p>

        {/* Rating + info pills */}
        <div className="hero__info-row">
          <div className="hero__info-pill">
            <Star size={13} fill="#d4a853" stroke="#d4a853" />
            <span>4.5 Rated</span>
          </div>
          <div className="hero__info-pill">
            <Utensils size={13} />
            <span>Multi-Cuisine</span>
          </div>
          <div className="hero__info-pill">
            ❄️ <span>Fully AC</span>
          </div>
        </div>

        {/* Food Showcase Carousel */}
        <div className="hero__showcase">
          {foodShowcase.map((food, i) => (
            <div
              key={i}
              className="hero__showcase-item"
              style={{ animationDelay: food.delay }}
            >
              <div className="hero__showcase-img-wrap">
                <img src={food.src} alt={food.label} className="hero__showcase-img" />
              </div>
              <span className="hero__showcase-label">{food.label}</span>
            </div>
          ))}
        </div>

        {/* Ticker */}
        <div className="hero__ticker">
          <div className="hero__ticker-track">
            {[...menuHighlights, ...menuHighlights, ...menuHighlights].map((item, i) => (
              <span key={i} className="hero__ticker-item">
                {item} <span className="hero__ticker-dot">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="hero__cta-group">
          <a href="#menu" className="btn-gold hero__cta">
            <Utensils size={16} />
            Explore Menu
          </a>
          <a href="#location" className="hero__cta-secondary">
            <MapPin size={15} />
            Find Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#menu" className="hero__scroll-indicator" aria-label="Scroll to menu">
        <span className="hero__scroll-text">Menu</span>
        <ChevronDown size={18} />
      </a>
    </section>
  );
}
