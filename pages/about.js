import Head from 'next/head';
import Link from 'next/link'
import styles from '../styles/About.module.css';
import Footer from '../components/footer';
import NavBar from '../components/navBar';

export default function About() {

  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>

      </div >
    </>
  );
}
