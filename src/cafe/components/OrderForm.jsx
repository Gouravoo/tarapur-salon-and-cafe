import { useState } from 'react';
import { X, Send, User, Phone, MapPin, MessageSquare } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { sendToWhatsApp } from '../utils/whatsapp';
import './OrderForm.css';

export default function OrderForm({ isOpen, onClose }) {
  const { cart, totalPrice, clearCart } = useCart();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
  });
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[6-9]\d{9}$/.test(form.phone.trim()))
      newErrors.phone = 'Enter valid 10-digit number';
    if (!form.address.trim()) newErrors.address = 'Address / Table No. is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    sendToWhatsApp(cart, form);
    clearCart();
    setForm({ name: '', phone: '', address: '', notes: '' });
    setErrors({});
    onClose();
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <>
      <div className="overlay" onClick={onClose} />
      <div className="order-modal" id="order-form-modal">
        <div className="order-modal__inner glass-card">
          <div className="order-modal__header">
            <div>
              <h3 className="order-modal__title">Complete Your Order</h3>
              <p className="order-modal__subtitle">
                {cart.length} items • Total ₹{totalPrice}
              </p>
            </div>
            <button className="order-modal__close" onClick={onClose} aria-label="Close">
              <X size={20} />
            </button>
          </div>

          <form className="order-modal__form" onSubmit={handleSubmit}>
            <div className={`order-modal__field ${errors.name ? 'order-modal__field--error' : ''}`}>
              <label className="order-modal__label">
                <User size={14} />
                Your Name
              </label>
              <input
                type="text"
                className="order-modal__input"
                placeholder="Enter your name"
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
                id="order-name"
              />
              {errors.name && <span className="order-modal__error">{errors.name}</span>}
            </div>

            <div className={`order-modal__field ${errors.phone ? 'order-modal__field--error' : ''}`}>
              <label className="order-modal__label">
                <Phone size={14} />
                Phone Number
              </label>
              <input
                type="tel"
                className="order-modal__input"
                placeholder="10-digit mobile number"
                value={form.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                maxLength={10}
                id="order-phone"
              />
              {errors.phone && <span className="order-modal__error">{errors.phone}</span>}
            </div>

            <div className={`order-modal__field ${errors.address ? 'order-modal__field--error' : ''}`}>
              <label className="order-modal__label">
                <MapPin size={14} />
                Delivery Address / Table No.
              </label>
              <input
                type="text"
                className="order-modal__input"
                placeholder="Your address or table number"
                value={form.address}
                onChange={(e) => handleChange('address', e.target.value)}
                id="order-address"
              />
              {errors.address && <span className="order-modal__error">{errors.address}</span>}
            </div>

            <div className="order-modal__field">
              <label className="order-modal__label">
                <MessageSquare size={14} />
                Special Instructions <span className="order-modal__optional">(optional)</span>
              </label>
              <textarea
                className="order-modal__textarea"
                placeholder="Extra cheese, less spicy, etc."
                rows={3}
                value={form.notes}
                onChange={(e) => handleChange('notes', e.target.value)}
                id="order-notes"
              />
            </div>

            <button type="submit" className="btn-gold order-modal__submit" id="submit-order">
              <Send size={16} />
              Send Order via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
