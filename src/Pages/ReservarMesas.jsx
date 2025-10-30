import React, { useState } from "react";

function ReservarMesas() {
  const [nomeCliente, setNomeCliente] = useState("");
  const [numeroMesa, setNumeroMesa] = useState("");
  const [dataReserva, setDataReserva] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nomeCliente || !numeroMesa || !dataReserva) {
      alert("Preencha todos os campos!");
      return;
    }

    alert(
      `Reserva feita com sucesso!\nCliente: ${nomeCliente}\nMesa: ${numeroMesa}\nData: ${dataReserva}`
    );

    setNomeCliente("");
    setNumeroMesa("");
    setDataReserva("");
  };

  return (
    <main className="container">
      
   <h1>Reservar Mesa</h1>

   <form onSubmit={handleSubmit} className="formulario">

  <label>Nome do Cliente:</label>

  <input type="text" value={nomeCliente}  onChange={(e) => setNomeCliente(e.target.value)} placeholder="Digite seu nome" />

   <label>Número da Mesa:</label>

  <input type="number" value={numeroMesa} onChange={(e) => setNumeroMesa(e.target.value)} placeholder="Ex: 2" />

 <label>Data da Reserva:</label>

    <input type="date"  value={dataReserva} onChange={(e) => setDataReserva(e.target.value)} />

<button type="submit">Reservar</button>

  </form>
  </main>
  );
}

export default ReservarMesas;
