import { useState } from "react";
import styles from "../../scss/productBlock/product_card.module.scss";

interface i_product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface ProductCardProps {
  image: string;
  productName: string;
  price: number;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedProduct: React.Dispatch<React.SetStateAction<i_product>>;
  product: i_product;
}

export default function ProductCard({
  image,
  productName,
  price,
  setShowModal,
  setSelectedProduct,
  product
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.card}
      style={{
        filter: isHovered ? "brightness(0.9)" : "none"
      }}
      onClick={() => {
        setShowModal(true);
        setSelectedProduct(product);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.imageBox}>
        <img src={image} alt={productName} className={styles.image} />
      </div>

      <p className={styles.title}>{productName}</p>

      <strong className={styles.price}>{price}</strong>

      <button type="button" className={styles.button}>
        COMPRAR
      </button>
    </div>
  );
}