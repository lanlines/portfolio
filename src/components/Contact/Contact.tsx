import styles from './Contact.module.css';

const links = [
  {
    label: 'Email',
    href: 'mailto:your@email.com',
    display: 'your@email.com',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/yourusername',
    display: 'github.com/yourusername',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yourusername',
    display: 'linkedin.com/in/yourusername',
  },
];

export default function Contact() {
  return (
    <section id="contact" className={`${styles.contact} section section--alt`}>
      <div className="container">
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
        </ul>
      </div>
    </section>
  );
}
