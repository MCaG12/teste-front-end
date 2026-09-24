type Props = {
  onClick?: () => void;
};

export function PrevButton() {
  return (
    <button type="button" aria-label="Previous" style={styles.button}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={styles.icon}>
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

export function NextButton() {
  return (
    <button type="button" aria-label="Next" style={styles.button}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={styles.icon}>
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

const styles = {
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '56px',
    height: '56px',
    padding: 0,
    border: 'none',
    borderRadius: '50%',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
    cursor: 'pointer',
  },
  icon: {
    display: 'block',
  },
} as const satisfies Record<string, React.CSSProperties>;