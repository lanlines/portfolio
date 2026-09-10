import { useEffect, useRef } from 'react';
import { Project } from '../../types';
import Carousel from '../Carousel/Carousel';
import styles from './ProjectModal.module.css';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;

    const getFocusable = () =>
      Array.from(
        modalRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        ) ?? []
      );

    // Move focus into the dialog on open.
    (getFocusable()[0] ?? modalRef.current)?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;

      const focusable = getFocusable();
      if (focusable.length === 0) {
        e.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const activeEl = document.activeElement;

      if (e.shiftKey) {
        // Shift+Tab on the first element wraps to the last.
        if (activeEl === first || !modalRef.current?.contains(activeEl)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        // Tab on the last element wraps to the first.
        if (activeEl === last || !modalRef.current?.contains(activeEl)) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      // Restore focus to whatever opened the modal.
      previouslyFocused?.focus();
    };
  }, [onClose]);

  const modalImages = project.modalImages ?? (project.image ? [project.image] : []);

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} ref={modalRef} tabIndex={-1} onClick={e => e.stopPropagation()}>

        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>{project.title}</h2>
            <ul className={styles.techInline}>
              {project.tech.map(t => <li key={t}>{t}</li>)}
            </ul>
          </div>
          <button className={styles.close} onClick={onClose} aria-label="Close modal">✕</button>
        </div>

        {modalImages.length > 0 && (
          <div className={styles.screenshot}>
            <Carousel images={modalImages} alt={project.title} autoPlayInterval={4000} />
          </div>
        )}

        {project.overview && (
          <div className={styles.section}>
            <h3 className={styles.sectionHeading}>Overview</h3>
            <p className={styles.sectionText}>{project.overview}</p>
          </div>
        )}

        {project.modalNote && (
          <div className={styles.section}>
            <p className={styles.note}>{project.modalNote}</p>
          </div>
        )}

        {project.details && (
          <div className={styles.section}>
            <h3 className={styles.sectionHeading}>Details</h3>
            {project.details.split('\n\n').map((para, i) => (
              <p key={i} className={styles.sectionText}>{para}</p>
            ))}
          </div>
        )}

        {project.highlights && project.highlights.length > 0 && (
          <div className={styles.section}>
            <h3 className={styles.sectionHeading}>My Contributions</h3>
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
