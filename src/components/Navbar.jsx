import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, ShoppingBag, X } from 'lucide-react';

export default function Navbar({ cartCount = 0 }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky-nav">
      <div className="top-info-bar">
        <p>Pure by Nature. Healthy for You.</p>
        <p>Islandwide Delivery</p>
        <p>Export Quality Products from Sri Lanka</p>
      </div>

      <div className="nav-shell">
        <a className="brand" href="#home">
          <div className="brand-mark">E</div>
          <div>
            <strong>EcoNest</strong>
            <span>SRI LANKA</span>
          </div>
        </a>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#categories" onClick={() => setIsOpen(false)}>Products</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#delivery" onClick={() => setIsOpen(false)}>Delivery Info</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact Us</a>
        </nav>

        <div className="nav-actions">
          <a className="whatsapp-pill" href="https://wa.me/94771234567" target="_blank" rel="noreferrer">
            WhatsApp Order
          </a>
          <a className="cart-pill" href="#products" aria-label="View cart">
            <ShoppingBag size={18} />
            <span>{cartCount}</span>
          </a>
          <button className="menu-toggle" onClick={() => setIsOpen((prev) => !prev)} aria-label="Toggle menu">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
