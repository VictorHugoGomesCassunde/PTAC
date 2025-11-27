import React, { useState } from "react";

function ReservarMesas() {
  const [nome, setNome] = useState("");
  const [contato, setContato] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [mesa, setMesa] = useState("");
  const [pessoas, setPessoas] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !contato || !data || !hora || !mesa || !pessoas) {
      alert("Preencha todos os campos!");
      return;
    }

    const nova = {
      id: Date.now(),
      nome,
      contato,
      data,
      hora,
      mesa,
      pessoas,
    };

    const reservasSalvas =
      JSON.parse(localStorage.getItem("reservas")) || [];

    localStorage.setItem(
      "reservas",
      JSON.stringify([...reservasSalvas, nova])
    );

    alert("Reserva cadastrada!");

    setNome("");
    setContato("");
    setData("");
    setHora("");
    setMesa("");
    setPessoas("");
  };

  return (
    <main className="container">
      <h1>Fazer Reserva</h1>

      <form onSubmit={handleSubmit} className="formulario">
        <label>Nome do Cliente:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />

        <label>Contato:</label>
        <input type="text" value={contato} onChange={(e) => setContato(e.target.value)} />

        <label>Data da reserva:</label>
        <input type="date" value={data} onChange={(e) => setData(e.target.value)} />

        <label>Hora:</label>
        <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} />

        <label>Mesa:</label>
        <input type="number" min="1" max="20" value={mesa} onChange={(e) => setMesa(e.target.value)} />

        <label>Quantidade de Pessoas:</label>
        <input type="number" min="1" max="6" value={pessoas} onChange={(e) => setPessoas(e.target.value)} />

        <button type="submit">Confirmar Reserva</button>
      </form>
    </main>
  );
}

export default ReservarMesas;
