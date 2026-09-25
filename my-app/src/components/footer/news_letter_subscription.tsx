

export default function NewsletterSection() {

  return (
    <div style={styles.container}>
      <div style={styles.leftCol}>
        <h2 style={styles.title}>Inscreva-se na nossa newsletter</h2>
        <p style={styles.subtitle}>
          Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
        </p>
      </div>

      <div style={styles.rightCol}>
        <div style={styles.formRow}>
          <input
            type="text"
            placeholder="Digite seu nome"
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Digite seu e-mail"
            style={styles.input}
          />
          <button style={styles.checkout}>
            INSCREVER
          </button>
        </div>

        <label style={styles.checkboxLabel}>
          <input
            type="checkbox"
            style={styles.checkbox}
          />
          Aceito os termos e condições
        </label>
      </div>
    </div>
  );
}

const styles = {
   container: {
    backgroundColor: "#241B3A",
    width: "100%",
    padding: "56px 80px",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1%",
  },
  leftCol: {
    width: "40%",
  },
  title: {
    color: "#ffffff",
    fontSize: "32px",
    fontWeight: "700",
    fontFamily: "Poppins, sans-serif",
    margin: "0 0 12px 0",
  },
  subtitle: {
    color: "#c9c3d9",
    fontSize: "17px",
    fontFamily: "Poppins, sans-serif",
    lineHeight: "1.5",
    margin: 0,
  },
  rightCol: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  formRow: {
    display: "flex",
    gap: "16px",
  },
  input: {
    padding: "18px 22px",
    borderRadius: "8px",
    border: "none",
    fontSize: "17px",
    fontFamily: "Poppins, sans-serif",
    width: "300px",
    outline: "none",
  },
  checkout: {
    backgroundColor: "#F7CA11",
    border: "none",
    borderRadius: "8px",
    fontFamily: "Archivo Black, sans-serif",
    fontWeight: "400",
    fontSize: "17px",
    letterSpacing: "0.5px",
    color: "#1a1a3d",
    padding: "18px 32px",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  checkboxLabel: {
    color: "#ffffff",
    fontSize: "15px",
    fontFamily: "Poppins, sans-serif",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  checkbox: {
    width: "16px",
    height: "16px",
    accentColor: "#F7CA11",
  },
};