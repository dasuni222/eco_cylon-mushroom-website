export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Fresh from our farm</p>
        <h1>Nature’s earthy goodness, grown with care.</h1>
        <p className="lede">
          We cultivate premium mushrooms using clean, sustainable methods and deliver them fresh to homes, chefs,
          and wellness lovers.
        </p>
        <a className="cta" href="#products">Explore our varieties</a>
      </div>
      <aside className="hero-panel">
        <div className="mini-stat">
          <strong>12+</strong>
          <span>years growing mushrooms</span>
        </div>
        <div className="mini-stat">
          <strong>100%</strong>
          <span>local and fresh</span>
        </div>
        <div className="mini-stat">
          <strong>5</strong>
          <span>signature mushroom varieties</span>
        </div>
      </aside>
    </section>
  );
}
