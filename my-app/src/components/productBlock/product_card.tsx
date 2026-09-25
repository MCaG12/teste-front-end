import { useState } from "react";

interface ProductCardProps {
  image: string;
  productName: string;
  price: number;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProductCard({
  image,
  productName,
  price,
  setShowModal,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      style={{
        ...styles.card,
        ...(isHovered ? { filter: 'brightness(0.9)' } : {}),
      }}
      onClick={() => setShowModal(true)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div style={styles.imageBox}>
        <img src={image} alt={productName} style={styles.image} />
      </div>

      <p style={styles.title}>{productName}</p>

      <strong style={styles.price}>{price}</strong>

      <button type="button" style={styles.button}>
        COMPRAR
      </button>
    </div>
  );
}

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '366px',
    height: '100%',
    boxSizing: 'border-box',
    padding: '16px 16px 20px',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.12)',
    fontFamily: 'Poppins, sans-serif',
    cursor: 'pointer', 
    transition: 'transform 0.2s ease, filter 0.2s ease',
  },
  imageBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '260px',
    marginBottom: '8px',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  },
  title: {
    margin: '0 0 24px',
    fontSize: '18px',
    fontWeight: 300,
    lineHeight: '28px',
    color: '#333333',
  },
  oldPrice: {
    fontSize: '16px',
    fontWeight: 400,
    color: '#8A8A8A',
    textDecoration: 'line-through',
  },
  price: {
    margin: '2px 0 4px',
    fontSize: '24px',
    fontWeight: 700,
    color: '#333333',
  },
  installments: {
    fontSize: '13px',
    fontWeight: 400,
    color: '#333333',
  },
  shipping: {
    margin: '8px 0 12px',
    fontSize: '14px',
    fontWeight: 400,
    color: '#2D3AB5',
  },
  button: {
    height: '50px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#3540B5',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '16px',
    fontWeight: 700,
    color: '#FFFFFF',
    cursor: 'pointer',
  },
} as const satisfies Record<string, React.CSSProperties>;