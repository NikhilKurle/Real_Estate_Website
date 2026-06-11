import './Manifesto.css';

const principles = [
  {
    number: '01',
    title: 'Homes Are Not Just Assets',
    body:
      'The luxury market reduces homes to spreadsheet rows — square footage, cap rate, comps. We refuse that reduction. Every property we represent is a life lived somewhere, a story waiting to be continued. We source with that in mind.',
  },
  {
    number: '02',
    title: 'Discretion Is the Product',
    body:
      'Our clients don\'t broadcast their moves. Neither do we. No unsolicited listings, no mass email blasts, no pressure timelines. Every introduction is deliberate, every conversation is private, every decision is yours alone to make.',
  },
  {
    number: '03',
    title: 'Long Relationships Over Quick Transactions',
    body:
      'We measure success over decades, not quarters. We\'d rather advise you to wait than rush you into the wrong acquisition. The clients who return to us — and they do — know that our counsel doesn\'t change depending on which way the commission lands.',
  },
  {
    number: '04',
    title: 'Scarcity Is Real. Urgency Is Often Manufactured.',
    body:
      'We will never tell you a property "won\'t last." If it\'s the right home, it will last long enough for you to decide with a clear head. If it isn\'t, no amount of urgency should speed you to it.',
  },
  {
    number: '05',
    title: 'Architecture Deserves Honest Language',
    body:
      'We don\'t call a small room "cozy" or a loud neighborhood "vibrant" to obscure the truth. Our listings say exactly what a property is and exactly what it isn\'t. Precision in language is respect for your time.',
  },
  {
    number: '06',
    title: 'The Best Deal Is the One You Can Sleep After',
    body:
      'We\'ve walked away from commissions. We\'ve advised clients against offers that looked good on paper. We will do it again. A deal that doesn\'t fit your life is not a deal — it is a delayed problem.',
  },
];

const stats = [
  { value: '$4.2B+', label: 'Transacted Since 2004' },
  { value: '97%', label: 'Client Return Rate' },
  { value: '38', label: 'Markets Represented' },
  { value: '18mo', label: 'Avg. Client Relationship Before First Listing' },
];

const Manifesto = () => {
  return (
    <div className="manifesto-page animate-fade-in">

      {/* ── Full-Viewport Video Hero (title + video merged) ── */}
      <section className="manifesto-video-hero">
        <video
          className="manifesto-video-bg"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="manifesto-video-overlay" aria-hidden="true" />

        <div className="container manifesto-video-content">
          {/* Title block */}
          <div className="manifesto-hero-text">
            <p className="manifesto-eyebrow manifesto-eyebrow--light">Our Beliefs</p>
            <h1 className="manifesto-hero-title">The PrimeNest<br />Manifesto</h1>
            <p className="manifesto-subhead manifesto-subhead--light">
              Twenty years in luxury real estate taught us one thing: how a firm treats people says everything about how it will treat your property.
            </p>
          </div>

          {/* Divider + Quote */}
          <div className="manifesto-hero-quote-row">
            <div className="manifesto-rule manifesto-rule--light" aria-hidden="true" />
            <blockquote className="manifesto-quote manifesto-quote--light">
              "The most expensive home in the world is worth nothing if it doesn't belong to the right life."
            </blockquote>
            <div className="manifesto-rule manifesto-rule--light" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="container section manifesto-principles-section">
        <div className="manifesto-principles-header">
          <h2>What We Stand For</h2>
          <p className="text-muted">Six commitments that shape every property, every conversation, every year.</p>
        </div>

        <div className="manifesto-principles-grid">
          {principles.map((p) => (
            <div key={p.number} className="manifesto-principle-card">
              <span className="manifesto-principle-number">{p.number}</span>
              <div className="manifesto-principle-body">
                <h3 className="manifesto-principle-title">{p.title}</h3>
                <p className="manifesto-principle-text">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Stats Band ── */}
      <section className="manifesto-stats-band">
        <div className="container manifesto-stats-inner">
          {stats.map((s) => (
            <div key={s.label} className="manifesto-stat">
              <span className="manifesto-stat-value">{s.value}</span>
              <span className="manifesto-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="manifesto-cta-section">
        <div className="container manifesto-cta-inner">
          <h2>If This Resonates, Let's Talk</h2>
          <p className="text-muted manifesto-cta-text">
            We take on fewer clients than we could. That's intentional. When you're ready to move, we'll be ready to listen.
          </p>
          <div className="manifesto-cta-actions">
            <a href="/contact" className="btn btn-primary">Schedule a Conversation</a>
            <a href="/properties" className="btn btn-outline">Browse Properties</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Manifesto;