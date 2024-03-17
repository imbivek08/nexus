import React from 'react'
import Links from './links/Links'
import styles from './navbar.module.css'
import Link from 'next/link'
const NavBar = () => {
  const isAdmin = true;
  const session = true;
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">Nexus</Link>
      </div>
      <div className={styles.subcontainer}>
        <div><Links/></div>
      </div>
    </div>
  )
}

export default NavBar
