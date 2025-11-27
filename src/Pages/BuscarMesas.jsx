export default function BuscarMesas() {
  return (
    <div className="page">
      <h2>Buscar Mesas</h2>

      <form>
        <label>Buscar por número da mesa:</label>
        <input type="text" placeholder="Ex: 12" />

        <button type="button">Buscar</button>
      </form>
    </div>
  );
}
