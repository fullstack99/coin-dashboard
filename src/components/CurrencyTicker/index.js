import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import Ticker from "react-ticker"
import axios from "axios"

import TickerItem from "./components/TickerItem"

import useFormat, { PERCENTAGE, GROUP_DIGITS } from "@hooks/use-format"

const GetTickerData = () => {
  const [data, setData] = useState({
    totalMarketCap: null,
    totalVol24: null,
    btcDominance: null
  })

  const [loading, setIsLoading] = useState(false)

  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const result = await axios(
          "https://s2.coinmarketcap.com/generated/stats/global.json"
        )

        const {
          total_market_cap_by_available_supply_usd,
          total_volume_usd,
          bitcoin_percentage_of_market_cap
        } = result.data || {}

        setData({
          totalMarketCap: total_market_cap_by_available_supply_usd,
          totalVol24: total_volume_usd,
          btcDominance: bitcoin_percentage_of_market_cap
        })
      } catch (error) {
        setIsError(true)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [])

  const formattedTotalMarketCap = useFormat(data.totalMarketCap, GROUP_DIGITS)

  const formattedTotalVol24 = useFormat(data.totalVol24, GROUP_DIGITS)

  const formattedBtcDominance = useFormat(data.btcDominance, PERCENTAGE)

  return (
    <>
      {loading ? (
        <div
          css={{
            width: "775px",
            visibility: "hidden"
          }}
        >
          Loading...
        </div>
      ) : isError ? (
        <div>There was an error loading this content</div>
      ) : (
        <div
          css={{
            width: "775px"
          }}
        >
          <TickerItem
            label="Market Cap $"
            value={formattedTotalMarketCap}
            placeholder="xxx,xxx,xxx,xxx.xx"
          />
          <TickerItem
            label="24 Hours Trade Volume $"
            value={formattedTotalVol24}
            placeholder="xxx,xxx,xxx,xxx.xx"
          />
          <TickerItem
            label="BTC Dominance "
            value={formattedBtcDominance}
            placeholder="xx.xx"
          />
        </div>
      )}
    </>
  )
}

const CurrencyTicker = styled(({ className }) => (
  <div className={className}>
    <Ticker speed={5}>{() => <GetTickerData />}</Ticker>
  </div>
))`
  background-color: #475ff2;
  color: #fff;
  height: 56px;
  padding: 16px 0;
`

export default CurrencyTicker
