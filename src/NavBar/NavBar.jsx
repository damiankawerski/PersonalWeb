import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

import github from '../assets/github.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';

const navItems = [
  { path: '/', label: 'HOME' },
  { path: '/about', label: 'ABOUT' },
  { path: '/education', label: 'EDUCATION' },
  { path: '/technologies', label: 'TECH STACK' },
  { path: '/projects', label: 'PROJECTS' },
  { path: '/contact', label: 'CONTACT' },
];

const socialLinks = [
  {
    href: 'https://github.com/damiankawerski',
    src: github,
    alt: 'GitHub logo',
  },
  {
    href: 'https://www.instagram.com/damiankawerski/',
    src: instagram,
    alt: 'Instagram logo',
  },
  {
    href: 'https://www.linkedin.com/in/damian-kawerski-97a372364/',
    src: linkedin,
    alt: 'LinkedIn logo',
  },
];

export default function NavBar() {
  return (
    <div className={styles.navContainer}>
      <h1 className={styles.header}>Hello.</h1>

      <nav className={styles.mainNav}>
        <ul className={styles.navList}>
          {navItems.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.socials}>
        {socialLinks.map(({ href, src, alt }) => (
          <a key={href} href={href} target="_blank" rel="noreferrer">
            <img src={src} alt={alt} />
          </a>
        ))}
      </div>

      <p className={styles.copyright}>
        Copyright © Damian Kawerski.
      </p>
    </div>
  );
}
