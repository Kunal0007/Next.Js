import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import * as fs from 'fs'
import styles from '../styles/Blogs.module.css'

const Blogs = (props) => {

  const [blogs, setBlogs] = useState(props.myblogs);

  // fetch Method

  // useEffect(() => {
  //   fetch('http://localhost:3000/api/blogs').then((data) => {
  //     return data.json();
  //   }).then((data) => {
  //     // console.log(data);
  //     setBlogs(data)
  //   })
  // }, [])


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
      
    </div>
  )
}

// Server Side Rendering

// export async function getServerSideProps(context) {
//   let data = await fetch('http://localhost:3000/api/blogs')
//   let myblogs = await data.json();
//   return {
//     props: {myblogs}, // will be passed to the page component as props
//   }
// }

//Static Site Generation

export async function getStaticProps(context) {

  let data = await fs.promises.readdir('blogdata', 'utf-8')
  let file;
  let myblogs = [];
  for (let index = 0; index < data.length; index++) {
      const item = data[index];
      file = await fs.promises.readFile(('blogdata/' + item), 'utf-8');
      myblogs.push(JSON.parse(file));
  }
  return {
    props: {myblogs}, // will be passed to the page component as props
  }
}

export default Blogs