
import Card from '@/components/postCard/Card'
import React from 'react'
import styles from './page.module.css'
import { getPosts } from '@/lib/data'
const BlogPage = async() => {
  const posts = await getPosts()
  return (
    <div className={styles.container}>
      
      {posts.map((post)=>(
        <Card post = {post} key={post.id}/>
      ))}
    </div>
    
  )
}

export default BlogPage
