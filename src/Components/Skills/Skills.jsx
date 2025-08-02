import React from 'react'
import skills from '../../Data/skill.json'
import styles from './Skills.module.css'
function Skills() {
    return (
        <section className={styles.container} id="skills">
            <h2 className={styles.title}>Skills</h2>
            <div className={styles.skills}>
                {

                    skills.map((item, index) => {
                        return (
                            <div key={index} className={styles.skill} >
                                <div className={styles.skillImageContainer}>
                                    <img className={styles.skillImage} src={new URL(`../../assets/skills/${item.image}`, import.meta.url).href} alt={item.title} />
                                </div>
                                <p className={styles.skillTitle}>{item.title}</p>
                            </div>

                        )
                    })
                }
            </div>
        </section >
    )
}

export default Skills
