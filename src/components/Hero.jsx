import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Truck } from 'lucide-react';
import heroImage from '../assets/Mushroom.jpeg';

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Premium Organic Sri Lankan Products</p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Pure. Natural. <br /> Good for Life.
        </motion.h1>
        <p className="lede">
          Discover 100% organic mushrooms, herbal essentials, and sustainably sourced products from Sri Lanka.
        </p>
        <div className="hero-actions">
          <a className="cta" href="#products">Shop Now</a>
          <a className="cta secondary" href="#about">About Us</a>
        </div>
        <div className="hero-badges">
          <div>
            <Leaf size={16} />
            <span>100% Organic</span>
          </div>
          <div>
            <ShieldCheck size={16} />
            <span>Eco Friendly</span>
          </div>
          <div>
            <Truck size={16} />
            <span>Islandwide Delivery</span>
          </div>
        </div>
      </div>

      <motion.aside
        className="hero-panel"
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img src={heroImage} alt="Fresh oyster mushrooms and organic packaging" />
        <div className="hero-panel-card">
          <h3>Freshly curated for wellness</h3>
          <p>From farm to table, our products are prepared with care for healthier homes and a greener planet.</p>
        </div>
      </motion.aside>
    </section>
  );
}
