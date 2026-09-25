import styles from "../../scss/footer/footer.module.scss";
import image from "../../assets/social-media.png"
import eConverseLogo from "../../assets/bottomConverseLogo.png"

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.leftCol}>
        <div className={styles.logo}>
          <img src={eConverseLogo} alt={'eConverseLogo'} className={styles.image} />
        </div>
        <p className={styles.tagline}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className={styles.socialRow}>
          <img src={image} alt={'socialMedia'} className={styles.image} />
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.columns}>
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Institucional</h4>
          <a className={styles.link} href="#">Sobre Nós</a>
          <a className={styles.link} href="#">Movimento</a>
          <a className={styles.link} href="#">Trabalhe conosco</a>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Ajuda</h4>
          <a className={styles.link} href="#">Suporte</a>
          <a className={styles.link} href="#">Fale Conosco</a>
          <a className={styles.link} href="#">Perguntas Frequentes</a>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Termos</h4>
          <a className={styles.link} href="#">Termos e Condições</a>
          <a className={styles.link} href="#">Política de Privacidade</a>
          <a className={styles.link} href="#">Troca e Devolução</a>
        </div>
      </div>
    </div>
  );
}

