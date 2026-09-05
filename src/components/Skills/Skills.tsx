import { useScrollReveal } from '../../hooks/useScrollReveal';
import skills from '../../content/skills';
import styles from './Skills.module.css';

export default function Skills() {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="skills" className={`${styles.skills} section`}>
      <div className="container">
        <div ref={headingRef} className="reveal">
          <p className={styles.label}>Skills & Tools</p>
          <h2 className={styles.heading}>What I work with</h2>
        </div>
        <div ref={gridRef} className={`${styles.grid} reveal reveal-delay-1`}>
          {skills.map(({ category, skills: items }) => (
            <div key={category} className={styles.category}>
              <h3 className={styles.categoryName}>{category}</h3>
              <ul className={styles.list}>
                {items.map(skill => (
                  <li key={skill} className={styles.tag}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
