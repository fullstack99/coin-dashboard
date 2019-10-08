import React from "react"
import { graphql } from "gatsby"

import Layout from "@components/Layout"
import SEO from "@components/Seo"
import Hero from "@components/Hero"

const MediaPage = ({ data }) => {
  const { hero } = data.allAboutJson.edges[0].node

  const { HeroImage } = data

  return (
    <Layout>
      <SEO title="Media" />
      <div className="about">
        <Hero data={hero} fluid={HeroImage.childImageSharp.fluid} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allAboutJson {
      edges {
        node {
          hero {
            preHeading
            heading
            text
            cta
          }
        }
      }
    }
    HeroImage: file(relativePath: { eq: "illustration.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default MediaPage
