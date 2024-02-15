import { Link } from 'react-router-dom'
import logo from '../../../public/logo-branco.png'
import styles from '../Cabecalho/Cabecalho.module.css';

function Cabecalho() {
    return (
            <header className={styles.cabecalho}>
                <Link to="./">
                    <img src={logo} alt="Logo do cinetag"></img>
                </Link>
                <nav>
                    <ul className={styles.cabecalhoLista}>
                        <li><a href="#">Vender milhas</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Cadastre-se</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </nav>
            </header>

    )
}

export default Cabecalho