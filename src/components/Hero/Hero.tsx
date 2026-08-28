import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={`${styles.hero} section`}>
      <div className="container">
        <p className={styles.greeting}>Hi, I'm</p>
        <h1 className={styles.name}>Lance Joseph Lines</h1>
        <p className={styles.tagline}>
          Full Stack Developer. I build clean, scalable, and user-focused web and mobile applications.
        </p>
        <div className={styles.cta}>
          <a href="#projects" className={styles.btnPrimary}>View Projects</a>
          <a href="#contact" className={styles.btnSecondary}>Contact Me</a>
        </div>
      </div>
    </section>
  );
}
