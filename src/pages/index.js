import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

import Layout from "@components/Layout"
import SEO from "@components/Seo"
import CurrencyTicker from "@components/CurrencyTicker"
import CryptoMarket from "@components/CryptoMarket"
import ButtonsGroup from "@components/ButtonsGroup"
import Button from "@components/Button"
import CoinsTable from "@components/CoinsTable"

const Categories = [
  "Stablecoins",
  "Tokens",
  "SmartContracts",
  "Interoperability",
  "Privacy Coins",
]
const GridMapper = [
  <CoinsTable title="Stablecoins" page={1} />,
  <CoinsTable title="Tokens" page={2} />,
  <CoinsTable title="SmartContracts" page={3} />,
  <CoinsTable title="Interoperability" page={4} />,
  <CoinsTable title="Privacy Coins" page={5} />,
]
const IndexPage = () => {
  const [selected, setSelected] = useState(0)
  return (
    <Layout>
      <CurrencyTicker />
      <CryptoMarket />
      <SEO title="Home" />
      <Container>
        <Row>
          <Col>
            <ButtonsGroup>
              {Categories.map((title, index) => (
                <Button
                  onClick={() => setSelected(index)}
                  active={selected === index}
                  key={index}
                >
                  {title}
                </Button>
              ))}
            </ButtonsGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={5}>{GridMapper[selected]}</Col>
          <Col sm={7}>Chart for {Categories[selected]}</Col>
        </Row>
        <Row>
          <Col>
            <h1>Privacy Coin Market Data</h1>
          </Col>
        </Row>
        <Row className="justify-content-between flex-wrap mb-4">
          {Array.from(Array(5).keys()).map((_, index) => (
            <Card style={{ flex: 1, margin: "5px 10px" }} text="secondary">
              <Card.Body>
                <Card.Text>Chart {index + 1}</Card.Text>
              </Card.Body>
              <Card.Img
                style={{ marginBottom: 0 }}
                variant="bottom"
                src="https://via.placeholder.com/160"
              />
            </Card>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage
