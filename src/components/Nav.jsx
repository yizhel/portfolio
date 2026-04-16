import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

const links = [
  { to: '/sign', label: 'de/sign' },
  { to: '/velop', label: 'de/velop' },
  { to: '/fense', label: 'de/fense' },
  { to: '/tails', label: 'de/tails' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { setOpen(false) }, [location])

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>yizhe (andy) liu</Link>

      <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
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

      <button
        className={styles.hamburger}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span className={`${styles.bar} ${open ? styles.barTop : ''}`} />
        <span className={`${styles.bar} ${open ? styles.barMid : ''}`} />
        <span className={`${styles.bar} ${open ? styles.barBot : ''}`} />
      </button>
    </header>
  )
}
