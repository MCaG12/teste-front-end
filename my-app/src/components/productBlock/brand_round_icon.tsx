import eConverseIcon from '../.././assets/search_bar_icons/eConverse-icon-clipped.png'
import styles from "../../scss/productBlock/brand_round_icon.module.scss";

export default function brand_round_icon() 
{
    return(
    <div className={styles.background}>
        <img src={eConverseIcon} alt="" className={styles.iconImage} />
    </div>
    )
}
