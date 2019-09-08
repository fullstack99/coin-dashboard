import React, { useState } from "react"
import { graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Layout from "@components/Layout"
import SEO from "@components/Seo"
import CurrencyTicker from "@components/CurrencyTicker"
import ButtonsGroup from "@components/ButtonsGroup"
import Button from "@components/Button"
import Card from "@components/Card"
import NewsPrimary from "@components/NewsPrimary"
import NewsSecondary from "@components/NewsSecondary"
import NewsTertiary from "@components/NewsTertiary"

const NewsPage = ({ data }) => {
  const [selected, setSelected] = useState(0)

  const {
    categories,
    topNews,
    secondaryNews,
    tertiaryNews
  } = data.allNewsJson.edges[0].node

  return (
    <Layout>
      <SEO title="News" />
      <CurrencyTicker />
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md={10} lg={8} className="mt-5">
            <ButtonsGroup>
              {categories.map((category, index) => (
                <Button
                  key={index}
                  onClick={() => {
                    setSelected(index)
                  }}
                  active={selected === index}
                >
                  {category.title}
                </Button>
              ))}
            </ButtonsGroup>
          </Col>
        </Row>
        <Row>
          {topNews.map((news, index) => (
            <Col md={4} key={index} className="position-relative mb-5">
              <NewsPrimary data={news} />
            </Col>
          ))}
        </Row>
        <Row>
          <Col lg={8} xl={9} className="position-relative">
            {secondaryNews.map((news, index) => (
              <NewsSecondary key={index} data={news} className="mb-5" />
            ))}
          </Col>
          <Col lg={4} xl={3}>
            <Card title="Top Stories">
              {tertiaryNews.map((news, index) => (
                <NewsTertiary key={index} data={news} />
              ))}
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    allNewsJson {
      edges {
        node {
          categories {
            title
          }
          topNews {
            imgSrc
            iconSrc
            iconAlt
            title
            time
          }
          secondaryNews {
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
          tertiaryNews {
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
