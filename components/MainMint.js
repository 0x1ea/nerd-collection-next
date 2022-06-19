import { useState } from "react"
import { useConnect } from "wagmi"
import MintButton from "./MintButton"
import Carousel from "./Carousel"
import styles from "../styles/MainMint.module.css"

const MainMint = () => {
  const [mintAmount, setMintAmount] = useState(1)

  const { isConnected } = useConnect()

  const handleDecrement = () => {
    if (mintAmount <= 1) return
    setMintAmount(mintAmount - 1)
  }

  const handleIncrement = () => {
    if (mintAmount >= 3) return
    setMintAmount(mintAmount + 1)
  }

  return (
    <>
      <div className={styles.mint_container}>
        <div className={styles.text_container}>
          <h1 className={styles.mint_title}>Nerd Collection</h1>
          <Carousel />
          {/* <p className="main-mint-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nullam nec lobortis tellus, id semper arcu. Vivamus ut ante massa. 
          Donec pulvinar convallis lorem, ut scelerisque nisl pharetra consequat. 
          Ut pulvinar aliquet diam. Ut iaculis libero quis rutrum cursus. 
        </p> */}
        </div>

        {isConnected ? (
          <div className={styles.mint_card}>
            <div>
              <button className={styles.count_button_left} onClick={handleDecrement}>
                <p>-</p>
              </button>

              <input
                className={styles.count_input}
                type="number"
                value={mintAmount}
                readOnly
                onChange={(event) => {
                  setMintAmount(event.target.value)
                }}
              />

              <button className={styles.count_button_right} onClick={handleIncrement}>
                +
              </button>
            </div>
            <MintButton mintAmount={mintAmount} />
          </div>
        ) : (
          <p className={styles.text_disclaimer}>
            Debes estar conectado a Rinkeby para adquirir un NFT.
          </p>
        )}
      </div>
    </>
  )
}

export default MainMint
