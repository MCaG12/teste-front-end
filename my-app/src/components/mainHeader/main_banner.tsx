import banner from '../../assets/main-banner.png'

export default function main_banner() 
{
    return(
    <div style={styles.banner}>
      <div style={styles.bannerContent}>
        <div style={{display:"flex", flexDirection:"column", width:"60%", height:"50%", justifyContent:"end"}}>
          <p style={styles.headline}>Venha conheçer nossas</p>
          <p style={styles.headline}>promoções</p>
          <p style={styles.discountRow}>
            <span style={styles.discountHighlight}>50% Off</span>{" "}
            <span style={styles.discountText}>nos produtos</span>
          </p>
          <div style={styles.checkout}>CONFIRA</div> 
        </div>        
      </div>

    </div>
    )
}

const styles = {
  banner: {
    display: "flex",
    width: '100%',
    aspectRatio: '1440 / 390',
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    marginBottom: '2%',
    boxSizing: 'border-box',
    position: 'relative',
  },
  bannerContent: {
    position: 'absolute',
    bottom: '60px',
    left: '80px',
    width: '50%',
  },
  checkout: {
    backgroundColor: "#F7CA11",
    width: "40%",
    height: "7%",
    borderRadius: "10px",
    fontFamily: "Archivo Black, sans-serif",
    fontWeight: "400",
    fontSize: "24px",
    letterSpacing: "0.5px",
    color: "#1a1a3d",
    padding: "12px 24px",
    display: "inline-block",
    textAlign: "center",
    alignContent: "center",
  },
  headline: {
    fontFamily: "Baloo 2, sans-serif",
    fontWeight: "700",
    fontSize: "60px",
    lineHeight: "1.15",
    margin: "0 0 16px 0",
    color: "#ffffff",
  },
  discountRow: {
    fontSize: "22px",
    margin: "0 0 24px 0",
  },
  discountHighlight: {
    fontFamily: "Baloo 2, sans-serif",
    fontWeight: "700",
    fontSize: "40px",
    color: "#F7CA11",
    marginRight:"1%",
  },
  discountText: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "400",
    fontSize: "40px",
    color: "#ffffff",
  },
} as const satisfies Record<string, React.CSSProperties>;