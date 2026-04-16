import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const sections = [
  {
    to: '/sign',
    slug: 'de/sign',
    label: 'Work',
    desc: 'Projects and case studies across HCI, data analysis, and software engineering.',
  },
  {
    to: '/velop',
    slug: 'de/velop',
    label: 'Photography',
    desc: 'A gallery of favourite frames — moments worth keeping.',
  },
  {
    to: '/fense',
    slug: 'de/fense',
    label: 'Fencing',
    desc: 'International referee. Club coach. Fencer.',
  },
  {
    to: '/tails',
    slug: 'de/tails',
    label: 'About',
    desc: 'The details — who I am, what I do, and how to reach me.',
  },
]

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero} id="hero">
        <p className={styles.eyebrow}>yizhe (andy) liu</p>
        <h1 className={styles.headline}>
          UX specialist, designer,<br />and builder.
        </h1>
        <p className={styles.sub}>
          I work at the intersection of data, interfaces, and people.
        </p>
      </section>

      <section className={styles.grid} id="work">
        {sections.map(({ to, slug, label, desc }) => (
          <Link key={to} to={to} className={styles.card}>
            <h2 className={styles.cardLabel}>{label}</h2>
            <p className={styles.cardDesc}>{desc}</p>
            <span className={styles.arrow}>→</span>
          </Link>
        ))}
      </section>
    </main>
  )
}
