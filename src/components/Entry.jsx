export function Entry({ heading, sub, dates, points = [] }) {
  return (
    <article className="entry">
      <div className="entry-head">
        <h3>{heading}</h3>
        {dates && <span className="meta">{dates}</span>}
      </div>
      {sub && <div className="meta">{sub}</div>}
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

export function Slot({ title, children }) {
  return (
    <div className="slot">
      <strong>{title}</strong>
      {children}
    </div>
  )
}