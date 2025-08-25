import React from 'react';
import styles from './ProjectCard.module.css'

function ProjectCard({ projects: { title, imageSrc, description, skills, demo, source } }) {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={new URL(`../../assets/projects/${imageSrc}`, import.meta.url).href} alt={title} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((temp, id) => (
                    <li key={id} className={styles.skill}>{temp}</li>
                ))}
            </ul>
            {(demo && source) &&
             (   <div className={styles.links}>

                    <a className={styles.link} href={demo} target="_blank" rel="noopener noreferrer">Demo</a>
                    <a className={styles.link} href={source} target="_blank" rel="noopener noreferrer">Source</a>

                </div>)

            }
        </div>
    );
}

export default ProjectCard;
