import styles from "../../scss/mainHeader/main_header_category_options.module.scss";
import member_ship from "../../assets/search_bar_icons/membership-icon.png";

export default function MainHeaderCategoryOptions() {
  return (
    <nav className={styles.navContainer}>
      <a className={styles.navItem} href="#">Todas Categorias</a>
      <a className={styles.navItem} href="#">Supermercado</a>
      <a className={styles.navItem} href="#">Livros</a>
      <a className={styles.navItem} href="#">Moda</a>
      <a className={styles.navItem} href="#">Lançamentos</a>
      <a className={styles.navItemHighlight} href="#">Ofertas do Dia</a>
      
      <div className={styles.membershipWrapper}>
        <img src={member_ship} alt="Membership" className={styles.iconImage} />
        <a className={styles.navItem} href="#">Assinatura</a>
      </div>
    </nav>
  );
}