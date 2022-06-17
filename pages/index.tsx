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
  img: {
    src: StaticImageData;
    alt: string;
    width?: number;
    height?: number;
  };
};

const Home: NextPage = () => {
  const experiences: Array<experienceType> = [
    {
      role: "Frontend Developer",
      location: "Kijiji",
      description: "May 2022 - Present!",
      img: {
        src: kijijiLogo,
        alt: "CIBC Logo",
      },
    },
    {
      role: "Full Stack Developer",
      location: "CIBC",
      description: "May 2021 - August 2021",
      img: {
        src: cibcLogo,
        alt: "CIBC Logo",
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

      <div className={styles.experienceBlock}>
        <h1>Experience</h1>
        {experiences.map((experience, i) => (
          <div className={styles.section} key={i}>
            <div className={styles.img}>
              <Image
                src={experience.img.src}
                alt={experience.img.alt}
                className={styles.imgTag}
              />
            </div>
            <div className={styles.description}>
              <h2>
                <strong>{experience.role}</strong> @ {experience.location}
              </h2>
              <h3>{experience.description}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
