export default function Cadastro() {
  return (
    <div className="page">
      <h2>Cadastro de Usuário</h2>

      <form>
        <label>Nome:</label>
        <input type="text" />

        <label>Sobrenome:</label>
        <input type="text" />

        <label>E-mail:</label>
        <input type="email" />

        <label>Rua:</label>
        <input type="text" />

        <label>Nº:</label>
        <input type="text" />

        <label>Bairro:</label>
        <input type="text" />

        <label>Cidade:</label>
        <input type="text" />

        <label>UF:</label>
        <input type="text" />

        <button type="button">Cadastrar</button>
      </form>
    </div>
  );
}
