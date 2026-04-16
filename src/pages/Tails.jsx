import styles from './Tails.module.css'

export default function Tails() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>About</h1>
      </header>

      <section className={styles.content}>
        <div className={styles.bio}>
          <p>
            I'm Yizhe — an HCI graduate from Carnegie Mellon University with a background that spans
            design, data analysis, and software engineering. I'm drawn to the seam between systems and
            people: how interfaces shape behaviour, how data reveals patterns, and how good engineering
            makes complex things feel simple.
          </p>
          <p>
            At CMU I studied Human-Computer Interaction with a minor in Photography, which means I spent
            equal time thinking about usability heuristics and chasing light. Currently I'm working as a
            UX & Cloud Engineer at Apex AI, building the interface layer for machine learning systems on AWS.
          </p>
          <p>
            Outside of work I coach the CMU Fencing Club, referee nationally as a USA Fencing N1, and
            serve on the Ethics Committee of the USA Fencing Referees Commission. Fencing has been a constant
            — I've been a competitor, a club president, a board member, and now a coach.
          </p>
          <p>
            I'm based in Pittsburgh.
          </p>
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.sideBlock}>
            <h2 className={styles.sideTitle}>Contact</h2>
            <a href="mailto:yizheliu1@gmail.com" className={styles.sideLink}>yizheliu1@gmail.com</a>
            <a href="mailto:yizhel@alumni.cmu.edu" className={styles.sideLink}>yizhel@alumni.cmu.edu</a>
          </div>

          <div className={styles.sideBlock}>
            <h2 className={styles.sideTitle}>Links</h2>
            <a
              href="https://www.linkedin.com/in/yizhe-andy-liu/"
              target="_blank"
              rel="noreferrer"
              className={styles.sideLink}
            >
              LinkedIn →
            </a>
          </div>

          <div className={styles.sideBlock}>
            <h2 className={styles.sideTitle}>Education</h2>
            <span className={styles.sideText}>BS Human-Computer Interaction</span>
            <span className={styles.sideText}>Minor in Photography</span>
            <span className={styles.sideText}>Carnegie Mellon University, 2023</span>
          </div>

          <div className={styles.sideBlock}>
            <h2 className={styles.sideTitle}>Skills</h2>
            <span className={styles.sideText}>Python · Java · JavaScript · C++</span>
            <span className={styles.sideText}>AWS · Docker · ROS</span>
            <span className={styles.sideText}>Figma · Adobe Creative Suite</span>
            <span className={styles.sideText}>PostgreSQL · Streamlit</span>
          </div>

          <div className={styles.sideBlock}>
            <h2 className={styles.sideTitle}>CV</h2>
            <a href="#" className={styles.sideLink}>Download PDF →</a>
          </div>
        </aside>
      </section>
    </main>
  )
}
