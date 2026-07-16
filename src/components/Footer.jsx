import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer-ref" id="contact">
      <div className="footer-shell-ref">
        {/* Column 1: Logo and Slogan */}
        <div className="footer-col-about">
          <div className="footer-logo">
            <svg viewBox="0 0 240 80" className="logo-svg-footer">
              <text x="10" y="38" fill="#ffffff" style={{ fontWeight: 'bold', fontSize: '28px', fontFamily: "'Outfit', sans-serif" }}>ECO</text>
              <text x="32" y="62" fill="#ffffff" style={{ fontSize: '18px', letterSpacing: '0.12em', fontFamily: "'Outfit', sans-serif" }}>CEYLON SHOP</text>
              <line x1="30" y1="72" x2="68" y2="72" stroke="#c29b38" strokeWidth="1" />
              <text x="75" y="75" fill="#c29b38" style={{ fontSize: '10px', fontStyle: 'italic' }}>Nature from Ceylon</text>
              <line x1="172" y1="72" x2="210" y2="72" stroke="#c29b38" strokeWidth="1" />
            </svg>
          </div>
          <p className="footer-desc">
            We bring you the finest natural and organic products from Sri Lanka. Our mission is to promote a healthy lifestyle and support our local farmers.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Shop</Link></li>
            <li><Link to="#about">About Us</Link></li>
            <li><Link to="/export-orders">Export Orders</Link></li>
            <li><Link to="/wholesale">Wholesale</Link></li>
            <li><Link to="#contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Customer Service */}
        <div className="footer-col-links">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="#shipping">Shipping & Delivery</a></li>
            <li><a href="#returns">Returns & Refunds</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div className="footer-col-contact">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <MapPin size={16} className="contact-icon" />
              <span>Eco Ceylon Shop (Pvt) Ltd,<br />No. 123, Green Road, Kandy, Sri Lanka.</span>
            </li>
            <li>
              <Phone size={16} className="contact-icon" />
              <span>+94 76 123 4567</span>
            </li>
            <li>
              <Mail size={16} className="contact-icon" />
              <span>info@ecoceylonshop.com</span>
            </li>
            <li>
              <Globe size={16} className="contact-icon" />
              <span>www.ecoceylonshop.com</span>
            </li>
          </ul>
        </div>

        {/* Column 5: Payments & Follow Us */}
        <div className="footer-col-payments">
          <h3>We Accept</h3>
          <div className="payment-icons-ref">
            <span className="payment-badge-ref visa">VISA</span>
            <span className="payment-badge-ref mc">MC</span>
            <span className="payment-badge-ref paypal">PayPal</span>
            <span className="payment-badge-ref amex">AMEX</span>
          </div>

          <h3 className="follow-title">Follow Us</h3>
          <div className="footer-social-links-ref">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-copyright-ref">
        <p>© 2026 Eco Ceylon Shop. Made with Love in Sri Lanka. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
