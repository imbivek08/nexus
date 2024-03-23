import React from 'react'
import styles from './PostUser.module.css'
import { getUser } from '@/lib/data'
const PostUser = async({userId}) => {
   
  const user = await getUser(userId)

  return (
    <div className={styles.container}>
       <div>
            <h5>Author</h5>
            <p>{user.username}</p>
        </div>
        <div>
            <h5>Published</h5>
            <p>17-03-2024</p>
          </div>
    </div>
  )
}

export default PostUser
