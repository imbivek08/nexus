import React from 'react'
import styles from './singlePostPage.module.css'
import Image from 'next/image'
import PostUser from '@/components/postUser/PostUser'
import { getPost } from '@/lib/data'

const SinglePageBlog = async({params}) => {
  const {slug} = params
  const post = await getPost(slug)
  return (
    <div className={styles.container}>
      <div className={styles.image}>Image section</div>
      <div className={styles.blog}> 
        <div>
          <h1>{post.title}</h1>
        </div>
        <div className={styles.details}>
          <div >
            <Image className={styles.profile}  src="/profile2.jpeg" width={50} height={50} alt='pic'/>
          </div>
         <PostUser userId={post.userId}/>
        </div>
        <div>
          {post.desc}
        </div>
      </div>
    </div>
  )
}

export default SinglePageBlog
