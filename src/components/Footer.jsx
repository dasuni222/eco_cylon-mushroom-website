import { Globe2, Mail, MessageCircle, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-grid">
        <div>
          <h3>Islandwide Delivery</h3>
          <p>Reliable delivery for local orders and premium export-quality packaging.</p>
        </div>
        <div>
          <h3>Secure Payments</h3>
          <p>Flexible payment options for safe local and international purchases.</p>
        </div>
        <div>
          <h3>Customer Support</h3>
          <p>Reach us via WhatsApp, email, or social media for tailored assistance.</p>
        </div>
        <div>
          <h3>Newsletter</h3>
          <p>Stay updated with new seasonal products and wellness offers.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><Globe2 size={18} /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><Mail size={18} /></a>
          <a href="https://wa.me/94771234567" target="_blank" rel="noreferrer"><MessageCircle size={18} /></a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer"><Send size={18} /></a>
        </div>
        <p>© 2026 EcoNest Sri Lanka. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
