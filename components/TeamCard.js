import React from "react"
import IMAGE1 from "../assets/ppl/1.jpg"
import IMAGE2 from "../assets/ppl/2.jpg"
import IMAGE3 from "../assets/ppl/3.jpg"
import IMAGE4 from "../assets/ppl/4.jpg"
import IMAGE5 from "../assets/ppl/5.jpg"
import IMAGE6 from "../assets/ppl/6.jpg"
import styles from "../styles/TeamCard.module.css"
import Image from "next/image"

const TeamCard = ({ teamSection }) => {
  return (
    <>
      <h1 className={styles.teamCardTitle} ref={teamSection}>
        Our Team
      </h1>
      <div className={styles.teamCardContainer}>
        <div className={styles.teamRow}>
          <div className={styles.teamColumn}>
            <div className={styles.teamCard}>
              <Image src={IMAGE1} alt="Jane" /* style="width:100%" */ />
              <div className={styles.teamContainer}>
                <h2>Jane Doeg</h2>
                <p className={styles.teamTitle}>CEO</p>
                {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
                {/* <p>example@example.com</p> */}
                <p>
                  <a href="google.com" className={styles.teamButton}>
                    Contactar
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className={styles.teamColumn}>
            <div className={styles.teamCard}>
              <Image src={IMAGE4} alt="John" /* style="width:100%" */ />
              <div className={styles.teamContainer}>
                <h2>John Doeg</h2>
                <p className={styles.teamTitle}>CFO</p>
                {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
                {/* <p>example@example.com</p> */}
                <p>
                  <a href="google.com" className={styles.teamButton}>
                    Contactar
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className={styles.teamColumn}>
            <div className={styles.teamCard}>
              <Image src={IMAGE2} alt="Mike" /* style="width:100%" */ />
              <div className={styles.teamContainer}>
                <h2>Mike Ross</h2>
                <p className={styles.teamTitle}>CTO</p>
                {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
                {/* <p>example@example.com</p> */}
                <p>
                  <a href="google.com" className={styles.teamButton}>
                    Contactar
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className={styles.teamColumn}>
            <div className={styles.teamCard}>
              <Image src={IMAGE3} alt="John" /* style="width:100%" */ />
              <div className={styles.teamContainer}>
                <h2>John Doeg</h2>
                <p className={styles.teamTitle}>Art Director</p>
                {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
                {/* <p>example@example.com</p> */}
                <p>
                  <a href="google.com" className={styles.teamButton}>
                    Contactar
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.teamColumn}>
            <div className={styles.teamCard}>
              <Image src={IMAGE5} alt="John" /* style="width:100%" */ />
              <div className={styles.teamContainer}>
                <h2>John Doeg</h2>
                <p className={styles.teamTitle}>Designer</p>
                {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
                {/* <p>example@example.com</p> */}
                <p>
                  <a href="google.com" className={styles.teamButton}>
                    Contactar
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className={styles.teamColumn}>
            <div className={styles.teamCard}>
              <Image src={IMAGE6} alt="John" /* style="width:100%" */ />
              <div className={styles.teamContainer}>
                <h2>John Doeg</h2>
                <p className={styles.teamTitle}>Designer</p>
                {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
                {/* <p>example@example.com</p> */}
                <p>
                  <a href="https://google.com" className={styles.teamButton}>
                    Contactar
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.teamColumn}>
            <div className={styles.teamCard}>
              <Image src={IMAGE6} alt="John" /* style="width:100%" */ />
              <div className={styles.teamContainer}>
                <h2>John Doeg</h2>
                <p className={styles.teamTitle}>Designer</p>
                {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
                {/* <p>example@example.com</p> */}
                <p>
                  <a href="https://google.com" className={styles.teamButton}>
                    Contactar
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.teamColumn}>
            <div className={styles.teamCard}>
              <Image src={IMAGE6} alt="John" /* style="width:100%" */ />
              <div className={styles.teamContainer}>
                <h2>John Doeg</h2>
                <p className={styles.teamTitle}>Designer</p>
                {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
                {/* <p>example@example.com</p> */}
                <p>
                  <a href="https://google.com" className={styles.teamButton}>
                    Contactar
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamCard
