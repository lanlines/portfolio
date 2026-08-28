import { Project } from '../../types';
import Carousel from '../Carousel/Carousel';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  reverse?: boolean;
  onViewDetails: (project: Project) => void;
}

export default function ProjectCard({ project, reverse = false, onViewDetails }: ProjectCardProps) {
  const images = project.heroImages ?? (project.image ? [project.image] : []);

  return (
    <article className={`${styles.card} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.image}>
        {images.length > 0
          ? <Carousel images={images} alt={project.title} />
          : <div className={styles.imagePlaceholder} aria-hidden="true" />
        }
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
          <button className={styles.viewDetails} onClick={() => onViewDetails(project)}>
            View Details
          </button>
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
