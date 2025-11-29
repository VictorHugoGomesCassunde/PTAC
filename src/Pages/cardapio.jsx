import "./Cardapio.css";

function Cardapio() {
  return (
    <main className="container">
      <h1>Cardápio</h1>

      <div className="cardapio-lista">

        <div className="item">
          <img 
            src="https://www.receiteria.com.br/wp-content/uploads/figado-de-galinha-acebolado-400x220.jpeg"
            alt="Fígado de galinha acebolado"
          />
          <p>Fígado Acebolado</p>
          <p>R$ 20,00</p>
        </div>

        <div className="item">
          <img 
            src="https://p2.trrsf.com/image/fget/cf/500/0/images.terra.com/2023/04/23/1588903060-bife-de-figado-macio.jpg"
            alt="Bife de fígado macio"
          />
          <p>Bife de Fígado</p>
          <p>R$ 30,00</p>
        </div>

        <div className="item">
          <img 
            src="https://i.pinimg.com/736x/8a/b0/83/8ab08318cee83ae2ed0e2c1abd76e8ee.jpg"
            alt="Prato típico nordestino"
          />
          <p>Carne de Sol com Baião</p>
          <p>R$ 25,00</p>
        </div>

      </div>
    </main>
  );
}

export default Cardapio;
