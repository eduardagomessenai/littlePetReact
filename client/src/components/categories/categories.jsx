import CardCat from '../cardCat/cardCat'
import styles from './categories.module.css'

const Categories = () => {
  return (
    <div className={styles.categories}>
        <CardCat img={"https://placehold.co/100x100"}>Rações</CardCat>
        <CardCat img={"https://placehold.co/100x100"}>Brinquedos</CardCat>
        <CardCat img={"https://placehold.co/100x100"}>Cachorros</CardCat>
        <CardCat img={"https://placehold.co/100x100"}>Gatos</CardCat>
        <CardCat img={"https://placehold.co/100x100"}>Petiscos</CardCat>
        <CardCat img={"https://placehold.co/100x100"}>Arranhadores</CardCat>
        <CardCat img={"https://placehold.co/100x100"}>Hospedagens</CardCat>


    </div>
  )
}

export default Categories