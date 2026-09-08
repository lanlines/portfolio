import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Contact.module.css';

const links = [
  {
    label: 'Email',
    href: 'mailto:lancejoseph1122@gmail.com',
    display: 'lancejoseph1122@gmail.com',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/lanline512',
    display: 'github.com/lanline512',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/lance-joseph-lines-1724343a1',
    display: 'linkedin.com/in/lance-joseph-lines',
  },
];

export default function Contact() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="contact" className={`${styles.contact} section`}>
      <div className="container">
        <div ref={ref} className="reveal">
          <p className={styles.label}>Contact</p>
          <h2 className={styles.heading}>Get In Touch</h2>
          <p className={styles.subtext}>
            I'm open to new opportunities. Feel free to reach out.
          </p>
          <ul className={styles.links}>
            {links.map(({ label, href, display }) => (
              <li key={label} className={styles.item}>
                <span className={styles.linkLabel}>{label}</span>
                <a
                  href={href}
                  className={styles.link}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                >
                  {display}
                </a>
              </li>
            ))}
            <li className={styles.item}>
              <span className={styles.linkLabel}>Resume</span>
              <a href="/resume.pdf" download className={styles.link}>Download PDF ↓</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
