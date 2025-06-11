import styles from './Contact.module.css';

function sendEmail(event) {
  event.preventDefault();
  // tu wpisz swoją logikę wysyłania maila
  console.log('Wysyłanie maila...');
}

const contactDetails = [
  { type: 'location', text: 'Lublin, Poland' },
  { type: 'phone', text: '✆ 506-078-455' },
  { type: 'mail', text: '✉ damian.kawerski@gmail.com' },
  { type: 'mail', text: '✉ warsztaty.skni@mail.umcs.pl' },
];

const inputFields = [
  { type: 'text', placeholder: 'NAME' },
  { type: 'text', placeholder: 'EMAIL' },
];

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.info}>
        <h1 className={styles.intro}>REACH ME OUT</h1>
        {contactDetails.map(({ type, text }, index) => (
          <p key={index} className={styles[type]}>
            {text}
          </p>
        ))}
      </div>

      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={sendEmail}>
          <h1 className={styles.title}>Contact me</h1>

          <div className={styles.row}>
            {inputFields.map((field, index) => (
              <input
                key={index}
                type={field.type}
                placeholder={field.placeholder}
                className={styles.input}
              />
            ))}
          </div>

          <textarea
            placeholder="MESSAGE"
            className={styles.textArea}
          ></textarea>

          <div className={styles.attachWrapper}>
            <label className={styles.attachLabel}>📎 ATTACH FILE</label>
            <input type="file" id="file" className={styles.fileInput} />
          </div>

          <button className={styles.button} type="submit">
            Submit now <span className={styles.arrow}>↗</span>
          </button>
        </form>
      </div>
    </div>
  );
}
