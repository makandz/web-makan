import ProfileEntry from "@/app/ui/profile-entry/ProfileEntry";
import ProjectCard from "@/app/ui/project-card/ProjectCard";
import { type Metadata } from "next";
import cibcLogo from "./images/cibc.webp";
import kijijiLogo from "./images/kijiji.webp";
import utorontoLogo from "./images/utoronto.webp";

export const metadata: Metadata = {
  title: "My Portfolio | Makan",
  description:
    "This is my personal portfolio, a place where you can see some of the work I've done throughout the years as a software developer.",
};

export default function Home() {
  return (
    <main>
      <div className="my-20">
        <h1 className="text-4xl sm:text-6xl font-extralight manrope">
          Hey, I&apos;m Makan.
        </h1>
        <div className="mt-3 text-xl sm:text-2xl">
          A developer at{" "}
          <span className="text-purple-800 dark:text-purple-400">Kijiji</span>{" "}
          that specializes in web technologies.
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-3 manrope">Experience</h2>
      <div>
        <ProfileEntry
          logo={{
            src: kijijiLogo,
            height: 35,
            width: 75,
            alt: "Kijiji logo",
          }}
          title="Frontend Developer"
          organization={{
            name: "Kijiji",
            url: "https://kijiji.ca",
          }}
          date="May 2024 - Present!"
        />

        <ProfileEntry
          logo={{
            src: kijijiLogo,
            height: 35,
            width: 75,
            alt: "Kijiji logo",
          }}
          title="Frontend Developer Intern"
          organization={{
            name: "Kijiji",
            url: "https://kijiji.ca",
          }}
          date="May 2022 - September 2023"
        />

        <ProfileEntry
          logo={{
            src: cibcLogo,
            height: 35,
            width: 75,
            alt: "CIBC logo",
          }}
          title="Full Stack Developer Intern"
          organization={{
            name: "CIBC",
            url: "https://cibc.ca",
          }}
          date="May 2021 - August 2021"
        />
      </div>

      <h2 className="text-3xl font-bold mb-3 mt-10 manrope">Education</h2>
      <div>
        <ProfileEntry
          logo={{
            src: utorontoLogo,
            height: 35,
            width: 50,
            alt: "University of Toronto logo",
          }}
          title="Computer Science Specialist"
          organization={{
            name: "University of Toronto",
            url: "https://kijiji.ca",
          }}
          subtitle="with a focus in Computer Systems"
          date="Sep 2019 - Jun 2024"
        />
      </div>

      <h2 className="text-3xl font-bold mb-3 mt-10 manrope">Side Projects</h2>
      <div className="text-white grid grid-cols-1 space-y-4 md:grid-cols-2 md:space-x-4 md:space-y-0">
        <ProjectCard
          title="Abs0rb.me"
          description="A game started off in 2015 with over 120,000 registered users and 40 million page views. Built around the community with a market, trading, and clans so users can interact and expand their network with players around the world."
          visitUrl="https://abs0rb.me"
          backgroundColor="bg-blue-700"
          // learnMoreUrl="/projects/abs0rb" // Uncomment when ready
        />
        <ProjectCard
          title="NewTunes"
          description="A website that allows people to view their Spotify statistics so they can get an insight into their account. The website is actively maintained for 25,000 registered accounts with an open source version available on GitHub to view."
          visitUrl="https://newtunes.xyz"
          backgroundColor="bg-cyan-700"
        />
      </div>
      <p className="mt-3">
        There are also dozens of smaller projects up on my{" "}
        <a
          href="https://github.com/makandz"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub!
        </a>
      </p>
    </main>
  );
}
