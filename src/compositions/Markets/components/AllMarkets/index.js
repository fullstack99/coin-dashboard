import React, { useState } from "react"
import { string } from "prop-types"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import CryptoMarket from "@components/CryptoMarket"
import CoinsTable from "@components/CoinsTable"
import TradingView from "@components/TradingView"

// modules
import {
  BiggestGainers,
  BiggestLosers,
  HighestVolume,
  topTen,
  LargeMarketCapSector,
  StableCoins,
  Tokens,
  SmartContracts,
  Interoperability,
  PrivacyCoins
} from "@utils/constants"

const gridMapper = [
  { title: "Biggest Gainers", cryptoCurrencies: BiggestGainers },
  { title: "Biggest Losers", cryptoCurrencies: BiggestLosers },
  { title: "Highest Volume", cryptoCurrencies: HighestVolume },
  { title: "Top 10", cryptoCurrencies: topTen },
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

const AllMarkets = ({ section }) => {
  const [coinSelected, setCoinSelected] = useState({})
  const selected = gridMapper.findIndex(item => item.title === section)
  const onClick = (info, crypto) => {
    setCoinSelected({ info, crypto })
  }
  const AllCurrency = gridMapper.map(data => data.cryptoCurrencies)
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col sm={11} md={8} lg={7} xl={5}>
          <CryptoMarket currency={AllCurrency} />
        </Col>
      </Row>
      <Row>
        <Col lg={5} className="mb-5">
          {renderGridMapper({
            selected,
            selectedCoin: coinSelected.crypto || {},
            onClick
          })}
        </Col>
        <Col lg={7} className="mb-5">
          {coinSelected.info && (
            <TradingView
              symbol={
                coinSelected.crypto.symbol !== "BTC"
                  ? coinSelected.crypto.tradingview
                  : coinSelected.info.FROMSYMBOL + coinSelected.info.TOSYMBOL
              }
              save_image={false}
            />
          )}
        </Col>
      </Row>
      {/* <Row className="mb-5">
          <Col>
            <h1>{Categories[selected]} Coin Market Data</h1>
          </Col>
        </Row>
        <Row className="mb-5">
          {Array.from(Array(5).keys()).map((_, index) => (
            <Col xs={12} md={4} lg={2} key={index}>
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
        </Row> */}
    </Container>
  )
}

AllMarkets.propTypes = {
  section: string.isRequired
}

export default AllMarkets
