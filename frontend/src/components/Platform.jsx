const steps = [
  {
    number: "01",
    title: "Cadastre sua empresa",
    text: "Informe os dados, serviços, políticas e perguntas frequentes do seu negócio.",
  },
  {
    number: "02",
    title: "Configure seu assistente",
    text: "Defina como a IA deve se comportar ao falar com os seus clientes.",
  },
  {
    number: "03",
    title: "Atenda com precisão",
    text: "O assistente responde usando exclusivamente a base de conhecimento da sua empresa.",
  },
];

export default function Platform() {
  return (
    <section id="plataforma" className="platform">
      <div className="container">
        <span className="eyebrow">Como funciona</span>
        <h2 className="platform__title">
          Uma IA treinada com a <span className="gradient-text">sua realidade</span>
        </h2>

        <div className="platform__grid">
          {steps.map((step) => (
            <article key={step.number} className="card">
              <span className="card__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
