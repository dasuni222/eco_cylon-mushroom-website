import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Blog() {
  return (
    <div className="site-shell">
      <Navbar />
      <main style={{ padding: '4rem 0' }}>
        <div className="section-heading-centered">
          <p className="eyebrow-accent">Blog</p>
          <h2>News & Recipes</h2>
          <div className="accent-line"></div>
        </div>
        <div style={{ width: 'min(1200px, calc(100% - 2rem))', margin: '0 auto' }}>
          <p>Welcome to our blog - tips, recipes and stories from Sri Lanka.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
