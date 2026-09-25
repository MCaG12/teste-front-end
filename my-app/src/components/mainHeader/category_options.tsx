import tech_icon from '../.././assets/shop_per_category_icons/tech.png'
import supermercados_icon from '../.././assets/shop_per_category_icons/supermercados.png'
import whiskey_icon from '../.././assets/shop_per_category_icons/whiskey.png'
import ferramentas_icon from '../.././assets/shop_per_category_icons/ferramentas.png'
import corrida_icon from '../.././assets/shop_per_category_icons/corrida.png'
import moda_icon from '../.././assets/shop_per_category_icons/moda.png'
import saude_icon from '../.././assets/shop_per_category_icons/cuidados-de-saude.png'

export default function category_options() 
{
    return(
    <div style={styles.button_container}>
        {/* Tech */}
        <div style={styles.wrapper}>
            <div style={styles.card}>
                <img src={tech_icon} alt="" style={styles.iconImage} />
            </div>
            <span style={styles.label}>Tecnologia</span>
        </div>

        {/* Market */}
        <div style={styles.wrapper}>
            <div style={styles.card}>
                <img src={supermercados_icon} alt="" style={styles.iconImage} />
            </div>
            <span style={styles.label}>Supermercado</span>
        </div>    

        {/* Alcohol */}
        <div style={styles.wrapper}>
            <div style={styles.card}>
                <img src={whiskey_icon} alt="" style={styles.iconImage} />
            </div>
            <span style={styles.label}>Bebidas</span>
        </div>

        {/* Tools */}
        <div style={styles.wrapper}>
            <div style={styles.card}>
                <img src={ferramentas_icon} alt="" style={styles.iconImage} />
            </div>
            <span style={styles.label}>Ferramentas</span>
        </div>

        {/* Health */}
        <div style={styles.wrapper}>
            <div style={styles.card}>
                <img src={saude_icon} alt="" style={styles.iconImage} />
            </div>
            <span style={styles.label}>Saúde</span>
        </div>

        {/* sports sports sports */}
        <div style={styles.wrapper}>
            <div style={styles.card}>
                <img src={corrida_icon} alt="" style={styles.iconImage} />
            </div>
            <span style={styles.label}>Esports e Fitness</span>
        </div>  

        {/* Fashion */}
        <div style={styles.wrapper}>
            <div style={styles.card}>
                <img src={moda_icon} alt="" style={styles.iconImage} />
            </div>
            <span style={styles.label}>Moda</span>
        </div>   

    </div>
    )
}

const styles = {
  button_container: {
    display:"flex",
    flexDirection:'row',
    gap:"30px"
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    width: '160px',
  },
  card: {
    width: '160px',
    height: '160px',
    backgroundColor: '#FFFFFF',
    borderRadius: '24px',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '18px',
    fontWeight: 600,
    color: '#3A1FBF',
    textAlign: 'center',
  },
  iconImage: {
    display: "block",
    width: "50%",
    height: "50%",
    objectFit: "contain",
  },
} as const satisfies Record<string, React.CSSProperties>;