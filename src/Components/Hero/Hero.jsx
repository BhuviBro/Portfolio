import React from 'react'
import images from '../../helpers/images'
import style from '../Hero/Hero.module.css'
import Content from '../../Data/Content.json'

function Hero() {
  const data = Content[0];
  return (
    <>
    <section className={style.container}>
    <div className={style.content}>
    <h1 className={style.title}>{data.heroTitle}</h1>
    <p className={style.description}>{data.heroDescription}</p>
    <a className={style.contactMe} href="mailto:bhuvibhuvan1624@gmail.com">Contact Me</a>
    </div>
    <img className={style.heroImg} src={images.hero} alt="Profile Pic" />
    <div className={style.topBlur} />
    <div className={style.bottomBlur} />
    
    </section>
    </>
  )
}

export default Hero
