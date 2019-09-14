import React from "react"
import { string, any } from "prop-types"

import Layout from "@components/Layout"
import SEO from "@components/Seo"
import Overview from "@components/Overview"

import AllMarkets from "./components/AllMarkets"
import CoinsMarkets from "./components/CoinsMarkets"
import SectorTemplate from "./components/SectorTemplate"

export const ALL_MARKETS = ""
export const COINS = "coins"
export const ANOTHER_SECTOR = "another-sector"
export const SECTORS = "sectors"

const PolyComponent = props => {
  const { section } = props // eslint-disable-line react/prop-types
  const Sections = {
    [ALL_MARKETS]: AllMarkets,
    [COINS]: CoinsMarkets,
    [ANOTHER_SECTOR]: SectorTemplate
  }
  const WrappedComponent = Sections[section] || null
  if (!WrappedComponent) return null
  return <WrappedComponent />
}

const Categories = [
  {
    text: "All Markets",
    title: "View All Markets data",
    url: `/${ALL_MARKETS}`
  },
  {
    text: "Coins",
    title: "View Coins data",
    url: `/markets/${COINS}`
  },
  {
    text: "Sector Y",
    title: "View Sector Y data",
    url: `/markets/${ANOTHER_SECTOR}`
  }
]
const Markets = ({ section, location }) => (
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
    <PolyComponent section={section} />
  </Layout>
)

Markets.propTypes = {
  location: any,
  section: string
}
Markets.defaultProps = {
  location: {},
  section: ALL_MARKETS
}

export default Markets
