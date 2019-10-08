import React from "react"
import { graphql } from "gatsby"

import Layout from "@components/Layout"
import SEO from "@components/Seo"
import Hero from "@components/Hero"
import Tools from "@components/Tools"
import Signals from "@components/Signals"
import Features from "@components/Features"
import SocialTrading from "@components/SocialTrading"

const MediaPage = ({ data }) => {
  const {
    hero,
    tools,
    signals,
    features,
    socialTrading
  } = data.allAboutJson.edges[0].node

  const { HeroImage, marketDataImage, SocialTradingImage, calendarImage } = data

  return (
    <Layout>
      <SEO title="Media" />
      <div className="about">
        <Hero data={hero} fluid={HeroImage.childImageSharp.fluid} />
        <Tools data={tools} />
        <Signals data={signals} />
        <Features
          data={features}
          fluid={marketDataImage.childImageSharp.fluid}
          calender={calendarImage.childImageSharp.fluid}
        />
        <SocialTrading
          data={socialTrading}
          fluid={SocialTradingImage.childImageSharp.fluid}
          calender={calendarImage.childImageSharp.fluid}
        />
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
          tools {
            preHeading
            heading
            text
            tools_boxes {
              tool_title
              tool_text
            }
          }
          signals {
            preHeading
            heading
            text
            signals_boxes {
              signal_title
              signal_text
            }
          }
          features {
            preHeading
            heading
            features_boxes {
              feature_title
              feature_text
            }
          }
          socialTrading {
            preHeading
            heading
            features_boxes {
              feature_title
              feature_text
            }
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
    marketDataImage: file(relativePath: { eq: "float.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    SocialTradingImage: file(relativePath: { eq: "UI-illustration.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    calendarImage: file(relativePath: { eq: "i-calendar.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default MediaPage
