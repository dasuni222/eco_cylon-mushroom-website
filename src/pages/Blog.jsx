export default function Blog() {
  return (
    <main className="page-shell">
      <section className="page-hero page-hero-alt">
        <div className="page-hero-content">
          <p className="eyebrow-accent">Blog</p>
          <h1>Stories from Sri Lanka</h1>
          <p>
            Discover recipes, wellness tips, and behind-the-scenes stories about our natural products from Sri Lanka.
          </p>
          <a className="primary-cta" href="/#products">
            Shop Natural Products
          </a>
        </div>
      </section>

      <section className="page-copy-section">
        <h2>Latest Insights</h2>
        <ul className="bullet-list">
          <li>How to use Sri Lankan spices in everyday cooking</li>
          <li>Benefits of organic mushroom powder for immunity</li>
          <li>The story of our farmers and regenerative agriculture</li>
          <li>Tips for choosing the right tea blends for wellness</li>
        </ul>
      </section>
    </main>
  );
}
