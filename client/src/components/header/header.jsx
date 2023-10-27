import styles from "./header.module.css";

import patinha from "../../assets/patinha.svg";
import search from "../../assets/search.svg";
import people from "../../assets/people.svg";
import heart from "../../assets/heart.svg";
import bag from "../../assets/bag.svg";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          Little Pet
          <img src={patinha} alt="" />
        </div>

        <div className={styles.search}>
          <input type="text" placeholder="Pesquise na Little Pet" />
          <img src={search} alt="" />
        </div>

        <div className={styles.login}>
          <img src={people} alt="" />
          <div>
            <p>Entrar</p>
            <p>Cadastrar</p>
          </div>
        </div>

        <div className={styles.social}>
          <img src={heart} alt="" />
          <img src={bag} alt="" />
        </div>
      </div>
      <div className={styles.nav}>
        <p>Início</p>
        <p>Sobre nós</p>
        <p>Localização</p>
        <p>Lançamentos</p>
        <p>Acessórios</p>
      </div>
    </>
  );
};

export default Header;
