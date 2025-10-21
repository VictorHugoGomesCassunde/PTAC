import { useState } from "react";

function CadastrarMesas() {
  const [numeroMesa, setNumeroMesa] = useState("");
  const [capacidade, setCapacidade] = useState("");
  const [status, setStatus] = useState("");

  function salvarMesa(e) {
    e.preventDefault();
    if (!numeroMesa || !capacidade || !status) {
      alert("Preencha todos os campos!");
      return;
    }
    alert(`Mesa ${numeroMesa} cadastrada com sucesso!`);
    setNumeroMesa("");
    setCapacidade("");
    setStatus("");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cadastrar Mesa</h1>

      <form onSubmit={salvarMesa}>
        <div>
          <label>Número da Mesa:</label>
          <input type="text" value={numeroMesa} onChange={(e) => setNumeroMesa(e.target.value)}/>
        </div>

        <div>
          <label>Capacidade:</label>
          <input type="number" value={capacidade} onChange={(e) => setCapacidade(e.target.value)}/>
        </div>

        <div>
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">Selecione...</option>
            <option value="disponível">Disponível</option>
            <option value="ocupada">Ocupada</option>
          </select>
        </div>

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default CadastrarMesas;