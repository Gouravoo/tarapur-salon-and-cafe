import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Cart.css';

export default function Cart({ isOpen, onClose, onCheckout }) {
  const { cart, increment, decrement, removeItem, clearCart, totalItems, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className="overlay" onClick={onClose} />
      <div className={`cart-drawer ${isOpen ? 'cart-drawer--open' : ''}`} id="cart-drawer">
        <div className="cart-drawer__header">
          <div className="cart-drawer__header-left">
            <ShoppingBag size={20} className="cart-drawer__icon" />
            <h3 className="cart-drawer__title">Your Cart</h3>
            {totalItems > 0 && (
              <span className="cart-drawer__count">{totalItems}</span>
            )}
          </div>
          <button className="cart-drawer__close" onClick={onClose} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-drawer__empty">
            <span className="cart-drawer__empty-icon">🛒</span>
            <p className="cart-drawer__empty-title">Cart is empty</p>
            <p className="cart-drawer__empty-text">Add delicious items from our menu!</p>
            <button className="btn-gold" onClick={onClose}>
              Browse Menu
            </button>
          </div>
        ) : (
          <>
            <div className="cart-drawer__items">
              {cart.map((item) => (
                <div className="cart-item glass-card" key={item.id}>
                  <div className="cart-item__info">
                    <div className="cart-item__top">
                      <span className={`food-type-badge ${item.isVeg ? 'veg' : 'nonveg'}`} />
                      <h4 className="cart-item__name">{item.name}</h4>
                    </div>
                    <div className="cart-item__bottom">
                      <div className="cart-item__qty">
                        <button
                          className="cart-item__qty-btn"
                          onClick={() => decrement(item.id)}
                        >
                          <Minus size={12} />
                        </button>
                        <span className="cart-item__qty-val">{item.quantity}</span>
                        <button
                          className="cart-item__qty-btn"
                          onClick={() => increment(item.id)}
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="cart-item__price">₹{item.price * item.quantity}</span>
                    </div>
                  </div>
                  <button
                    className="cart-item__remove"
                    onClick={() => removeItem(item.id)}
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-drawer__footer">
              <div className="cart-drawer__total">
                <span>Total</span>
                <span className="cart-drawer__total-price">₹{totalPrice}</span>
              </div>
              <button
                className="btn-gold cart-drawer__checkout"
                onClick={onCheckout}
                id="checkout-button"
              >
                Order via WhatsApp
              </button>
              <button className="cart-drawer__clear" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
