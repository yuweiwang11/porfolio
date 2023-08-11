import './HomePage.css'

import Nav from '../Nav'
import Intro from '../Intro'
import ProjectOne from '../ProjectOne'
import Footer from '../Footer'
import SwiperProject from '../SwiperProject'
import ProjectTwo from '../ProjectTwo'

export default function HomePage() {
  return (
    <>
      <div className="body">
        <Nav />
        <div className="margin-body">
          <Intro />
        </div>
        <div className="">
          <SwiperProject />
          {/* <ProjectOne /> */}

          {/* <ProjectTwo /> */}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}
