export default function SectionTitle(ps_sectionName: string) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.line} />
      <h2 style={styles.title}>{ps_sectionName}</h2>
      <div style={styles.line} />
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
    width: '100%',
    maxWidth: '1020px',
    margin: '0 auto',
  },
  line: {
    flex: 1,
    height: '1px',
    backgroundColor: '#E5E5E5',
  },
  title: {
    margin: 0,
    fontFamily: 'Poppins, sans-serif',
    fontSize: '28px',
    fontWeight: 700,
    color: '#2D3AB5',
    whiteSpace: 'nowrap',
  },
} as const satisfies Record<string, React.CSSProperties>;