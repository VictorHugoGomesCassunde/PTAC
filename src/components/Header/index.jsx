import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/login">Login</Link>
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/cadastrar">Cadastrar Mesas</Link>
        <Link to="/reservar">Reservar Mesas</Link>
        <Link to="/buscar">Buscar Mesas</Link>
        <Link to="/perfil">Perfil</Link>
      </nav>
    </header>
  );
}
