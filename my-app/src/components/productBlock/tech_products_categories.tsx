import styles from "../../scss/productBlock/tech_products_categories.module.scss";

const tabs = ['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS'];

export default function CategoryTabs() {
  return (
    <div className={styles.wrapper}>
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          className={`${styles.tab} ${tab === 'CELULAR' ? styles.active : ''}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}