import { useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Footer from '../components/Footer';

// Icons for trust banners
import { Truck, ShieldCheck, HeartHandshake, PhoneCall } from 'lucide-react';

// Category images
import spicesCatImg from '../assets/cat_spices.png';
import herbalCatImg from '../assets/cat_herbal.png';
import mushroomCatImg from '../assets/cat_mushroom.png';
import driedCatImg from '../assets/cat_dried.png';
import teaCatImg from '../assets/cat_tea.png';
import giftsCatImg from '../assets/cat_gifts.png';

const categories = [
  {
    title: 'Sri Lankan Spices',
    image: spicesCatImg,
  },
  {
    title: 'Herbal Products',
    image: herbalCatImg,
  },
  {
    title: 'Mushroom Products',
    image: mushroomCatImg,
  },
  {
    title: 'Dried Foods',
    image: driedCatImg,
  },
  {
    title: 'Tea & Wellness',
    image: teaCatImg,
  },
  {
    title: 'Eco Gift Packs',
    image: giftsCatImg,
  },
];

export default function HomePage() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = useRef(null);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="site-shell">
      <Navbar cartCount={cartCount} onSearchClick={() => searchInputRef.current?.focus()} />
      <main>
        <Hero />

        {/* Value Proposition Highlights Banner */}
        <section className="highlights-banner">
          <div className="highlights-shell">
            <div className="highlight-item">
              <span className="hl-icon">🍃</span>
              <div className="hl-text">
                <strong>100% Natural</strong>
                <span>& Organic</span>
              </div>
            </div>
            <div className="highlight-item">
              <span className="hl-icon">🔬</span>
              <div className="hl-text">
                <strong>No Additives</strong>
                <span>No Chemicals</span>
              </div>
            </div>
            <div className="highlight-item">
              <span className="hl-icon">🧑‍🌾</span>
              <div className="hl-text">
                <strong>Support Local</strong>
                <span>Farmers</span>
              </div>
            </div>
            <div className="highlight-item">
              <span className="hl-icon">🌍</span>
              <div className="hl-text">
                <strong>Exporting</strong>
                <span>Worldwide</span>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="categories-section" id="categories">
          <div className="section-heading-centered">
            <p className="eyebrow-accent">Shop by Category</p>
            <div className="accent-line"></div>
          </div>

          <div className="category-grid-ref">
            {categories.map((category) => (
              <a href="#products" className="category-card-ref" key={category.title}>
                <div className="category-image-wrapper">
                  <img src={category.image} alt={category.title} />
                </div>
                <h3>{category.title}</h3>
              </a>
            ))}
          </div>
        </section>

        {/* About Section */}
        <About />

        {/* Products Section */}
        <Products
          cart={cart}
          setCart={setCart}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchInputRef={searchInputRef}
        />

        {/* Trust Badges Banner */}
        <section className="trust-badges-section">
          <div className="trust-badges-shell">
            <div className="trust-badge-card">
              <div className="tb-icon-circle">
                <Truck size={24} />
              </div>
              <h4>Worldwide Delivery</h4>
              <p>Fast & safe delivery to your doorstep anywhere in the world.</p>
            </div>
            <div className="trust-badge-card">
              <div className="tb-icon-circle">
                <ShieldCheck size={24} />
              </div>
              <h4>Secure Payment</h4>
              <p>100% secure online payments.</p>
            </div>
            <div className="trust-badge-card">
              <div className="tb-icon-circle">
                <HeartHandshake size={24} />
              </div>
              <h4>Customer Support</h4>
              <p>We're here to help you anytime.</p>
            </div>
            <div className="trust-badge-card">
              <div className="tb-icon-circle">
                <PhoneCall size={24} />
              </div>
              <h4>Order on WhatsApp</h4>
              <p>Chat with us and place your order easily.</p>
            </div>
          </div>
        </section>

        {/* Proudly Sri Lankan Banner with Sunset Map Silhouette */}
        <section className="pride-banner">
          <div className="pride-shell">
            <div className="pride-map-container">
              {/* SVG Map of Sri Lanka Silhouette */}
              <svg viewBox="0 0 100 150" className="sri-lanka-silhouette">
                <path d="M45,10 C50,12 55,15 57,22 C60,28 62,35 60,42 C58,50 56,58 58,66 C59,72 63,77 65,83 C66,88 64,94 62,99 C59,105 54,110 50,116 C45,122 41,128 37,135 C35,138 33,142 30,145 C28,142 27,138 27,134 C26,128 29,122 30,116 C31,110 30,104 29,98 C28,92 26,86 26,80 C27,74 29,68 31,62 C32,56 32,50 31,44 C30,38 28,32 30,26 C31,21 34,16 38,13 C40,11 42,10 45,10 Z" fill="#c29b38" opacity="0.15" />
              </svg>
            </div>
            <div className="pride-content">
              <h3>Proudly Sri Lankan</h3>
              <h2>Made with Love from Our Land ❤️</h2>
            </div>
            <div className="pride-scenery-container">
              {/* Graphic Sunset & Coconut Trees */}
              <svg viewBox="0 0 200 100" className="scenery-svg">
                {/* Sun */}
                <circle cx="100" cy="80" r="25" fill="#fdfcf7" opacity="0.4" />
                {/* Hills */}
                <path d="M0,90 Q50,75 100,90 T200,90 L200,100 L0,100 Z" fill="#113224" opacity="0.1" />
                {/* Coconut Trees */}
                <path d="M25,90 Q30,70 45,55" stroke="#113224" strokeWidth="2" fill="none" />
                <path d="M45,55 C40,50 30,52 25,55 C30,50 40,48 45,55 C45,48 50,42 45,55 C52,50 50,60 45,55 Z" fill="#113224" />
                
                <path d="M175,90 Q170,70 155,55" stroke="#113224" strokeWidth="2" fill="none" />
                <path d="M155,55 C160,50 170,52 175,55 C170,50 160,48 155,55 C155,48 150,42 155,55 C148,50 150,60 155,55 Z" fill="#113224" />
              </svg>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
