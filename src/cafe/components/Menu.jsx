import { useState, useEffect, useRef } from 'react';
import { categories, menuItems } from '../data/menuData';
import MenuCard from './MenuCard';
import './Menu.css';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState(menuItems);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setFilteredItems(
        activeCategory === 'all'
          ? menuItems
          : menuItems.filter((item) => item.category === activeCategory)
      );
      setIsAnimating(false);
    }, 200);
    return () => clearTimeout(timer);
  }, [activeCategory]);

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
    <section className="menu" id="menu">
      <div className="container">
        <div className="section-header animate-on-scroll" ref={sectionRef}>
          <span className="section-label">Our Menu</span>
          <h2 className="section-title">Delicious Offerings</h2>
          <p className="section-subtitle">
            From crispy pizzas to steaming momos — explore our handcrafted menu made with love
          </p>
        </div>

        <div className="menu__categories" id="menu-categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`menu__category-pill ${activeCategory === cat.id ? 'menu__category-pill--active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
              id={`category-${cat.id}`}
            >
              <span className="menu__category-icon">{cat.icon}</span>
              <span className="menu__category-name">{cat.name}</span>
            </button>
          ))}
        </div>

        <div className="menu__count">
          Showing <strong>{filteredItems.length}</strong> items
        </div>

        <div className={`menu__grid ${isAnimating ? 'menu__grid--animating' : ''}`}>
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="menu__grid-item"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <MenuCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
