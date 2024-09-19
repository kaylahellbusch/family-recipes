import Image from 'next/image'
import React from 'react'
import styles from './recipe.module.scss'
import StarRating from './StarRating'
import UserImage from './UserImage'
import Calories from './Calories'

const Recipe = ({ recipe }) => {
  return (
    <div className={styles.container}>
      <Image
        src={recipe.image}
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
        <StarRating rating={recipe.rating} />
        <p className={styles.title}>{recipe.title}</p>
        <div className={styles.footer}>
          <div className={styles.user}>
            <UserImage user={recipe.user} />
            <p className={styles.userName}>{recipe.user.userName}</p>
          </div>
          <Calories cals={recipe.calories} />
        </div>
      </div>
    </div>
  )
}

export default Recipe
