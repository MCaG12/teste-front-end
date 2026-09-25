


export default function Footer() {
  return (
    <div style={styles.container}>
      <div style={styles.leftCol}>
        <div style={styles.logo}>
          <span style={styles.logoCircle}>ec</span>
          <span style={styles.logoText}>onverse</span>
        </div>
        <p style={styles.tagline}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div style={styles.socialRow}>
          
        </div>
      </div>

      <div style={styles.divider} />

      <div style={styles.columns}>
        <div style={styles.column}>
          <h4 style={styles.columnTitle}>Institucional</h4>
          <a style={styles.link} href="#">Sobre Nós</a>
          <a style={styles.link} href="#">Movimento</a>
          <a style={styles.link} href="#">Trabalhe conosco</a>
        </div>

        <div style={styles.column}>
          <h4 style={styles.columnTitle}>Ajuda</h4>
          <a style={styles.link} href="#">Suporte</a>
          <a style={styles.link} href="#">Fale Conosco</a>
          <a style={styles.link} href="#">Perguntas Frequentes</a>
        </div>

        <div style={styles.column}>
          <h4 style={styles.columnTitle}>Termos</h4>
          <a style={styles.link} href="#">Termos e Condições</a>
          <a style={styles.link} href="#">Política de Privacidade</a>
          <a style={styles.link} href="#">Troca e Devolução</a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#f2f2f2",
    width: "100%",
    padding: "48px 60px",
    display: "flex",
    gap: "60px",
    borderTop: "3px solid #5b4b9a",
    boxSizing: "border-box",
    alignItems: "center",
  },
  leftCol: {
    width: "30%",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
  },
  logoCircle: {
    backgroundColor: "#F7CA11",
    color: "#2b2140",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "700",
    fontSize: "20px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "2px",
  },
  logoText: {
    color: "#2b2140",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "700",
    fontSize: "22px",
  },
  tagline: {
    color: "#6b6b6b",
    fontSize: "15px",
    fontFamily: "Poppins, sans-serif",
    lineHeight: "1.5",
    margin: "0 0 16px 0",
  },
  socialRow: {
    display: "flex",
    gap: "14px",
  },
  divider: {
    width: "1px",
    alignSelf: "stretch",
    backgroundColor: "#d5d5d5",
  },
  columns: {
    display: "flex",
    justifyContent:"space-evenly",
    width:"90%",
    flexWrap: "wrap",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  columnTitle: {
    color: "#2b2140",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "700",
    fontSize: "16px",
    margin: "0 0 4px 0",
  },
  link: {
    color: "#6b6b6b",
    fontFamily: "Poppins, sans-serif",
    fontSize: "15px",
    textDecoration: "none",
  },
};