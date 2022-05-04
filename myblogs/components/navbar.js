import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <ul className={styles.navbar}>
          <li className={styles.navItem}><Link href='/'>Home</Link></li>
          <li className={styles.navItem}><Link href='/blogs'>Blogs</Link></li>
          <li className={styles.navItem}><Link href='/about'>About</Link></li>
        </ul>
      </nav>
  )
}

export default Navbar