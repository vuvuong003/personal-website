import { profile } from '../data.js'

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

export default function Contact() {
  return (
    <dl className="contact">
      {profile.contact.map((c) => (
        <ContactRow key={c.label} {...c} />
      ))}
    </dl>
  )
}