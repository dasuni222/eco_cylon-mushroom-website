const varieties = [
  {
    name: 'Button Mushrooms',
    description: 'Mild, versatile, and perfect for soups, salads, and stir-fries.',
  },
  {
    name: 'Oyster Mushrooms',
    description: 'Soft, savory, and rich in flavor for gourmet dishes and hearty meals.',
  },
  {
    name: 'Shiitake Mushrooms',
    description: 'Deep umami notes with a hearty texture beloved by chefs and home cooks alike.',
  },
];

export default function Products() {
  return (
    <section className="products-section" id="products">
      <div className="section-heading">
        <p className="eyebrow">Products</p>
        <h2>Choose your favorite mushroom variety</h2>
      </div>
      <div className="product-grid">
        {varieties.map((item) => (
          <article className="card product-card" key={item.name}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
