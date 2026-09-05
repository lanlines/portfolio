import { useScrollReveal } from '../../hooks/useScrollReveal';
import experience from '../../content/experience';
import styles from './Experience.module.css';

export default function Experience() {
  const work = experience.filter(e => e.type === 'experience');
  const edu = experience.filter(e => e.type === 'education');
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="experience" className={`${styles.experience} section`}>
      <div className="container">
        <div ref={ref} className={`${styles.columns} reveal`}>
          <div className={styles.column}>
            <p className={styles.label}>Experience</p>
            <div className={styles.timeline}>
              {work.map((entry, i) => (
                <div key={i} className={styles.entry}>
                  <div className={styles.dot} />
                  <div className={styles.body}>
                    <span className={styles.period}>{entry.period}</span>
                    <h3 className={styles.title}>{entry.title}</h3>
                    <p className={styles.org}>{entry.organization}</p>
                    {entry.bullets.length > 0 && (
                      <ul className={styles.bullets}>
                        {entry.bullets.map((b, j) => (
                          <li key={j}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <p className={styles.label}>Education</p>
            <div className={styles.timeline}>
              {edu.map((entry, i) => (
                <div key={i} className={styles.entry}>
                  <div className={styles.dot} />
                  <div className={styles.body}>
                    <span className={styles.period}>{entry.period}</span>
                    <h3 className={styles.title}>{entry.title}</h3>
                    <p className={styles.org}>{entry.organization}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
