import { products } from "../data";

function ProductIcon({ type }: { type: string }) {
  if (type === "print") return <svg viewBox="0 0 24 24"><path d="M7 8V3h10v5M6 18H4a2 2 0 0 1-2-2v-5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v5a2 2 0 0 1-2 2h-2M7 14h10v7H7zM18 11h.01" /></svg>;
  if (type === "button") return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><circle cx="9" cy="9" r="1" /><circle cx="15" cy="9" r="1" /><circle cx="9" cy="15" r="1" /><circle cx="15" cy="15" r="1" /></svg>;
  if (type === "roll") return <svg viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 10c0 1.7 3.6 3 8 3s8-1.3 8-3M4 14c0 1.7 3.6 3 8 3s8-1.3 8-3" /></svg>;
  if (type === "lock") return <svg viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" /></svg>;
  if (type === "sticker") return <svg viewBox="0 0 24 24"><path d="M5 3h14a2 2 0 0 1 2 2v10l-6 6H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" /><path d="M15 21v-4a2 2 0 0 1 2-2h4" /></svg>;
  if (type === "box") return <svg viewBox="0 0 24 24"><path d="m3 7 9-4 9 4v10l-9 4-9-4V7Z M3 7l9 4 9-4M12 11v10M8 5l9 4" /></svg>;
  return <svg viewBox="0 0 24 24"><path d="M20 4h-7l-9 9a2 2 0 0 0 0 3l4 4a2 2 0 0 0 3 0l9-9V4Z" /><circle cx="16" cy="8" r="1" /></svg>;
}

