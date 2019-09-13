import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { string, any } from "prop-types"

import Layout from "@components/Layout"
import SEO from "@components/Seo"
import Overview from "@components/Overview"

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

const News = ({ node, section }) => {
  const [isLoading, setIsLoading] = useState(false)

  const { categories } = node
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
          <Overview currentSection={section} sections={categories} />
          <SectionComponent
            section={section}
            node={node}
          />
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
