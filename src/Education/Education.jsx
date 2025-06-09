import styles from './Education.module.css'

export default function Education() {
    return (
        <>
            <div className={styles.education}>
                <div className={styles.umcs}>
                    <h1 className={styles.name}>Maria Curie-Skłodowska University</h1>
                    <p className={styles.degree}>Bachelor’s Degree in Computer Science</p>
                    <p className={styles.graduation}>October 2023 – Present (Expected graduation: 2026)</p>
                    <ul className={`${styles.courses} list-disc list-outside`}>
                        <h1 className={styles.coursesHeader}>Relevant courses:</h1>
                        <li className={styles.coursesContent}>Algorithms and Data Structures</li>
                        <li className={styles.coursesContent}>Object-Oriented Programming</li>
                        <li className={styles.coursesContent}>Databases</li>
                        <li className={styles.coursesContent}>Computer Networks (CCNA v7: Switching, Routing, and Wireless Essentials)</li>
                    </ul>
                </div>

                <div className={styles.skni}>
                    <h1 className={styles.name}>Student Scientific Association of Computer Science</h1>
                    <ul className={`${styles.workshops} list-disc list-outside`}>
                        <h1 className={styles.workshopsHeader}>Training & Workshops Provided</h1>
                        <li className={styles.workshopContent}>Cybersecurity Behind the Scenes – Ethical Hacking of Websites</li>
                        <li className={styles.workshopContent}>Internet Security Basics</li>
                    </ul>
                    <img className={styles.image}></img>
                </div>
            </div>
        </>
    )
}