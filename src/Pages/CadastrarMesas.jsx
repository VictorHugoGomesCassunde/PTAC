import React, { useState, useEffect } from "react";

function CadastrarMesas() {
  const [numeroMesa, setNumeroMesa] = useState("");
  const [lugares, setLugares] = useState("");
  const [status, setStatus] = useState("disponível");
  const [mesas, setMesas] = useState([]);
  
  useEffect(() => {
    const mesasSalvas = JSON.parse(localStorage.getItem("mesas")) || [];
    setMesas(mesasSalvas);
  }, []);
  useEffect(() => {
    localStorage.setItem("mesas", JSON.stringify(mesas));
  }, [mesas]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!numeroMesa || !lugares) {
      alert("Preencha todos os campos!");
      return;
    }

    const novaMesa = {
      id: Date.now(),
      numeroMesa,
      lugares,
      status,
    };

    setMesas([...mesas, novaMesa]);

    alert(`Mesa ${numeroMesa} cadastrada com sucesso!`);

    setNumeroMesa("");
    setLugares("");
    setStatus("disponível");
  };

  const handleExcluir = (id) => {
    const atualizado = mesas.filter((m) => m.id !== id);
    setMesas(atualizado);
  };

  return (
    <main className="container">
      <h1>Cadastrar Mesas</h1>

      <form onSubmit={handleSubmit} className="formulario">
        <label>Número da Mesa:</label>
        <input
          type="number"
          value={numeroMesa}
          onChange={(e) => setNumeroMesa(e.target.value)}
          min="1"
          max="50"
          placeholder="Ex: 12"
        />

        <label>Quantidade de Lugares:</label>
        <input
          type="number"
          value={lugares}
          onChange={(e) => setLugares(e.target.value)}
          min="1"
          max="10"
          placeholder="Ex: 4"
        />

        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="disponível">Disponível</option>
          <option value="ocupada">Ocupada</option>
        </select>

        <button type="submit">Cadastrar</button>
      </form>

      <h2>Mesas Cadastradas</h2>

      {mesas.length === 0 ? (
        <p>Nenhuma mesa cadastrada.</p>
      ) : (
        <ul>
          {mesas.map((m) => (
            <li key={m.id}>
              Mesa {m.numeroMesa} — {m.lugares} lugares — {m.status}
              <button
                onClick={() => handleExcluir(m.id)}
                style={{ marginLeft: "10px" }}
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default CadastrarMesas;