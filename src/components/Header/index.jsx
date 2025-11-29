import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.title}>Restaurante Rei do Figado</span>

      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/cardapio">Cardápio</Link>
        <Link to="/login">Login</Link>
        <Link to="/cadastro">Cadastro</Link> 
        <Link to="/reservar">Reservar Mesa</Link>
        <Link to="/minhas">Minhas Reservas</Link>
      </nav>
    </header>
  );
}

export default Header;
