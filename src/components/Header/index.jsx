import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  const token = localStorage.getItem('token');

  return (
    <header className={styles.header}>
      <span>Reservas de Mesas</span>
      <nav>
        <Link to="/">Início</Link>
        {!token && <Link to="/login">Login</Link>}
        {!token && <Link to="/cadastro">Cadastro</Link>}
        {token && <Link to="/perfil">Perfil</Link>}
        {!token && <Link to="/cadastrar">Cadastrar Mesas</Link>}
        {!token && <Link to="/reservar">Reservar Mesas</Link>}
        {!token && <Link to="/buscar">Buscar Mesas</Link>}
      </nav>
    </header>
  );
}

export default Header;
