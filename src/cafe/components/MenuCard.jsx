import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './MenuCard.css';

const categoryImages = {
  pizza: '/cafe/images/pizza.png',
  burger: '/cafe/images/burger.png',
  momos: '/cafe/images/momos.png',
  dosa: '/cafe/images/dosa.png',
  sandwich: '/cafe/images/sandwich.png',
  coffee: '/cafe/images/coffee.png',
  beverages: '/cafe/images/beverages.png',
  snacks: '/cafe/images/snacks.png',
};

export default function MenuCard({ item }) {
  const { cart, addItem, increment, decrement } = useCart();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [addAnimation, setAddAnimation] = useState(false);

  const cartItem = cart.find((ci) => ci.id === item.id);
  const quantity = cartItem?.quantity || 0;
  const imageSrc = categoryImages[item.category] || categoryImages.snacks;

  const handleAdd = () => {
    addItem(item);
    setAddAnimation(true);
    setTimeout(() => setAddAnimation(false), 500);
  };

  return (
    <div className={`menu-card glass-card ${addAnimation ? 'menu-card--added' : ''}`} id={`menu-item-${item.id}`}>
      <div className="menu-card__image-wrapper">
        <img
          src={imageSrc}
          alt={item.name}
          className={`menu-card__image ${imageLoaded ? 'menu-card__image--loaded' : ''}`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        <div className="menu-card__image-overlay" />
        <div className="menu-card__badges">
          <span className={`food-type-badge ${item.isVeg ? 'veg' : 'nonveg'}`} />
          {item.isBestseller && (
            <span className="bestseller-tag">⭐ Bestseller</span>
          )}
        </div>
      </div>

      <div className="menu-card__body">
        <h3 className="menu-card__name">{item.name}</h3>
        <p className="menu-card__desc">{item.description}</p>

        <div className="menu-card__footer">
          <span className="menu-card__price">₹{item.price}</span>

          {quantity === 0 ? (
            <button
              className="menu-card__add-btn"
              onClick={handleAdd}
              aria-label={`Add ${item.name} to cart`}
            >
              <Plus size={14} />
              <span>ADD</span>
            </button>
          ) : (
            <div className="menu-card__qty-controls">
              <button
                className="menu-card__qty-btn"
                onClick={() => decrement(item.id)}
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <span className="menu-card__qty-value">{quantity}</span>
              <button
                className="menu-card__qty-btn"
                onClick={() => increment(item.id)}
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
