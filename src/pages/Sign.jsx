import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import styles from './Sign.module.css'

const FILTERS = ['All', 'Design', 'Data', 'Engineering']

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

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={styles.arrow}>
    <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
                {filtered.filter(p => p.year === year).map(p => (
                  <article key={p.id} className={styles.timelineItem}>
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineContent}>
                      <Link to={`/sign/${p.id}`} className={styles.timelineLink}>
                        <div className={styles.timelineTop}>
                          <div className={styles.timelineMeta}>
                            <span className={styles.type}>{p.type}</span>
                            {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                          </div>
                          <ArrowIcon />
                        </div>
                        <h2 className={styles.timelineTitle}>{p.title}</h2>
                        <p className={styles.timelineDesc}>{p.desc}</p>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>
      ) : (
        <section className={styles.grid}>
          {filtered.map(p => (
            <article key={p.id} className={styles.card}>
              <Link to={`/sign/${p.id}`} className={styles.cardLink}>
                <div className={styles.cardMeta}>
                  <span className={styles.year}>{p.year}</span>
                  <div className={styles.tags}>
                    <span className={styles.type}>{p.type}</span>
                    {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                  </div>
                  <ArrowIcon />
                </div>
                <h2 className={styles.cardTitle}>{p.title}</h2>
                <p className={styles.cardDesc}>{p.desc}</p>
              </Link>
            </article>
          ))}
        </section>
      )}
    </main>
  )
}
