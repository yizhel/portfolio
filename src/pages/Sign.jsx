import { useState } from 'react'
import styles from './Sign.module.css'

const FILTERS = ['All', 'Design', 'Data', 'Engineering']

const projects = [
  {
    title: 'UX & Cloud Platform — Apex AI',
    tags: ['Design', 'Engineering'],
    year: '2025',
    type: 'Role',
    desc: 'Architecting and deploying a responsive web application on AWS, applying HCI principles to make complex AI data accessible and intuitive for end-users.',
    detail: 'Responsible for both the front-end interface design and the cloud infrastructure behind it. Configured EC2 instances for high availability, implemented serverless workflows with Lambda, and integrated S3 for asset and data storage. Designed the UX layer with a focus on making ML outputs readable by non-technical users.',
    skills: ['React', 'AWS EC2', 'AWS Lambda', 'S3', 'UX Design', 'HCI', 'Figma', 'IAM'],
  },
  {
    title: 'Data & Technology — Mid-Atlantic AIDS ETC',
    tags: ['Data'],
    year: '2025',
    type: 'Role',
    desc: 'Analyzed program performance data and presented insights to stakeholders to guide resource allocation and educational offerings.',
    detail: 'Consulted on data analytics across training initiatives, translating performance data into actionable recommendations for stakeholders. Coordinated digital marketing campaigns across email and social media, resulting in a 16% increase in subscriptions and 90% turnout for in-person events.',
    skills: ['Data Analytics', 'Stakeholder Presentation', 'Digital Marketing', 'Workflow Optimization'],
  },
  {
    title: 'Pittsburgh Fencers\' Club Website',
    tags: ['Engineering', 'Design'],
    year: '2024',
    type: 'Project',
    desc: 'Independently designed and developed a responsive club website from client consultation through deployment.',
    detail: 'Managed the full project lifecycle — initial requirements gathering, design, development, and ongoing maintenance. Improved accessibility of schedules, membership info, and event details for existing and prospective members. Aligned the site with the club\'s branding and communication goals.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Client Management'],
  },
  {
    title: 'CASE Webform Redesign',
    tags: ['Design', 'UX'],
    year: '2023',
    type: 'Capstone',
    desc: 'Led user research and discovery for a legacy webform redesign, achieving a 20-point improvement in system usability score.',
    detail: 'Conducted stakeholder interviews and usability sessions to identify pain points in the existing form flow. Synthesized findings into design recommendations and led the redesign process from wireframes through final implementation. The 20-point SUS improvement was measured via pre/post usability testing.',
    skills: ['User Research', 'Usability Testing', 'Figma', 'Wireframing', 'HCI', 'Stakeholder Interviews'],
  },
  {
    title: 'COVID Vulnerability Visualizations',
    tags: ['Data', 'Engineering'],
    year: '2022',
    type: 'Project',
    desc: 'Analyzed social vulnerability index and COVID-19 data to identify the most predictive factors of outbreak vulnerability.',
    detail: 'Led research design and Python development for an interactive data visualization tool. Combined CDC social vulnerability data with COVID-19 outbreak records to surface geographic and demographic risk factors. Built as a publicly accessible Streamlit app with Altair charts.',
    skills: ['Python', 'Streamlit', 'Altair', 'Data Visualization', 'Research Design', 'Pandas'],
  },
  {
    title: 'FloWatt — Digital Service Innovation',
    tags: ['Design'],
    year: '2022',
    type: 'Project',
    desc: 'Led market research and ideation for FloWatt, a cost-saving digital service concept for utilities. Selected as top 12 of 55 projects.',
    detail: 'Led a cross-functional team through the full service design process — market analysis, ideation, concept development, and pitch. FloWatt addressed cost inefficiencies in utility billing through a digital intervention. Selected by peers as one of the top 12 projects out of 55.',
    skills: ['Service Design', 'Market Research', 'Design Thinking', 'Prototyping', 'Team Leadership'],
  },
  {
    title: 'Depowdering Automation — CMU CERLAB',
    tags: ['Engineering'],
    year: '2019',
    type: 'Research',
    desc: 'Research under Dr. Kenji Shimada automating metal 3D printing post-processing with robotic arms.',
    detail: 'Built simulated path planning algorithms for robotic vacuum processes in post-processing of metal 3D prints. Containerized the entire project in Docker to enable cross-platform support across Windows and Linux. Worked primarily in C++ and Python using ROS for robot operating system integration.',
    skills: ['C++', 'Python', 'ROS', 'Docker', 'Robotics', 'Path Planning'],
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

function SkillTags({ skills }) {
  return (
    <div className={styles.skillTags}>
      {skills.map(s => (
        <span key={s} className={styles.skillTag}>{s}</span>
      ))}
    </div>
  )
}

function Chevron({ open }) {
  return (
    <svg
      className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
      width="14" height="14" viewBox="0 0 14 14" fill="none"
    >
      <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Sign() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [view, setView] = useState('timeline')
  const [openIndex, setOpenIndex] = useState(null)

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeFilter))

  const years = [...new Set(filtered.map(p => p.year))].sort((a, b) => b - a)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

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
              onClick={() => { setActiveFilter(f); setOpenIndex(null) }}
            >
              {f}
            </button>
          ))}
        </div>

        <div className={styles.viewToggle}>
          <button
            className={`${styles.viewBtn} ${view === 'timeline' ? styles.viewBtnActive : ''}`}
            onClick={() => { setView('timeline'); setOpenIndex(null) }}
            title="Timeline view"
          >
            <ListIcon />
          </button>
          <button
            className={`${styles.viewBtn} ${view === 'grid' ? styles.viewBtnActive : ''}`}
            onClick={() => { setView('grid'); setOpenIndex(null) }}
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
                {filtered.filter(p => p.year === year).map((p, i) => {
                  const key = `${year}-${i}`
                  const isOpen = openIndex === key
                  return (
                    <article key={key} className={styles.timelineItem}>
                      <div className={`${styles.timelineDot} ${isOpen ? styles.timelineDotOpen : ''}`} />
                      <div className={styles.timelineContent}>
                        <button className={styles.timelineToggle} onClick={() => toggle(key)}>
                          <div className={styles.timelineTop}>
                            <div className={styles.timelineMeta}>
                              <span className={styles.type}>{p.type}</span>
                              {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                            </div>
                            <Chevron open={isOpen} />
                          </div>
                          <h2 className={styles.timelineTitle}>{p.title}</h2>
                          <p className={styles.timelineDesc}>{p.desc}</p>
                        </button>
                        {isOpen && (
                          <div className={styles.dropdown}>
                            <p className={styles.dropdownDetail}>{p.detail}</p>
                            <SkillTags skills={p.skills} />
                          </div>
                        )}
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          ))}
        </section>
      ) : (
        <section className={styles.grid}>
          {filtered.map((p, i) => {
            const isOpen = openIndex === i
            return (
              <article key={i} className={`${styles.card} ${isOpen ? styles.cardOpen : ''}`}>
                <button className={styles.cardToggle} onClick={() => toggle(i)}>
                  <div className={styles.cardMeta}>
                    <span className={styles.year}>{p.year}</span>
                    <div className={styles.tags}>
                      <span className={styles.type}>{p.type}</span>
                      {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                    </div>
                    <Chevron open={isOpen} />
                  </div>
                  <h2 className={styles.cardTitle}>{p.title}</h2>
                  <p className={styles.cardDesc}>{p.desc}</p>
                </button>
                {isOpen && (
                  <div className={styles.dropdown}>
                    <p className={styles.dropdownDetail}>{p.detail}</p>
                    <SkillTags skills={p.skills} />
                  </div>
                )}
              </article>
            )
          })}
        </section>
      )}
    </main>
  )
}
