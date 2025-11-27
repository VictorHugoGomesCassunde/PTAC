import React, { useState, useEffect } from "react";

function MinhasReservas() {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("reservas")) || [];
    setReservas(dados);
  }, []);

  const consultar = (id) => {
    const r = reservas.find((x) => x.id === id);
    alert(
      `Reserva ${r.id}\nMesa: ${r.mesa}\nCliente: ${r.nome}\nData: ${r.data}\nHora: ${r.hora}`
    );
  };

  return (
    <main className="container">
      <h1>Minhas Reservas</h1>

      {reservas.length === 0 ? (
        <p>Nenhuma reserva encontrada.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Mesa</th>
              <th>Reserva Nº</th>
              <th>Data</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((r) => (
              <tr key={r.id}>
                <td>{r.mesa}</td>
                <td>{r.id}</td>
                <td>{r.data}</td>
                <td>
                  <button onClick={() => consultar(r.id)}>Consultar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}

export default MinhasReservas;
