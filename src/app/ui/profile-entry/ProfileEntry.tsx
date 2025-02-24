import Image, { type ImageProps } from "next/image";

type ProfileEntryProps = {
  logo: {
    src: ImageProps["src"];
    height: number;
    width: number;
    alt: string;
  };
  title: string;
  organization: {
    name: string;
    url: string;
  };
  subtitle?: string;
  date: string;
};

export default function ProfileEntry({
  logo,
  title,
  organization,
  subtitle,
  date,
}: ProfileEntryProps) {
  return (
    <div className="mb-4 flex space-x-3">
      <div className="flex items-center">
        <Image
          src={logo.src}
          height={logo.height}
          width={logo.width}
          alt={logo.alt}
          priority={false}
        />
      </div>
      <div>
        <h5 className="text-lg sm:text-xl">
          <span className="font-bold">{title}</span> @&nbsp;
          <a href={organization.url} target="_blank" rel="noopener noreferrer">
            {organization.name}
          </a>
        </h5>
        {subtitle && <p>{subtitle}</p>}
        <p>{date}</p>
      </div>
    </div>
  );
}
