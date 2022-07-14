import React from "react"
import TWITTER from "../assets/social-media-icons/twitter.png"
import DISCORD from "../assets/social-media-icons/discord.png"
import INSTAGRAM from "../assets/social-media-icons/instagram.png"
import About from "./About"
import styles from "../styles/Footer.module.css"
import Image from "next/image"
const Footer = ({ aboutSection }) => {
  return (
    <div className={styles.footerContainer} ref={aboutSection}>
      <About />

      <div className={styles.iconsContainer}>
        <a
          href="https://discord.gg/"
          className={styles.imageContainer}
          target="_blank"
          rel="noreferrer"
        >
          <Image src={DISCORD} alt="Discord Logo" />
        </a>
        <a
          href="https://twitter.com/"
          className={styles.imageContainer}
          target="_blank"
          rel="noreferrer"
        >
          <Image src={TWITTER} alt="Twitter Logo" />
        </a>
        <a
          href="https://instagram.com/"
          className={styles.imageContainer}
          target="_blank"
          rel="noreferrer"
        >
          <Image src={INSTAGRAM} alt="INSTAGRAM Logo" />
        </a>
      </div>
    </div>
  )
}

export default Footer
