import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Footer from '../components/Footer';

const categories = [
  {
    title: 'Mushrooms',
    description: 'Fresh, dried, and powdered mushrooms for everyday wellness.',
    icon: '🍄',
  },
  {
    title: 'Dried Products',
    description: 'Naturally preserved ingredients with rich flavor and long shelf life.',
    icon: '🌿',
  },
  {
    title: 'Herbal Products',
    description: 'Therapeutic teas and botanical essentials rooted in tradition.',
    icon: '🌼',
  },
  {
    title: 'Eco Essentials',
    description: 'Sustainable everyday staples crafted for mindful living.',
    icon: '♻️',
  },
  {
    title: 'Eco Lifestyle',
    description: 'Beautiful, practical products that support a greener home.',
    icon: '🏡',
  },
  {
    title: 'Gift Packs',
    description: 'Thoughtful premium bundles for celebrations and corporate gifting.',
    icon: '🎁',
  },
];

export default function HomePage() {
  const [cart, setCart] = useState([]);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="site-shell">
      <Navbar cartCount={cartCount} />
      <main>
        <Hero />

        <section className="categories-section" id="categories">
          <div className="section-heading">
            <p className="eyebrow">Shop by Category</p>
            <h2>Curated natural essentials for healthy homes and thoughtful gifting.</h2>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <article className="category-card" key={category.title}>
                <span className="category-icon" aria-hidden="true">{category.icon}</span>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </article>
            ))}
          </div>
        </section>

        <About />
        <Products cart={cart} setCart={setCart} />
      </main>
      <Footer />
    </div>
  );
}
