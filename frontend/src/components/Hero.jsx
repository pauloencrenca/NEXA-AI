import { Link } from "react-router-dom";
import ChatPreview from "./ChatPreview.jsx";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow hero__glow--purple" />
      <div className="hero__glow hero__glow--cyan" />

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="badge">
            <span className="badge__dot" /> NEXA AI
          </span>

          <h1 className="hero__title">
            Inteligência que entende o <span className="gradient-text">seu negócio.</span>
          </h1>

          <p className="hero__text">
            Automatize seu atendimento utilizando uma IA que conhece as
            informações da sua empresa.
          </p>

          <div className="hero__actions">
            <Link className="btn btn--primary" to="/cadastro">
              Começar agora
            </Link>
            <a className="btn btn--ghost" href="#plataforma">
              Conhecer a plataforma
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <ChatPreview />
        </div>
      </div>
    </section>
  );
}
