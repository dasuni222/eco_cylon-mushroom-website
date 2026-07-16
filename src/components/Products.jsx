import { useMemo, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import products from '../data/products';

const ownerPhone = '94761234567';
const ownerEmail = 'orders@ecoceylonshop.com';

export default function Products({ cart, setCart, searchTerm, setSearchTerm, searchInputRef }) {

  const [orderForm, setOrderForm] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
    orderMethod: 'whatsapp',
  });

  const filteredProducts = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();

    return products.filter((product) => {
      if (!term) return true;

      return [product.name, product.description, product.badge, product.category, product.unit]
        .join(' ')
        .toLowerCase()
        .includes(term);
    });
  }, [searchTerm]);

  const cartItems = useMemo(
    () =>
      cart
        .map((item) => ({
          ...item,
          lineTotal: item.price * item.quantity,
        }))
        .sort((a, b) => a.name.localeCompare(b.name)),
    [cart],
  );

  const total = cartItems.reduce((sum, item) => sum + item.lineTotal, 0);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === productId ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleOrderSubmit = (event) => {
    event.preventDefault();

    if (!cartItems.length) {
      alert('Please add at least one product before placing an order.');
      return;
    }

    const items = cartItems
      .map((item) => `• ${item.quantity} x ${item.name} = USD ${item.lineTotal.toFixed(2)}`)
      .join('\n');

    const message =
      `New Eco Ceylon Shop Order\n\n` +
      `Customer: ${orderForm.name}\n` +
      `Phone: ${orderForm.phone}\n` +
      `Address: ${orderForm.address}\n` +
      `Notes: ${orderForm.notes || 'No notes'}\n\n` +
      `Order Details:\n${items}\n\n` +
      `Grand Total: USD ${total.toFixed(2)}`;

    if (orderForm.orderMethod === 'whatsapp') {
      window.open(`https://wa.me/${ownerPhone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = `mailto:${ownerEmail}?subject=${encodeURIComponent('New Eco Ceylon Shop Order')}&body=${encodeURIComponent(message)}`;
    }
  };

  return (
    <section className="products-section" id="products">
      <div className="section-heading-centered">
        <p className="eyebrow-accent">Featured Products</p>
        <h2>Pure Sri Lankan spices and packaging, curated with care.</h2>
        <div className="accent-line"></div>
      </div>

      <div className="products-layout">
        <div className="product-panel">
          <div className="panel-header">
            <div>
              <h3>Premium Product Collection</h3>
              <p>Search spices, herbs and mushrooms, and add items to your cart.</p>
            </div>
            <input
              className="search-input"
              type="search"
              ref={searchInputRef}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
            />
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <article className="card product-card" key={product.id}>
                {product.image && (
                  <div className="product-image-container">
                    <img src={product.image} alt={product.name} />
                  </div>
                )}
                <div className="product-info-ref">
                  <span className="product-badge">{product.badge}</span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-meta-ref">
                    <span className="price-tag">USD {product.price.toFixed(2)}</span>
                    <span className="unit-tag">/ {product.unit}</span>
                  </div>
                  <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                    <ShoppingCart size={16} /> Add to Cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="order-panel card">
          <div className="panel-header compact">
            <div>
              <h3>Your Order</h3>
              <p>Review your order and send it through WhatsApp or Email.</p>
            </div>
          </div>

          <div className="cart-list">
            {cartItems.length ? (
              cartItems.map((item) => (
                <article className="cart-item" key={item.id}>
                  <div>
                    <h4>{item.name}</h4>
                    <p>USD {item.price.toFixed(2)} each</p>
                  </div>
                  <div className="cart-controls">
                    <button type="button" className="qty-btn" onClick={() => updateQuantity(item.id, -1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button type="button" className="qty-btn" onClick={() => updateQuantity(item.id, 1)}>
                      +
                    </button>
                  </div>
                  <div className="cart-price-row">
                    <strong>USD {item.lineTotal.toFixed(2)}</strong>
                    <button type="button" className="ghost-btn" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </article>
              ))
            ) : (
              <p className="empty-state">Your cart is empty. Add a few premium items to begin.</p>
            )}
          </div>

          <div className="summary-card">
            <div>
              <span>Total</span>
              <strong>USD {total.toFixed(2)}</strong>
            </div>
            <p>Orders are sent directly through WhatsApp or Email with no backend required.</p>
          </div>

          <form className="order-form" onSubmit={handleOrderSubmit}>
            <label>
              Full Name
              <input required type="text" placeholder="Your name" value={orderForm.name} onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })} />
            </label>
            <label>
              WhatsApp Number
              <input required type="tel" placeholder="+94 77 123 4567" value={orderForm.phone} onChange={(e) => setOrderForm({ ...orderForm, phone: e.target.value })} />
            </label>
            <label>
              Delivery Address
              <input required type="text" placeholder="House number, street, city" value={orderForm.address} onChange={(e) => setOrderForm({ ...orderForm, address: e.target.value })} />
            </label>
            <label>
              Special Instructions
              <textarea rows="3" placeholder="Notes for delivery" value={orderForm.notes} onChange={(e) => setOrderForm({ ...orderForm, notes: e.target.value })} />
            </label>
            <label>
              Select Order Method
              <select value={orderForm.orderMethod} onChange={(e) => setOrderForm({ ...orderForm, orderMethod: e.target.value })}>
                <option value="whatsapp">WhatsApp</option>
                <option value="email">Email</option>
              </select>
            </label>
            <button type="submit" className="whatsapp-btn">
              {orderForm.orderMethod === 'whatsapp' ? 'Send Order via WhatsApp' : 'Send Order via Email'}
            </button>
          </form>
        </aside>
      </div>
    </section>
  );
}