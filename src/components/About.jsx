import { Leaf, Sparkles, HeartPulse, Gem } from 'lucide-react';

const features = [
  { icon: Leaf, title: 'Natural', text: 'Pure ingredients sourced with respect for people and the earth.' },
  { icon: Sparkles, title: 'Sustainable', text: 'Responsible practices that support long-term wellness and growth.' },
  { icon: HeartPulse, title: 'Healthy', text: 'Everyday essentials designed for nutrition, comfort, and balance.' },
  { icon: Gem, title: 'Premium Quality', text: 'Careful selection and thoughtful packaging for exceptional value.' },
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-heading">
        <p className="eyebrow">About EcoNest</p>
        <h2>We are a Sri Lankan eco brand bringing organic goodness to your table.</h2>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <p>
            EcoNest Sri Lanka is committed to creating a healthier lifestyle through 100% organic products, mindful sourcing, and premium natural care.
          </p>
          <a className="cta secondary" href="#contact">Learn More</a>
        </div>
        <div className="about-features">
          {features.map(({ icon: Icon, title, text }) => (
            <article key={title} className="feature-card">
              <div className="feature-icon">
                <Icon size={20} />
              </div>
              <div>
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
