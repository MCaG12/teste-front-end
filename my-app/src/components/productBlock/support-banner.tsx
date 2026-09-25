import styles from "../../scss/productBlock/support_banner.module.scss";

export default function support_banner() 
{
    return(
    <div className={styles.banner}>
      <div style={{display:"flex", flexDirection:"column", width:"35%", height:"100%", justifyContent:"end"}}>
        <p className={styles.partners}>Parceiros</p>
        <p className={styles.partners_desc}>descrição genérica de parceiros</p>
        <p className={styles.partners_desc} style={{marginBottom: "20px"}}>em duas linhas</p>
        <div className={styles.checkout}>CONFIRA</div> 
      </div>
    </div>
    )
}

