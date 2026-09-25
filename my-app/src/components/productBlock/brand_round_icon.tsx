import eConverseIcon from '../.././assets/search_bar_icons/eConverse-icon-clipped.png'

export default function brand_round_icon() 
{
    return(
    <div style={styles.background}>
        <img src={eConverseIcon} alt="" style={styles.iconImage} />
    </div>
    )
}

const styles = {
  background: {
    display: "flex",
    width: "211px",
    height: "211px",
    borderRadius: "50%",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)", 
  },
  iconImage: {
    display: "block",
    width: "75%",
    height: "75%",
    objectFit: "contain",
  },
} as const satisfies Record<string, React.CSSProperties>;