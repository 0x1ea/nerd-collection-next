import React, { useState } from "react"
import { useAccount } from "wagmi"
import Image from "next/image"
import GIF from "../assets/preview.gif"
import MintButton from "../components/MintButton"
import { useNetwork } from "wagmi"

const MainMint = () => {
  const price = 0.02
  const [showButton, setShowButton] = useState(false)
  const [mintAmount, setMintAmount] = useState(1)
  const { isConnected } = useAccount()
  const { chain } = useNetwork()

  const handleDecrement = () => {
    if (mintAmount <= 1) return
    setMintAmount(mintAmount - 1)
  }

  const handleIncrement = () => {
    if (mintAmount >= 10) return
    setMintAmount(mintAmount + 1)
  }

  React.useEffect(() => {
    if (chain?.id === 4 && isConnected) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }, [chain, isConnected])

  return (
    <div className=" text-start">
      <div className="bg-zinc-900 grid md:grid-cols-2 md:grid-rows-3 max-w-screen-lg mx-auto">
        <div className="p-4 row-start-2 md:row-start-1 mx-auto md:row-end-5  md:mt-24">
          <Image src={GIF} alt="sample image" className="rounded-lg" />
        </div>
        <div className="px-4 h-auto">
          <h1 className="font-sans font-semibold text-3xl mt-24 text-start pb-2">
            Nerds Collection
          </h1>
          <p className="font-sans text-base">999/10000 Minted</p>
        </div>
        <div className="p-4">
          {showButton ? (
            <div className="">
              <h2 className="text-3xl font-light">
                Price: <span>Ξ {(mintAmount * price).toFixed(2)}</span>
              </h2>
              <div className="flex flex-row">
                <h1 className="text-xl my-auto font-light">Cantidad: </h1>
                <input
                  className="bg-transparent text-white w-12 text-center text-2xl"
                  type="number"
                  value={mintAmount}
                  readOnly
                  onChange={(event) => {
                    setMintAmount(event.target.value)
                  }}
                />
                <div className="ml-auto">
                  <button
                    className="bg-transparent rounded-full border-2 border-neutral-600 p-2 mx-2  "
                    onClick={handleIncrement}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button
                    className="bg-transparent rounded-full border-2 border-neutral-600 p-2 mx-2"
                    onClick={handleDecrement}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <MintButton mintAmount={mintAmount} />
            </div>
          ) : (
            <button className="bg-[#ff494a] flex z-10 rounded-lg cursor-pointer font-sans text-lg justify-center place-items-center shadow-md hover:scale-x-105 font-bold h-16 mt-6 px-4 md:my-full">
              Debes estar conectado a Rinkeby para adquirir un NFT
            </button>
          )}
        </div>
        <p className="font-sans text-base pb-4 md:col-start-2 p-4 my-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia erat tortor, eget
          auctor libero bibendum sit amet. Mauris ut eleifend sapien. Vivamus vitae posuere ipsum,
          vitae cursus nisi. Pellentesque lobortis pretium purus quis convallis.
        </p>
        <div className="text-white p-4 font-sans border-t-2 border-neutral-800 md:col-start-2 pb-12">
          <h1 className="text-lg">Features</h1>
          <ul className="list-disc p-4 opacity-80 font-light">
            <li>Multiple strap configuration</li>
            <li>Interior dividers</li>
            <li>Water-resistant</li>
            <li>Interior dividers</li>
            <li>Water-resistant</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MainMint
