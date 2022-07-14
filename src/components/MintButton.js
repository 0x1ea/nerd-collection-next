import React from "react"
import contractAddressess from "../constants/contractAddresses.json"
import abi from "../constants/abi.json"
import { useContractWrite } from "wagmi"
import { useWaitForTransaction } from "wagmi"
import { ethers } from "ethers"

const MintButton = ({ mintAmount }) => {
  const { status, write, data } = useContractWrite({
    addressOrName: contractAddressess["4"][0],
    contractInterface: abi,
    functionName: "mint",
    args: [mintAmount, { value: ethers.utils.parseEther((0.02 * mintAmount).toString()) }],
  })

  const waitForTransaction = useWaitForTransaction({
    hash: data?.hash,
  })

  return (
    <>
      <div
        className="flex z-10 rounded-lg bg-blue-500 cursor-pointer font-sans text-lg justify-center place-items-center shadow-md hover:scale-x-105 font-bold mx-auto h-16 mt-6"
        id="mint_button"
        onClick={() => {
          try {
            write()
          } catch (e) {
            console.log(e)
          }
        }}
      >
        {status === "idle" && "COMPRAR"}
        {status === "loading" && "Esperando aprobación..."}
        {status === "error" && "Algo salió mal..."}
        {waitForTransaction.status === "loading" && "Esperando confirmación..."}
        {waitForTransaction.status === "success" && "¡Transacción exitosa!"}
      </div>
    </>
  )
}

export default MintButton
