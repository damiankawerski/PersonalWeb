import styles from './Contact.module.css';

function sendEmail(event) {
    event.preventDefault(); // ← to zatrzymuje odświeżenie
    // tu wpisz swoją logikę wysyłania maila
    console.log('Wysyłanie maila...');
}


export default function Contact() {
    return (
        <div className={styles.contact}>
            <div className={styles.info}>
                <p className={styles.name}>Contact</p>
                <h1 className={styles.intro}>REACH ME OUT</h1>
                <p className={styles.location}>Lublin, Poland</p>
                <p className={styles.phone}>✆ 506-078-455</p>
                <p className={styles.mail}>✉ damian.kawerski@gmail.com</p>
                <p className={styles.mail}>✉ warsztaty.skni@mail.umcs.pl</p>
            </div>

            <div className={styles.formContainer}>
                <form className={styles.form} onSubmit={sendEmail}>
                    <h1 className={styles.title}>Contact me</h1>

                    <div className={styles.row}>
                        <input type="text" placeholder='NAME' className={styles.input}></input>
                        <input type="text" placeholder='EMAIL' className={styles.input}></input>
                    </div>

                    <textarea placeholder='MESSAGE' className={styles.textArea}></textarea>
                    
                    <div className={styles.attachWrapper}>
                        <label className={styles.attachLabel}>
                            📎 ATTACH FILE
                        </label>
                        <input type='file' id='file' className={styles.fileInput}></input>
                    </div>

                    <button className={styles.button} type='submit'>
                        Submit now <span className={styles.arrow}>↗</span>
                    </button>
                </form>
            </div>
        </div>
    )
}