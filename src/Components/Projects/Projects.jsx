import React from 'react'
import projects from '../../Data/projects.json'
import ProjectCard from './ProjectCard'
import styles from "./Projects.module.css"

function Projects() {
    return (
        <section className={styles.container} id='projects'>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {projects.map((item, index) => {
                    return <ProjectCard key={index} projects={item}/>
                    })
                }
            </div>
        </section>
    )
}

export default Projects
