import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

const links = [
  { to: '/sign', label: 'design' },
  { to: '/velop', label: 'photography' },
  { to: '/fense', label: 'fencing' },
  { to: '/tails', label: 'contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { setOpen(false) }, [location])

  return (
    <>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>yizhe (andy) liu</Link>

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

      {open && (
        <nav className={styles.mobileMenu}>
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
      )}
    </>
  )
}
