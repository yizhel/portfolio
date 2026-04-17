import FencingMap from '../components/FencingMap'
import styles from './Stinations.module.css'

export default function Stinations() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Fencing Map</h1>
        <p className={styles.sub}>Places I've competed, refereed, trained, and spectated.</p>
      </div>
      <div className={styles.mapWrap}>
        <FencingMap fullHeight />
      </div>
    </main>
  )
}
