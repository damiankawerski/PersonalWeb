import styles from './Education.module.css';

const educationData = {
  name: 'Maria Curie-Skłodowska University',
  degree: 'Bachelor’s Degree in Computer Science',
  graduation: 'October 2023 – Present (Expected graduation: 2026)',
  coursesHeader: 'Relevant courses:',
  courses: [
    'Algorithms and Data Structures',
    'Object-Oriented Programming',
    'Databases',
    'Computer Networks (CCNA v7: Switching, Routing, and Wireless Essentials)',
  ],
};

const skniData = {
  name: 'Student Scientific Association of Computer Science',
  workshopsHeader: 'Training & Workshops Provided',
  workshops: [
    'Cybersecurity Behind the Scenes – Ethical Hacking of Websites',
    'Internet Security Basics',
  ],
};

export default function Education() {
  return (
    <div className={styles.education}>
      <div className={styles.umcs}>
        <h1 className={styles.name}>{educationData.name}</h1>
        <p className={styles.degree}>{educationData.degree}</p>
        <p className={styles.graduation}>{educationData.graduation}</p>
        <ul className={`${styles.courses} list-disc list-outside`}>
          <h1 className={styles.coursesHeader}>{educationData.coursesHeader}</h1>
          {educationData.courses.map((course, index) => (
            <li key={index} className={styles.coursesContent}>
              {course}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.skni}>
        <h1 className={styles.name}>{skniData.name}</h1>
        <ul className={`${styles.workshops} list-disc list-outside`}>
          <h1 className={styles.workshopsHeader}>{skniData.workshopsHeader}</h1>
          {skniData.workshops.map((workshop, index) => (
            <li key={index} className={styles.workshopContent}>
              {workshop}
            </li>
          ))}
        </ul>
        <img className={styles.image} />
      </div>
    </div>
  );
}
