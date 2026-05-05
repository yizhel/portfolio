import styles from './Fense.module.css'
import FencingMap from '../components/FencingMap'

export default function Fense() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>Fencing</h1>
        <p className={styles.sub}>Referee. Coach. Fencer.</p>
      </header>

      <section className={styles.content}>
        <div className={styles.primary}>
          <div className={styles.block}>
            <h2 className={styles.blockLabel}>Refereeing</h2>
            <p className={styles.blockText}>
              I hold the N1 rating — the highest level of domestic fencing officiating in the United States —
              and am an active national-level referee, assigned regularly to NAC and national championship
              events across all three weapons. I am also a Certified Referee Observer, trained to evaluate
              and provide feedback to other referees during competition.
            </p>
            <p className={styles.blockText}>
              In 2025 I was selected to the EFC Cadet List for Designated events, recognizing readiness
              to officiate at international-level cadet competitions sanctioned by the European Fencing
              Confederation. Since 2024 I have served on the Ethics Committee of the USA Fencing Referees
              Commission, and I served on the Nomination Committee for the Referees Commission election,
              overseeing candidate vetting and election integrity.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockLabel}>Coaching</h2>
            <p className={styles.blockText}>
              Head Coach of the Carnegie Mellon University Fencing Club since 2023, leading training for
              40+ student-athletes across all three weapons — foil, épée, and sabre. I design seasonal
              training plans and conditioning programs, manage equipment and travel logistics for
              intercollegiate tournaments, and mentor athletes in tactical analysis, performance psychology,
              and mental preparation. The program has earned medals at local, regional, and national
              collegiate events.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockLabel}>The sport</h2>
            <p className={styles.blockText}>
              I was introduced to fencing at CMU, where I went on to serve as Club President from 2019 to
              2021, growing and running a 40+ member organization. I also spent two years on the Midwest
              Fencing Conference Executive Board, representing 15+ collegiate programs on conference policy,
              tournament regulations, and advocacy for student-led clubs.
            </p>
            <p className={styles.blockText}>
              Fencing teaches a kind of precision and adaptability that I carry into everything else I do —
              you're constantly reading a situation, making decisions under pressure, and adjusting mid-phrase.
            </p>
          </div>
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.statBlock}>
            <span className={styles.statValue}>N1</span>
            <span className={styles.statLabel}>USA Fencing rating</span>
          </div>
          <div className={styles.statBlock}>
            <span className={styles.statValue}>40+</span>
            <span className={styles.statLabel}>athletes coached</span>
          </div>
          <div className={styles.statBlock}>
            <span className={styles.statValue}>15+</span>
            <span className={styles.statLabel}>programs represented on MFC board</span>
          </div>

          <div className={styles.roleList}>
            <h3 className={styles.rolesTitle}>Roles</h3>
            {[
              ['Head Coach', 'CMU Fencing Club', '2023–present'],
              ['EFC Cadet List — Designated Events', 'European Fencing Confederation', '2025'],
              ['Ethics Committee', 'USA Fencing Referees Commission', '2024–present'],
              ['Nomination Committee', 'USA Fencing Referees Commission', '2024'],
              ['Exec Board Member', 'Midwest Fencing Conference', '2021–2023'],
              ['Club President', 'CMU Fencing Club', '2019–2021'],
            ].map(([role, org, years]) => (
              <div key={role} className={styles.role}>
                <span className={styles.roleTitle}>{role}</span>
                <span className={styles.roleOrg}>{org}</span>
                <span className={styles.roleYears}>{years}</span>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className={styles.mapSection}>
        <h2 className={styles.mapTitle}>Where fencing has taken me</h2>
        <FencingMap />
      </section>
    </main>
  )
}
