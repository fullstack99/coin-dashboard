import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

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
      </Container>
    </Layout>
  )
}

export default IndexPage
