const featuredProducts = [
  {
    name: 'Iced Cuban Link',
    category: 'Rings',
    price: '$149',
    description: 'Hand-polished sterling silver with a high-shine finish made for everyday flex.',
  },
  {
    name: 'Royal Rope Chain',
    category: 'Chains',
    price: '$219',
    description: '5mm rope chain in gold-plated stainless steel with anti-tarnish coating.',
  },
  {
    name: 'Lion Crest Pendant',
    category: 'Pendants',
    price: '$179',
    description: 'Statement pendant with a micro-pavé border and durable lobster clasp.',
  },
];

export default function App() {
  return (
    <div className="site">
      <header className="hero">
        <p className="kicker">Chainwrld Jewelry</p>
        <h1>Chains, Rings & Pendants That Hit Different.</h1>
        <p className="subcopy">
          Premium street-lux jewelry built to shine day and night. Shop your next signature piece.
        </p>
        <div className="hero-actions">
          <button>Shop Collection</button>
          <a href="#featured">View Featured</a>
        </div>
      </header>

      <main>
        <section className="categories" aria-label="Product categories">
          <article>
            <h2>Rings</h2>
            <p>Bold cuts and clean polish from pinky rings to full iced bands.</p>
          </article>
          <article>
            <h2>Chains</h2>
            <p>Cuban, rope, and tennis styles with premium weight and smooth locking clasps.</p>
          </article>
          <article>
            <h2>Pendants</h2>
            <p>Standout icons, initials, and custom-ready pieces designed to stack.</p>
          </article>
        </section>

        <section id="featured" className="featured">
          <div className="section-heading">
            <h2>Featured Drops</h2>
            <p>Fresh picks moving fast this week.</p>
          </div>

          <div className="product-grid">
            {featuredProducts.map((product) => (
              <article className="card" key={product.name}>
                <p className="tag">{product.category}</p>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="card-footer">
                  <strong>{product.price}</strong>
                  <button>Add to Cart</button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Chainwrld. All rights reserved.</p>
      </footer>
    </div>
  );
}
