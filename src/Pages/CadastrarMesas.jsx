import React, { useState } from "react";

function CadastrarMesas() {
  const [numeroMesa, setNumeroMesa] = useState("");
  const [lugares, setLugares] = useState("");
  const [status, setStatus] = useState("disponível");
  const [mesas, setMesas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!numeroMesa || !lugares) {
      alert("Preencha todos os campos!");
      return;
    }

    const novaMesa = { id: Date.now(), numeroMesa, lugares, status };
    setMesas([...mesas, novaMesa]);
    alert(`Mesa ${numeroMesa} cadastrada!`);
    setNumeroMesa("");
    setLugares("");
  };

  const handleExcluir = (id) => {
    setMesas(mesas.filter((m) => m.id !== id));
  };

  return (
    <main className="container">
      <h1>Cadastrar Mesas</h1>

      <form onSubmit={handleSubmit} className="formulario">
        <label>Número da Mesa:</label>
        <input type="number" value={numeroMesa} onChange={(e) => setNumeroMesa(e.target.value)} min="1" max="20" />

        <label>Quantidade de Lugares:</label>
        <input type="number" value={lugares} onChange={(e) => setLugares(e.target.value)} min="1" max="6" />

        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="disponível">Disponível</option>
          <option value="ocupada">Ocupada</option>
        </select>

        <button type="submit">Cadastrar</button>
      </form>

      <h2>Mesas Cadastradas</h2>
      <ul>
        {mesas.map((m) => (
          <li key={m.id}>
            Mesa {m.numeroMesa} - {m.lugares} lugares - {m.status}
            <button onClick={() => handleExcluir(m.id)} style={{ marginLeft: "10px" }}>Excluir</button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default CadastrarMesas;
