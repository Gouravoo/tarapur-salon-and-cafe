import { useState } from 'react'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Location from './components/Location'
import Cart from './components/Cart'
import OrderForm from './components/OrderForm'
import FloatingCart from './components/FloatingCart'
import Footer from './components/Footer'
import '../styles/cafe.css'

export default function CafeApp() {
  const [cartOpen, setCartOpen] = useState(false)
  const [orderFormOpen, setOrderFormOpen] = useState(false)

  return (
    <CartProvider>
      <div className="app">
        <Navbar onCartClick={() => setCartOpen(true)} />
        <main>
          <Hero />
          <Menu />
          <About />
          <Location />
        </main>
        <Footer />
        <FloatingCart onClick={() => setCartOpen(true)} />
        <Cart
          isOpen={cartOpen}
          onClose={() => setCartOpen(false)}
          onCheckout={() => { setCartOpen(false); setOrderFormOpen(true) }}
        />
        <OrderForm
          isOpen={orderFormOpen}
          onClose={() => setOrderFormOpen(false)}
        />
      </div>
    </CartProvider>
  )
}
