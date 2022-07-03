import type { NextPage } from "next";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import { Navbar } from "../components/shared/navbar";
import styles from "../styles/index.module.css";
import kijijiLogo from "../public/assets/experience/kijiji.png";
import cibcLogo from "../public/assets/experience/cibc.png";

type experienceType = {
  role: string;
  location: string;
  description: string;
  href: string;
  img: {
    src: StaticImageData;
    alt: string;
    width?: number;
    height?: number;
  };
};

type primarySpType = {
  name: string;
  description: string;
  href: string;
  styles: {
    backgroundColor: string;
    color: string;
  };
};

const Home: NextPage = () => {
  const experiences: Array<experienceType> = [
    {
      role: "Frontend Developer",
      location: "Kijiji",
      description: "May 2022 - Present!",
      href: "kijiji.ca",
      img: {
        src: kijijiLogo,
        alt: "Kijiji Logo",
      },
    },
    {
      role: "Full Stack Developer",
      location: "CIBC",
      description: "May 2021 - August 2021",
      href: "cibc.com",
      img: {
        src: cibcLogo,
        alt: "CIBC Logo",
      },
    },
  ];

  const primarySps: Array<primarySpType> = [
    {
      name: "Abs0rb.me",
      description:
        "A game made in 2015 with over 120 thousand registered users and 40 million page views. Built around the community with a market, trading, and clans so users can interact and expand their network with players around the world.",
      href: "abs0rb.me",
      styles: {
        backgroundColor: "#0d47a1",
        color: "white",
      },
    },
    {
      name: "MySpotify.pw",
      description:
        "A website that allows people to view their Spotify statistics so they can get an insight into their account. The website is actively maintained for ~3000 registered accounts with an open source version available on GitHub to view.",
      href: "myspotify.pw",
      styles: {
        backgroundColor: "#00695c",
        color: "white",
      },
    },
  ];

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
        <h2>
          A Computer Science student at the <span>University of Toronto</span>.
        </h2>
      </div>

      <div className={`${styles.block} ${styles.experienceBlock}`}>
        <h1>Experience</h1>
        {experiences.map((experience, i) => (
          <div className={styles.section} key={i}>
            <div className={styles.img}>
              <a href={`https://${experience.href}`}>
                <Image
                  src={experience.img.src}
                  alt={experience.img.alt}
                  className={styles.imgTag}
                />
              </a>
            </div>
            <div className={styles.description}>
              <h2>
                <strong>{experience.role}</strong> @{" "}
                <a href={`https://${experience.href}`}>{experience.location}</a>
              </h2>
              <h3>{experience.description}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className={`${styles.block} ${styles.primarySpBlock}`}>
        <h1>Side Projects</h1>
        <div className={styles.subBlock}>
          {primarySps.map((primarySp, i) => (
            <div style={primarySp.styles} key={i}>
              <h2>{primarySp.name}</h2>
              <p>{primarySp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
