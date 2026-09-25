
import styles from "../../scss/mainHeader/mainHeader.module.scss";

export default function main_banner() 
{
    return(
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div style={{display:"flex", flexDirection:"column", width:"60%", height:"50%", justifyContent:"end"}}>
          <p className={styles.headline}>Venha conheçer nossas</p>
          <p className={styles.headline}>promoções</p>
          <p className={styles.discountRow}>
            <span className={styles.discountHighlight}>50% Off</span>{" "}
            <span className={styles.discountText}>nos produtos</span>
          </p>
          <div className={styles.checkout}>CONFIRA</div> 
        </div>        
      </div>

    </div>
    )
}
