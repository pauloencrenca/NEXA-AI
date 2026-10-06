export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#" className="logo" aria-label="NEXA AI">
          <span className="logo__mark">N</span>
          <span className="logo__text">
            NEXA <span className="logo__ai">AI</span>
          </span>
        </a>
        <nav className="navbar__links">
          <a href="#plataforma">Plataforma</a>
        </nav>
      </div>
    </header>
  );
}
