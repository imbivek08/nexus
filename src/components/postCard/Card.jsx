import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";
const Card = (post) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <span>12.03.2024</span>
        <Image src="/blog.jpeg" height={500} width={400} />
      </div>
      <div className={styles.buttom}>
        <h3>{post.title}</h3>
        <p>
          {post.desc}
        </p>
        <Link href="blog/slug">Read More</Link>
      </div>
    </div>
  );
};

export default Card;
