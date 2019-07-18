import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import Ticker from "react-ticker"

import useApi, { REST_API_ENDPOINTS } from "@hooks/use-api"

const TickerWrapper = styled.div`
  background-color: #3041eb;
  color: #fff;
  height: 56px;
  padding: 16px 0;
`

const Item = styled.span`
  margin-right: 55px;
  white-space: nowrap;
`

const formattedSum = num => {
  return new Intl.NumberFormat().format(num)
}

const printItems = (data = {}) => {
  return (
    <>
      {data ? (
        <>
          <Item>Market Cap ${data.totalMarketCapFormatted} </Item>
          <Item>24 Hours Trade Volume ${data.totalVol24Formatted} </Item>
          <Item>BTC Dominance {data.btcDominance} </Item>
        </>
      ) : (
        <>
          <Item>Market Cap $xxx,xxx,xxx,xxx.xx </Item>
          <Item>24 Hours Trade Volume $$xxx,xxx,xxx,xxx.xx </Item>
          <Item>BTC Dominance $xx.xx </Item>
        </>
      )}
    </>
  )
}

const GetTickerData = () => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    totalMarketCapFormatted: null,
    totalVol24Formatted: null,
    btcDominance: null,
  })

  useEffect(() => {
    setLoading(true)

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
          // Get total Market Cap
          let marketCap = Data.map(coin => {
            return coin["RAW"]["USD"]["MKTCAP"]
          })

          const totalMarketCap = marketCap.reduce((a, b) => a + b, 0)

          const totalMarketCapFormatted = formattedSum(totalMarketCap)

          // Get last 24H volume
          let vol24 = Data.map(coin => {
            return coin["RAW"]["USD"]["TOTALVOLUME24H"]
          })

          const totalVol24 = vol24.reduce((a, b) => a + b, 0)

          const totalVol24Formatted = formattedSum(totalVol24)

          // BTC Dominance

          let btcDominance = 0

          for (var i = 0; i < Data.length; i++) {
            if (Data[i]["CoinInfo"]["Name"] === "BTC") {
              const BTCMarket = Data[i]["RAW"]["USD"]["MKTCAP"]

              btcDominance = (BTCMarket * 100) / totalMarketCap
              break
            }
          }

          const btcDominanceFormatted = formattedSum(btcDominance)

          setData({
            totalMarketCapFormatted: totalMarketCapFormatted,
            totalVol24Formatted: totalVol24Formatted,
            btcDominance: btcDominanceFormatted,
          })
        }
      })
      .catch(error => {
        setLoading(false)
        setError("There was an error loading this content")
        console.error(error)
      })
  }, [])

  return (
    <>
      {loading ? (
        <div
          css={{
            width: "1850px",
            visibility: "hidden",
          }}
        >
          {printItems()}
          {printItems()}
        </div>
      ) : error ? (
        error
      ) : (
        <div
          css={{
            width: "1850px",
          }}
        >
          {printItems(data)}
          {printItems(data)}
        </div>
      )}
    </>
  )
}

const CurrencyTicker = () => {
  return (
    <TickerWrapper>
      <Ticker offset="0" speed={5}>
        {() => <GetTickerData />}
      </Ticker>
    </TickerWrapper>
  )
}

export default CurrencyTicker
