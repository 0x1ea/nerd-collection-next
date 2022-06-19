import "../styles/App.css"
import "@rainbow-me/rainbowkit/styles.css"

import { getDefaultWallets, RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit"
import { chain, configureChains, createClient, WagmiConfig } from "wagmi"
import { infuraProvider } from "wagmi/providers/infura"
import { publicProvider } from "wagmi/providers/public"

const { chains, provider } = configureChains(
  [chain.rinkeby /* , chain.hardhat */],
  [infuraProvider({ infuraId: process.env.REACT_APP_INFURA_KEY }), publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: "Nerd Collection",
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme()}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
