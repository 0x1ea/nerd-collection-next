import React from "react"
import contractAddressess from "../constants/contractAddresses.json"
import abi from "../constants/abi.json"
import { useContractWrite } from "wagmi"
import { useWaitForTransaction } from "wagmi"
import { ethers } from "ethers"
import styles from "../styles/MintButton.module.css"
import { useNetwork } from "wagmi"

const MintButton = ({ mintAmount }) => {
  const { activeChain } = useNetwork()

  const contractWrite = useContractWrite(
    {
      addressOrName: contractAddressess[activeChain.id][0],
      contractInterface: abi,
    },
    "mint",
    {
      args: [mintAmount, { value: ethers.utils.parseEther((0.02 * mintAmount).toString()) }],
    }
  )

  const waitForTransaction = useWaitForTransaction({
    hash: contractWrite.data?.hash,
  })

  return (
    <div
      className={styles.mint_button}
      id="mint_button"
      onClick={() => {
        console.log(activeChain.id)
        contractWrite.write()
      }}
    >
      {contractWrite.status === "idle" && "MINT"}
      {contractWrite.status === "loading" && "awaiting approval..."}
      {contractWrite.status === "error" && "something went wrong..."}
      {waitForTransaction.status === "loading" && "awaiting confirmation..."}
      {waitForTransaction.status === "success" && "¡Transaction success!"}
    </div>
  )
}

export default MintButton
