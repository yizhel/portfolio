import { NavLink, Link } from 'react-router-dom'
import styles from './Nav.module.css'

const links = [
  { to: '/sign', label: 'de/sign' },
  { to: '/velop', label: 'de/velop' },
  { to: '/fense', label: 'de/fense' },
  { to: '/tails', label: 'de/tails' },
]

export default function Nav() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>yizhe liu</Link>
      <nav className={styles.nav}>
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ''}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
