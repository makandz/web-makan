import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/shared/navbar";
import styles from "../styles/index.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio - makan.bz</title>
        <meta
          name="description"
          content="Beep boop, welcome to my portfolio. This is a place to learn 
          about me and my experience in the field of stackoverflow cop- erm I 
          meant software engineering."
        />
      </Head>
      <Navbar />

      <div className={styles.welcomeBlock}>
        <h1>Hey, I&apos;m Makan.</h1>
        {/* <h2>
          A Computer Science student at the <span>University of Toronto.</span>
        </h2> */}
      </div>
    </>
  );
};

export default Home;
