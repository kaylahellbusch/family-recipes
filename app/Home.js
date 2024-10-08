'use client'
import React, { useEffect } from 'react'
import styles from './home.module.scss'
import Button from './Components/Button'
import useColors from './hooks/useColors'
import Image from 'next/image'
import StarRating from './Components/StarRating'
import UserImage from './Components/UserImage'
import Calories from './Components/Calories'
import Recipe from './Components/Recipe'
import BlogPost from './Components/BlogPost'

const HomePage = () => {
  const { colors } = useColors()
  return (
    <div>
      <div className={styles.firstContainer}>
        <div id={styles.titleContainer}>
          <p className={styles.title}>Your Daily Dish</p>
          <p className={styles.title}>
            A <span id={styles.emph}>Food</span> Journey
          </p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <Button
            title='Sign up'
            style={{ marginTop: '12px', marginBottom: '8px' }}
          />
          <p className={styles.account}>
            Have an account? <a className={styles.accentWord}>Log in</a>
          </p>
        </div>
        <div style={{ position: 'absolute', top: 0, right: 0, zIndex: -10 }}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='600'
            height='700'
            fill='none'
            viewBox='0 20 27 30'
          >
            <defs>
              <linearGradient id='SvgjsLinearGradient1026'>
                <stop stopColor={colors.primaryLighten1} offset='0' />
                <stop stopColor={colors.primaryBase} offset='1' />
              </linearGradient>
            </defs>
            <path
              fill='url("#SvgjsLinearGradient1026")'
              d='M50.3 22.4c0 4.2-4.6 7.2-6.5 10.6-2 3.5-2.4 9-5.9 11-3.4 2-8.3-.4-12.5-.4-4.2 0-9.1 2.3-12.5.4C9.4 42 9 36.5 7 33 5 29.6.5 26.6.5 22.4c0-4.2 4.6-7.2 6.5-10.6 2-3.5 2.4-8.9 5.9-11 3.4-2 8.3.4 12.5.4 4.2 0 9.1-2.3 12.5-.4 3.5 2 3.9 7.5 5.9 11 2 3.4 6.5 6.4 6.5 10.6Z'
            ></path>
          </svg>
        </div>
      </div>
      <div className={styles.secondContainer}>
        <Image
          src={`/share-recipes.png`}
          alt='picture being taken of food'
          width='250'
          height='250'
        />
        <div className={styles.shareTextContainer}>
          <p className={`${styles.shareTitle} ${styles.subHeading}`}>
            Share Your <span className={styles.accentWord}>Recipes</span>
          </p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <Button
            title='Create New Recipe'
            style={{ alignSelf: 'center', marginTop: '30px' }}
          />
        </div>
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.dataHeader}>
          <p className={styles.subHeading}>Trending Recipes</p>
          <a className={styles.viewMore}>View more</a>
        </div>
        <div className={styles.recipesContainer}>
          {recipes.map(recipe => (
            <Recipe recipe={recipe} />
          ))}
        </div>
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.dataHeader}>
          <p className={styles.subHeading}>Blog</p>
          <a className={styles.viewMore}>View more</a>
        </div>
        <div className={styles.blogPostContainer}>
          {blogPosts.map(post => (
            <BlogPost post={post} />
          ))}
        </div>
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.dataHeader}>
          <p className={styles.subHeading}>Explore Recipes</p>
          <a className={styles.viewMore}>View more</a>
        </div>
        <div className={styles.recipesContainer}>
          {recipes.map(recipe => (
            <Recipe recipe={recipe} />
          ))}
        </div>
      </div>
      <div className={styles.inTouchContainer}>
        <div>
          <p className={styles.inTouchTitle}>Let's Stay In Touch!</p>
          <p className={styles.inTouchDescription}>
            Join our newsletter so we can reach out to you with our news and
            offers.
          </p>
          <div className={styles.subscribeContainer}>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='Enter Your Email'
              className={styles.email}
            />
            <Button title='Subscribe' />
          </div>
        </div>
      </div>
      <div className={styles.dataContainer} style={{ marginBottom: '120px' }}>
        <div className={styles.dataHeader}>
          <p className={styles.subHeading}>Popular Categories</p>
          <a className={styles.viewMore}>View more</a>
        </div>
        <div className={styles.categoriesContainer}>
          {categories.map(cat => (
            <div className={styles.category}>
              <Image
                src={cat.image}
                alt='picture of loaded noodles'
                width={0}
                height={0}
                sizes='100%'
                style={{
                  borderRadius: '100px',
                  width: '70%',
                  height: 'auto'
                }}
              />
              <p>{cat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage

const categories = [
  {
    title: 'Breakfast',
    image: '/breakfast.png'
  },
  {
    title: 'Breakfast',
    image: '/breakfast.png'
  },
  {
    title: 'Breakfast',
    image: '/breakfast.png'
  },
  {
    title: 'Breakfast',
    image: '/breakfast.png'
  },
  {
    title: 'Breakfast',
    image: '/breakfast.png'
  },
  {
    title: 'Breakfast',
    image: '/breakfast.png'
  },
  {
    title: 'Breakfast',
    image: '/breakfast.png'
  },
  {
    title: 'Breakfast',
    image: '/breakfast.png'
  }
]

const recipes = [
  {
    calories: 123,
    image: '/loaded-noodles.png',
    rating: 4,
    title: 'Loaded Noodles',
    user: {
      userName: 'Baby Sister',
      userImage: '/baby-sister.jpg'
    }
  },
  {
    calories: 123,
    image: '/loaded-noodles.png',
    rating: 4,
    title: 'Loaded Noodles',
    user: {
      userName: 'Baby Sister',
      userImage: '/baby-sister.jpg'
    }
  },
  {
    calories: 123,
    image: '/loaded-noodles.png',
    rating: 4,
    title: 'Loaded Noodles',
    user: {
      userName: 'Baby Sister',
      userImage: '/baby-sister.jpg'
    }
  },
  {
    calories: 123,
    image: '/loaded-noodles.png',
    rating: 4,
    title: 'Loaded Noodles',
    user: {
      userName: 'Baby Sister',
      userImage: '/baby-sister.jpg'
    }
  },
  {
    calories: 123,
    image: '/loaded-noodles.png',
    rating: 4,
    title: 'Loaded Noodles',
    user: {
      userName: 'Baby Sister',
      userImage: '/baby-sister.jpg'
    }
  },
  {
    calories: 123,
    image: '/loaded-noodles.png',
    rating: 4,
    title: 'Loaded Noodles',
    user: {
      userName: 'Baby Sister',
      userImage: '/baby-sister.jpg'
    }
  }
]

const blogPosts = [
  {
    image: '/thanksgiving.jpg',
    title: 'Thanksgiving Time!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
  },
  {
    image: '/thanksgiving.jpg',
    title: 'Thanksgiving Time!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
  }
]
