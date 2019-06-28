import React from "react"
import styled from "@emotion/styled"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const TickerWrapper = styled.div`
  background-color: #3041eb;
  padding: 1rem 0;
`

const Indicator = styled.p`
  font-family: "Oswald", "sans-sarif";
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 0;
  padding: .125rem 0;
  text-align: center;
`

const CurrencyTicker = () => {
  return (
    <TickerWrapper>
      <Container>
        <Row>
          <Col md={4}>
            <Indicator>Market Cap: $318,054,966,357</Indicator>
          </Col>
          <Col md={4}>
            <Indicator>24h Vol: $119,265,825,324</Indicator>
          </Col>
          <Col md={4}>
            <Indicator>BTC Dominance: 61.9%</Indicator>
          </Col>
        </Row>
      </Container>
    </TickerWrapper>
  )
}

export default CurrencyTicker
