import React, { useState } from "react";

function CadastrarMesas() {
  const [numeroMesa, setNumeroMesa] = useState("");
  const [lugares, setLugares] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!numeroMesa || !lugares) {
      alert("Preencha todos os campos!");
      return;
    }

    alert(`Mesa ${numeroMesa} cadastrada com ${lugares} lugares!`);
    setNumeroMesa("");
    setLugares("");
  };

  return (
<main className="container">

 <h1>Cadastrar Mesas</h1>

 <form onSubmit={handleSubmit} className="formulario">

   <label>Número da Mesa:</label>
       
<input type="number" value={numeroMesa}  onChange={(e) => setNumeroMesa(e.target.value)}  placeholder="Max: 20" min="1" max="20"/>

<label>Quantidade de Lugares:</label>

<input type="number" value={lugares} onChange={(e) => setLugares(e.target.value)} placeholder="Max:6" min="1" max="6"/>

  <button type="submit">Cadastrar</button>
  </form>
  </main>
  );
}

export default CadastrarMesas;
