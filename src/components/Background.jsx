import { experience, education } from '../data.js'

function Entry({ heading, sub, dates, points = [] }) {
  return (
    <article className="entry">
      <div className="entry-head">
        <h3>{heading}</h3>
        <span className="meta">{dates}</span>
      </div>
      <div className="meta">{sub}</div>
      {points.length > 0 && (
        <ul>
          {points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )}
    </article>
  )
}

function Group({ title, entries, placeholder, render }) {
  if (entries.length === 0) {
    return (
      <div className="slot">
        <strong>{title}</strong>
        {placeholder}
      </div>
    )
  }
  return (
    <div className="group">
      <h3 className="group-title">{title}</h3>
      {entries.map(render)}
    </div>
  )
}

export default function Background() {
  return (
    <section id="background">
      <h2>Background</h2>
      <Group
        title="Professional experience"
        entries={experience}
        placeholder="Add each role in src/data.js: job title, organization, dates and two or three results."
        render={(e) => (
          <Entry key={e.title + e.org} heading={e.title} sub={e.org} dates={e.dates} points={e.points} />
        )}
      />
      <Group
        title="Education"
        entries={education}
        placeholder="Add your school, degree, expected graduation date and relevant coursework."
        render={(e) => (
          <Entry key={e.degree} heading={e.degree} sub={e.school} dates={e.dates} points={e.points} />
        )}
      />
    </section>
  )
}
