import styles from './Technologies.module.css';

const desc = {
    header: "TECH STACK",
    content: "Technologies I've used before and feel comfortable working with."
};

const techs = [
    { name: 'C++', icon: '/icons/cplusplus.svg', filter: 'invert(27%) sepia(51%) saturate(2878%) hue-rotate(200deg) brightness(104%) contrast(97%)' },
    { name: 'Docker', icon: '/icons/docker.svg', filter: 'invert(27%) sepia(51%) saturate(2878%) hue-rotate(200deg) brightness(104%) contrast(97%)' },
    { name: 'Java', icon: '/icons/java.svg' },
    { name: 'Javascript', icon: '/icons/javascript.svg', filter: 'invert(84%) sepia(79%) saturate(2476%) hue-rotate(2deg) brightness(119%) contrast(86%)' },
    { name: 'MySql', icon: '/icons/mysql.svg', filter: 'invert(35%) sepia(15%) saturate(1469%) hue-rotate(184deg) brightness(100%) contrast(89%)' },
    { name: 'Python', icon: '/icons/python.svg', filter: 'invert(35%) sepia(15%) saturate(1469%) hue-rotate(184deg) brightness(100%) contrast(89%)' },
    { name: 'React', icon: '/icons/react.svg', filter: 'invert(78%) sepia(13%) saturate(3151%) hue-rotate(162deg) brightness(105%) contrast(89%)' },
    { name: 'Rust', icon: '/icons/rust.svg', filter: 'invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)' },
    { name: 'Tailwind CSS', icon: '/icons/tailwindcss.svg', filter: 'invert(53%) sepia(100%) saturate(1000%) hue-rotate(162deg) brightness(102%) contrast(89%)' },
];

export default function Technologies() {
    return (
        <>
            <div className={styles.techStack}>
                <div className={styles.description}>
                    <h1 className={styles.header}>{desc.header}</h1>
                    <p className={styles.desc}>{desc.content}</p>
                </div>

                <div className={styles.technologies}>
                    {techs.map((tech, index) => (
                        <div key={index} className={styles.techItem}>
                            <img 
                                src={tech.icon} 
                                alt={tech.name} 
                                className={styles.icon}
                                style={tech.filter ? { filter: tech.filter } : {}}
                            />
                            <span className={styles.techName}>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}