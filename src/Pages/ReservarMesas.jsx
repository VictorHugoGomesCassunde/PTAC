import { useState } from "react";

function ReservarMesas() {
  const [nome, setNome] = useState("");
  const [contato, setContato] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [mesa, setMesa] = useState("");

  function confirmarReserva(e) {
    e.preventDefault();

    if (!nome || !contato || !data || !hora || !mesa) {
      alert("Preencha todos os campos!");
      return;
    }

    alert(`Reserva feita para ${nome} na mesa ${mesa}.`);
    setNome("");
    setContato("");
    setData("");
    setHora("");
    setMesa("");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Reservar Mesa</h1>

      <form onSubmit={confirmarReserva}>
        <div>
          <label>Nome do Cliente:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div>
          <label>Contato:</label>
          <input
            type="text"
            value={contato}
            onChange={(e) => setContato(e.target.value)}
          />
        </div>

        <div>
          <label>Data:</label>
          <input type="date" value={data} onChange={(e) => setData(e.target.value)} />
        </div>

        <div>
          <label>Hora:</label>
          <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} />
        </div>

        <div>
          <label>Número da Mesa:</label>
          <input type="text" value={mesa} onChange={(e) => setMesa(e.target.value)}/>
        </div>

        <button type="submit">Confirmar</button>
      </form>
    </div>
  );
}

export default ReservarMesas;