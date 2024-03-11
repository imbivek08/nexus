import React from 'react'
import styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <span>12.03.2024</span>
        <Image src="/blog.jpeg" height={500} width={400}/>
      </div>
      <div className={styles.buttom}>
        <h3>Title</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quaerat animi explicabo ratione, quam eaque, praesentium incidunt magni recusandae iure similique temporibus eum odio accusantium voluptatum at maxime debitis commodi?</p>
        <Link href="blog/id">Read More</Link>
      </div>
    </div>
  )
}

export default Card
