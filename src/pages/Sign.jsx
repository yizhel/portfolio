import { useState } from 'react'
import styles from './Sign.module.css'

const FILTERS = ['All', 'Design', 'Data', 'Engineering']

const projects = [
  {
    title: 'UX & Cloud Platform — Apex AI',
    tags: ['Design', 'Engineering'],
    year: '2025',
    type: 'Role',
    desc: 'Architecting and deploying a responsive web application on AWS (EC2, Lambda, S3), applying HCI principles to make complex AI data accessible and intuitive for end-users.',
  },
  {
    title: 'Data & Technology — Mid-Atlantic AIDS ETC',
    tags: ['Data'],
    year: '2025',
    type: 'Role',
    desc: 'Analyzed program performance data and presented insights to stakeholders to guide resource allocation. Ran integrated digital marketing campaigns, boosting subscriptions by 16% and achieving 90% in-person event turnout.',
  },
  {
    title: 'Pittsburgh Fencers\' Club Website',
    tags: ['Engineering'],
    year: '2024',
    type: 'Project',
    desc: 'Independently designed and developed a responsive club website from client consultation through deployment. Improved accessibility of schedules, membership info, and event details.',
  },
  {
    title: 'CASE Webform Redesign',
    tags: ['Design'],
    year: '2023',
    type: 'Capstone',
    desc: 'Led user research and discovery for a legacy webform redesign. Identified pain points through stakeholder sessions, implementing solutions that achieved a 20-point improvement in system usability score.',
  },
  {
    title: 'COVID Vulnerability Visualizations',
    tags: ['Data', 'Engineering'],
    year: '2022',
    type: 'Project',
    desc: 'Analyzed social vulnerability index and COVID-19 data to identify the most predictive factors of outbreak vulnerability. Built an interactive web application using Python, Streamlit, and Altair.',
  },
  {
    title: 'FloWatt — Digital Service Innovation',
    tags: ['Design'],
    year: '2022',
    type: 'Project',
    desc: 'Led market research and ideation for FloWatt, a cost-saving digital service concept for utilities. Selected as one of the top 12 projects out of 55 by peers.',
  },
  {
    title: 'Depowdering Automation — CMU CERLAB',
    tags: ['Engineering'],
    year: '2019',
    type: 'Research',
    desc: 'Research under Dr. Kenji Shimada automating metal 3D printing post-processing with robotic arms. Containerized the project in Docker for cross-platform support; built path planning algorithms in C++/Python with ROS.',
  },
]

const ListIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <line x1="4" y1="4" x2="14" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="4" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="4" y1="12" x2="14" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="1.5" cy="4" r="1" fill="currentColor"/>
    <circle cx="1.5" cy="8" r="1" fill="currentColor"/>
    <circle cx="1.5" cy="12" r="1" fill="currentColor"/>
  </svg>
)

const GridIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="9" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="1" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

export default function Sign() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [view, setView] = useState('timeline')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeFilter))

  const years = [...new Set(filtered.map(p => p.year))].sort((a, b) => b - a)

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>Work</h1>
        <p className={styles.sub}>
          Projects and case studies across HCI, data analysis, and software engineering.
        </p>
      </header>

      <div className={styles.toolbar}>
        <div className={styles.filters}>
          {FILTERS.map(f => (
            <button
              key={f}
              className={`${styles.filter} ${activeFilter === f ? styles.filterActive : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className={styles.viewToggle}>
          <button
            className={`${styles.viewBtn} ${view === 'timeline' ? styles.viewBtnActive : ''}`}
            onClick={() => setView('timeline')}
            title="Timeline view"
          >
            <ListIcon />
          </button>
          <button
            className={`${styles.viewBtn} ${view === 'grid' ? styles.viewBtnActive : ''}`}
            onClick={() => setView('grid')}
            title="Grid view"
          >
            <GridIcon />
          </button>
        </div>
      </div>

      {view === 'timeline' ? (
        <section className={styles.timeline}>
          {years.map(year => (
            <div key={year} className={styles.yearGroup}>
              <div className={styles.yearMarker}>
                <span className={styles.yearLabel}>{year}</span>
                <div className={styles.yearLine} />
              </div>
              <div className={styles.yearItems}>
                {filtered.filter(p => p.year === year).map((p, i) => (
                  <article key={i} className={styles.timelineItem}>
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineMeta}>
                        <span className={styles.type}>{p.type}</span>
                        {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                      </div>
                      <h2 className={styles.timelineTitle}>{p.title}</h2>
                      <p className={styles.timelineDesc}>{p.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>
      ) : (
        <section className={styles.grid}>
          {filtered.map((p, i) => (
            <article key={i} className={styles.card}>
              <div className={styles.cardMeta}>
                <span className={styles.year}>{p.year}</span>
                <div className={styles.tags}>
                  <span className={styles.type}>{p.type}</span>
                  {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                </div>
              </div>
              <h2 className={styles.cardTitle}>{p.title}</h2>
              <p className={styles.cardDesc}>{p.desc}</p>
            </article>
          ))}
        </section>
      )}
    </main>
  )
}
