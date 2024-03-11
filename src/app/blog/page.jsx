import Card from '@/components/postCard/Card'
import React from 'react'
import styles from './page.module.css'
const BlogPage = () => {
  return (
    <div className={styles.container}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default BlogPage
