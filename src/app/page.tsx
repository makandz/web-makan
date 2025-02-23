import ProfileEntry from "@/app/ui/profile-entry/ProfileEntry";
import { type Metadata } from "next";

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
            src: "assets/img/kijiji.webp",
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
            src: "assets/img/kijiji.webp",
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
            src: "assets/img/cibc.webp",
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
            src: "assets/img/utoronto.webp",
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
        <div className="bg-blue-700 shadow rounded-sm p-5">
          <h5 className="text-2xl font-bold">Abs0rb.me</h5>
          <p className="my-3">
            A game started off in 2015 with over 120,000 registered users and 40
            million page views. Built around the community with a market,
            trading, and clans so users can interact and expand their network
            with players around the world.
          </p>
          <p className="text-right">
            <a href="https://abs0rb.me" className="mr-2">
              Visit
            </a>
            {/* TODO: bring this back later */}
            {/* <a href="/projects/abs0rb">Learn more</a> */}
            {/* <span className="bg-purple-500 px-1 ml-1 text-xs">New</span> */}
          </p>
        </div>
        <div className="bg-cyan-700 shadow rounded-sm p-5">
          <h5 className="text-2xl font-bold">NewTunes</h5>
          <p className="my-3">
            A website that allows people to view their Spotify statistics so
            they can get an insight into their account. The website is actively
            maintained for 25,000 registered accounts with an open source
            version available on GitHub to view.
          </p>
          <p className="text-right">
            <a
              href="https://newtunes.xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit
            </a>
          </p>
        </div>
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
