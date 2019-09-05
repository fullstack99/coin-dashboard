import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Layout from "@components/Layout"
import SEO from "@components/Seo"
import CurrencyTicker from "@components/CurrencyTicker"
import ButtonsGroup from "@components/ButtonsGroup"
import Button from "@components/Button"

const Categories = [
  "Coins",
  "Sources",
  "Featured Articles",
  "Latest Articles",
  "Select Sector"
]

const NewsPage = () => {
  const [selected, setSelected] = useState(0)

  return (
    <Layout>
      <SEO title="News" />
      <CurrencyTicker />

      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md={10} lg={8} className="my-5">
            <ButtonsGroup>
              {Categories.map((title, index) => (
                <Button
                  key={index}
                  onClick={() => {
                    setSelected(index)
                  }}
                  active={selected === index}
                >
                  {title}
                </Button>
              ))}
            </ButtonsGroup>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default NewsPage
