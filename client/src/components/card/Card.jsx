import styles from "./Card.module.css";

const Card = ({ children, img }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt="" />
      {children}
    </div>
  );
};

export default Card;
