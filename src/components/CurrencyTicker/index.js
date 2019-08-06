import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import Ticker from "react-ticker"
import axios from "axios"

import TickerItem from "./TickerItem"

import useApi, { REST_API_ENDPOINTS, TOP_BY_MARKET_URL } from "@hooks/use-api"
import useFormat, { PERCENTAGE, GROUP_DIGITS } from "@hooks/use-format"

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
    btcDominance: null
  })

  useEffect(() => {
    setLoading(true)

    const CancelToken = axios.CancelToken
    const source = CancelToken.source()

    const loadData = async () => {
      await useApi(REST_API_ENDPOINTS.TOP_BY_MARKET, {
        url: TOP_BY_MARKET_URL
      })
        .then(result => {
          setLoading(false)
          const { data, status } = result || {}
          if (status !== 200) {
            setError("There was an error loading this content")
          } else {
            const {
              total_market_cap_by_available_supply_usd,
              total_volume_usd,
              bitcoin_percentage_of_market_cap
            } = data || {}
            setData({
              totalMarketCap: total_market_cap_by_available_supply_usd,
              totalVol24: total_volume_usd,
              btcDominance: bitcoin_percentage_of_market_cap
            })
          }
        })
        .catch(error => {
          setLoading(false)
          setError("There was an error loading this content")
          console.error(error)
        })
    }

    loadData()
    return () => source.cancel()
  }, [])

  return (
    <>
      {loading ? (
        <div
          css={{
            width: "750px",
            visibility: "hidden"
          }}
        >
          Loading...
        </div>
      ) : error ? (
        error
      ) : (
        <div
          css={{
            width: "750px"
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
            label="BTC Dominance "
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

CurrencyTicker.defaultProps = { Data: {} }

export default CurrencyTicker
