import React from "react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import Image from "next/image"
import Link from "next/link"
import MENU from "../assets/icons8-menu-rounded-50.png"
import styles from "../styles/Header.module.css"

const Header = ({
  initialSection,
  roadmapSection,
  carouselSection,
  teamSection,
  aboutSection,
}) => {
  const [menuVisible, setMenuVisible] = React.useState(false)
  const [headerColor, setHeaderColor] = React.useState(" ")

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setHeaderColor("var(--action-color2)") : setHeaderColor(" ")
  }

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    })
  }

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  React.useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  })

  return (
    <header className={styles.header} style={{ backgroundColor: headerColor }}>
      <nav className={styles.nav}>
        <Link className={styles.nav_link} href="/">
          <div
            onClick={() => {
              scrollDown(initialSection)
              setMenuVisible(!menuVisible)
            }}
            className={styles.logoImage}
          >
            <a>NERD</a>
            {/* <Image src={LOGO} alt="logo" /> */}
          </div>
          {/* <img className={styles.logo} src={LOGO} alt="logo" /> */}
        </Link>
        <button
          className={styles.nav_toggle}
          aria-label="Abrir menú"
          onClick={() => setMenuVisible(!menuVisible)}
        >
          <div className={styles.hamburger}>
            <Image src={MENU} alt="Hamburger menu icon" />
          </div>
        </button>
        <div className={menuVisible ? styles.nav_menu_visible : styles.nav_menu}>
          <div className={styles.nav_menu_item}>
            <a
              href="#nerd"
              className={
                styles.nav_menu_link
                /* 
                styles.nav_menu_link_active,
                styles.nav_link
                */
              }
              onClick={() => {
                scrollDown(carouselSection)
                setMenuVisible(!menuVisible)
              }}
            >
              Mint
            </a>
          </div>
          <div className={styles.nav_menu_item}>
            <a
              href="#roadmap"
              className={
                styles.nav_menu_link /* ,
                styles.nav_menu_link_active,
                styles.nav_link */
              }
              onClick={() => {
                scrollDown(roadmapSection)
                setMenuVisible(!menuVisible)
              }}
            >
              Roadmap
            </a>
          </div>

          <div className={styles.nav_menu_item}>
            <a
              href="#team"
              className={
                styles.nav_menu_link /* ,
                styles.nav_menu_link_active,
                styles.nav_link */
              }
              onClick={() => {
                scrollDown(teamSection)
                setMenuVisible(!menuVisible)
              }}
            >
              Team
            </a>
          </div>

          <div className={styles.nav_menu_item}>
            <a
              href="#about"
              className={
                styles.nav_menu_link /* ,
                styles.nav_menu_link_active,
                styles.nav_link */
              }
              onClick={() => {
                scrollDown(aboutSection)
                setMenuVisible(!menuVisible)
              }}
            >
              ABOUT
            </a>
          </div>
        </div>

        <div className={styles.connect_button}>
          <ConnectButton
            chainStatus="icon"
            showBalance={false}
            accountStatus="address"
            label="Conectar Wallet"
          />
        </div>
      </nav>
    </header>
  )
}

export default Header
