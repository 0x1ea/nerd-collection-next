import React from "react"
import MintHeader from "../components/MintHeader"
import Background from "../components/Background"
import MainMint from "../components/MainMint"
import Head from "next/head"
const Mint = () => {
  return (
    <div>
      <Head>
        <title>Mint your Nerd NFT</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background />
      <MintHeader />

      <MainMint />
    </div>
  )
}

export default Mint
