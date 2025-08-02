import React from "react";
import images from "../../helpers/images";
import styles from "./About.module.css";
import Content from "../../Data/Content.json"

function About() {
  const data = Content[0];
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={images.aboutImage}
          className={styles.aboutImage}
          alt="Image Error"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={images.cursorIcon} className={styles.image} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>{data.Title1}</h3>
              <p>{data.Description1}</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={images.serverIcon}  className={styles.image} alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3>{data.Title2}</h3>
              <p>{data.Description2}</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={images.uiIcon}  className={styles.image} alt="UI Icon" />
            <div className={styles.aboutItemText}>
              <h3>{data.Title3}</h3>
              <p>{data.Description3}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
