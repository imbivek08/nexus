// export default function Home() {
//   return (
//     <div>
      
//     </div>
//   );
// }
import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
const Home = () => {
  return (
    <div>
      <div className={styles.container}>
      <div className={styles.subcontainer}>
        <div className={styles.description}>
          <p>Greeting from</p>
          <h1>Nexus</h1>
        </div>
        <div className={styles.intro}>
          <h3>An inclusive <span>hub</span> fostering sharing, learning, and Exploring.</h3>
          <p>Community where developers and bloggers come together to share ideas, collaborate on projects, and showcase their expertise.</p>
        </div>
      </div>
      <div>
        <Image src="/coding.gif" width={700} height={600}/>
      </div>
    </div>
    </div>
  )
}

export default Home
