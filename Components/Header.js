import React from 'react'
import styles from './header.module.scss'
import Button from './Button'
import WebsiteLogo from './WebsiteLogo'

const Header = () => {
  return (
    <div id={styles.header}>
      <WebsiteLogo />
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
