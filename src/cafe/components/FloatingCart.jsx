import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './FloatingCart.css';

export default function FloatingCart({ onClick }) {
  const { totalItems, totalPrice } = useCart();

  if (totalItems === 0) return null;

  return (
    <button className="floating-cart" onClick={onClick} id="floating-cart-button">
      <div className="floating-cart__left">
        <div className="floating-cart__icon-wrap">
          <ShoppingCart size={18} />
          <span className="floating-cart__badge">{totalItems}</span>
        </div>
        <span className="floating-cart__text">
          {totalItems} item{totalItems > 1 ? 's' : ''} added
        </span>
      </div>
      <div className="floating-cart__right">
        <span className="floating-cart__price">₹{totalPrice}</span>
        <span className="floating-cart__arrow">→</span>
      </div>
    </button>
  );
}
