import { projects } from '../data.js'

function ProjectCard({ project }) {
  const { name, meta, summary, stack, points, link } = project
  return (
    <details className="project">
      <summary className="project-summary">
        <span className="project-summary-text">
          <span className="project-name">{name}</span>
          <span className="meta">{meta}</span>
        </span>
        <span className="project-chevron" aria-hidden="true" />
      </summary>
      <div className="project-details">
        <section className="project-field">
          <h3 className="project-label-summary">Summary</h3>
          <p>{summary}</p>
        </section>
        {stack.length > 0 && (
          <section className="project-field project-stack-field">
            <h3 className="project-label-stack">Tech stack</h3>
            <ul className="project-stack" aria-label="Technologies used">
              {stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}
        {points.length > 0 && (
          <section className="project-field">
            <h3 className="project-label-details">Details</h3>
            <ul>
              {points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </section>
        )}
        {link && (
          <a className="project-link" href={link} target="_blank" rel="noreferrer">
            View project
          </a>
        )}
      </div>
    </details>
  )
}

export default function Projects() {
  return (
    <>
      <header className="page-head">
        <h1>Projects</h1>
      </header>
      <div className="project-list">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </>
  )
}