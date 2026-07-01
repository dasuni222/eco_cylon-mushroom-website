import { motion } from 'framer-motion';
import { Leaf, Shield, Globe, Award } from 'lucide-react';
import heroImage from '../assets/hero_spices.png';

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <p className="eyebrow-accent">From Our Land to the World</p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Pure Sri Lankan <br /> Goodness
        </motion.h1>
        <p className="lede">
          100% Natural | Organic | Premium Quality <br />
          Spices, Foods, Herbs & More from Sri Lanka.
        </p>
        <div className="hero-actions">
          <a className="cta" href="#products">
            <Leaf size={16} />
            <span>Shop Now</span>
          </a>
        </div>
        
        {/* Badges layout from reference image */}
        <div className="hero-badges-ref">
          <div className="badge-item">
            <div className="badge-icon-wrapper">
              <Leaf size={16} />
            </div>
            <div className="badge-text">
              <strong>100% Natural</strong>
              <span>& Organic</span>
            </div>
          </div>
          <div className="badge-item">
            <div className="badge-icon-wrapper">
              <Shield size={16} />
            </div>
            <div className="badge-text">
              <strong>Sustainably</strong>
              <span>Sourced</span>
            </div>
          </div>
          <div className="badge-item">
            <div className="badge-icon-wrapper">
              <Award size={16} />
            </div>
            <div className="badge-text">
              <strong>Export Quality</strong>
              <span>Products</span>
            </div>
          </div>
          <div className="badge-item">
            <div className="badge-icon-wrapper">
              <Globe size={16} />
            </div>
            <div className="badge-text">
              <strong>Worldwide</strong>
              <span>Delivery</span>
            </div>
          </div>
        </div>
      </div>

      <motion.aside
        className="hero-panel-ref"
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img src={heroImage} alt="Premium Sri Lankan spices and packaging" />
      </motion.aside>
    </section>
  );
}
