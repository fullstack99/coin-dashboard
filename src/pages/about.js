import React from "react"
import { graphql } from "gatsby"

import Layout from "@components/Layout"
import SEO from "@components/Seo"
import CurrencyTicker from "@components/CurrencyTicker"
import Hero from "@components/Hero"
import Tools from "@components/Tools"
import Signals from "@components/Signals"
import Features from "@components/Features"
import SocialTrading from "@components/SocialTrading"
import Roadmap from "@components/Roadmap"

const MediaPage = ({ data }) => {
  const {
    hero,
    tools,
    signals,
    features,
    socialTrading,
    roadmap
  } = data.allAboutJson.edges[0].node

  const {
    HeroImage,
    marketDataImage,
    SocialTradingImage,
    calendarImage,
    timeline
  } = data

  return (
    <Layout>
      <SEO title="About Us" />
      <CurrencyTicker />
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
        <Roadmap data={roadmap} fluid={timeline.childImageSharp.fluid} />
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
            cta1
            cta2
          }
          tools {
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
          roadmap {
            subHeading
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
    marketDataImage: file(relativePath: { eq: "float.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    SocialTradingImage: file(relativePath: { eq: "cg-score.png" }) {
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
    timeline: file(relativePath: { eq: "timeline.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default MediaPage
