export default function CadastrarMesas() {
  return (
    <div className="page">
      <h2>Cadastrar Mesa</h2>

      <form>
        <label>Número da mesa:</label>
        <input type="text" />

        <label>Qtd. de pessoas:</label>
        <input type="number" />

        <label>Localização (ex: varanda, salão...):</label>
        <input type="text" />

        <button type="button">Cadastrar Mesa</button>
      </form>
    </div>
  );
}
