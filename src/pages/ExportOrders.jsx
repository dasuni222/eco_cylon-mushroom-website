import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ExportOrders() {
  return (
    <div className="site-shell">
      <Navbar />
      <main style={{ padding: '4rem 0' }}>
        <div className="section-heading-centered">
          <p className="eyebrow-accent">Export Orders</p>
          <h2>Export & Bulk Order Inquiries</h2>
          <div className="accent-line"></div>
        </div>
        <div style={{ width: 'min(1200px, calc(100% - 2rem))', margin: '0 auto' }}>
          <p>
            For export and large-quantity wholesale orders please contact our export team. Include product list,
            quantities, and destination country. We'll provide a tailored quote and lead time.
          </p>

          <h3 style={{ marginTop: '1.2rem' }}>Contact</h3>
          <p>Email: orders@ecoceylonshop.com</p>
          <p>WhatsApp: +94 76 123 4567</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
