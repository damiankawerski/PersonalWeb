import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

import github from '../assets/github.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';

export default function NavBar() {
  return (
    <div className={styles.navContainer}>
      <h1 className={styles.header}>Hello.</h1>
      <nav className={styles.mainNav}>
        <ul className={styles.navList}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/education"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              EDUCATION
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technologies"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              TECH STACK
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={styles.socials}>
        <a href="https://github.com/damiankawerski" target="_blank" rel="noreferrer">
          <img src={github} alt="GitHub logo" />
        </a>
        <a href="https://www.instagram.com/damiankawerski/" target="_blank" rel="noreferrer">
          <img src={instagram} alt="Instagram logo" />
        </a>
        <a href="https://www.linkedin.com/in/damian-kawerski-97a372364/" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="LinkedIn logo" />
        </a>
      </div>

      <p className={styles.copyright}>Copyright © Damian Kawerski.</p>
    </div>
  );
}
