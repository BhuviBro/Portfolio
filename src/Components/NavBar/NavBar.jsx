import React, { useState } from 'react'
import style from './NavBar.module.css'
import images from '../../helpers/images'


function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <nav className={style.navBar}>
        <a className={style.title} href="/">Portfolio</a>
        <div className={style.menu}>
          <img
            src={menuOpen ? (images.close) : (images.menu)}
            alt="Menu-Button"
            onClick={() => setMenuOpen(!menuOpen)}
            className={style.menuBtn} />
          <ul className={`${style.menuItems} ${menuOpen && style.menuOpen}`}
            onClick={() => setMenuOpen(false)}
          >
            <li><a href="#about" >About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar
