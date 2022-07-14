import React from "react"
import nerd1 from "../assets/nerds_v1/1.png"
import nerd2 from "../assets/nerds_v1/2.png"
import nerd3 from "../assets/nerds_v1/3.png"
import nerd4 from "../assets/nerds_v1/4.png"
import styles from "../styles/Carousel.module.css"
import Image from "next/image"
const Carousel = ({ carouselSection }) => {
  return (
    <>
      {/* <h1 className={styles.carousel_title} ref={carouselSection}>
        Meet the Nerds
      </h1> */}
      <div></div>
      <div className={styles.carousel_container}>
        <div className={styles.card}>
          <h3 className={styles.title}>Nerd #4</h3>
          <div className={styles.bar}>
            <div className={styles.emptybar}></div>
            <div className={styles.filledbar}></div>
          </div>
          <div className={styles.nft_image}>
            <Image src={nerd4} alt="sample nft" />
          </div>
        </div>
        <div className={styles.card}>
          <h3 className={styles.title}>Nerd #3</h3>
          <div className={styles.bar}>
            <div className={styles.emptybar}></div>
            <div className={styles.filledbar}></div>
          </div>
          <div className={styles.nft_image}>
            <Image src={nerd3} alt="sample nft" />
          </div>
        </div>
        <div className={styles.card}>
          <h3 className={styles.title}>Nerd #2</h3>
          <div className={styles.bar}>
            <div className={styles.emptybar}></div>
            <div className={styles.filledbar}></div>
          </div>
          <div className={styles.nft_image}>
            <Image src={nerd2} alt="sample nft" />
          </div>
        </div>
        <div className={styles.card}>
          <h3 className={styles.title}>Nerd #1</h3>
          <div className={styles.bar}>
            <div className={styles.emptybar}></div>
            <div className={styles.filledbar}></div>
          </div>
          <div className={styles.nft_image}>
            <Image src={nerd1} alt="sample nft" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Carousel
