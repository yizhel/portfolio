import styles from './Velop.module.css'

export default function Velop() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>Photography</h1>
        <p className={styles.sub}>A collection of favourite frames.</p>
      </header>

      <section className={styles.gallery}>
        <p className={styles.placeholder}>Photos coming soon.</p>
      </section>
    </main>
  )
}
