import styles from "../../scss/productBlock/button.module.scss";

interface PrevButtonProps {
  setSpliceStart: React.Dispatch<React.SetStateAction<number>>;
  setSpliceEnd: React.Dispatch<React.SetStateAction<number>>;
  spliceStart: number;
}

interface NextButtonProps {
  setSpliceStart: React.Dispatch<React.SetStateAction<number>>;
  setSpliceEnd: React.Dispatch<React.SetStateAction<number>>;
  spliceEnd: number;
  totalProducts: number;
}


export function PrevButton({ setSpliceStart, setSpliceEnd, spliceStart }: PrevButtonProps) {
  const handlePrev = () => {
    if (spliceStart > 0) {
      setSpliceStart((prev) => prev - 1);
      setSpliceEnd((prev) => prev - 1);
    }
  };

  return (
    <button type="button" aria-label="Previous" className={styles.button} onClick={handlePrev}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={styles.icon}>
        <path
          d="M15 4L7 12L15 20"
          stroke="#333333"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export function NextButton({
  setSpliceStart,
  setSpliceEnd,
  spliceEnd,
  totalProducts,
}: NextButtonProps) {
  const handleNext = () => {
    if (spliceEnd < totalProducts) {
      setSpliceStart((prev) => prev + 1);
      setSpliceEnd((prev) => prev + 1);
    }
  };

  return (
    <button type="button" aria-label="Next" className={styles.button} onClick={handleNext}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={styles.icon}>
        <path
          d="M9 4L17 12L9 20"
          stroke="#333333"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
