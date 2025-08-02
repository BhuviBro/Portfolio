import React from 'react'
import styles from './Contact.module.css'
import images from '../../helpers/images'
function Contact() {
  return (
    <footer id='contact' className={styles.container}>
      {/* <div className={styles.text}><h2>Contact</h2><p></p></div> */}
      <ul className={styles.links}>
        <li className={styles.link}><img src={images.emailIcon} alt="" />
          <a href="mailto:bhuvibhuvan1624@gmail.com">
            bhuvibhuvan1624@gmail.com
          </a>
        </li>
        <li className={styles.link}><img src={images.linkedinIcon} alt="linkedIn" />
          <a href="linkedin.com/in/bhuvan-m-808214300">
            LinkedIn.com/Bhuvan M
          </a>
        </li>
        <li className={styles.link}><img src={images.githubIcon} alt="GitHub" />
          <a href="https://github.com/BhuviBro">
            GitHub.com/Bhuvan M
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Contact
