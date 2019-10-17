import React from "react"
import { string, any } from "prop-types"

import Layout from "@components/Layout"
import SEO from "@components/Seo"
import Overview from "@components/Overview"

import AllMarkets from "./components/AllMarkets"

const Categories = [
  {
    text: "Biggest Gainers",
    title: "View Biggest Gainers data",
    url: "/"
  },
  {
    text: "Biggest Losers",
    title: "View Biggest Losers data",
    url: "/markets/biggest-losers"
  },
  {
    text: "Highest Volume",
    title: "View Highest Volume data",
    url: "/markets/highest-volume"
  },
  {
    text: "Top 10",
    title: "View Top 10 data",
    url: "/markets/top-10"
  },
  {
    text: "Large Market Cap Sector",
    title: "View Large Market Cap Sector data",
    url: "/markets/large-market-cap-sector"
  },
  {
    text: "Stablecoins",
    title: "View Stablecoins data",
    url: "/markets/stablecoins"
  },
  {
    text: "Tokens",
    title: "View Tokens data",
    url: "/markets/tokens"
  },
  {
    text: "SmartContracts",
    title: "View SmartContracts data",
    url: "/markets/smart-contracts"
  },
  {
    text: "Interoperability",
    title: "View Interoperability data",
    url: "/markets/interoperability"
  },
  {
    text: "Privacy Coins",
    title: "View Privacy Coins data",
    url: "/markets/privacy-coins"
  },
  {
    text: "Test Chart",
    title: "View Test Chart data",
    url: "/markets/firebase-chart"
  }
]
const Markets = ({ location }) => {
  const selected = Categories.find(item => item.url === location.pathname)
  return (
    <Layout>
      <SEO
        title="Market and sentiment crypto trading analysis | Coingenius"
        description="CoinGenius is helping the world trade smarter by providing real time crypto trading market and sentiment analysis"
      />
      <Overview
        title="Market Index"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        sections={Categories}
        location={location}
      />
      <AllMarkets section={selected.text}/>
    </Layout>
  )
}

Markets.propTypes = {
  location: any,
  section: string
}
Markets.defaultProps = {
  location: {},
  section: ""
}

export default Markets
