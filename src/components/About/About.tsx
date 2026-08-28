import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={`${styles.about} section section--alt`}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.photo}>
            <div className={styles.photoInner}>
              <img src="/images/about/profile_picture.jpg" alt="Profile Picture" />
            </div>
          </div>
          <div className={styles.content}>
            <p className={styles.label}>About Me</p>
            <h2 className={styles.heading}>A little about myself</h2>
            <p className={styles.bio}>
              I'm Lance Joseph Lines, a Full Stack Developer based in Cebu, Philippines.
              I specialize in building modern web and mobile applications with a focus
              on clean UI, solid architecture, and great user experience.
            </p>
            <p className={styles.bio}>
              I studied at Cebu Technological University - Main Campus. I'm currently
              open to new opportunities feel free to reach out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
