import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Caleb Jones</title>
        <meta name="description" content="A multifaceted full stack Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <section><h1>Section 1</h1></section>
          <section><h1>Section 2</h1></section>
          <section><h1>Section 3</h1></section>
          <section><h1>Section 4</h1></section>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
