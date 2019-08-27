import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Layout from "@components/Layout"
import CurrencyTicker from "@components/CurrencyTicker"
import Block from "@components/Block"
import TrendingCard from "@components/TrendingCard"
import SocialData from "@components/SocialData"
import BtcMenu from "@components/BtcMenu"
import Card from "@components/Card"
import Sentiment from "@components/Sentiment"
import TextValueCaret from "@components/TextValueCaret"
import TradingView from "@components/TradingView"
import Barchart from "@components/Barchart"
import Doughnut from "@components/Doughnut"

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
          <Col sm={12} md={12}>
            <Row className="mb-5">
              <Col xs={6} lg={4} xl={2}>
                <p>Tradeview mini-chart here</p>
              </Col>
              <Col xs={6} lg={4} xl={2}>
                <Block
                  value="Tru value"
                  amount="$10,313"
                  pct="5.25%"
                  move="up"
                />
              </Col>
              <Col xs={6} lg={4} xl={2}>
                <Block value="Sentiment" amount="+7.2" pct="5.25%" move="up" />
              </Col>
              <Col xs={6} lg={4} xl={2}>
                <Block value="Stability" amount="+7.2" pct="5.25%" move="up" />
              </Col>
              <Col xs={6} lg={4} xl={2}>
                <Block value="Longevity" amount="+7.2" pct="5.25%" move="up" />
              </Col>
              <Col xs={6} lg={4} xl={2}>
                <Block
                  value="Community"
                  amount="+7.2"
                  pct="5.25%"
                  move="down"
                />
              </Col>
            </Row>
            <Row className="mb-5">
              <Col lg={8} className="mb-5 mb-lg-0">
                <Barchart />
              </Col>
              <Col lg={4}>
                <Card title="Sentiment">
                  <Sentiment />
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg={4} className="mb-5">
                <TrendingCard />
              </Col>
              <Col lg={4} className="mb-5">
                <Card title="Social">
                  <SocialData
                    username="@theRealMacafee"
                    type="post"
                    postedOn="twitter"
                    postedAt="10min ago.."
                    rating="7.2"
                  />
                  <SocialData
                    username="@theRealMacafee"
                    type="post"
                    postedOn="facebook"
                    postedAt="32min ago.."
                    rating="7.2"
                  />
                  <SocialData
                    username="@theRealMacafee"
                    type="post"
                    postedOn="reddit"
                    postedAt="10min ago.."
                    rating="7.2"
                  />
                  <SocialData
                    username="@theRealMacafee"
                    type="stream"
                    postedOn="youtube"
                    postedAt="1hr ago.."
                    rating="7.2"
                  />
                  <SocialData
                    username="@theRealMacafee"
                    type="article"
                    postedOn="medium"
                    postedAt="10min ago.."
                    rating="7.2"
                  />
                </Card>
              </Col>
              <Col lg={4} className="mb-5">
                <Card title="Watch List">
                  <TextValueCaret text="Bitcoin" value="$10,317.41" move="up" />
                  <TextValueCaret text="Etherem" value="$310.33" move="down" />
                  <TextValueCaret text="XRP" value="$0.81" move="up" />
                  <TextValueCaret text="Litecoin" value="$92.92" move="down" />
                  <TextValueCaret
                    text="Bitcoin cash"
                    value="$313.42"
                    move="up"
                  />
                  <TextValueCaret text="EOS" value="$4.32" move="down" />
                </Card>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col md={8} style={{ height: "400px" }}>
                {selected && <TradingView symbol="BTC" />}
              </Col>
              <Col md={4} style={{ height: "400px", position: "relative" }}>
                <Doughnut />
              </Col>
            </Row>
            <Row className="mb-5">
              <Col sm={12} className="mb-5">
                <BtcMenu />
                <hr style={{ backgroundColor: "white", margin: "0px " }} />
              </Col>
              <Col sm={12}>
                <Row>
                  <Col className="mb-5" lg={4}>
                    <Card title="Coin Info">
                      <TextValueCaret
                        text="Market Rank"
                        value="120"
                        move="up"
                      />
                      <TextValueCaret
                        text="Market Rank"
                        value="20"
                        move="down"
                      />
                    </Card>
                  </Col>
                  <Col className="mb-5" lg={4}>
                    <Card title="Quant Toolbox">
                      <TextValueCaret
                        text="Market Rank"
                        value="120"
                        move="up"
                      />
                      <TextValueCaret
                        text="Market Rank"
                        value="20"
                        move="down"
                      />
                    </Card>
                  </Col>
                  <Col className="mb-5" lg={4}>
                    <Row>
                      <Col xs={12} className="mb-5">
                        <Card title="Description">
                          <Row>
                            <Col sm={12}>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Praesent at purus non mauris
                                lobortis suscipit. Fusce mauris massa, faucibus
                                eu leo sed, condimentum accumsan ex.
                              </p>
                            </Col>
                            <Col sm={12}>
                              <p>Creator/Team</p>
                            </Col>
                            <Col sm={12}>
                              <p>www.bitcoin.com</p>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                      <Col xs={12}>
                        <Card title="Coin Statistics">
                          <TextValueCaret
                            text="Market Rank"
                            value="120"
                            move="up"
                          />
                          <TextValueCaret
                            text="Market Rank"
                            value="20"
                            move="down"
                          />
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default BtcPage
