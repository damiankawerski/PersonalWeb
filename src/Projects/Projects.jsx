import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

const proj = [
    {   name: "PersonalWeb", 
        link: "https://github.com/damiankawerski/PersonalWeb", 
        desc: "A small personal project to learn React and develop my website for advertisement",
        icon: "public/icons/dk.png"
    },
    {
        name: "MoriaCrawler",
        link: "https://github.com/skni-umcs/mordorappka-crawler",
        desc: "Scrapper for moria UMCS schedule system. Used in mordappka project to obtain data",
        icon: "public/icons/moria.png"
    },
];

export default function Projects() {
  return (
    <div className={styles.projects}>
        <ProjectCard project={proj[0]}/>
        <ProjectCard project={proj[1]}/>
    </div>
  )
}
