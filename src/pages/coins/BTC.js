import React, { useState, useEffect, createRef } from "react"
import { graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Layout from "@components/Layout"
import CurrencyTicker from "@components/CurrencyTicker"
import Block from "@components/Block"
import Trending from "@components/Trending"
import Social from "@components/Social"
import BtcMenu from "@components/BtcMenu"
import Card from "@components/Card"
import Sentiment from "@components/Sentiment"
import TextValueCaret from "@components/TextValueCaret"
import TradingView from "@components/TradingView"
import Barchart from "@components/Barchart"
import Doughnut from "@components/Doughnut"

const BtcPage = ({ data }) => {
  const ref = createRef()

  const [selected, setSelected] = useState(false)

  const {
    general,
    sentiment,
    trending,
    social,
    watchList,
    coinInfo,
    quantToolbox,
    coinStatistics
  } = data.allBtcJson.edges[0].node

  useEffect(() => {
    const timer = setTimeout(() => {
      const script = document.createElement("script")

      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js"
      script.async = true

      script.innerHTML = {
        symbol: "BITSTAMP:BTCUSD",
        width: 350,
        height: 220,
        locale: "en",
        dateRange: "12m",
        colorTheme: "dark",
        trendLineColor: "#37a6ef",
        underLineColor: "rgba(55, 166, 239, 0.15)",
        isTransparent: false,
        autosize: false,
        largeChartUrl: ""
      }

      // document.body.appendChild(script);

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
                <div className="tradingview-widget-container" ref={ref}>
                  <div className="tradingview-widget-container__widget"></div>
                </div>
              </Col>
              {general.map((item, index) => (
                <Col xs={6} lg={4} xl={2} key={`block-${index}`}>
                  <Block
                    label={item.label}
                    value={item.value}
                    pct={item.pct}
                    move={item.move}
                  />
                </Col>
              ))}
            </Row>
            <Row className="mb-5">
              <Col lg={8} className="mb-5 mb-lg-0">
                <Barchart />
              </Col>
              <Col lg={4}>
                <Card title="Sentiment">
                  <Sentiment data={sentiment} />
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg={4} className="mb-5">
                <Card title="Trending">
                  {trending.map((item, index) => (
                    <Trending
                      key={`trending-${index}`}
                      from={item.from}
                      post={item.post}
                      rating={item.rating}
                    />
                  ))}
                </Card>
              </Col>
              <Col lg={4} className="mb-5">
                <Card title="Social">
                  {social.map((item, index) => (
                    <Social
                      key={`social-${index}`}
                      username={item.username}
                      type={item.type}
                      postedOn={item.postedOn}
                      postedAt={item.postedAt}
                      rating={item.rating}
                    />
                  ))}
                </Card>
              </Col>
              <Col lg={4} className="mb-5">
                <Card title="Watch List">
                  {watchList.map((item, index) => (
                    <TextValueCaret
                      key={`watch-list-${index}`}
                      text={item.label}
                      value={item.value}
                      move={item.move}
                    />
                  ))}
                </Card>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col md={8} style={{ height: "400px" }}>
                {selected && <TradingView symbol="BTCUSD" />}
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
                      {coinInfo.map((item, index) => (
                        <TextValueCaret
                          key={`coin-info-${index}`}
                          text={item.label}
                          value={item.value}
                          move={item.move}
                        />
                      ))}
                    </Card>
                  </Col>
                  <Col className="mb-5" lg={4}>
                    <Card title="Quant Toolbox">
                      {quantToolbox.map((item, index) => (
                        <TextValueCaret
                          key={`quant-toolbox-${index}`}
                          text={item.label}
                          value={item.value}
                          move={item.move}
                        />
                      ))}
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
                          {coinStatistics.map((item, index) => (
                            <TextValueCaret
                              key={`coin-stats-${index}`}
                              text={item.label}
                              value={item.value}
                              move={item.move}
                            />
                          ))}
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

export const query = graphql`
  {
    allBtcJson {
      edges {
        node {
          general {
            label
            value
            pct
            move
          }
          sentiment {
            label
            value
            pct
            move
          }
          trending {
            from
            post
            rating
          }
          social {
            username
            type
            postedOn
            postedAt
            rating
          }
          watchList {
            label
            value
            move
          }
          coinInfo {
            label
            value
            move
          }
          quantToolbox {
            label
            value
            move
          }
          coinStatistics {
            label
            value
            move
          }
        }
      }
    }
  }
`

export default BtcPage
