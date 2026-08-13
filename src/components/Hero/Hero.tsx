import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={`${styles.hero} section`}>
      <div className="container">
        <p className={styles.greeting}>Hi, I'm</p>
        <h1 className={styles.name}>[Your Full Name]</h1>
        <p className={styles.tagline}>
          Frontend Developer. I build clean, fast, and accessible web experiences.
        </p>
        <div className={styles.cta}>
          <a href="#projects" className={styles.btnPrimary}>View Projects</a>
          <a href="#contact" className={styles.btnSecondary}>Contact Me</a>
        </div>
      </div>
    </section>
  );
}
