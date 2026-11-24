import { NavLink } from 'react-router-dom'
import { profile } from '../data.js'

const links = [
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experiences' },
  { to: '/other', label: 'Other' },
]

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <NavLink to="/" className="brand" end>
          {profile.name}
        </NavLink>
        <nav aria-label="Main">
          <ul className="nav-links">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}