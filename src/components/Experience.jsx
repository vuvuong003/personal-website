import { Link } from 'react-router-dom'
import { experience, projects } from '../data.js'
import { Entry, Slot } from '../components/Entry.jsx'

export default function Experience() {
  const teamProjects = projects.filter((p) => p.team)

  return (
    <>
      <header className="page-head">
        <h1>Experiences</h1>
      </header>

      <section className="block">
        <h2 className="block-title">Professional experience</h2>
        {experience.length === 0 ? (
          <Slot title="Add your roles">
            Add each role in src/data.js: job title, organization, dates and two or three results. Internships,
            research, campus jobs and freelance work all count.
          </Slot>
        ) : (
          <div className="stack-list">
            {experience.map((e) => (
              <Entry key={e.title + e.org} heading={e.title} sub={e.org} dates={e.dates} points={e.points} />
            ))}
          </div>
        )}
      </section>

      <section className="block">
        <h2 className="block-title">Team project experience</h2>
        <div className="stack-list">
          {teamProjects.map((p) => (
            <Entry key={p.id} heading={p.name} sub={p.meta} points={p.points} />
          ))}
        </div>
        <p className="note">
          Full details are on the <Link to="/projects">Projects page</Link>.
        </p>
      </section>
    </>
  )
}