import './ProjectTwo.css'
import { Link } from 'react-router-dom'

export default function ProjectTwo() {
  return (
    <>
      <div>
        <div className="project-one">
          <span>
            <a href="#"></a>
          </span>
          <button className="before-button">before</button>
          <Link to="ProjectOne" className="next-button">
            next
          </Link>
        </div>
        <div className="tech-stack">// Tech stack</div>
        <div className="tech-stack">
          <div className="stack">ProjectTwo</div>
          <div className="stack">Node.js</div>
          <div className="stack">Express.js</div>
          <div className="stack">MongoDB</div>
          <div className="stack">Tailwind CSS</div>
        </div>
      </div>
    </>
  )
}
