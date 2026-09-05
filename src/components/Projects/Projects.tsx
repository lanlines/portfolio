import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import projects from '../../content/projects';
import { Project } from '../../types';
import ProjectCard from './ProjectCard';
import ProjectModal from '../ProjectModal/ProjectModal';
import styles from './Projects.module.css';

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const headingRef = useScrollReveal<HTMLDivElement>();
  const listRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="projects" className={`${styles.projects} section`}>
      <div className="container">
        <div ref={headingRef} className="reveal">
          <p className={styles.label}>Projects</p>
          <h2 className={styles.heading}>Selected Work</h2>
        </div>
        <div ref={listRef} className={`${styles.list} reveal reveal-delay-1`}>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              reverse={i % 2 !== 0}
              onViewDetails={setSelected}
            />
          ))}
        </div>
      </div>
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
