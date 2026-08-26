import { Project } from '../../types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  reverse?: boolean;
}

export default function ProjectCard({ project, reverse = false }: ProjectCardProps) {
  return (
    <article className={`${styles.card} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.image}>
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className={styles.imagePlaceholder} aria-hidden="true" />
        )}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <ul className={styles.tech}>
          {project.tech.map(t => (
            <li key={t} className={styles.tag}>{t}</li>
          ))}
        </ul>
        <div className={styles.links}>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.linkPrimary}>
              Live Demo ↗
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.linkSecondary}>
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
