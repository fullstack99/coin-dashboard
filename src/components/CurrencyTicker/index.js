import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import Ticker from "react-ticker"

import TickerItem from "./TickerItem"

import useApi, { REST_API_ENDPOINTS } from "@hooks/use-api"
import useFormat, { PERCENTAGE, GROUP_DIGITS } from "@hooks/use-format"

import addAllFields from "./../../utils/add-all-fields"
import btcDominance from "./../../utils/btc-dominance"

const TickerWrapper = styled.div`
  background-color: #475ff2;
  color: #fff;
  height: 56px;
  padding: 16px 0;
`

const GetTickerData = () => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    totalMarketCap: null,
    totalVol24: null,
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
          const totalMarketCap = addAllFields(Data, "MKTCAP")

          // Get last 24H volume
          const totalVol24 = addAllFields(Data, "TOTALVOLUME24H")

          // BTC Dominance
          const btcDmn = btcDominance(Data, totalMarketCap)

          setData({
            totalMarketCap: totalMarketCap,
            totalVol24: totalVol24,
            btcDominance: btcDmn,
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
            width: "750px",
            visibility: "hidden",
          }}
        >
          Loading...
        </div>
      ) : error ? (
        error
      ) : (
        <div
          css={{
            width: "750px",
          }}
        >
          <TickerItem
            label="Market Cap $"
            value={useFormat(data.totalMarketCap, GROUP_DIGITS)}
            placeholder="xxx,xxx,xxx,xxx.xx"
          />
          <TickerItem
            label="24 Hours Trade Volume $"
            value={useFormat(data.totalVol24, GROUP_DIGITS)}
            placeholder="xxx,xxx,xxx,xxx.xx"
          />
          <TickerItem
            label="BTC Dominance"
            value={useFormat(data.btcDominance, PERCENTAGE)}
            placeholder="xx.xx"
          />
        </div>
      )}
    </>
  )
}

const CurrencyTicker = () => {
  return (
    <TickerWrapper>
      <Ticker speed={5}>{() => <GetTickerData />}</Ticker>
    </TickerWrapper>
  )
}

export default CurrencyTicker
