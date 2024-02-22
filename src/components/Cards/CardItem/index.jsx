import styles from "./CardItem.module.css"

const CardItem = ({ imagem, titulo, preco, botao }) => {
    return (
        <div className={styles.card}>
            <div className={styles.infos}>
                <img src={`/imagens${imagem}`} alt="" />
                <p className={styles.titulo}>{titulo}</p>
                <p className={styles.preco}>{preco}</p>
                <button className={styles.botao}>{botao}</button>
            </div>
        </div>
    )
}

export default CardItem