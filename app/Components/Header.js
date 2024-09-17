import React from 'react'
import styles from './header.module.scss'
import Image from 'next/image'
import Button from './Button'

const Header = () => {
  return (
    <div id={styles.header}>
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
      <ul id={styles.menu}>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Recipes</a>
        </li>
        <li>
          <a>Add Recipe</a>
        </li>
        <li>
          <a>Blog</a>
        </li>
        <li>
          <a>About Us</a>
        </li>
      </ul>
      <div id={styles.buttons}>
        <Button title='Log in' secondary />
        <Button title='Sign up' />
      </div>
    </div>
  )
}

export default Header
