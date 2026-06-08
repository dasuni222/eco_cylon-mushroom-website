import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import mushroom1 from './assets/mushroom1.svg';
import mushroom2 from './assets/mushroom2.svg';
import farm from './assets/farm.svg';

export default function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <section className="benefits-section" id="benefits">
          <div className="section-heading">
            <p className="eyebrow">Why mushrooms?</p>
            <h2>Fresh, wholesome nutrition in every bite</h2>
          </div>
          <div className="benefit-grid">
            <article className="card">
              <h3>Rich in nutrients</h3>
              <p>Loaded with B vitamins, selenium, potassium, and fiber to support a balanced lifestyle.</p>
            </article>
            <article className="card">
              <h3>Immune support</h3>
              <p>Our mushrooms are known for natural compounds that help your body feel strong and energized.</p>
            </article>
            <article className="card">
              <h3>Earth-friendly</h3>
              <p>Small-batch cultivation and sustainable growing practices keep our farm fresh and responsible.</p>
            </article>
          </div>
        </section>
        <section className="gallery-section" id="gallery">
          <div className="section-heading">
            <p className="eyebrow">Gallery</p>
            <h2>From farm beds to market baskets</h2>
          </div>
          <div className="gallery-grid">
            <article className="gallery-card">
              <img src={farm} alt="Mushroom farm beds" />
              <span>Farm rows</span>
            </article>
            <article className="gallery-card">
              <img src={mushroom1} alt="Fresh button mushrooms" />
              <span>Harvest basket</span>
            </article>
            <article className="gallery-card">
              <img src={mushroom2} alt="Freshly packed mushrooms" />
              <span>Freshly packed</span>
            </article>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
