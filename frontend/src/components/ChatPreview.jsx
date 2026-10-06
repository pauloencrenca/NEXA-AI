export default function ChatPreview() {
  return (
    <div className="chat" aria-hidden="true">
      <div className="chat__header">
        <div className="chat__avatar">N</div>
        <div>
          <strong>Assistente da empresa</strong>
          <span className="chat__status">
            <i /> respondendo com a base de conhecimento
          </span>
        </div>
      </div>

      <div className="chat__body">
        <div className="msg msg--user">Vocês atendem aos sábados?</div>

        <div className="msg msg--bot">
          Sim! Aos sábados atendemos das 9h às 13h, na unidade central.
          <span className="msg__source">Fonte: Horários de atendimento</span>
        </div>

        <div className="msg msg--user">E qual o prazo de entrega?</div>

        <div className="msg msg--bot msg--typing">
          <span /><span /><span />
        </div>
      </div>
    </div>
  );
}
