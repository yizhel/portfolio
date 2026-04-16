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
    title: 'CASE Webform Redesign',
    tags: ['Design'],
    year: '2023',
    type: 'Capstone',
    desc: 'Led user research and discovery for a legacy webform redesign. Identified pain points through stakeholder sessions, implementing solutions that achieved a 20-point improvement in system usability score.',
  },
  {
    title: 'Data & Technology — Mid-Atlantic AIDS ETC',
    tags: ['Data'],
    year: '2025',
    type: 'Role',
    desc: 'Analyzed program performance data and presented insights to stakeholders to guide resource allocation. Ran integrated digital marketing campaigns, boosting subscriptions by 16% and achieving 90% in-person event turnout.',
  },
  {
    title: 'COVID Vulnerability Visualizations',
    tags: ['Data', 'Engineering'],
    year: '2022',
    type: 'Project',
    desc: 'Analyzed social vulnerability index and COVID-19 data to identify the most predictive factors of outbreak vulnerability. Built an interactive web application using Python, Streamlit, and Altair.',
  },
  {
    title: 'Pittsburgh Fencers\' Club Website',
    tags: ['Engineering'],
    year: '2024',
    type: 'Project',
    desc: 'Independently designed and developed a responsive club website from client consultation through deployment. Improved accessibility of schedules, membership info, and event details.',
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

export default function Sign() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(active))

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>Work</h1>
        <p className={styles.sub}>
          Projects and case studies across HCI, data analysis, and software engineering.
        </p>
      </header>

      <div className={styles.filters}>
        {FILTERS.map(f => (
          <button
            key={f}
            className={`${styles.filter} ${active === f ? styles.filterActive : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

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
    </main>
  )
}
