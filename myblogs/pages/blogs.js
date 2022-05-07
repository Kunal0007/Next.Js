import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Blogs.module.css'

const Blogs = () => {
  return (
    <div className={styles.grid}>
      <Link href='/blogpost/How to learn Next.js'>
        <a className={styles.card}>
          <h2>Blog 1 &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>
      </Link>

      <Link href='/blogpost/How to Integrate Java with SQL'>
        <a className={styles.card}>
          <h2>Blog 2 &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>
      </Link>

      <Link href='/blogpost/How to learn Cloud Computing'>
        <a className={styles.card} >
          <h2>Blog 3 &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>
      </Link>
      
      <a
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className={styles.card}
      >
        <h2>Blog 4 &rarr;</h2>
        <p>
          Instantly deploy your Next.js site to a public URL with Vercel.
        </p>
      </a>
    </div>
  )
}

export default Blogs