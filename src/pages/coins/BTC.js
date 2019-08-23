import React, {useState, useEffect} from "react"
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
import Sentiment from "@components/Sentiment"
import Overview from "@components/Overview"
import TradingView from "@components/TradingView"
import Barchart from "@components/Barchart"
import Doughnut from "@components/Doughnut"

const CardView = styled(Col)`
  @media (min-width: 992px) {
    margin-top:0px;
    :first-of-type{
      padding-right:56.33px !important;
    }
    :nth-of-type(2n){
      padding-left:35.67px !important;
      padding-right:35.67px !important;
    }
    :last-of-type{
      padding-left:56.33px !important;
    }
  }
`
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
      setSelected(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

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
          <BarChatCol md={7} lg={7} sm={7} style={{ height: "450px" }}>
            <Barchart />
          </BarChatCol>
          <Col md={4} lg={4} sm={4}>
            <Sentiment />
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-5">
          <Col md={11} lg={11} sm={11}>
            <Row>
              <CardView md={12} lg={4} sm={12} className="mb-5">
                <TrendingCard />
              </CardView>  
              <CardView md={12} lg={4} sm={12} className="mb-5">
                <SocialCard />
              </CardView>  
              <CardView md={12} lg={4} sm={12} className="mb-5">
                <WatchlistCard />
              </CardView>  
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-5">
          <Col md={7} lg={7} sm={7}>
            { selected && <TradingView symbol="BTC" /> }
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