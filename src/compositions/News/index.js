import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import { string, any } from "prop-types"

import Layout from "@components/Layout"
import SEO from "@components/Seo"
import Overview from "@components/Overview"
import CoinIcon from "@components/CoinIcon"
import Subscribe from "@components/Subscribe"

import Featured from "./components/Featured"
import Coins from "./components/Coins"
import Sources from "./components/Sources"
import Latest from "./components/Latest"
import Sectors from "./components/Sectors"

export const FEATURED = ""
export const COINS = "coins"
export const SOURCES = "sources"
export const LATEST = "latest"
export const SECTORS = "sectors"

const SectionComponent = props => {
  const { section, node } = props // eslint-disable-line react/prop-types
  const Sections = {
    [FEATURED]: Featured,
    [COINS]: Coins,
    [SOURCES]: Sources,
    [LATEST]: Latest,
    [SECTORS]: Sectors
  }
  const WrappedComponent = Sections[section] || null
  if (!WrappedComponent) return null
  return <WrappedComponent node={node} />
}

const SubscribeAbsolute = styled(Subscribe)`
  margin-bottom: 17px;
  max-width: 100%;
  min-width: 140px;
  padding-left: 0;
  padding-right: 0;
  position: relative;
  width: 100%;

  @media (min-width: 768px) {
    bottom: 0;
    box-sizing: border-box;
    font-size: 11px;
    padding-left: 8px;
    padding-right: 8px;
    position: absolute;
    right: 0;
  }
`

const News = ({ node, section }) => {
  const [isLoading, setIsLoading] = useState(false)

  const { categories, title, description } = node
  useEffect(() => {
    setIsLoading(false)
  }, [node])

  // IF PAGE NOT FOUND
  if ([FEATURED, COINS, SOURCES, LATEST, SECTORS].indexOf(section) === -1) {
    navigate(FEATURED)
    return null
  }
  return (
    <Layout>
      <SEO title={`News / ${section || "Featured"}`} />
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <>
          <Overview
            icon={
              <CoinIcon
                position="relative"
                size={40}
                src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png"
                alt="BTC"
              />
            }
            title={title}
            description={description}
            currentSection={section}
            sections={categories}
            callToAction={<SubscribeAbsolute>Subscribe +</SubscribeAbsolute>}
          />
          <SectionComponent section={section} node={node} />
        </>
      )}
    </Layout>
  )
}

News.propTypes = {
  section: string,
  node: any
}

News.defaultProps = {
  section: FEATURED,
  node: {}
}

export default News
