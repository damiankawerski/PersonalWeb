import styles from './Home.module.css'
import ja from '../assets/ja.png'

export default function Home () {
    return (
        <div className={styles.home}>
            <div className={styles.description}>

                <div className={styles.intro}>
                <p className={styles.line}>MY NAME<br/> IS</p>
                <p className={styles.name}>DAMIAN KAWERSKI</p>
                <p className={styles.job}>Full-Stack Developer and SKNI VP</p>

            </div>
                <div className={styles.contact}>
                    <p>✆ 506-078-455 </p>
                    <p>✉ damian.kawerski@gmail.com</p>
                </div>
            </div>

            <div className={styles.picture}>
                <img src={ja} alt="Moje zdjecie"></img>
            </div>
        </div>
    )
}
