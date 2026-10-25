import { machines } from "../data";

function MachineArtwork({ type }: { type: string }) {
  return (
    <svg className={`machine-art machine-${type}`} viewBox="0 0 180 100" role="img" aria-label={`${type} industrial machine illustration`}>
      <ellipse cx="90" cy="88" rx="72" ry="7" fill="#193348" opacity=".1" />
      <path d="M25 72h132v10H25z" fill="#cbd7de" />
      <path d="M34 80v7m111-7v7" stroke="#435967" strokeWidth="5" strokeLinecap="round" />
      {type === "press" ? (
        <g><path d="M28 35h26v37H28zM58 24h32v48H58zM94 31h27v41H94zM125 40h27v32h-27z" fill="#70818b" stroke="#52636d" strokeWidth="2" /><path d="M34 42h14v9H34zm30-10h20v10H64zm36 7h15v9h-15zm32 7h14v7h-14z" fill="#d8e2e7" /><path d="M52 56h8m30-10h5m26 10h4" stroke="#283d4b" strokeWidth="3" /></g>
      ) : type === "folder" ? (
        <g><path d="M28 48h105v27H28z" fill="#168dc1" /><path d="M39 28h37v20H39zM83 35h38v13H83z" fill="#e4edf1" stroke="#92a6b1" strokeWidth="2" /><path d="M33 57h94m-83 0v15m66-15v15" stroke="#dce7eb" strokeWidth="3" /><circle cx="142" cy="57" r="13" fill="#d5e0e5" stroke="#168dc1" strokeWidth="5" /></g>
      ) : type === "ultrasonic" ? (
        <g><path d="M29 37h35v37H29zM71 29h48v45H71zM125 42h27v32h-27z" fill="#087eaf" /><path d="M77 35h35v9H77zM35 43h22v8H35z" fill="#dbe8ed" /><path d="M87 50h17v17H87zM131 49h15v18h-15z" fill="#edf3f5" /><path d="M65 47h6m48 8h6" stroke="#f9c900" strokeWidth="4" /></g>
      ) : type === "cutter" ? (
        <g><path d="M26 48h75v27H26z" fill="#e1e8eb" /><path d="M98 31h55v44H98z" fill="#087eaf" /><path d="M108 38h33v10h-33z" fill="#c9e7f2" /><path d="M35 55h53v8H35zM107 53h35v14h-35z" fill="#f5f7f8" /><path d="M45 63v8m39-8v8" stroke="#566d79" strokeWidth="3" /></g>
      ) : (
        <g><path d="M28 43h46v31H28zM78 29h44v45H78zM126 42h27v32h-27z" fill="#0b8fbe" /><path d="M34 48h34v10H34zm50-13h31v10H84zm47 13h17v9h-17z" fill="#dce8ec" /><path d="M40 62h24m26-8h22m19 9h14" stroke="#526a77" strokeWidth="3" /><circle cx="56" cy="68" r="4" fill="#f4c400" /></g>
      )}
      <path d="M33 88h113" stroke="#9cabb2" strokeWidth="2" />
    </svg>
  );
}

function CountryFlag({ country, id }: { country: string; id: string }) {
  if (country === "ch") return <svg className="country-flag" viewBox="0 0 30 30" role="img" aria-label="Switzerland"><circle cx="15" cy="15" r="15" fill="#e52421" /><path d="M13 7h4v6h6v4h-6v6h-4v-6H7v-4h6z" fill="#fff" /></svg>;
  if (country === "it") return <svg className="country-flag" viewBox="0 0 30 30" role="img" aria-label="Italy"><defs><clipPath id={`flag-it-${id}`}><circle cx="15" cy="15" r="15" /></clipPath></defs><g clipPath={`url(#flag-it-${id})`}><path fill="#009246" d="M0 0h10v30H0z" /><path fill="#fff" d="M10 0h10v30H10z" /><path fill="#ce2b37" d="M20 0h10v30H20z" /></g></svg>;
  if (country === "cn") return <svg className="country-flag" viewBox="0 0 30 30" role="img" aria-label="China"><circle cx="15" cy="15" r="15" fill="#de2910" /><path d="m8 5 1.2 3.3 3.5.1-2.8 2.1 1 3.4L8 12l-2.9 1.9 1-3.4-2.8-2.1 3.5-.1z" fill="#ffde00" /></svg>;
  return <svg className="country-flag" viewBox="0 0 30 30" role="img" aria-label="Germany"><defs><clipPath id={`flag-de-${id}`}><circle cx="15" cy="15" r="15" /></clipPath></defs><g clipPath={`url(#flag-de-${id})`}><path fill="#171717" d="M0 0h30v10H0z" /><path fill="#dd0000" d="M0 10h30v10H0z" /><path fill="#ffce00" d="M0 20h30v10H0z" /></g></svg>;
}

function MachineShowcase() {
  return (
    <div className="machine-showcase" aria-hidden="true">
      <svg viewBox="0 0 380 430">
        <path d="M16 154c31-78 82-124 163-115 63 7 126-14 175 35 40 40 23 113 17 171-7 72 24 130-28 166-46 33-105-4-171 1-74 5-133 33-164-26-31-58-14-169 8-232Z" fill="#e6f5fc" />
        <path d="M46 164c51-30 83-83 140-77 60 6 77 58 134 53" fill="none" stroke="#fff" strokeWidth="5" />
        <g transform="rotate(-11 169 214)"><rect x="75" y="111" width="171" height="139" rx="13" fill="#fff" /><rect x="86" y="121" width="149" height="120" rx="8" fill="#f8fafb" /><text x="161" y="188" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="48" fill="#102536">T<tspan fill="#079cda">P</tspan></text><text x="161" y="216" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="14" fill="#102536">TRIMS PARK</text></g>
        <g transform="rotate(13 238 279)"><path d="M184 242h112l18 17v112H184z" fill="#fff" /><circle cx="276" cy="258" r="5" fill="#102536" /><text x="241" y="307" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="37" fill="#102536">T<tspan fill="#079cda">P</tspan></text><text x="241" y="330" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="11" fill="#102536">TRIMS PARK</text></g>
        <circle cx="313" cy="83" r="22" fill="#ffd43b" /><path d="M325 75c20-14 34-17 51-17" fill="none" stroke="#ffd43b" strokeWidth="4" />
      </svg>
    </div>
  );
}

export default function MachinesSection() {
  return (
    <section id="factory" className="machine-section">
      <div className="wrap machine-layout">
        <div className="machine-listing">
          <span className="heading-accent" />
          <h2>Machines <span>on our floor</span></h2>
          <p className="sub">A small enterprise with European-built machinery and a trained team.</p>
          <ul className="machines">
            {machines.map((machine) => (
              <li key={machine.name}>
                <span className="qty">{machine.qty}×</span>
                <MachineArtwork type={machine.visual} />
                <div className="machine-details"><h3>{machine.name}</h3><p>{machine.use}</p></div>
                <span className="origin"><CountryFlag country={machine.flag} id={machine.visual} />{machine.origin}</span>
              </li>
            ))}
          </ul>
        </div>
        <MachineShowcase />
      </div>
    </section>
  );
}
