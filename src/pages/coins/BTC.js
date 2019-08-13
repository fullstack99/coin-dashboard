import React from "react"
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
import Sentimate from "@components/Sentimate"
import Overview from "@components/Overview"
import TradingView from "@components/TradingView"
import Barchart from "@components/Barchart"
import Doughnut from "@components/Doughnut"

const CardView = styled.section`
  display: flex;
  @media (max-width: 575px) {
    display: block;
  }
`
const Dought = styled(Col)`
  position: relative;
  height: 209px;
`

const BarChatCol = styled(Col)`
  @media (max-width: 575px) {
    height: 200px;
  }
`
const BtcPage = () => {
  return (
    <Layout>
      <CurrencyTicker />
      <Container fluid>
        <Row className="justify-content-md-center mb-5">
          <Col sm={11} md={11} lg={11} xl={11}>
            <Btc />
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-5">
          <BarChatCol md={7} lg={7} sm={7}>
            <Barchart />
          </BarChatCol>
          <Col md={4} lg={4} sm={4}>
            <Sentimate />
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-5">
          <Col md={11} lg={11} sm={11}>
            <CardView>
              <TrendingCard />
              <SocialCard />
              <WatchlistCard />
            </CardView>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-5">
          <Col md={7} lg={7} sm={7}>
            <TradingView symbol="BTC" save_image={false} />
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
