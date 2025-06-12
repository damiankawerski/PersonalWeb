import styles from './About.module.css'
import ja from '../assets/ja.png'

export default function About() {
  return (
    <>
        <div className={styles.about}>
            <div className={styles.heading}>
                <h3 className={styles.greeting}>Nice to meet you!</h3>
                <h1 className={styles.header}>WELCOME TO...</h1>
                <div className={styles.damian}>
                    <img className={styles.me} src={ja}></img>
                    <p className={styles.name}>DAMIAN KAWERSKI</p>
                    <p className={styles.desc}>Full-Stack Developer and SKNI VP</p>
                </div>
                <a className={styles.cv} href="public/Damian Kawerski CV English.pdf" download>Download CV in English</a>
                <a className={styles.cv} href="public/Damian Kawerski CV Polski.pdf" download>Download Cv in Polish</a>
            </div>

            <div className="w-[1px] bg-gradient-to-b from-pink-400 via-yellow-300 to-cyan-400 mx-6"></div>

            <div className={styles.description}>
                <h className={styles.aboutMe}>A few words about me...</h>
                <p className={styles.content}>I am a second-year student and full-stack developer with 
                    a passion for continuous learning. Currently, I serve as the vice-president of a scientific 
                    club, where I also lead workshops for schools, sharing knowledge and inspiring others. I’m actively
                    developing my own projects, constantly pushing my skills forward. Outside of coding, I’m fascinated by 
                    quantum computing and spend my free time at the gym.</p>
            </div>
        </div>
    </>
  )
}