import eConverse_icon from '../.././assets/search_bar_icons/eConverse-icon.png'
import cart_icon from '../.././assets/search_bar_icons/cart-icon.png'
import favorite_icon from '../.././assets/search_bar_icons/favorite-icon.png'
import return_icon from '../.././assets/search_bar_icons/return-icon.png'
import search_icon from '../.././assets/search_bar_icons/search-icon.png'
import user_icon from '../.././assets/search_bar_icons/user-icon.png'

export default function main_header() 
{
    return(
    <div>
            <div style={styles.topBar}>

                <div style={{display:"flex", flexDirection:"row", alignItems:"center", gap:"5px"}}>
                    <span>Compra</span>
                    <span style={styles.highLightText}>100% segura</span>
                </div>

                <div style={{display:"flex", flexDirection:"row", alignItems:"center", gap:"5px"}}>
                    <span style={styles.highLightText}>Frete grátis</span>
                    <span>acima de R$ 500</span>
                </div>

                <div style={{display:"flex", flexDirection:"row", alignItems:"center", gap:"5px"}}>
                    <span style={styles.highLightText}>Parcelas</span>
                    <span>suas compras!</span>
                </div>
            </div>

            <header style={styles.header}>
                <a href="/" style={styles.logo}>
                  <img src={eConverse_icon} alt="" style={{...styles.iconImage, width: "300px",  height:"60px"  }} />
                </a>

                <div style={styles.searchWrapper}>
                  <input
                      style={styles.searchInput}
                      type="text"
                      placeholder="O que você está buscando?"
                  />
                  <button style={styles.actionButton} aria-label="Pedidos"> 
                      <img src={search_icon} alt="" style={styles.iconImage} />                 
                  </button>
                </div>


                <div style={styles.actions}>
                  {/* return icon */}
                  <button style={styles.actionButton} aria-label="Pedidos"> 
                      <img src={return_icon} alt="" style={styles.iconImage} />                 
                  </button>

                  {/* favorite icon */}
                  <button style={styles.actionButton} aria-label="Favoritos">
                      <img src={favorite_icon} alt="" style={styles.iconImage} />  
                  </button>

                  {/* user icon */}
                  <button style={styles.actionButton} aria-label="Conta">
                      <img src={user_icon} alt="" style={styles.iconImage} />  
                  </button>

                   {/* cart icon */}
                  <button style={styles.actionButton} aria-label="Carrinho">
                      <img src={cart_icon} alt="" style={styles.iconImage} />  
                  </button>

                </div>
            </header>
    </div>
    )
}

const styles = {
  topBar: {
    borderBottom: "1px solid #ececec",
    height: 22,
    fontSize: 11,
    color: "#5a5a5a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 48,
    backgroundColor: "#ffffff",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent:"center",
    gap: "5%",
    height: 64,
    padding: "0 42px",
    backgroundColor: "#ffffff",
    boxSizing: "border-box",
    width: "100%",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    fontSize: 22,
    fontWeight: 800,
    letterSpacing: "-0.5px",
    color: "#1f1a4d",
    textDecoration: "none",
    flexShrink: 0,
  },
  logoBadge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
    borderRadius: "50%",
    backgroundColor: "#f7c800",
    color: "#1f1a4d",
    fontSize: 18,
    fontWeight: 800,
    marginRight: 1,
  },
  searchWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "40%",
    height: "75%",
    margin: "0 24px",
    padding: "0 16px",
    borderRadius: 8,
    backgroundColor: "#f4f2ee",
    boxSizing: "border-box",
  },
  searchInput: {
    flex: 1,
    border: "none",
    outline: "none",
    background: "transparent",
    fontSize: 13,
    color: "#333333",
    fontFamily: "inherit",
  },
  searchButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    background: "transparent",
    padding: 0,
    cursor: "pointer",
    color: "#6b6b6b",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    gap: 22,
    flexShrink: 0,
  },
  actionButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    border: "none",
    background: "transparent",
    padding: 0,
    cursor: "pointer",
    color: "#6b6b6b",
  },
  iconImage: {
    display: "block",
    width: 48,
    height: 48,
    objectFit: "contain",
  },
  highLightText: {
    color: "#6141a7",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "700",
    fontSize: "12px",
    margin: "0 0 2px 0",
  },
} as const satisfies Record<string, React.CSSProperties>;
  