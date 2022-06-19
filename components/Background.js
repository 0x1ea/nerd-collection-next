// import React from "react"
// import CITY from "../assets/city_lq.png"
import styles from "../styles/Background.module.scss"

const Background = () => {
  return (
    <>
      <div className={styles.animationWrapper}>
        <div className={(styles.particle, styles.particle1)}></div>
        <div className={(styles.particle, styles.particle2)}></div>
        <div className={(styles.particle, styles.particle3)}></div>
        <div className={(styles.particle, styles.particle4)}></div>
      </div>
    </>
  )
}

export default Background
