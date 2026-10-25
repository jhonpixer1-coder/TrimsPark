export default function SiteHeader() {
  return (
    <header className="nav">
      <a href="#top" className="logo" aria-label="Trims Park home">
        <span className="mark">TP</span>
        <span><b className="blue">TRIMS</b> PARK</span>
      </a>
      <nav aria-label="Main">
        <a href="#products">Products</a>
        <a href="#factory">Factory</a>
        <a href="#clients">Clients</a>
        <a href="#contact" className="btn small">Get a quote</a>
      </nav>
    </header>
  );
}
