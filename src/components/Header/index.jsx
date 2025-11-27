import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.title}>Reservas de Mesas</span>

      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/cadastrar">Cadastrar Mesa</Link>
        <Link to="/reservar">Reservar Mesa</Link>
        <Link to="/minhas">Minhas Reservas</Link>
      </nav>
    </header>
  );
}

export default Header;
