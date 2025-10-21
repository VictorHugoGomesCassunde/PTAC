import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <span>Oi meu filho querido</span>
      <nav>
        <a href="/">Iniciar</a>
        <a href="/cadastrar">Cadastro</a>
        <a href="/reservar">Registro</a>
      </nav>
    </header>
  )
}

export default Header
