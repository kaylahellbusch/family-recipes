'use client'
import React from 'react'
import WebsiteLogo from './WebsiteLogo'
import styles from './footer.module.scss'
import Button from './Button'
import useColors from '../hooks/useColors'
import {
  FaInstagram,
  FaFacebookSquare,
  FaYoutube,
  FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
  const { colors } = useColors()
  const currentYear = new Date().getFullYear()
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div>
          <WebsiteLogo />
          <p className={styles.pageDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
        <div className={styles.linkContainer}>
          <div className={styles.linkCol}>
            <p>Quick Links</p>
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
            </ul>
          </div>
          <div className={styles.linkCol}>
            <p>Quick Links</p>
            <ul>
              <li>
                <a>Share Recipe</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <div className={styles.linkCol}>
            <p>Legal</p>
            <ul>
              <li>
                <a>Terms of Use</a>
              </li>
              <li>
                <a>Privacy & Cookies</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.newsletterContainer}>
          <p className={styles.newsTitle}>Newsletter</p>
          <p className={styles.newsDescription}>
            Subscribe to our newsletter to get more free tips
          </p>
          <input
            type='text'
            id='footer-email'
            name='footer-email'
            placeholder='Enter Your Email'
            className={styles.email}
          />
          <Button title='Subscribe' style={{ width: '100%' }} />
        </div>
      </div>
      <div
        style={{
          borderTop: `1px solid ${colors.greyLighten1}`,
          paddingTop: '20px'
        }}
        className={styles.footer2}
      >
        <p>
          <a
            target='_blank'
            href='https://icons8.com/icon/20rgyUMn9R07/spoon-and-fork'
          >
            Spoon And Fork
          </a>{' '}
          icon by{' '}
          <a target='_blank' href='https://icons8.com'>
            Icons8
          </a>
          <br />© {currentYear} FamilyRecipes. All Rights Reserved
        </p>
        <div className={styles.mediaIcons}>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaYoutube size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
    </div>
  )
}

export default Footer
