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
              and referee 6–8 North American Cup events annually at the highest levels of domestic competition
              across all three weapons. I am also a Certified Referee Observer, trained to evaluate and
              provide feedback to referees during competition.
            </p>
            <p className={styles.blockText}>
              In 2025 I was selected to represent the United States on the European Fencing Confederation
              (EFC) International Cadet Circuit, traveling to EFC events in Europe in both 2025 and 2026.
              Since August 2024 I have served on the Ethics Committee of the USA Fencing Referees Commission,
              acting as a panelist reviewing and adjudicating complaints filed against referees for behavioral
              and guideline breaches. I also served on the Nomination Committee for the Referees Commission
              election in 2025, overseeing candidate vetting and election integrity.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockLabel}>Coaching</h2>
            <p className={styles.blockText}>
              Head Coach of the Carnegie Mellon University Fencing Club since 2023, coaching approximately
              40 student-athletes annually across all three weapons. I design curriculum and run technical
              and competitive training programs, manage the recruiting pipeline, and develop athletes from
              novice through national-competitive level.
            </p>
            <p className={styles.blockText}>
              The program has earned multiple top-10 national finishes at Club Fencing Championships —
              including AM Épée 7th of 42 teams and AM Sabre 8th of 41 — with individual podium finishes
              across events. One mentee earned the CMU Newell Award for Undergraduate Research; another
              earned individual bronze at a prior Club Championships.
            </p>
            <p className={styles.blockText}>
              I organize Holy Grail, an annual invitational drawing 40+ teams from the US and Canada,
              overseeing event prep, referee hiring, staff coordination, and day-of operations. I also
              collaborate with the club treasurer on event budgeting and financial planning.
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
            <span className={styles.statValue}>6–8</span>
            <span className={styles.statLabel}>NAC events per year</span>
          </div>
          <div className={styles.statBlock}>
            <span className={styles.statValue}>40+</span>
            <span className={styles.statLabel}>athletes coached annually</span>
          </div>

          <div className={styles.roleList}>
            <h3 className={styles.rolesTitle}>Roles</h3>
            {[
              ['Head Coach', 'CMU Fencing Club', '2023–present'],
              ['EFC International Cadet Circuit', 'European Fencing Confederation', '2025–26'],
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