function ProductArtwork({ type }: { type: string }) {
  return (
    <svg className={`product-visual visual-${type}`} viewBox="0 0 240 135" role="img" aria-label={`${type} product illustration`}>
      <defs>
        <filter id={`shadow-${type}`} x="-30%" y="-30%" width="160%" height="180%">
          <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#1c2e3d" floodOpacity=".16" />
        </filter>
        <linearGradient id={`paper-${type}`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#fff" /><stop offset="1" stopColor="#e9edf0" />
        </linearGradient>
      </defs>
      {type === "woven" && <g filter={`url(#shadow-${type})`}>
        <g transform="rotate(-8 104 76)"><rect x="65" y="43" width="94" height="66" rx="4" fill={`url(#paper-${type})`} /><text x="112" y="79" textAnchor="middle" className="art-tp">TP</text><text x="112" y="93" textAnchor="middle" className="art-caption">TRIMS PARK</text></g>
        <g transform="rotate(8 169 69)"><rect x="139" y="40" width="75" height="55" rx="4" fill="#102536" /><text x="176" y="75" textAnchor="middle" className="art-tp art-white">TP</text></g>
      </g>}
      {type === "printed" && <g filter={`url(#shadow-${type})`}>
        <ellipse cx="179" cy="58" rx="31" ry="14" fill="#078fc7" /><path d="M148 58v42c0 8 62 8 62 0V58" fill="#10a5dc" /><ellipse cx="179" cy="100" rx="31" ry="12" fill="#078fc7" /><ellipse cx="179" cy="58" rx="12" ry="6" fill="#dff7ff" />
        <path d="M37 72h125v34H37z" fill="#f8fafb" transform="rotate(-5 100 88)" /><path d="M48 81h112v24H48z" fill="#fff" transform="rotate(-5 100 88)" /><text x="91" y="97" textAnchor="middle" className="art-tp">TP</text><path d="M127 88h21" stroke="#059cdb" strokeWidth="5" />
      </g>}
      {type === "hangtag" && <g filter={`url(#shadow-${type})`}>
        <path d="M128 33h66l18 18v62h-84z" fill="#13a3dc" /><path d="M131 38h56v71h-56z" fill="#87cee7" /><path d="m131 86 22-26 18 18 16-20v51h-56z" fill="#f7fbfc" />
        <g transform="rotate(8 107 77)"><path d="M58 40h77l13 14v64H58z" fill={`url(#paper-${type})`} /><circle cx="111" cy="48" r="4" fill="#f5f6f6" stroke="#102536" /><path d="M111 48 141 9" fill="none" stroke="#102536" strokeWidth="2" /><text x="101" y="81" textAnchor="middle" className="art-tp">TP</text><text x="101" y="96" textAnchor="middle" className="art-caption">TRIMS PARK</text></g>
      </g>}
      {type === "buttons" && <g filter={`url(#shadow-${type})`}>
        <circle cx="105" cy="70" r="42" fill="#18364d" /><circle cx="105" cy="70" r="36" fill="#244b66" stroke="#0d2435" strokeWidth="3" /><circle cx="93" cy="59" r="4" fill="#0b1b27" /><circle cx="117" cy="59" r="4" fill="#0b1b27" /><circle cx="93" cy="82" r="4" fill="#0b1b27" /><circle cx="117" cy="82" r="4" fill="#0b1b27" />
        <circle cx="170" cy="58" r="26" fill="#f1ece4" stroke="#ddd6cd" strokeWidth="2" /><circle cx="163" cy="52" r="3" fill="#aaa49c" /><circle cx="177" cy="52" r="3" fill="#aaa49c" /><circle cx="163" cy="65" r="3" fill="#aaa49c" /><circle cx="177" cy="65" r="3" fill="#aaa49c" />
        <circle cx="160" cy="100" r="18" fill="#9fc8df" /><circle cx="156" cy="96" r="2.5" fill="#315970" /><circle cx="164" cy="96" r="2.5" fill="#315970" /><circle cx="156" cy="104" r="2.5" fill="#315970" /><circle cx="164" cy="104" r="2.5" fill="#315970" />
      </g>}
      {type === "tapes" && <g filter={`url(#shadow-${type})`}>
        <ellipse cx="82" cy="63" rx="34" ry="15" fill="#fff" /><path d="M48 63v35c0 10 68 10 68 0V63" fill="#f1f2f1" /><ellipse cx="82" cy="98" rx="34" ry="14" fill="#fff" /><ellipse cx="82" cy="63" rx="11" ry="5" fill="#d5d8d9" />
        <ellipse cx="166" cy="59" rx="30" ry="13" fill="#111d27" /><path d="M136 59v37c0 8 60 8 60 0V59" fill="#172735" /><ellipse cx="166" cy="96" rx="30" ry="12" fill="#0b1720" />
        <path d="M105 89h83v11h-83zM119 104h84v7h-84zM133 114h58v6h-58z" fill="#122333" /><path d="M110 89h74M124 104h75M138 114h49" stroke="#d6f1f8" strokeWidth="2" />
      </g>}
      {type === "lock" && <g filter={`url(#shadow-${type})`}>
        <path d="M48 40h103v14H48zM48 80h103v13H48z" rx="4" fill="#f7f8f8" stroke="#e0e4e7" /><path d="M48 59h103v15H48z" fill="#fff" stroke="#e0e4e7" />
        <path d="M174 41v42c0 11 34 11 34 0V41" fill="none" stroke="#d3a700" strokeWidth="3" /><path d="M191 82c-11 0-20 7-20 18s9 18 20 18 20-7 20-18-9-18-20-18Z" fill="#ffc900" /><circle cx="191" cy="100" r="3" fill="#fff1a8" /><path d="M54 47h82M54 66h82M54 86h82" stroke="#dde2e5" strokeWidth="2" />
      </g>}
      {type === "stickers" && <g filter={`url(#shadow-${type})`}>
        <g transform="rotate(-7 111 71)"><rect x="48" y="49" width="112" height="53" rx="5" fill="#fff" stroke="#e2e7ea" /><path d="M61 60v23m5-23v23m5-23v23m4-23v23m8-23v23m4-23v23m7-23v23m4-23v23m8-23v23m6-23v23m4-23v23m8-23v23m6-23v23" stroke="#13212b" strokeWidth="2" /><text x="104" y="94" textAnchor="middle" className="art-code">123456789012</text></g>
        <circle cx="177" cy="84" r="31" fill="#ffcd00" /><text x="177" y="78" textAnchor="middle" className="art-caption">SIZE</text><text x="177" y="100" textAnchor="middle" className="art-size">L</text>
      </g>}
      {type === "bags" && <g filter={`url(#shadow-${type})`}>
        <g transform="rotate(9 98 72)"><path d="M48 38h83l10 12v68H48z" fill="#eef4f7" /><path d="M53 44h75v66H53z" fill="#fff" /><path d="M53 91h75v19H53z" fill="#f3f8fa" /><text x="91" y="79" textAnchor="middle" className="art-tp">TP</text><text x="91" y="92" textAnchor="middle" className="art-caption">TRIMS PARK</text></g>
        <g transform="rotate(-7 164 76)"><path d="M135 46h71l8 9v66h-79z" fill="#e4f5fb" /><path d="M142 52h64v60h-64z" fill="#fff" /><path d="M142 91h64v21h-64z" fill="#079cda" /><text x="174" y="82" textAnchor="middle" className="art-tp">TP</text></g>
      </g>}
    </svg>
  );
}

export default function ProductsSection() {
  return (
    <section id="products" className="wrap section products-section">
      <div className="section-heading">
        <span className="heading-accent" />
        <h2>What we make</h2>
        <p className="sub">One supplier for the whole trim list, so your buyer’s approvals stay in one place.</p>
      </div>
      <div className="tags">
        {products.map((product) => (
          <a className="tagcard" href="#contact" key={product.name} aria-label={`${product.name}: request a quote`}>
            <span className="hole"><ProductIcon type={product.icon} /></span>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p>{product.note}</p>
            <span className="card-arrow" aria-hidden="true">→</span>
          </a>
        ))}
      </div>
    </section>
  );
}
