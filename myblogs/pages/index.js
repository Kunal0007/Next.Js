import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MY BLOG</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Script src='' ></Script> */}

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to MY BLOG
        </h1>

        <p className={styles.description}>
          Blogs With My Experience!!
        </p>

        <h3>Popular Blogs</h3>

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


        {/* <div className={styles.grid}>
          <Link href='/blogpost/How-to-Integrate-Java-with-SQL'>
            <a className={styles.card}>
              <h2>Blog 1 &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Blog 2 &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Blog 3 &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Blog 4 &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}

      </main>

    </div>
  )
}
