import Head from 'next/head'
import Image from 'next/image'
import banner from '../assets/images/banner.jpg'
import styles from '../styles/Home.module.css'
import TopNav from './components/topNav'
import SideNav from './components/sideNav'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Caleb Jones</title>
        <meta name="description" content="A multifaceted full stack Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNav />
      <SideNav />

      <div className={styles.pages}>
        <section><h1>Section 1</h1></section>
        <section><h1>Section 2</h1></section>
        <section><h1>Section 3</h1></section>
        <section><h1>Section 4</h1></section>
      </div>

      <div className={styles.footer}>
        <h2>Hi, I'm the footer!</h2>
      </div>
    </div>
  )
}
