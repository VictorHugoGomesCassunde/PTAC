import React, { useState } from "react";

function ReservarMesas() {
  const [nomeCliente, setNomeCliente] = useState("");
  const [contato, setContato] = useState("");
  const [numeroMesa, setNumeroMesa] = useState("");
  const [dataReserva, setDataReserva] = useState("");
  const [hora, setHora] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nomeCliente || !contato || !numeroMesa || !dataReserva || !hora) {
      alert("Preencha todos os campos!");
      return;
    }

    alert(
      `Reserva confirmada!\nCliente: ${nomeCliente}\nMesa: ${numeroMesa}\nData: ${dataReserva} às ${hora}\nContato: ${contato}`
    );

    setNomeCliente("");
    setContato("");
    setNumeroMesa("");
    setDataReserva("");
    setHora("");
  };

  return (
    <main className="container">
      <h1>Reservar Mesa</h1>

      <form onSubmit={handleSubmit} className="formulario">
        <label>Nome do Cliente:</label>
        <input type="text" value={nomeCliente} onChange={(e) => setNomeCliente(e.target.value)} />

        <label>Contato:</label>
        <input type="tel" value={contato} onChange={(e) => setContato(e.target.value)} placeholder="(00) 00000-0000" />

        <label>Número da Mesa:</label>
        <input type="number" value={numeroMesa} onChange={(e) => setNumeroMesa(e.target.value)} />

        <label>Data da Reserva:</label>
        <input type="date" value={dataReserva} onChange={(e) => setDataReserva(e.target.value)} />

        <label>Horário:</label>
        <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} />

        <button type="submit">Confirmar Reserva</button>
      </form>
    </main>
  );
}

export default ReservarMesas;
