import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Blogs.module.css'

const Blogs = () => {

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/blogs').then((data) => {
      return data.json();
    }).then((data) => {
      // console.log(data);
      setBlogs(data)
    })
  }, [])


  return (
    <div className={styles.grid}>
      {blogs.map(({ title, author, content }) => {
        return (
            <Link href={`/blogpost/${title}`} key={title}>
              <a className={styles.card}>
                <h2>{title} &rarr;</h2>
                <p>{content.substr(0, 50)}</p>
              </a>
            </Link>
        );
      })}
      {/* <Link href='/blogpost/How to learn Next.js'>
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
      </a>*/}
    </div>
  )
}

export default Blogs