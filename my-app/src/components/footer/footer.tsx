import styles from "../../scss/footer/footer.module.scss";


export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.leftCol}>
        <div className={styles.logo}>
          <span className={styles.logoCircle}>ec</span>
          <span className={styles.logoText}>onverse</span>
        </div>
        <p className={styles.tagline}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className={styles.socialRow}>
          
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

