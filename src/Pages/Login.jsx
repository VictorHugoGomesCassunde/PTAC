import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));
    if (
      !usuarioSalvo ||
      usuarioSalvo.email !== email ||
      usuarioSalvo.senha !== senha
    ) {
      alert("Usuário ou senha incorretos!");
      return;
    }
    localStorage.setItem("token", "token-login");

    alert("Login realizado com sucesso!");

    navigate("/minhas");
  };

  return (
    <main className="container">
      <h1>Login</h1>

      <form onSubmit={handleSubmit} className="formulario">

        <label>Email:</label>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Senha:</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type="submit">Entrar</button>
      </form>
    </main>
  );
}

export default Login;
