export default function main_header_category_options() 
{
    return(
    <div style={styles.navContainer}>
        <a style={styles.navItem} href="#">Todas Categorias</a>
        <a style={styles.navItem} href="#">Supermercado</a>
        <a style={styles.navItem} href="#">Livros</a>
        <a style={styles.navItem} href="#">Moda</a>
        <a style={styles.navItem} href="#">Lançamentos</a>
        <a style={styles.navItemHighlight} href="#">Ofertas do Dia</a>
        <a style={styles.navItem} href="#">Assinatura</a>
    </div>
    )
}

const styles = {
  navContainer: {
    width:"80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "16px 60px",
    borderWidth: "2px 2px 0px 2px", 
    borderStyle: "solid",
    borderColor: "#d3d3d3",
    },
  navItem: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "500",
    fontSize: "13px",
    letterSpacing: "0.5px",
    color: "#4a4a4a",
    textTransform: "uppercase",
    textDecoration: "none",
    cursor: "pointer",
  },
  navItemHighlight: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "700",
    fontSize: "13px",
    letterSpacing: "0.5px",
    color: "#4B3F9E",
    textTransform: "uppercase",
    textDecoration: "none",
    cursor: "pointer",
  },
};