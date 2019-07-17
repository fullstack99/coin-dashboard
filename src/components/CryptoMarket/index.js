import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import useApi, { REST_API_ENDPOINTS } from "@hooks/use-api"

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
  padding: .75rem 0;

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
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({ currencies: [] })

  useEffect(() => {
    setLoading(true)
    useApi(REST_API_ENDPOINTS.PRICE_SINGLE, {
      params: { fsym: "BTC", tsyms: "USD,JPY,EUR" },
    })
      .then(result => {
        setLoading(false)
        const { data: json } = result || {}
        const { Data, Response, Message } = json || {}
        if (Response === "Error") {
          console.error(Message)
          setError("There was an error loading this content")
        } else {
          setData(Data)
        }
        setData(result.data)
      })
      .catch(error => {
        setLoading(false)
        setError("There was an error loading this content")
        console.error(error)
      })
  }, [])
  // console.log("CryptoMarket", { data })
  return (
    <Container>
      <Row>
        <Col>
          <CryptoMarketWrapper>
            <Message>
              {loading ? (
                "Loading..."
              ) : error ? (
                error
              ) : (
                <>
                  Crypto Market is <Span>Up 39% $183,421,314,312.31</Span> USD
                </>
              )}
            </Message>
          </CryptoMarketWrapper>
        </Col>
      </Row>
    </Container>
  )
}

export default CryptoMarket
