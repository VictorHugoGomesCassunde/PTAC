import React, { useState } from "react";

function BuscarMesas() {
  const [busca, setBusca] = useState("");
  const [mesas] = useState([
    { numero: 1, lugares: 4, status: "disponível" },
    { numero: 2, lugares: 6, status: "ocupada" },
    { numero: 3, lugares: 2, status: "disponível" },
  ]);

  const filtradas = mesas.filter((m) =>
    m.numero.toString().includes(busca)
  );

  return (
    <main className="container">
      <h1>Buscar Mesas</h1>
      <input
        type="text"
        placeholder="Digite o número da mesa"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <ul>
        {filtradas.map((m) => (
          <li key={m.numero}>
            Mesa {m.numero} — {m.lugares} lugares — {m.status}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default BuscarMesas;