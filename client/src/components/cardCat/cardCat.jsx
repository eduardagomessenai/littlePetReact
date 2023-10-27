import styles from "./cardCat.module.css";

const CardCat = ({ children, img }) => {
  return (
    <div className={styles.cardCat}>
      <img src={img} alt="" />
      {children}
    </div>
  );
};

export default CardCat;
