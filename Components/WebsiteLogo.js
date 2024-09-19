import React from 'react'
import Image from 'next/image'
import styles from './websitelogo.module.scss'

const WebsiteLogo = () => {
  return (
    <a href='/' id={styles.pageIdentifier}>
      <Image
        src={`/icon.png`}
        alt='spoon and fork icon'
        width='20'
        height='20'
        style={{ marginRight: '6px' }}
      />
      <div id={styles.first} className={styles.title}>
        Family
      </div>
      <div id={styles.second} className={styles.title}>
        Recipes
      </div>
    </a>
  )
}

export default WebsiteLogo
