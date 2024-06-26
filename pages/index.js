import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '../components/footer';
import NavBar from '../components/navBar';
import Link from 'next/link'

export default function Home() {

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.title}>
          <img className={styles.titleLogo} src='https://storage.googleapis.com/recourse-assets/logos/recourse-logo-slogan-white.png' alt='logo-with-slogan' />
        </div>

        <div className={styles.grid}>
          <Link href="/about">
            <div className={styles.card}>
              <h3>About Us &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </div>
          </Link>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
