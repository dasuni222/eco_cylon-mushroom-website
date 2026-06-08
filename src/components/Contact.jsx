export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>Reach our farm team</h2>
      </div>
      <div className="contact-grid">
        <article className="card contact-card">
          <h3>Visit us</h3>
          <p>148 Orchard Lane, Green Valley</p>
          <p>hello@goldengrovemushrooms.com</p>
          <p>+1 (555) 014-2024</p>
        </article>
        <form className="card contact-form">
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea rows="4" placeholder="Tell us what you’d like to order or ask about." />
          </label>
          <button type="button">Send inquiry</button>
        </form>
      </div>
    </section>
  );
}
