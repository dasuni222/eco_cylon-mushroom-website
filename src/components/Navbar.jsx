import { useState } from 'react';
import { Menu, ShoppingBag, X, Search, User } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({ cartCount = 0 }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [langOpen, setLangOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [language, setLanguage] = useState('English');
  const [currency, setCurrency] = useState('USD ($)');
  const navigate = useNavigate();
  const langRef = useRef();
  const curRef = useRef();

  useEffect(() => {
    function onDocClick(e) {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
      if (curRef.current && !curRef.current.contains(e.target)) setCurrencyOpen(false);
    }

    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  const submitSearch = (e) => {
    e?.preventDefault?.();
    setShowSearch(false);
    if (searchQuery.trim()) {
      navigate(`/?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/');
    }
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
          <div className="currency-lang" ref={langRef}>
            <button type="button" className="lang-btn" onClick={() => setLangOpen((s) => !s)}>
              <span>{language}</span>
              <span className="arrow">▼</span>
            </button>
            {langOpen && (
              <div className="lang-dropdown">
                <button onClick={() => { setLanguage('English'); setLangOpen(false); }}>English</button>
                <button onClick={() => { setLanguage('සිංහල'); setLangOpen(false); }}>සිංහල</button>
                <button onClick={() => { setLanguage('தமிழ்'); setLangOpen(false); }}>தமிழ்</button>
              </div>
            )}

            <span className="separator">|</span>

            <div ref={curRef} style={{ display: 'inline-block' }}>
              <button type="button" className="lang-btn" onClick={() => setCurrencyOpen((s) => !s)}>
                <span>{currency}</span>
                <span className="arrow">▼</span>
              </button>
              {currencyOpen && (
                <div className="lang-dropdown">
                  <button onClick={() => { setCurrency('USD ($)'); setCurrencyOpen(false); }}>USD ($)</button>
                  <button onClick={() => { setCurrency('EUR (€)'); setCurrencyOpen(false); }}>EUR (€)</button>
                  <button onClick={() => { setCurrency('LKR (Rs)'); setCurrencyOpen(false); }}>LKR (Rs)</button>
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
        <a className="brand" href="#home">
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
        </a>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/" onClick={() => setIsOpen(false)}>Shop</Link>
          <Link to="#about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/export-orders" onClick={() => setIsOpen(false)}>Export Orders</Link>
          <Link to="/wholesale" onClick={() => setIsOpen(false)}>Wholesale</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="#contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </nav>

        <div className="nav-actions">
          <button className="nav-icon-btn" aria-label="Search" onClick={() => setShowSearch((s) => !s)}>
            <Search size={20} />
          </button>
          <Link to="/profile" className="nav-icon-btn" aria-label="Profile">
            <User size={20} />
          </Link>
          <Link className="cart-pill" to="/" aria-label="View cart">
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="cart-badge-count">{cartCount}</span>}
          </Link>
          <button className="menu-toggle" onClick={() => setIsOpen((prev) => !prev)} aria-label="Toggle menu">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {showSearch && (
          <div className="search-overlay">
            <form onSubmit={submitSearch} className="search-overlay-form">
              <input autoFocus value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search products..." />
              <div className="search-actions">
                <button type="submit" className="cta">Search</button>
                <button type="button" className="ghost-btn" onClick={() => setShowSearch(false)}>Close</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </header>
  );
}
