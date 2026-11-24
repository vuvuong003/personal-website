import { skills } from '../data.js'

export default function Skills() {
  return (
    <div className="skills">
      {skills.map(({ group, items }) => (
        <div className="skill-row" key={group}>
          <h3>{group}</h3>
          <ul className="chips">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}