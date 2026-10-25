import { sizes } from "../data";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="since"><span />Uttara, Dhaka · Since 2020</p>
          <h1>Every label, tag and tape your <span>garment needs.</span></h1>
          <p className="lead">
            Trims Park makes garments accessories for export-oriented RMG factories. Samples in 2 days, bulk in as little as 7.
          </p>
          <ul className="benefits" aria-label="Why choose Trims Park">
            <li>
              <span className="benefit-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M12 3 20 6v5c0 5.1-3.4 8.4-8 10-4.6-1.6-8-4.9-8-10V6l8-3Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></svg>
              </span>
              <span>Premium<br />Quality</span>
            </li>
            <li>
              <span className="benefit-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>
              </span>
              <span>Fast<br />Turnaround</span>
            </li>
            <li>
              <span className="benefit-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M3 21V8l6 3V7l6 3V4h4v17M2 21h20" /><path d="M17 8h2M17 12h2M7 15h1M11 15h1M7 18h1M11 18h1" /></svg>
              </span>
              <span>Export<br />Oriented</span>
            </li>
          </ul>
          <div className="cta">
            <a href="#contact" className="btn">Request a sample <span aria-hidden="true">→</span></a>
            <a href="#products" className="btn ghost">See products <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="tag-art" aria-hidden="true">
          <div className="fabric fabric-yellow" />
          <div className="fabric fabric-blue" />
          <div className="plant"><i /><i /><i /><i /></div>
          <div className="string" />
          <div className="hang"><i /><span className="tp">TP</span><em>TRIMS PARK</em><small>All kinds of garments accessories solution</small></div>
        </div>
      </div>
      <div className="ribbon" aria-hidden="true">
        <div className="ribbon-track">
          {[...sizes, ...sizes, ...sizes, ...sizes].map((size, i) => (
            <span key={i}>{size}<u /></span>
          ))}
        </div>
        <div className="ribbon-note">
          <svg viewBox="0 0 40 40"><path d="m13 5 7 4 7-4 8 5-4 8-4-2v19H13V16l-4 2-4-8 8-5Z" /></svg>
          <span>Trims for a<br />better tomorrow</span>
        </div>
      </div>
    </section>
  );
}
