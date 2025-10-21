import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <span>Oi meu filho querido</span>
      <nav>
        <a href="">Iniciar</a>
        <a href="">Cadastro</a>
        <a href="">Perfil</a>
        <a href="">Atualizar Perfil</a>
      </nav>
    </header>
  )
}

export default Header
