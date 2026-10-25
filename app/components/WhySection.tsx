import { buyerReasons } from "../data";

export default function WhySection() {
  return (
    <section className="why">
      <span className="why-orb why-orb-top" aria-hidden="true" />
      <span className="why-orb why-orb-bottom" aria-hidden="true" />
      <div className="wrap why-inner">
        <div className="why-heading">
          <h2>Why <span>buyers</span> stay with us</h2>
          <span className="why-heading-accent" />
        </div>
        <ul className="why-list">
          {buyerReasons.map((reason, index) => (
            <li className={`why-card why-card-${index + 1}`} key={reason}>
              <span className="why-icon" aria-hidden="true">
                {index === 0 && <svg viewBox="0 0 48 48"><path d="m24 5 16 7v11c0 10-7 16-16 21C15 39 8 33 8 23V12l16-7Z" /><path d="m16 24 5 5 11-12" /></svg>}
                {index === 1 && <svg viewBox="0 0 48 48"><path d="M8 38h7V27H8zm13 0h7V20h-7zm13 0h7V11h-7zM7 20l11-8 8 4L39 6M31 6h8v8" /></svg>}
                {index === 2 && <svg viewBox="0 0 48 48"><path d="M5 28h26V12H14l-4 7H5zM31 18h7l6 7v10H31zM5 35h4m7 0h15m9 0h4" /><circle cx="13" cy="35" r="4" /><circle cx="37" cy="35" r="4" /><path d="M5 15h9M2 21h8" /></svg>}
                {index === 3 && <svg viewBox="0 0 48 48"><path d="m24 5 16 7v11c0 10-7 16-16 21C15 39 8 33 8 23V12l16-7Z" /><path d="m16 24 5 5 11-12" /></svg>}
                {index === 4 && <svg viewBox="0 0 48 48"><path d="M28 5 14 25h10l-4 18 15-23H25l3-15Z" /><circle cx="24" cy="24" r="20" /></svg>}
                {index === 5 && <svg viewBox="0 0 48 48"><circle cx="17" cy="16" r="6" /><circle cx="32" cy="16" r="6" /><circle cx="24" cy="11" r="7" /><path d="M4 38v-4c0-6 5-10 11-10h2m13 0h2c6 0 11 4 11 10v4M13 39v-4c0-7 5-12 11-12s11 5 11 12v4z" /></svg>}
              </span>
              <span className="why-card-copy">
                <span>{reason}</span>
                <span className="why-card-accent" />
              </span>
              <span className="why-arrow" aria-hidden="true">→</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
