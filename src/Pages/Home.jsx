import fundo from "../assets/fundo.jpg";
import "./Home.css";

export default function Home() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${fundo})` }}>
      <h1 className="title">REI DO FIGADO</h1>
      <h2 className="subtitle">CASEIRA</h2> 
    </div>
  );
}
