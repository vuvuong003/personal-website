import { Link } from 'react-router-dom'
import resumeFile from '../files/Resume.pdf'
import { profile } from '../data.js'

export default function Home() {
  return (
    <section className="home-layout">
      <aside className="profile-sidebar" aria-label="Profile and contact links">
        <div className="profile-portrait">
          {profile.image ? (
            <img src={profile.image} alt={profile.name} />
          ) : (
            <span aria-hidden="true">VV</span>
          )}
        </div>
        <div className="profile-heading">
          <h1>{profile.name}</h1>
        </div>
        <ul className="profile-links" aria-label="Contact links">
          {profile.contact.map(({ label, value, href }) => (
            <li key={label}>
              {href ? (
                <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  <span>{label}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className="profile-link-unset" aria-disabled="true">
                  {label}
                </span>
              )}
            </li>
          ))}
          <li>
            <a href={resumeFile} download="Vu-Vuong-Resume.pdf">
              <span>Download My Resume</span>
              <span aria-hidden="true">↓</span>
            </a>
          </li>
        </ul>
      </aside>

      <div className="home-intro">
        <p className="role">A LITTLE ABOUT ME</p>
        <h2>Welcome to my website!</h2>
        <p className="hero-lede">
          {profile.intro.map((part, index) =>
            part.to ? (
              <Link key={part.to} to={part.to}>
                {part.text}
              </Link>
            ) : (
              <span key={index}>{part.text}</span>
            ),
          )}
        </p>
      </div>
    </section>
  )
}