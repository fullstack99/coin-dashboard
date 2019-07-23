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
  padding: 75px 0;
  text-align: center;
`

const Message = styled.h1`
  color: #fff !important;
  font-size: 36px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  letter-spacing: -1px;
  line-height: normal;
  margin: 0;
  text-align: center;
`

const Span = styled.span`
  font-weight: bold;
  color: #4659fb;
`

const CryptoMarket = () => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [prc, setPrc] = useState({})
  const [data, setData] = useState({})

  useEffect(() => {
    setLoading(true)
    useApi(REST_API_ENDPOINTS.PRICE_MULTIFULL, {
      params: { fsyms: "BTC", tsyms: CURRENCY }
    })
      .then(result => {
        setLoading(false)
        const { data: response } = result
        const { RAW } = response || {}
        const { BTC } = RAW || {}

        if (!BTC || !BTC[CURRENCY]) {
          setError("There was an error loading this content")
        } else {
          setPrc(BTC[CURRENCY])
        }
      })
      .catch(error => {
        setLoading(false)
        setError("There was an error loading this content")
        console.error(error)
      })

    useApi(REST_API_ENDPOINTS.TOP_BY_MARKET, {
      params: { limit: "100", tsym: "USD" },
    })
      .then(result => {
        setLoading(false)
        const { data: json } = result || {}
        const { Data, Response, Message } = json || {}
        if (Response === "Error") {
          console.error(Message)
          setError("There was an error loading this content")
        } else {
          let totalMarketCap = 0

          for (let i = 0; i < Data.length; i++) {
            const { RAW } = Data[i] || {}
            const { USD } = RAW || {}
            const { MKTCAP } = USD || {}

            totalMarketCap += MKTCAP
          }

          setData(totalMarketCap)
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
      <Row className="justify-content-md-center">
        <Col md={8}>
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
                    {prc.CHANGEPCT24HOUR > 0 ? "Up " : "Down "}
                    {useFormat(prc.CHANGEPCT24HOUR, PERCENTAGE)} $
                    {useFormat(data, GROUP_DIGITS)}
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
