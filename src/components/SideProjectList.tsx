import styles from './SideProjectList.module.css';

export type SideProjectListProps = {
  projects: {
    name: string;
    description: string;
    link: string;
    backgroundColor: string;
  }[];
};

export default function SideProjectList(props: SideProjectListProps) {
  return (
    <div className="text-white grid grid-cols-1 space-y-4 md:grid-cols-2 md:space-x-4 md:space-y-0">
      {props.projects.map((project, projectIndex) => (
        <div
          key={projectIndex}
          className={`${project.backgroundColor} ${styles['card-shadow']} rounded-sm p-5`}
        >
          <h5 className="text-2xl font-bold">{project.name}</h5>
          <p className="my-3">{project.description}</p>
          <p className="text-right">
            <a href={project.link} target="_blank">
              Visit
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}
