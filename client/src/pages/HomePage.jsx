import './HomePage.css'
import Nav from '../Nav'
import Intro from '../Intro'
export default function HomePage() {
  return (
    <>
      <div className="body">
        <Nav />
        <div className="margin-body">
          <Intro />
        </div>
      </div>
    </>
  )
}
