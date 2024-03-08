import Link from 'next/link'
import React from 'react'
import styles from './links.module.css'
import NavLink from './navLink/NavLink'
const Links = () => {
    const links = [
        {
            title:"Home",
            path:"/"
        },
        {
            title:"About",
            path:"/about"
        },
        {
            title:"Contact",
            path:"/contact"
        },
        {
            title:"Blog",
            path:"/blog"
        },
    ]
  //Temporary data
  const isAdmin = false;
  const session = false;
  return (
    <div className={styles.container}>
      {links.map((link=>(
        <NavLink item = {link} key={link.title}/>
      )))}{
        session?(
          <>
          {isAdmin && <NavLink item={{title:"Admin",path:"/admin"}}/>}
          <button className={styles.button}>Logout</button>
          </>
        ):(
          <NavLink item={{title:"Login",path:"/login"}}/>
        )
      }
    </div>
  )
}

export default Links
