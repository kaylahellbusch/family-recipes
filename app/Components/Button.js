import React from 'react'
import styles from './button.module.scss'

const Button = ({ href, title, secondary = false, style }) => {
  return (
    <a
      href={href}
      className={`${styles.button} ${
        secondary ? styles.secondary : styles.primary
      }`}
      style={style}
    >
      {title}
    </a>
  )
}

export default Button
