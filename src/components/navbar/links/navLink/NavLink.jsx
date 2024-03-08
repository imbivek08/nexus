"use client"
import React from 'react'
import Link from 'next/link'
import styles from './navlink.module.css'
import { usePathname } from 'next/navigation'
const NavLink = ({item}) => {
    const pathName = usePathname();
    
  return (
    <Link className={pathName===item.path ? styles.active:styles.container} 
    href={item.path}>{item.title}</Link>
  )
}

export default NavLink
