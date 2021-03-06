import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Icon_Upwork from "../components/Icons/Upwork";
import Icon_Wecre8websites from "../components/Icons/Wecre8websites";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Skills Review</title>
        <meta name="description" content="Skills Review for wecre8websites applicants" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a
            href="https://www.wc8.io"
            target="_blank"
            rel="noopener noreferrer">
            wecre8websites!
          </a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <div>
            <span>Content goes here</span>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://www.wc8.io" target="_blank" rel="noopener noreferrer">
          <span className={styles.logo}>
            <Icon_Wecre8websites />
          </span>
        </a>
        <a href="https://www.upwork.com" target="_blank" rel="noopener noreferrer">
          <span className={styles.logo}>
            <Icon_Upwork />
          </span>
        </a>
      </footer>
    </div>
  );
}
