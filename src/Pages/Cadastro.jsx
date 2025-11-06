import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !email || !senha) {
      alert("Preencha todos os campos!");
      return;
    }

    localStorage.setItem("usuario", JSON.stringify({ nome, email, senha }));
    alert("Cadastro realizado com sucesso!");
    navigate("/login");
  };

  return (
    <main className="container">
      <h1>Cadastrar Usuário</h1>
      <form onSubmit={handleSubmit} className="formulario">
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome"
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
        />

        <label>Senha:</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Crie uma senha"
        />

        <button type="submit">Cadastrar</button>
      </form>
    </main>
  );
}

export default Cadastro;
