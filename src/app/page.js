// export default function Home() {
//   return (
//     <div>
      
//     </div>
//   );
// }
import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import {connectToDB} from '../lib/utils'
import Link from 'next/link'
const Home = () => {
  connectToDB()
  return (
    <div>
      <div className={styles.container}>
      <div className={styles.subcontainer}>
        <div className={styles.description}>
          <p>Greeting from</p>
          <h1>Nexus</h1>
        </div>
        <div className={styles.intro}>
          <h3>An inclusive <span>Hub</span></h3>
          <h1>fostering sharing, Learning & Exploring</h1>
        </div>
        <div className={styles.message}>
          <textarea type='text' placeholder="Type some message for us"/>
          {/* <input  type='text' placeholder="What's on your thaught"/> */}
          <button>Send</button>
        </div>
      </div>
      <div>
        <Image src="/HomePage.png" width={900} height={600}/>
      </div>
    </div>
    </div>
  )
}

export default Home
