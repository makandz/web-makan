import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  visitUrl: string;
  backgroundColor: string;
  learnMoreUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  visitUrl,
  backgroundColor,
  learnMoreUrl,
}: ProjectCardProps) {
  return (
    <div
      className={`${backgroundColor} rounded-sm p-5 shadow-[3px_3px_4px_1px_rgba(0,0,0,0.34)]`}
    >
      <h5 className="text-2xl font-bold">{title}</h5>
      <p className="my-3">{description}</p>
      <p className="text-right">
        <a
          href={visitUrl}
          className="mr-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit
        </a>
        {learnMoreUrl && (
          <Link href={learnMoreUrl} className="mr-2">
            Learn more
          </Link>
        )}
      </p>
    </div>
  );
}
