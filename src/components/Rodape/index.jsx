import styles from "../Rodape/Rodape.module.css"
import logo from '../../../public/logo-branco-com-tagline.png'

function Rodape() {
    return (
        <footer className={styles.rodape}>
            <div>
                <img className={styles.rodapeImg} src={logo} alt="Logo do cinetag"></img>
                <p>Horário de atendimento: 08h - 20h (Segunda e Sábado)</p>
                <p>Desenvolvido por Alura. Projeto fictício sem fins comerciais.</p>
            </div>
            <address>
                <span>Acesse nossas redes:</span><br />
                <ul>
                    <li><a className={styles.rodapeIconeWhatsapp} aria-label="Whatsapp da Jornada Milhas" href="#"></a></li>
                    <li><a className={styles.rodapeIconeInstagram} aria-label="Instagram da Jornada Milhas" href="#"></a></li>
                    <li><a className={styles.rodapeIconeX} aria-label="X da Jornada Milhas" href="#"></a></li>
                </ul>
            </address>
        </footer>
    )
}

export default Rodape;
