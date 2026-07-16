import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Wholesale() {
  return (
    <div className="site-shell">
      <Navbar />
      <main style={{ padding: '4rem 0' }}>
        <div className="section-heading-centered">
          <p className="eyebrow-accent">Wholesale</p>
          <h2>Wholesale & Bulk Pricing</h2>
          <div className="accent-line"></div>
        </div>
        <div style={{ width: 'min(1200px, calc(100% - 2rem))', margin: '0 auto' }}>
          <p>
            We offer competitive wholesale pricing for retailers and distributors. Contact us for tiered pricing and
            packaging options.
          </p>
          <h3 style={{ marginTop: '1.2rem' }}>Get Started</h3>
          <p>Email: wholesale@ecoceylonshop.com</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
