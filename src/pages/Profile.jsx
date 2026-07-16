import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Profile() {
  return (
    <div className="site-shell">
      <Navbar />
      <main style={{ padding: '4rem 0' }}>
        <div className="section-heading-centered">
          <p className="eyebrow-accent">Profile</p>
          <h2>Your Account</h2>
          <div className="accent-line"></div>
        </div>
        <div style={{ width: 'min(1200px, calc(100% - 2rem))', margin: '0 auto' }}>
          <p>This is a placeholder profile page. Orders and account details will appear here once implemented.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
