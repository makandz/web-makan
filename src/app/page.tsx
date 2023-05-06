import { TitleBanner } from '@/components/layout/title-banner';
import {
  ExperienceList,
  ExperienceListProps,
} from '@/components/lists/experience-list';
import {
  SideProjectList,
  SideProjectListProps,
} from '@/components/lists/side-project-list';
import { Manrope } from 'next/font/google';

export const metadata = {};

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
        'A game made in 2015 with over 120 thousand registered users and 40 million page views. Built around the community with a market, trading, and clans so users can interact and expand their network with players around the world.',
      link: 'https://abs0rb.me',
      backgroundColor: 'bg-blue-700',
    },
    {
      name: 'MySpotify',
      description:
        'A website that allows people to view their Spotify statistics so they can get an insight into their account. The website is actively maintained for ~3000 registered accounts with an open source version available on GitHub to view.',
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
    </main>
  );
}
