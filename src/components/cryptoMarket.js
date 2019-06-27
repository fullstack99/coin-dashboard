import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import axios from "axios"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const CryptoMarketWrapper = styled.section`
  margin: 0;
  padding: 4rem 2rem;
  text-align: center;
`

const Message = styled.h1`
  color: #fff !important;
  font-size: 34px;
  font-weight: 400;
  margin: 0;
  text-transform: uppercase;

  @media (min-width: 767.98px) {
    font-size: 40px !important;
  }

`

const Span = styled.span`
  color: #fecd00;
  display: block;
  font-weight: 600;
  padding: 0.5rem 0;

  @media (min-width: 767.98px) {
    font-size: 50px;
  }

  @media (min-width: 991.98px) {
    font-size: 70px;
  }

  @media (min-width: 1199.98px) {
    font-size: 70px;
  }
`

const CryptoMarket = () => {
  const [data, setData] = useState({ currencies: [] })

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR&api_key=b86039193d7a9a43ed79cffa9a95877e11642d29ddba89cc071088a3680f2750"
      )

      setData(result.data)
    }

    fetchData()
  }, [])

  console.log(data)

  return (
    <Container>
      <Row>
        <Col>
          <CryptoMarketWrapper>
            <Message>
              Crypto Market is <Span>Up 39% $183,421,314,312.31</Span> USD
            </Message>
          </CryptoMarketWrapper>
        </Col>
      </Row>
    </Container>
  )
}

export default CryptoMarket
