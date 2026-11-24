import { profile } from '../data.js'

const sections = [
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['background', 'Background'],
]

function ContactRow({ label, value, href }) {
  return (
    <div>
      <dt>{label}</dt>
      <dd>
        {value ? (
          href ? <a href={href}>{value}</a> : value
        ) : (
          <span className="todo">add your {label.toLowerCase()}</span>
        )}
      </dd>
    </div>
  )
}

export default function Sidebar() {
  return (
    <header className="id">
      <p className="role">{profile.role}</p>
      <h1>{profile.name}</h1>
      <p className="lede">{profile.lede}</p>
      <dl className="contact">
        {profile.contact.map((c) => (
          <ContactRow key={c.label} {...c} />
        ))}
      </dl>
      <nav className="jump" aria-label="Sections">
        {sections.map(([id, label]) => (
          <a key={id} href={`#${id}`}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}
