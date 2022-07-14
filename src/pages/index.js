import Head from "next/head"
import Home from "../components/Home"

export default function MyHome() {
  return (
    <>
      <Head>
        <title>Nerd Collection</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  )
}
