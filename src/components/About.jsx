import { Leaf, Sparkles, HeartPulse, Gem } from 'lucide-react';

const features = [
  { icon: Leaf, title: 'Natural & Organic', text: 'Pure ingredients sourced directly from the finest organic farms in Sri Lanka.' },
  { icon: Sparkles, title: 'Sustainably Sourced', text: 'Ethical and responsible farming methods that preserve our ecosystems.' },
  { icon: HeartPulse, title: 'Traditional Wellness', text: 'Authentic Ceylon spices and herbs crafted for a healthier lifestyle.' },
  { icon: Gem, title: 'Export Quality', text: 'Handpicked selection and premium food-safe packaging for global standards.' },
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-heading-centered">
        <p className="eyebrow-accent">About Us</p>
        <h2>We are a proud Sri Lankan brand bringing nature's goodness to the world.</h2>
        <div className="accent-line"></div>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <p>
            Eco Ceylon Shop is dedicated to sharing the rich, fertile goodness of Ceylon with the globe. From organic spices to wellness teas, every product is selected with care, honoring both traditional farming heritage and contemporary quality standards.
          </p>
          <a className="cta secondary" href="#contact">Learn More</a>
        </div>
        <div className="about-features">
          {features.map(({ icon: Icon, title, text }) => (
            <article key={title} className="feature-card">
              <div className="feature-icon">
                <Icon size={20} />
              </div>
              <div className="feature-text-block">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
