import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jamie Hoa Pham Lawrence-Hurt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/portfolio">
        <div>portfolio</div>
      </Link>
    </div>
  )
}
