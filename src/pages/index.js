import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

// components
import Layout from "@components/Layout"
import SEO from "@components/Seo"
import CurrencyTicker from "@components/CurrencyTicker"
import CryptoMarket from "@components/CryptoMarket"
import ButtonsGroup from "@components/ButtonsGroup"
import Button from "@components/Button"
import CoinsTable from "@components/CoinsTable"

// modules
import { StableCoins } from "@utils/constants"
import { Tokens } from "../utils/constants"
import smartContracts from "../utils/constants/smartContracts"
import interoperability from "../utils/constants/interoperability"
import privacyCoins from "../utils/constants/privacyCoins"
import TradingView from "../components/TradingView"

const Categories = [
  "Stablecoins",
  "Tokens",
  "SmartContracts",
  "Interoperability",
  "Privacy Coins"
]
const GridMapper = onCoinSelected => [
  <CoinsTable
    title="Stablecoins"
    cryptoCurrencies={StableCoins}
    onClick={onCoinSelected}
  />,
  <CoinsTable
    title="Tokens"
    cryptoCurrencies={Tokens}
    onClick={onCoinSelected}
  />,
  <CoinsTable
    title="SmartContracts"
    cryptoCurrencies={smartContracts}
    onClick={onCoinSelected}
  />,
  <CoinsTable
    title="Interoperability"
    cryptoCurrencies={interoperability}
    onClick={onCoinSelected}
  />,
  <CoinsTable
    title="Privacy Coins"
    cryptoCurrencies={privacyCoins}
    onClick={onCoinSelected}
  />
]

const IndexPage = () => {
  const [coinSelected, setCoinSelected] = useState({})
  const [selected, setSelected] = useState(0)
  const onClick = (info, crypto) => {
    setCoinSelected({ info, crypto })
  }
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
                  key={index}
                  onClick={() => {
                    setSelected(index)
                    setCoinSelected({})
                  }}
                  active={selected === index}
                >
                  {title}
                </Button>
              ))}
            </ButtonsGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={5}>{GridMapper(onClick)[selected]}</Col>
          <Col sm={7}>
            Chart for {Categories[selected]}
            <div>
              {coinSelected.info && (
                <>
                  <TradingView
                    symbol={coinSelected.crypto.tradingview}
                    save_image={false}
                  />
                </>
              )}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Privacy Coin Market Data</h1>
          </Col>
        </Row>
        <Row className="justify-content-between flex-wrap mb-4">
          {Array.from(Array(5).keys()).map((_, index) => (
            <Card
              key={index}
              style={{ flex: 1, margin: "5px 10px" }}
              text="secondary"
            >
              <Card.Body>
                <Card.Text>{index + 1}</Card.Text>
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
