import styles from "../../scss/productBlock/related_products.module.scss";

export default function SectionTitle(ps_sectionName: string, pb_drawLines: boolean) {
  return (
    <div className={styles.wrapper}>
      {pb_drawLines && <div className={styles.line} />}
      <h2 className={styles.title}style={{...( !pb_drawLines && { margin: "0 auto" }) }}>{ps_sectionName}</h2>
      {pb_drawLines && <div className={styles.line} />}
    </div>
  );
}

