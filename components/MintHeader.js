import React from "react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import Link from "next/link"

import styles from "../styles/MintHeader.module.css"

const MintHeader = () => {
  const [headerColor, setHeaderColor] = React.useState("none")

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setHeaderColor("var(--action-color2)") : setHeaderColor("none")
  }

  React.useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  })

  return (
    <header className={styles.mint_header} style={{ backgroundColor: headerColor }}>
      <nav className={styles.mint_nav}>
        <Link href="/" className={styles.mint_nav_link}>
          <div className={styles.mint_logo}>
            <a>NERD</a>
            {/* <Image src={LOGO} alt="logo" /> */}
          </div>
        </Link>

        <div className={styles.connect_button}>
          <ConnectButton showBalance={false} accountStatus="address" />
        </div>
      </nav>
    </header>
  )
}

export default MintHeader
