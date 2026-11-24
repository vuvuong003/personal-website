import { education, profile } from '../data.js'
import { Entry, Slot } from './Entry.jsx'
import Skills from './Skills.jsx'
import Contact from './Contact.jsx'

export default function Other() {
  return (
    <>
      <header className="page-head">
        <h1>More About Me!</h1>
      </header>

      <section className="block">
        <h2 className="block-title">Education</h2>
        {education.length === 0 ? (
          <Slot title="Add your education">
            Add your school, degree, expected graduation date and relevant coursework in src/data.js. Your AI
            course belongs here.
          </Slot>
        ) : (
          <div className="stack-list">
            {education.map((e) => (
              <Entry key={e.degree} heading={e.degree} sub={e.school} dates={e.dates} points={e.points} />
            ))}
          </div>
        )}
      </section>

      <section className="block">
        <h2 className="block-title">Skills</h2>
        <Skills />
      </section>

      <section className="block">
        <h2 className="block-title">Fun Facts About Me</h2>
        <ul>
          <li>I am a huge NBA fan. My favorite team is the Toronto Raptors (We The North!!). Although recently, I have been watching a lot of NFL games too as it's been a lot of fun learning the rules and how they play.</li>
          <li>I have also participated in multiple fantasy basketball and football leagues on Yahoo and ESPN. It's nice to say that I'm quite good at it haha!</li>
          <li>I also enjoy traveling and exploring new places. Countries I have been to outside the United States are Canada, Vietnam (2x), Thailand, and Singapore.</li>
          <li>I love Vietnamese cuisine as their food is so diverse and flavorful. My favorite food is Bun Bo Hue. It is a must-try dish if you ever visit Vietnam!</li>
        </ul>
      </section>

    </>
  )
}