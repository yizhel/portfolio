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
            I'm Andy — an HCI graduate from Carnegie Mellon University with a background spanning
            design, data engineering, and software development. I'm drawn to the seam between systems
            and people: how interfaces shape behaviour, how data reveals patterns, and how good
            engineering makes complex things feel simple.
          </p>
          <p>
            At CMU I studied Human-Computer Interaction with a minor in Photography — equal time
            spent thinking about usability heuristics and chasing light. Currently I'm a UX & Cloud
            Engineer at Apex AI, leading end-to-end product development across B2B client engagements:
            shipping a dataset management system for wake-word model training and a customer-facing
            LLM agent interface, from Figma through AWS deployment.
          </p>
          <p>
            Outside of work I represent the United States as a national and international fencing referee —
            officiating at North American Cup events domestically and on the EFC International Cadet
            Circuit in Europe — and coach the CMU Fencing Club as head coach.
          </p>
          <p>
            I'm based in Pittsburgh.
          </p>
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.sideBlock}>
            <h2 className={styles.sideTitle}>Contact</h2>
            <a href="mailto:yizhel@alumni.cmu.edu" className={styles.sideLink}>yizhel@alumni.cmu.edu</a>
            <a href="mailto:yizheliu1@gmail.com" className={styles.sideLink}>yizheliu1@gmail.com</a>
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
            <span className={styles.sideText}>Dean's List, High Honors — Fall 2022</span>
          </div>

          <div className={styles.sideBlock}>
            <h2 className={styles.sideTitle}>Skills</h2>
            <span className={styles.sideText}>Python · JavaScript · TypeScript · C++ · SQL</span>
            <span className={styles.sideText}>React · Vite · RESTful APIs</span>
            <span className={styles.sideText}>AWS (EC2, S3, Lambda, Amplify) · Docker · ROS</span>
            <span className={styles.sideText}>Figma · Adobe Suite · Wireframing · User Testing</span>
            <span className={styles.sideText}>Excel · Qualtrics · Pandas · Mailchimp</span>
            <span className={styles.sideText}>WordPress · CMS · LLM Integration</span>
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
