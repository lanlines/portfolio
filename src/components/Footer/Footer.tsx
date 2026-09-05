import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <span className={styles.name}>Lance Joseph Lines</span>
        <span className={styles.copy}>© {new Date().getFullYear()} — All rights reserved</span>
        <div className={styles.socials}>
          <a href="https://github.com/lanline512" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/lance-joseph-lines-1724343a1" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
