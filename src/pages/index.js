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
import {
  BiggestGainers,
  BiggestLosers,
  HighestVolume,
  TopEighteen,
  LargeMarketCapSector,
  StableCoins,
  Tokens,
  SmartContracts,
  Interoperability,
  PrivacyCoins
} from "@utils/constants"
import TradingView from "../components/TradingView"

const Categories = [
  "Biggest Gainers",
  "Biggest Losers",
  "Highest Volume",
  "Top 18",
  "Large Market Cap Sector",
  "Stablecoins",
  "Tokens",
  "Smart Contracts",
  "Interoperability",
  "Privacy Coins"
]

const GridMapper = (selectedCoin, onCoinSelected) => [
  <CoinsTable
    title="Biggest Gainers"
    cryptoCurrencies={BiggestGainers}
    selectedCoin={selectedCoin}
    onClick={onCoinSelected}
  />,
  <CoinsTable
    title="Biggest Losers"
    cryptoCurrencies={BiggestLosers}
    selectedCoin={selectedCoin}
    onClick={onCoinSelected}
  />,
  <CoinsTable
    title="Highest Volume"
    cryptoCurrencies={HighestVolume}
    onClick={onCoinSelected}
  />,
  <CoinsTable
    title="Top 18"
    cryptoCurrencies={TopEighteen}
    onClick={onCoinSelected}
  />,
  <CoinsTable
    title="Large Market Cap Sector"
    cryptoCurrencies={LargeMarketCapSector}
    onClick={onCoinSelected}
  />,
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
    cryptoCurrencies={SmartContracts}
    onClick={onCoinSelected}
  />,
  <CoinsTable
    title="Interoperability"
    cryptoCurrencies={Interoperability}
    onClick={onCoinSelected}
  />,
  <CoinsTable
    title="Privacy Coins"
    cryptoCurrencies={PrivacyCoins}
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
      <SEO title="Home" />
      <CurrencyTicker />
      <Container>
        <Row className="justify-content-md-center">
          <Col md={8}>
            <CryptoMarket />
          </Col>
        </Row>
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
        <Row className="mb-5">
          <Col lg={5}>
            {GridMapper(coinSelected.crypto || {}, onClick)[selected]}
          </Col>
          <Col lg={7}>
            {coinSelected.info && (
              <TradingView
                symbol={coinSelected.crypto.tradingview}
                save_image={false}
              />
            )}
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <h1>{Categories[selected]} Coin Market Data</h1>
          </Col>
        </Row>
        <Row className="mb-5">
          {Array.from(Array(5).keys()).map((_, index) => (
            <Col xs={12} md={2} key={index}>
              <Card style={{ marginBottom: "30px" }} text="secondary">
                <Card.Body>
                  <Card.Text>{index + 1}</Card.Text>
                </Card.Body>
                <Card.Img
                  style={{ marginBottom: 0 }}
                  variant="bottom"
                  src="https://via.placeholder.com/160"
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage
