import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";
const Card = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <span>12.03.2024</span>
        <Image src="/blog.jpeg" height={500} width={400} alt="blog" />
      </div>
      <div className={styles.buttom}>
        <h3>{post.title}</h3>
        <p>
        {post.desc.substring(0, post.desc.indexOf('.') + 1)}
        </p>
        <Link href={`/blog/${post.slug}`}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;
