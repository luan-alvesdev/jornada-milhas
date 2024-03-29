import styles from "../Cards/Cards.module.css"
import CardItem from "./CardItem"
import pacotes from "../../json/pacotes.json"

function Cards() {
    return (
        <section className={styles.cards}>
            <h2>Promoções</h2>
            <div className={styles.cardItem}>
                {pacotes.map((pacote) => (
                    <CardItem
                        key={pacote.id}
                        imagem={pacote.imagem}
                        titulo={pacote.titulo}
                        preco={pacote.preco}
                        botao={pacote.botao}
                    />
                ))}
            </div>
        </section>
    )
}

export default Cards