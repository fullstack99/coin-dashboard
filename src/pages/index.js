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
const gridMapper = [
  { title: "Biggest Gainers", cryptoCurrencies: BiggestGainers },
  { title: "Biggest Losers", cryptoCurrencies: BiggestLosers },
  { title: "Highest Volume", cryptoCurrencies: HighestVolume },
  { title: "Top 18", cryptoCurrencies: TopEighteen },
  { title: "Large Market Cap Sector", cryptoCurrencies: LargeMarketCapSector },
  { title: "Stablecoins", cryptoCurrencies: StableCoins },
  { title: "Tokens", cryptoCurrencies: Tokens },
  { title: "SmartContracts", cryptoCurrencies: SmartContracts },
  { title: "Interoperability", cryptoCurrencies: Interoperability },
  { title: "Privacy Coins", cryptoCurrencies: PrivacyCoins }
]

const renderGridMapper = ({ selected, selectedCoin, onClick }) => {
  const polyConfig = gridMapper[selected] || null
  if (!polyConfig) return null
  return (
    <CoinsTable selectedCoin={selectedCoin} onClick={onClick} {...polyConfig} />
  )
}

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
            {renderGridMapper({
              selected,
              selectedCoin: coinSelected.crypto || {},
              onClick
            })}
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
