import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Perfil() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({ nome: "", email: "" });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");

    const dados = JSON.parse(localStorage.getItem("usuario"));
    if (dados) setUsuario(dados);
  }, [navigate]);

  const handleAtualizar = (e) => {
    e.preventDefault();
    localStorage.setItem("usuario", JSON.stringify(usuario));
    alert("Perfil atualizado com sucesso!");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <main className="container">
      <h1>Meu Perfil</h1>
      <form onSubmit={handleAtualizar} className="formulario">
        <label>Nome:</label>
        <input
          type="text"
          value={usuario.nome}
          onChange={(e) => setUsuario({ ...usuario, nome: e.target.value })}
        />

        <label>Email:</label>
        <input
          type="email"
          value={usuario.email}
          onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
        />

        <button type="submit">Atualizar Perfil</button>
      </form>
      <button onClick={handleLogout} style={{ marginTop: "10px", background: "#E94560" }}>
        Sair
      </button>
    </main>
  );
}

export default Perfil;
