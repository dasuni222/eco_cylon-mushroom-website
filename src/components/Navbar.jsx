import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, ShoppingBag, X, Search, User } from 'lucide-react';

const languageOptions = ['English', 'සිංහල', 'தமிழ்'];
const currencyOptions = ['USD ($)', 'LKR (Rs)', 'EUR (€)'];

export default function Navbar({ cartCount = 0, onSearchClick }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [currencyMenuOpen, setCurrencyMenuOpen] = useState(false);
  const [language, setLanguage] = useState('English');
  const [currency, setCurrency] = useState('USD ($)');

  const handleSearchToggle = () => {
    if (typeof onSearchClick === 'function') {
      onSearchClick();
    }
    setIsOpen(false);
    navigate('/#products');
  };

  const handleAccountClick = () => {
    setIsOpen(false);
    navigate('/account');
  };

  return (
    <header className="sticky-nav">
      {/* Top Info Bar */}
      <div className="top-info-bar">
        <div className="top-bar-left">
          <span>🇱🇰 Made in Sri Lanka</span>
          <span className="separator">|</span>
          <span>Pure. Natural. Organic.</span>
        </div>
        <div className="top-bar-center">
          <span>🌐 We Export Worldwide</span>
        </div>
        <div className="top-bar-right">
          <div className="currency-lang">
            <div className="locale-group">
              <button type="button" className="locale-trigger" onClick={() => { setLanguageMenuOpen((prev) => !prev); setCurrencyMenuOpen(false); }}>
                {language}
                <span className="arrow">▼</span>
              </button>
              {languageMenuOpen && (
                <div className="locale-dropdown">
                  {languageOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className="locale-item"
                      onClick={() => {
                        setLanguage(option);
                        setLanguageMenuOpen(false);
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <span className="separator">|</span>

            <div className="locale-group">
              <button type="button" className="locale-trigger" onClick={() => { setCurrencyMenuOpen((prev) => !prev); setLanguageMenuOpen(false); }}>
                {currency}
                <span className="arrow">▼</span>
              </button>
              {currencyMenuOpen && (
                <div className="locale-dropdown">
                  {currencyOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className="locale-item"
                      onClick={() => {
                        setCurrency(option);
                        setCurrencyMenuOpen(false);
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="top-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok">
              <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="nav-shell">
        <Link className="brand" to="/">
          <div className="logo-container">
            <svg viewBox="0 0 240 80" className="logo-svg">
              {/* ECO with leaf */}
              <text x="10" y="38" className="logo-text-eco" fill="#113224">ECO</text>
              
              {/* Leaf paths next to E */}
              <path d="M8,18 C12,12 20,15 18,22 C14,24 8,20 8,18 Z" fill="#8bc34a" />
              <path d="M10,24 C14,20 22,23 20,30 C16,32 10,28 10,24 Z" fill="#4caf50" />
              
              {/* Gold circle with Sri Lanka Map */}
              <circle cx="108" cy="28" r="16" fill="none" stroke="#c29b38" strokeWidth="2" />
              {/* Sri Lanka Map Outline */}
              <path d="M106,18 C108,18 111,20 112,23 C113,25 111,29 110,31 C109,33 108,35 106,37 C104,36 103,34 104,32 C105,30 106,28 106,26 C105,24 105,21 106,18 Z" fill="#c29b38" />
              
              {/* CEYLON SHOP */}
              <text x="32" y="62" className="logo-text-ceylon" fill="#113224">CEYLON SHOP</text>
              
              {/* Nature from Ceylon */}
              <line x1="30" y1="72" x2="68" y2="72" stroke="#c29b38" strokeWidth="1" />
              <text x="75" y="75" className="logo-text-slogan" fill="#c29b38">Nature from Ceylon</text>
              <line x1="172" y1="72" x2="210" y2="72" stroke="#c29b38" strokeWidth="1" />
            </svg>
          </div>
        </Link>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/#products" onClick={() => setIsOpen(false)}>Shop</Link>
          <Link to="/#about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/export-orders" onClick={() => setIsOpen(false)}>Export Orders</Link>
          <Link to="/wholesale" onClick={() => setIsOpen(false)}>Wholesale</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/#contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </nav>

        <div className="nav-actions">
          <button className="nav-icon-btn" type="button" onClick={handleSearchToggle} aria-label="Search">
            <Search size={20} />
          </button>
          <button className="nav-icon-btn" type="button" onClick={handleAccountClick} aria-label="Profile">
            <User size={20} />
          </button>
          <Link className="cart-pill" to="/#products" aria-label="View cart">
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="cart-badge-count">{cartCount}</span>}
          </Link>
          <button className="menu-toggle" type="button" onClick={() => setIsOpen((prev) => !prev)} aria-label="Toggle menu">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
