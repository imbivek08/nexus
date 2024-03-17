import React from 'react'
import styles from './singlePostPage.module.css'
import Image from 'next/image'
const SinglePageBlog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>Image section </div>
      <div className={styles.blog}> 
        <div>
          <h1>Title</h1>
        </div>
        <div className={styles.details}>
          <div >
            <Image className={styles.profile}  src="/profile2.jpeg" width={50} height={50}/>
          </div>
          <div>
            <h5>Author</h5>
            <p>Author Name</p>
          </div>
          <div>
            <h5>Published</h5>
            <p>17-03-2024</p>
          </div>
        </div>
        <div>
          Desc
        </div>
      </div>
    </div>
  )
}

export default SinglePageBlog
