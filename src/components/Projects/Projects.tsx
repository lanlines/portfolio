import projects from '../../content/projects';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={`${styles.projects} section section--alt`}>
      <div className="container">
        <p className={styles.label}>Projects</p>
        <h2 className={styles.heading}>Selected Work</h2>
        <div className={styles.list}>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} reverse={i % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
