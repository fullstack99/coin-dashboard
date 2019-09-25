import React from "react"
import { graphql } from "gatsby"
import { Router } from "@reach/router"

import News from "@compositions/News"

const NewsPage = ({ data }) => {
  const { node } = data.allNewsJson.edges[0]
  return (
    <Router>
      <News path="/news/" node={node} />
      <News path="/news/:section" node={node} />
    </Router>
  )
}

export const query = graphql`
  {
    allNewsJson {
      edges {
        node {
          title
          description
          categories {
            text
            title
            url
          }
          newsPrimary {
            url
            imgSrc
            iconSrc
            iconAlt
            title
            time
          }
          newsSecondary {
            url
            imgSrc
            iconSrc
            iconAlt
            title
            tags {
              tag
            }
            description
            time
          }
          newsTertiary {
            url
            imgSrc
            title
            time
          }
        }
      }
    }
  }
`

export default NewsPage
