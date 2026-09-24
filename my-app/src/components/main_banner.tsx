import banner from '.././assets/main-banner.png'

export default function main_banner() 
{
    return(
    <div style={styles.banner}>

           
    </div>
    )
}

const styles = {
  banner: {
    width: '100%',
    height: '40%',
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    marginBottom: '2%'
  },
} as const satisfies Record<string, React.CSSProperties>;