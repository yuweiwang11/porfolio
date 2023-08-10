import './HomePage.css'
import Nav from '../Nav'
import Intro from '../Intro'
import ProjectOne from '../ProjectOne'
import Footer from '../Footer'

export default function HomePage() {
  return (
    <>
      <div className="body">
        <Nav />
        <div className="margin-body">
          <Intro />
        </div>

        <ProjectOne />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}
