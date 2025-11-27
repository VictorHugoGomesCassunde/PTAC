import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !nome ||
      !sobrenome ||
      !email ||
      !rua ||
      !numero ||
      !bairro ||
      !cidade ||
      !uf ||
      !senha
    ) {
      alert("Preencha todos os campos!");
      return;
    }
    const usuario = {
      nome,
      sobrenome,
      email,
      rua,
      numero,
      bairro,
      cidade,
      uf,
      senha,
    };
    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Cadastro realizado com sucesso!");

    navigate("/login");
  };
  return (
    <main className="container">
      <h1>Cadastro de Usuário</h1>

      <form onSubmit={handleSubmit} className="formulario">
        
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label>Sobrenome:</label>
        <input
          type="text"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Rua:</label>
        <input
          type="text"
          value={rua}
          onChange={(e) => setRua(e.target.value)}
        />

        <label>Número:</label>
        <input
          type="number"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />

        <label>Bairro:</label>
        <input
          type="text"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
        />

        <label>Cidade:</label>
        <input
          type="text"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />

        <label>UF:</label>
        <input
          type="text"
          maxLength={2}
          value={uf}
          onChange={(e) => setUf(e.target.value.toUpperCase())}
        />

        <label>Senha:</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </main>
  );
}

export default Cadastro;