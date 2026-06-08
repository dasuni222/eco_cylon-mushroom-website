import { useMemo, useState } from 'react';
import products from '../data/products';

const ownerPhone = '15550142024';

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [orderForm, setOrderForm] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
  });

  const filteredProducts = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();

    return products.filter((product) => {
      if (!term) return true;

      return [product.name, product.description, product.badge, product.unit]
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
      window.alert('Please add at least one mushroom item to your cart before placing an order.');
      return;
    }

    const lines = cartItems
      .map((item) => `• ${item.quantity} x ${item.name} = ${item.lineTotal.toFixed(2)} USD`)
      .join('\n');

    const text = encodeURIComponent(
      `New mushroom order\n` +
        `Customer: ${orderForm.name || 'Not provided'}\n` +
        `Phone: ${orderForm.phone || 'Not provided'}\n` +
        `Address: ${orderForm.address || 'Not provided'}\n` +
        `Notes: ${orderForm.notes || 'No extra notes'}\n\n` +
        `Order details:\n${lines}\n\n` +
        `Grand total: ${total.toFixed(2)} USD`,
    );

    window.open(`https://wa.me/${ownerPhone}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="products-section" id="products">
      <div className="section-heading">
        <p className="eyebrow">Products & Order</p>
        <h2>Browse fresh mushrooms, add your favorites, and send your order directly on WhatsApp.</h2>
      </div>

      <div className="products-layout">
        <div className="product-panel">
          <div className="panel-header">
            <div>
              <h3>Fresh mushroom menu</h3>
              <p>Search by variety or taste and add items to your cart.</p>
            </div>
            <input
              className="search-input"
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search mushroom varieties"
              aria-label="Search products"
            />
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <article className="card product-card" key={product.id}>
                <span className="product-badge">{product.badge}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-meta">
                  <strong>${product.price.toFixed(2)}</strong>
                  <span>{product.unit}</span>
                </div>
                <button type="button" onClick={() => addToCart(product)}>
                  Add to cart
                </button>
              </article>
            ))}
          </div>

          {!filteredProducts.length && (
            <p className="empty-state">No mushrooms matched your search. Try a different keyword.</p>
          )}
        </div>

        <aside className="order-panel card">
          <div className="panel-header compact">
            <div>
              <h3>Your order</h3>
              <p>Review items, update quantities, and send the order on WhatsApp.</p>
            </div>
          </div>

          <div className="cart-list">
            {cartItems.length ? (
              cartItems.map((item) => (
                <article className="cart-item" key={item.id}>
                  <div>
                    <h4>{item.name}</h4>
                    <p>${item.price.toFixed(2)} each</p>
                  </div>
                  <div className="cart-controls">
                    <button type="button" className="qty-btn" onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button type="button" className="qty-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                  <div className="cart-price-row">
                    <strong>${item.lineTotal.toFixed(2)}</strong>
                    <button type="button" className="ghost-btn" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </article>
              ))
            ) : (
              <p className="empty-state">Your cart is empty. Add some fresh mushrooms to get started.</p>
            )}
          </div>

          <div className="summary-card">
            <div>
              <span>Total</span>
              <strong>${total.toFixed(2)}</strong>
            </div>
            <p>Orders are sent directly to our farm owner via WhatsApp. No database or backend is used.</p>
          </div>

          <form className="order-form" onSubmit={handleOrderSubmit}>
            <label>
              Full name
              <input
                type="text"
                value={orderForm.name}
                onChange={(event) => setOrderForm((prev) => ({ ...prev, name: event.target.value }))}
                placeholder="Your name"
                required
              />
            </label>
            <label>
              WhatsApp number
              <input
                type="tel"
                value={orderForm.phone}
                onChange={(event) => setOrderForm((prev) => ({ ...prev, phone: event.target.value }))}
                placeholder="+1 555 014 2024"
                required
              />
            </label>
            <label>
              Delivery address
              <input
                type="text"
                value={orderForm.address}
                onChange={(event) => setOrderForm((prev) => ({ ...prev, address: event.target.value }))}
                placeholder="House number, street, city"
                required
              />
            </label>
            <label>
              Notes
              <textarea
                rows="4"
                value={orderForm.notes}
                onChange={(event) => setOrderForm((prev) => ({ ...prev, notes: event.target.value }))}
                placeholder="Any special packaging or delivery notes?"
              />
            </label>
            <button type="submit" className="whatsapp-btn">Send order via WhatsApp</button>
          </form>
        </aside>
      </div>
    </section>
  );
}
