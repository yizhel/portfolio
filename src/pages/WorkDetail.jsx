import { useParams, Link, Navigate } from 'react-router-dom'
import { projects } from '../data/projects'
import styles from './WorkDetail.module.css'

function SkillTags({ skills }) {
  return (
    <div className={styles.skillTags}>
      {skills.map(s => (
        <span key={s} className={styles.skillTag}>{s}</span>
      ))}
    </div>
  )
}

export default function WorkDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) return <Navigate to="/sign" replace />

  const currentIndex = projects.indexOf(project)
  const prev = projects[currentIndex - 1] ?? null
  const next = projects[currentIndex + 1] ?? null

  return (
    <main className={styles.main}>
      <div className={styles.breadcrumb}>
        <Link to="/sign" className={styles.backLink}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Work
        </Link>
      </div>

      <header className={styles.header}>
        <div className={styles.headerMeta}>
          <span className={styles.type}>{project.type}</span>
          {project.tags.map(t => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.desc}>{project.desc}</p>
      </header>

      <section className={styles.content}>
        <div className={styles.primary}>
          {project.sections.map(s => (
            <div key={s.heading} className={styles.block}>
              <h2 className={styles.blockLabel}>{s.heading}</h2>
              <p className={styles.blockText}>{s.body}</p>
            </div>
          ))}
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.metaBlock}>
            <span className={styles.metaLabel}>Year</span>
            <span className={styles.metaValue}>{project.year}</span>
          </div>

          {project.highlights && project.highlights.map(h => (
            <div key={h.label} className={styles.statBlock}>
              <span className={styles.statValue}>{h.value}</span>
              <span className={styles.statLabel}>{h.label}</span>
            </div>
          ))}

          <div className={styles.skillsBlock}>
            <span className={styles.metaLabel}>Skills</span>
            <SkillTags skills={project.skills} />
          </div>
        </aside>
      </section>

      <nav className={styles.pagination}>
        {prev ? (
          <Link to={`/sign/${prev.id}`} className={styles.pageLink}>
            <span className={styles.pageLinkDir}>← Previous</span>
            <span className={styles.pageLinkTitle}>{prev.title}</span>
          </Link>
        ) : <div />}
        {next ? (
          <Link to={`/sign/${next.id}`} className={`${styles.pageLink} ${styles.pageLinkRight}`}>
            <span className={styles.pageLinkDir}>Next →</span>
            <span className={styles.pageLinkTitle}>{next.title}</span>
          </Link>
        ) : <div />}
      </nav>
    </main>
  )
}
