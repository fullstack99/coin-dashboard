import React, { useState, useEffect } from "react"
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
import Carousel from "@components/Carousel"
import NewsPrimary from "@components/NewsPrimary"
import NewsSecondary from "@components/NewsSecondary"
import NewsTertiary from "@components/NewsTertiary"

const NewsPage = ({ data }) => {
  const [selected, setSelected] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const {
    categories,
    newsPrimary,
    newsSecondary,
    newsTertiary
  } = data.allNewsJson.edges[0].node

  useEffect(() => {
    setIsLoading(false)
  }, [data.allNewsJson.edges[0].node])

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
        <Row className="mb-5 mb-md-3">
          {!isLoading ? (
            <Carousel>
              {newsPrimary.map((news, index) => (
                <Col key={index}>
                  <NewsPrimary data={news} className="mb-5" />
                </Col>
              ))}
            </Carousel>
          ) : (
            <div>Loading</div>
          )}
        </Row>
        <Row>
          <Col lg={8} xl={9} className="position-relative">
            {newsSecondary.map((news, index) => (
              <NewsSecondary key={index} data={news} className="mb-5" />
            ))}
          </Col>
          <Col lg={4} xl={3}>
            <Card title="Top Stories">
              {newsTertiary.map((news, index) => (
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
