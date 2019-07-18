import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// hooks
import useApi, { REST_API_ENDPOINTS } from "@hooks/use-api"
import useFormat, { PERCENTAGE, GROUP_DIGITS } from "@hooks/use-format"

// utils
import { CURRENCY } from "@utils/constants"

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
  padding: 0.75rem 0;

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
  const [data, setData] = useState({})

  useEffect(() => {
    setLoading(true)
    useApi(REST_API_ENDPOINTS.PRICE_MULTI_FULL, {
      params: { fsyms: "BTC", tsyms: CURRENCY },
    })
      .then(result => {
        setLoading(false)
        const { data: response } = result
        const { RAW } = response || {}
        const { BTC } = RAW || {}

        if (!BTC || !BTC[CURRENCY]) {
          setError("There was an error loading this content")
        } else {
          setData(BTC[CURRENCY])
        }
      })
      .catch(error => {
        setLoading(false)
        setError("There was an error loading this content")
        console.error(error)
      })
  }, [])
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
                  Crypto Market is{" "}
                  <Span>
                    {data.CHANGEPCT24HOUR > 0 ? "Up " : "Down "}
                    {useFormat(data.CHANGEPCT24HOUR, PERCENTAGE)} $
                    {useFormat(data.VOLUME24HOURTO, GROUP_DIGITS)}
                  </Span>{" "}
                  {CURRENCY}
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
