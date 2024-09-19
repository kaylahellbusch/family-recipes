import React from 'react'
import styles from './blogpost.module.scss'
import Image from 'next/image'

const BlogPost = ({ post }) => {
  return (
    <div>
      <Image
        src={post.image}
        alt='picture of loaded noodles'
        width={0}
        height={0}
        sizes='100%'
        style={{
          borderTopLeftRadius: '6px',
          borderTopRightRadius: '6px',
          width: '100%',
          height: 'auto'
        }}
      />
      <div className={styles.content}>
        <p className={styles.title}>{post.title}</p>
        <p className={styles.description}>{post.description}</p>
      </div>
    </div>
  )
}

export default BlogPost
