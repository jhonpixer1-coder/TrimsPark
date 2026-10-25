import { leadTimes } from "../data";

function LeadTimeIcon({ type }: { type: string }) {
  if (type === "print") return <svg viewBox="0 0 24 24"><path d="M7 8V3h10v5M6 18H4a2 2 0 0 1-2-2v-5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v5a2 2 0 0 1-2 2h-2M7 14h10v7H7zM18 11h.01" /></svg>;
  if (type === "shirt") return <svg viewBox="0 0 24 24"><path d="m8 4-5 3 2 4 3-1v11h8V10l3 1 2-4-5-3a4 4 0 0 1-8 0Z" /></svg>;
  if (type === "thread") return <svg viewBox="0 0 24 24"><path d="M5 4h14M5 20h14M7 4v16m10-16v16M7 7c3 0 7 3 10 3M7 11c3 0 7 3 10 3M7 15c3 0 7 3 10 3" /></svg>;
  if (type === "button") return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><circle cx="9" cy="9" r="1" /><circle cx="15" cy="9" r="1" /><circle cx="9" cy="15" r="1" /><circle cx="15" cy="15" r="1" /></svg>;
  return <svg viewBox="0 0 24 24"><path d="M20 4h-7l-9 9a2 2 0 0 0 0 3l4 4a2 2 0 0 0 3 0l9-9V4Z" /><circle cx="16" cy="8" r="1" /></svg>;
}

function DeliveryArtwork() {
  return (
    <svg className="delivery-art" viewBox="0 0 460 220" role="img" aria-label="A delivery truck racing past a clock">
      <defs>
        <linearGradient id="truck-body" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#ffd500" /><stop offset="1" stopColor="#f5b900" /></linearGradient>
        <filter id="truck-shadow" x="-20%" y="-30%" width="140%" height="170%"><feDropShadow dx="0" dy="7" stdDeviation="6" floodColor="#182b3b" floodOpacity=".17" /></filter>
      </defs>
      <ellipse cx="225" cy="192" rx="170" ry="12" fill="#1b3447" opacity=".08" />
      <g className="clock-face">
        <circle cx="336" cy="105" r="76" fill="#fff" stroke="#ffc900" strokeWidth="10" />
        <g stroke="#172d3a" strokeWidth="4" strokeLinecap="round"><path d="M336 44v12M336 154v12M275 105h12M385 105h12M293 62l8 8M371 140l8 8M379 62l-8 8M301 140l-8 8" /></g>
        <path d="M336 105 373 75" stroke="#079cda" strokeWidth="8" strokeLinecap="round" /><circle cx="336" cy="105" r="9" fill="#079cda" stroke="#172d3a" strokeWidth="3" />
      </g>
      <g filter="url(#truck-shadow)">
        <path d="M34 91h24M18 116h45M39 141h26" stroke="#079cda" strokeWidth="10" strokeLinecap="round" /><path d="M58 68h22M47 158h15" stroke="#ffcd00" strokeWidth="9" strokeLinecap="round" />
        <rect x="79" y="59" width="167" height="92" rx="10" fill="url(#truck-body)" /><path d="M246 89h44l30 33v29h-74z" fill="#f5b900" /><path d="M255 99h27l19 22h-46z" fill="#172d3a" /><path d="M314 129h8v13h-8z" fill="#fff3b5" />
        <path d="M75 151h252" stroke="#172d3a" strokeWidth="7" strokeLinecap="round" /><circle cx="126" cy="153" r="21" fill="#172d3a" /><circle cx="126" cy="153" r="10" fill="#d9e5eb" /><circle cx="280" cy="153" r="21" fill="#172d3a" /><circle cx="280" cy="153" r="10" fill="#d9e5eb" />
      </g>
    </svg>
  );
}

export default function DeliverySection() {
  return (
    <section className="delivery-section" id="lead">
      <span className="delivery-dots" aria-hidden="true" />
      <div className="wrap delivery-layout">
        <div className="delivery-copy">
          <span className="heading-accent" />
          <h2>How fast we <span>deliver</span></h2>
          <p className="sub">Counted from approval. Very large orders may take longer.</p>
          <DeliveryArtwork />
          <ul className="delivery-benefits" aria-label="Our delivery promises">
            <li><span className="promise-icon promise-yellow"><svg viewBox="0 0 24 24"><path d="m12 3 7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></svg></span><span>Trusted<br />Quality</span></li>
            <li><span className="promise-icon promise-blue"><svg viewBox="0 0 24 24"><path d="m13 2-8 12h6l-1 8 9-13h-7l1-7Z" /></svg></span><span>On-Time<br />Delivery</span></li>
            <li><span className="promise-icon promise-yellow"><svg viewBox="0 0 24 24"><path d="M20.8 8.7c0 5.3-8.8 11-8.8 11S3.2 14 3.2 8.7A4.7 4.7 0 0 1 12 6.4a4.7 4.7 0 0 1 8.8 2.3Z" /></svg></span><span>Your Success<br />Our Priority</span></li>
          </ul>
        </div>
        <div className="delivery-table" role="table" aria-label="Lead times">
          <div className="delivery-row delivery-head" role="row"><span role="columnheader">Item</span><span role="columnheader">Sample</span><span role="columnheader">Bulk</span></div>
          {leadTimes.map(({ item, sample, bulk, icon }) => (
            <div className="delivery-row" role="row" key={item}>
              <span className="delivery-item" role="cell"><span className="item-icon" aria-hidden="true"><LeadTimeIcon type={icon} /></span><span>{item}</span></span>
              <span role="cell">{sample}</span><strong role="cell">{bulk}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
