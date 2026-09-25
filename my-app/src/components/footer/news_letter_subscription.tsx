import styles from "../../scss/footer/news_letter_subscription.module.scss";

export default function NewsletterSection() {

  return (
    <div className={styles.container}>
      <div className={styles.leftCol}>
        <h2 className={styles.title}>Inscreva-se na nossa newsletter</h2>
        <p className={styles.subtitle}>
          Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
        </p>
      </div>

      <div className={styles.rightCol}>
        <div className={styles.formRow}>
          <input
            type="text"
            placeholder="Digite seu nome"
            className={styles.input}
          />
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className={styles.input}
          />
          <button className={styles.checkout}>
            INSCREVER
          </button>
        </div>

        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            className={styles.checkbox}
          />
          Aceito os termos e condições
        </label>
      </div>
    </div>
  );
}

