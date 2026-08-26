import { useEffect } from 'react';
import { Project } from '../../types';
import styles from './ProjectModal.module.css';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={e => e.stopPropagation()}>

        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>{project.title}</h2>
            <ul className={styles.techInline}>
              {project.tech.map(t => <li key={t}>{t}</li>)}
            </ul>
          </div>
          <button className={styles.close} onClick={onClose} aria-label="Close modal">✕</button>
        </div>

        <div className={styles.screenshot}>
          {project.image ? (
            <img src={project.image} alt={project.title} />
          ) : (
            <div className={styles.screenshotPlaceholder} aria-hidden="true" />
          )}
        </div>

        {project.overview && (
          <div className={styles.section}>
            <h3 className={styles.sectionHeading}>Overview</h3>
            <p className={styles.sectionText}>{project.overview}</p>
          </div>
        )}

        {project.highlights && project.highlights.length > 0 && (
          <div className={styles.section}>
            <h3 className={styles.sectionHeading}>What I built</h3>
            <ul className={styles.highlights}>
              {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          </div>
        )}

        <div className={styles.section}>
          <h3 className={styles.sectionHeading}>Tech Stack</h3>
          <p className={styles.sectionText}>{project.tech.join(' · ')}</p>
        </div>

        <div className={styles.footer}>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
              GitHub ↗
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
              Live Demo ↗
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
