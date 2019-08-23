import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Layout from "@components/Layout"
import CurrencyTicker from "@components/CurrencyTicker"
import Btc from "@components/BtcBlock"
import TrendingCard from "@components/TrendingCard"
import WatchlistCard from "@components/WatchlistCard"
import SocialCard from "@components/SocialCard"
import BtcMenu from "@components/BtcMenu"
import Card from "@components/Card"
import Sentiment from "@components/Sentiment"
import Overview from "@components/Overview"
import TradingView from "@components/TradingView"
import Barchart from "@components/Barchart"
import Doughnut from "@components/Doughnut"

const Dought = styled(Col)`
  position: relative;
  @media (max-width: 575px) {
    height: 209px;
  }
`

const BarChatCol = styled(Col)`
  position: relative;
  height: 450px;
  @media (max-width: 575px) {
    height: 200px !important;
  }
`
const BtcPage = () => {
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setSelected(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Layout>
      <div className="mb-5">
        <CurrencyTicker />
      </div>
      <Container fluid>
        <Row className="justify-content-md-center mb-5">
          <Col sm={11}>
            <Btc />
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-5">
          <Col sm={11}>
            <Row>
              <BarChatCol lg={8} className="mb-5 mb-lg-0">
                <Barchart />
              </BarChatCol>
              <Col lg={4}>
                <Card title="Sentiment">
                  <Sentiment />
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-5">
          <Col md={11}>
            <Row>
              <Col lg={4} className="mb-5">
                <TrendingCard />
              </Col>
              <Col lg={4} className="mb-5">
                <SocialCard />
              </Col>
              <Col lg={4} className="mb-5">
                <WatchlistCard />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-5">
          <Col md={7} lg={7} sm={7}>
            {selected && <TradingView symbol="BTC" />}
          </Col>
          <Dought md={5} lg={4} sm={4}>
            <Doughnut />
          </Dought>
        </Row>
        <Row className="justify-content-md-center mb-5">
          <Col lg={11} md={11} sm={11}>
            <BtcMenu />
            <hr style={{ backgroundColor: "white", margin: "0px " }} />
          </Col>
          <Col lg={11} sm={11} md={11}>
            <Overview />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default BtcPage
