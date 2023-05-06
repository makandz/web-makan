import Image from 'next/image';

export type ExperienceListProps = {
  experiences: {
    logo: string;
    role: string;
    dates: {
      start: string;
      end?: string;
    };
    company: {
      name: string;
      link: string;
    };
  }[];
};

export function ExperienceList(props: ExperienceListProps) {
  return (
    <div>
      {props.experiences.map((experience, experienceIndex) => (
        <div key={experienceIndex} className="mb-4 flex space-x-3">
          <div className="flex items-center">
            <Image
              src={`/assets/img/experience/${experience.logo}`}
              alt={`${experience.company.name} logo`}
              width={75}
              height={35}
            />
          </div>
          <div>
            <h5 className="text-lg sm:text-xl">
              <span className="font-bold">{experience.role}</span> @{' '}
              <a href={experience.company.link} target="_blank">
                {experience.company.name}
              </a>
            </h5>
            <p>
              {experience.dates.start} -{' '}
              {experience.dates.end ?? 'Present!'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
