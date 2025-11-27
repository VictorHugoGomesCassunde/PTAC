export default function ReservarMesas() {
  return (
    <div className="page">
      <h2>Reservar Mesa</h2>

      <form>
        <label>Data da reserva:</label>
        <input type="date" />

        <label>Horário:</label>
        <input type="time" />

        <label>Nome do cliente:</label>
        <input type="text" />

        <label>Contato:</label>
        <input type="text" />

        <label>Quantidade de pessoas:</label>
        <input type="number" />

        <button type="button">Confirmar Reserva</button>
      </form>
    </div>
  );
}
