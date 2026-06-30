import { useMemo, useState } from 'react';
import products from '../data/products';

const ownerPhone = '15550142024';
const ownerEmail = 'orders@ecocylon.com';

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);

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
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item,
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
      alert(
        'Please add at least one mushroom item before placing an order.',
      );
      return;
    }

    const items = cartItems
      .map(
        (item) =>
          `• ${item.quantity} x ${item.name} = ${item.lineTotal.toFixed(
            2,
          )} USD`,
      )
      .join('\n');

    const message =
      `New Mushroom Order\n\n` +
      `Customer: ${orderForm.name}\n` +
      `Phone: ${orderForm.phone}\n` +
      `Address: ${orderForm.address}\n` +
      `Notes: ${orderForm.notes || 'No notes'}\n\n` +
      `Order Details:\n${items}\n\n` +
      `Grand Total: ${total.toFixed(2)} USD`;

    if (orderForm.orderMethod === 'whatsapp') {
      window.open(
        `https://wa.me/${ownerPhone}?text=${encodeURIComponent(message)}`,
        '_blank',
        'noopener,noreferrer',
      );
    } else {
      window.location.href =
        `mailto:${ownerEmail}` +
        `?subject=${encodeURIComponent('New Mushroom Order')}` +
        `&body=${encodeURIComponent(message)}`;
    }
  };

  return (
    <section className="products-section" id="products">
      <div className="section-heading">
        <p className="eyebrow">Products & Order</p>

        <h2>
          Browse fresh mushrooms, add your favorites, and choose how to send
          your order.
        </h2>
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
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search mushroom varieties"
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

                <button onClick={() => addToCart(product)}>
                  Add to cart
                </button>
              </article>
            ))}
          </div>
        </div>

        <aside className="order-panel card">
          <div className="panel-header compact">
            <div>
              <h3>Your order</h3>

              <p>
                Review items and send orders via WhatsApp or Email.
              </p>
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
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>

                  <div className="cart-price-row">
                    <strong>${item.lineTotal.toFixed(2)}</strong>

                    <button
                      type="button"
                      className="ghost-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </article>
              ))
            ) : (
              <p className="empty-state">
                Your cart is empty. Add some fresh mushrooms.
              </p>
            )}
          </div>

          <div className="summary-card">
            <div>
              <span>Total</span>
              <strong>${total.toFixed(2)}</strong>
            </div>

            <p>
              Orders are sent directly via WhatsApp or Email. No backend is
              used.
            </p>
          </div>

          <form className="order-form" onSubmit={handleOrderSubmit}>
            <label>
              Full name
              <input
                required
                type="text"
                placeholder="Your name"
                value={orderForm.name}
                onChange={(e) =>
                  setOrderForm({
                    ...orderForm,
                    name: e.target.value,
                  })
                }
              />
            </label>

            <label>
              WhatsApp number
              <input
                required
                type="tel"
                placeholder="+1 555 014 2024"
                value={orderForm.phone}
                onChange={(e) =>
                  setOrderForm({
                    ...orderForm,
                    phone: e.target.value,
                  })
                }
              />
            </label>

            <label>
              Delivery address
              <input
                required
                type="text"
                placeholder="House number, street, city"
                value={orderForm.address}
                onChange={(e) =>
                  setOrderForm({
                    ...orderForm,
                    address: e.target.value,
                  })
                }
              />
            </label>

            <label>
              Notes
              <textarea
                rows="4"
                placeholder="Special instructions"
                value={orderForm.notes}
                onChange={(e) =>
                  setOrderForm({
                    ...orderForm,
                    notes: e.target.value,
                  })
                }
              />
            </label>

            <label>
              Select order method

              <select
                value={orderForm.orderMethod}
                onChange={(e) =>
                  setOrderForm({
                    ...orderForm,
                    orderMethod: e.target.value,
                  })
                }
              >
                <option value="whatsapp">WhatsApp</option>
                <option value="email">Email</option>
              </select>
            </label>

            <button type="submit" className="whatsapp-btn">
              {orderForm.orderMethod === 'whatsapp'
                ? 'Send order via WhatsApp'
                : 'Send order via Email'}
            </button>
          </form>
        </aside>
      </div>
    </section>
  );
}