import { useRef } from "react"
// import { NavLink } from "react-router-dom"

import RoadmapGrid from "../components/RoadmapGrid"
import Carousel from "../components/Carousel"
import TeamCard from "../components/TeamCard"
import Header from "../components/Header"
import Info from "../components/Info"
import Footer from "../components/Footer"
import Background from "../components/Background"
import Link from "next/link"
// import Image from "next/image"
import styles from "../styles/Home.module.css"

const Home = () => {
  const initialSection = useRef(null)
  const carouselSection = useRef(null)
  const roadmapSection = useRef(null)
  const teamSection = useRef(null)
  const aboutSection = useRef(null)

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    })
  }

  return (
    <div ref={initialSection}>
      <Background />
      <p ref={initialSection}></p>
      <Header
        initialSection={initialSection}
        roadmapSection={roadmapSection}
        carouselSection={carouselSection}
        teamSection={teamSection}
        aboutSection={aboutSection}
      />

      <h1 className={styles.home_title}>Nerd&#8217;s Collection</h1>

      {/* <button
        className={styles.big_button}
        onClick={() => {
          scrollDown(carouselSection)
        }}
      >
        
      </button> */}
      {/* <div className={styles.home_image}><Image src={TEST} alt="sphere" priority /></div> */}

      <Carousel carouselSection={carouselSection} />
      <div className={styles.buy_container}>
        <Link href="/mint">
          <a className={styles.buy_button}>MINT</a>
        </Link>
      </div>
      <Info carouselSection={carouselSection} />

      <RoadmapGrid roadmapSection={roadmapSection} />
      <TeamCard teamSection={teamSection} />

      <Footer aboutSection={aboutSection} />
    </div>
  )
}

export default Home
