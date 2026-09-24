

const tabs = ['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS'];

export default function CategoryTabs() {

  return (
    <div style={styles.wrapper}>
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          style={{
            ...styles.tab,
            ...(tab === 'CELULAR' ? styles.tabActive : {}),
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    width: '100%',
    maxWidth: '1250px',
    margin: '0 auto',
    border: '1px solid #D0D0D0',
    backgroundColor: '#FFFFFF',
    marginBottom: '4%',
  },
  tab: {
    flex: 1,
    height: '44px',
    padding: 0,
    background: 'none',
    border: 'none',
    borderRight: '1px solid #D0D0D0',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '16px',
    fontWeight: 400,
    color: '#333333',
    textAlign: 'center',
    cursor: 'pointer',
    backgroundColor: "#f0fbfd"
  },
  tabActive: {
    fontWeight: 700,
    color: '#2D3AB5',
  },
  tabLast: {
    borderRight: 'none',
  },
} as const satisfies Record<string, React.CSSProperties>;