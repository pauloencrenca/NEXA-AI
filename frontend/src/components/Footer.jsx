export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} NEXA AI. Todos os direitos reservados.</span>
        <span className="footer__tag">Inteligência que entende o seu negócio.</span>
      </div>
    </footer>
  );
}
