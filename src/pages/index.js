import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Layout from "@components/Layout"
import SEO from "@components/Seo"
import CurrencyTicker from "@components/CurrencyTicker"
import CryptoMarket from "@components/CryptoMarket"
import PrivacyCoins from "@components/PirvacyCoins"
import ButtonsGroup from "@components/ButtonsGroup"
import Button from "@components/Button"

const IndexPage = () => (
  <Layout>
    <CurrencyTicker />
    <CryptoMarket />
    <SEO title="Home" />
    <Container>
      <Row>
        <Col>
          <h1>Privacy Coin Market Data</h1>
        </Col>
        <Col>
          <ButtonsGroup>
            <Button active>Test</Button>
            <Button active>Test</Button>
            <Button active>Test</Button>
            <Button active>Test</Button>
            <Button active>Test</Button>
            <Button active>Test</Button>
            <Button active>Test2</Button>
            <Button active>Test2</Button>
            <Button active>Test2</Button>
          </ButtonsGroup>
        </Col>
      </Row>
      <Row>
        <Col sm={5}>
          <PrivacyCoins />
        </Col>
        <Col>Chart 3</Col>
        <Col>Chart 4</Col>
        <Col>Chart 5</Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
