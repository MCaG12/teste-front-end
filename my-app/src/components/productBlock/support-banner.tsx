import banner from '../.././assets/support-banner.png'
export default function support_banner() 
{
    return(
    <div style={styles.banner}>
      <div style={{display:"flex", flexDirection:"column", width:"35%", height:"100%", justifyContent:"end"}}>
        <p style={styles.partners}>Parceiros</p>
        <p style={styles.partners_desc}>descrição genérica de parceiros</p>
        <p style={{...styles.partners_desc, marginBottom: "20px"}}>em duas linhas</p>
        <div style={styles.checkout}>CONFIRA</div> 
      </div>
    </div>
    )
}

const styles = {
  banner: {
    width: '100%',
    aspectRatio: '634 / 350',
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    marginBottom: '2%',
    borderRadius: "2x0px",
    padding: "30px"
  },
  checkout: {
    backgroundColor: "#F7CA11",
    width: "50%",
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
  partners: {
    fontFamily: "Baloo 2, sans-serif",
    fontWeight: "800",
    fontSize: "64px",
    color: "#ffffff",
    textTransform: "capitalize",
    textShadow: "2px 2px 0px rgba(0,0,0,0.3)",
  },
  partners_desc: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "500",
    fontSize: "20px",
    color: "#ffffff",
    lineHeight: "1.3",
  }
} as const satisfies Record<string, React.CSSProperties>;