import TitleBanner from '@/components/TitleBanner';
import ExperienceList, {
  ExperienceListProps,
} from '@/components/ExperienceList';
import SideProjectList, {
  SideProjectListProps,
} from '@/components/SideProjectList';
import { Manrope } from 'next/font/google';

export const metadata = {
  title:
    'Makan Dehizadeh - Crafting digital solutions with code and passion',
  description:
    "This is my personal portfolio, a place where you can see some of the work I've done throughout the years as a software developer.",
};

const manrope = Manrope({
  weight: '700',
  subsets: ['latin'],
});

export default function Home() {
  const experiences: ExperienceListProps['experiences'] = [
    {
      logo: 'kijiji.png',
      role: 'Frontend Developer',
      dates: {
        start: 'May 2022',
      },
      company: {
        name: 'Kijiji',
        link: 'https://kijiji.ca',
      },
    },
    {
      logo: 'cibc.png',
      role: 'Full Stack Developer',
      dates: {
        start: 'May 2021',
        end: 'August 2021',
      },
      company: {
        name: 'CIBC',
        link: 'https://www.cibc.com',
      },
    },
  ];

  const sideProjects: SideProjectListProps['projects'] = [
    {
      name: 'Abs0rb.me',
      description:
        'A game started off in 2015 with over 120,000 registered users and 40 million page views. Built around the community with a market, trading, and clans so users can interact and expand their network with players around the world.',
      link: 'https://abs0rb.me',
      backgroundColor: 'bg-blue-700',
    },
    {
      name: 'MySpotify',
      description:
        'A website that allows people to view their Spotify statistics so they can get an insight into their account. The website is actively maintained for 25,000 registered accounts with an open source version available on GitHub to view.',
      link: 'https://myspotify.pw',
      backgroundColor: 'bg-cyan-700',
    },
  ];

  return (
    <main>
      <TitleBanner
        title={"Hey, I'm Makan."}
        description={
          <>
            A Computer Science student at the{' '}
            <span className="text-blue-500">
              University of Toronto
            </span>
            .
          </>
        }
      />

      <h4 className={`text-3xl font-bold mb-3 ${manrope.className}`}>
        Experience
      </h4>
      <ExperienceList experiences={experiences} />

      <h4
        className={`text-3xl font-bold mb-3 mt-10 ${manrope.className}`}
      >
        Side Projects
      </h4>
      <SideProjectList projects={sideProjects} />
      <p className="mt-3">
        There are also dozens of more smaller projects up on my{' '}
        <a href="https://github.com/makandz" target="_blank">
          GitHub!
        </a>
      </p>
    </main>
  );
}
