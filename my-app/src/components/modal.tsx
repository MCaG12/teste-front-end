import  { useState } from "react";

interface i_product
{
  productName : string;
  descriptionShort : string;
  photo : string;
  price : number;
}

interface i_ProductModal
{
  onClose: any;
  product: i_product
}

export default function ProductModal({ onClose, product }: i_ProductModal) {
  const [quantity, setQuantity] = useState(1);

  const decrease = () => setQuantity((q) => Math.max(1, q - 1));
  const increase = () => setQuantity((q) => q + 1);

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeBtn} onClick={onClose}>
          X
        </button>

        <div style={styles.content}>
          <div style={styles.imageCol}>
            <img src={product.photo} alt={product.productName}  />
          </div>

          <div style={styles.infoCol}>
            <h2 style={styles.title}>{product.productName}</h2>
            <p style={styles.price}>{product.price}R$</p>
            <p style={styles.description}>
              {product.descriptionShort}
            </p>
            <a style={styles.detailsLink} href="#">
              Veja mais detalhes do produto &gt;
            </a>

            <div style={styles.actionsRow}>
              <div style={styles.quantitySelector}>
                <button style={styles.qtyBtn} onClick={decrease}>
                  -
                </button>
                <span style={styles.qtyValue}>
                  {String(quantity).padStart(2, "0")}
                </span>
                <button style={styles.qtyBtn} onClick={increase}>
                  +
                </button>
              </div>

              <button style={styles.buyBtn}>COMPRAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    width: "700px",
    maxWidth: "90%",
    padding: "40px",
    position: "relative" as const,
    boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
  },
  closeBtn: {
    position: "absolute" as const,
    top: "20px",
    right: "20px",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "4px",
  },
  content: {
    display: "flex",
    gap: "40px",
    alignItems: "center",
  },
  imageCol: {
    flexShrink: 0,
  },
  productImage: {
    width: "140px",
    height: "180px",
    objectFit: "contain",
  },
  infoCol: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "4px",
  },
  title: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "400",
    fontSize: "18px",
    color: "#1a1a1a",
    margin: "0 0 8px 0",
    letterSpacing: "0.3px",
  },
  price: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "700",
    fontSize: "24px",
    color: "#1a1a1a",
    margin: "0 0 16px 0",
  },
  description: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "13px",
    color: "#8a8a8a",
    lineHeight: "1.5",
    margin: "0 0 8px 0",
    maxWidth: "320px",
  },
  detailsLink: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    fontSize: "13px",
    color: "#4B3F9E",
    textDecoration: "none",
    marginBottom: "24px",
    display: "inline-block",
  },
  actionsRow: {
    display: "flex",
    gap: "16px",
    alignItems: "center",
    marginTop: "24px",
  },
  quantitySelector: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #d5d5d5",
    borderRadius: "6px",
    overflow: "hidden",
  },
  qtyBtn: {
    background: "none",
    border: "none",
    padding: "10px 14px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  qtyValue: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "14px",
    color: "#1a1a1a",
    padding: "0 8px",
    minWidth: "20px",
    textAlign: "center" as const,
  },
  buyBtn: {
    backgroundColor: "#F7CA11",
    border: "none",
    borderRadius: "6px",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "700",
    fontSize: "14px",
    letterSpacing: "0.5px",
    color: "#1a1a3d",
    padding: "14px 40px",
    cursor: "pointer",
    flex: 1,
  },
};