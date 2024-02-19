import styles from "./CardItem.module.css"

const CardItem = ({ pacote, preco, botao }) => {
    return (
        <div className={styles.card}>
            <img src="" alt="" />
            <div className={styles.infos}>
                <p className={styles.titulo}>{pacote}</p>
                <p className={styles.preco}>{preco}</p>
                <button className={styles.botao}>{botao}</button>
            </div>
        </div>
    )
}

export default CardItem