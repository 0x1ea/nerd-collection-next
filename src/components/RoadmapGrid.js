import React from "react"
import Image from "next/image"
import styles from "../styles/RoadmapGrid.module.css"
// import COLUMN1 from "../assets/icons/c1.png"
// import COLUMN2 from "../assets/icons/c2.png"
// import COLUMN3 from "../assets/icons/c3.png"
// import COLUMN4 from "../assets/icons/c4.png"

const RoadmapGrid = ({ roadmapSection }) => {
  return (
    <>
      <h1 className={styles.roadmap_card_title} ref={roadmapSection}>
        Roadmap
      </h1>
      <div className={styles.roadmap_card_container}>
        <div className={styles.roadmap_row}>
          <div className={styles.roadmap_column}>
            <div className={styles.roadmap_card}>
              <div className={styles.roadmap_container}>
                <h2>Roadmap Title</h2>
                <p className={styles.roadmap_title}>0%</p>
                {/* <Image src={COLUMN2} alt="Column 2" /> */}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui mauris,
                  elementum in rhoncus sit amet, sodales ac nisi. Donec ultrices urna magna, et
                  vulputate.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.roadmap_column}>
            <div className={styles.roadmap_card}>
              <div className={styles.roadmap_container}>
                <h2>Roadmap Title</h2>
                <p className={styles.roadmap_title}>20%</p>
                {/* <Image src={COLUMN2} alt="Column 2" /> */}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui mauris,
                  elementum in rhoncus sit amet, sodales ac nisi. Donec ultrices urna magna, et
                  vulputate.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.roadmap_column}>
            <div className={styles.roadmap_card}>
              <div className={styles.roadmap_container}>
                <h2>Roadmap Title</h2>
                <p className={styles.roadmap_title}>40%</p>
                {/* <Image src={COLUMN3} alt="Column 3" /> */}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui mauris,
                  elementum in rhoncus sit amet, sodales ac nisi. Donec ultrices urna magna, et
                  vulputate.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.roadmap_column}>
            <div className={styles.roadmap_card}>
              <div className={styles.roadmap_container}>
                <h2>Roadmap Title</h2>
                <p className={styles.roadmap_title}>60%</p>
                {/* <Image src={COLUMN3} alt="Column 3" /> */}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui mauris,
                  elementum in rhoncus sit amet, sodales ac nisi. Donec ultrices urna magna, et
                  vulputate.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.roadmap_column}>
            <div className={styles.roadmap_card}>
              <div className={styles.roadmap_container}>
                <h2>Roadmap Title</h2>
                <p className={styles.roadmap_title}>80%</p>
                {/* <Image src={COLUMN4} alt="Column 4" /> */}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui mauris,
                  elementum in rhoncus sit amet, sodales ac nisi. Donec ultrices urna magna, et
                  vulputate.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.roadmap_column}>
            <div className={styles.roadmap_card}>
              <div className={styles.roadmap_container}>
                <h2>Roadmap Title</h2>
                <p className={styles.roadmap_title}>100%t</p>
                {/* <Image src={COLUMN4} alt="Column 4" /> */}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui mauris,
                  elementum in rhoncus sit amet, sodales ac nisi. Donec ultrices urna magna, et
                  vulputate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RoadmapGrid
