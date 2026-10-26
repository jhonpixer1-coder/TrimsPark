import { buyers, factories } from "../data";

export default function ClientsSection() {
  return (
    <section id="clients" className="clients-section">
      <span className="clients-orb clients-orb-top" aria-hidden="true" />
      <span className="clients-orb clients-orb-bottom" aria-hidden="true" />
      <div className="wrap clients-inner">
        <header className="clients-heading">
          <h2>Brands and factories we have worked with</h2>
          <span aria-hidden="true" />
        </header>
        <div className="client-group">
          <div className="client-group-heading">
            <span className="client-group-icon" aria-hidden="true">
              <svg viewBox="0 0 32 32"><circle cx="16" cy="10" r="4" /><path d="M8 25v-2a8 8 0 0 1 16 0v2zM6 13a3 3 0 1 0 0 6m20-6a3 3 0 1 1 0 6M3 25v-2a5 5 0 0 1 4-5m22 7v-2a5 5 0 0 0-4-5" /></svg>
            </span>
            <span className="client-group-rule" aria-hidden="true" />
            <h3>Buyers and brands</h3>
          </div>
          <ul className="chips">{buyers.map((buyer) => <li key={buyer}>{buyer}</li>)}</ul>
        </div>
        {/* <div className="client-group">
          <div className="client-group-heading">
            <span className="client-group-icon" aria-hidden="true">
              <svg viewBox="0 0 32 32"><path d="M4 27V14l7 4v-5l7 4V7h5v20M3 27h26" /><path d="M20 11h3m-3 5h3M9 22h2m4 0h2" /></svg>
            </span>
            <span className="client-group-rule" aria-hidden="true" />
            <h3>Garment factories</h3>
          </div>
          <ul className="chips alt">{factories.map((factory) => <li key={factory}>{factory}</li>)}</ul>
        </div> */}
      </div>
    </section>
  );
}
