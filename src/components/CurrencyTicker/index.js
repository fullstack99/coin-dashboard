import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import Ticker from "react-ticker"
import axios from "axios"

import TickerItem from "./TickerItem"

// import useApi, { REST_API_ENDPOINTS } from "@hooks/use-api"
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

    // TODO: Need to refactor
    const loadData = async () => {
      try {
        await axios
          .get("https://min-api.cryptocompare.com/data/top/mktcapfull", {
            params: { limit: "100", tsym: "USD" },
            cancelToken: source.token,
            apiKey:
              "b86039193d7a9a43ed79cffa9a95877e11642d29ddba89cc071088a3680f2750"
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
              let totalVolTrade = 0
              let btcDominance = 0

              for (let i = 0; i < Data.length; i++) {
                const { RAW } = Data[i] || {}
                const { USD } = RAW || {}
                const { MKTCAP } = USD || {}
                const { FROMSYMBOL } = USD || {}
                const { TOTALVOLUME24H } = USD || {}

                if (FROMSYMBOL === "BTC") {
                  btcDominance = MKTCAP
                }

                totalMarketCap += MKTCAP
                totalVolTrade += TOTALVOLUME24H
              }

              const btcDmn = (btcDominance * 100) / totalMarketCap

              setData({
                totalMarketCap: totalMarketCap,
                totalVol24: totalVolTrade,
                btcDominance: btcDmn
              })
            }
          })
      } catch (error) {
        if (!axios.isCancel(error)) {
          setLoading(false)
          setError("There was an error loading this content")
          console.error(error)
        }
      }
    }

    loadData()
    return () => {
      source.cancel()
    }

    // useApi(REST_API_ENDPOINTS.TOP_BY_MARKET, {
    //   params: { limit: "100", tsym: "USD" }
    // })
    //   .then(result => {
    //     setLoading(false)
    //     const { data: json } = result || {}
    //     const { Data, Response, Message } = json || {}
    //     if (Response === "Error") {
    //       console.error(Message)
    //       setError("There was an error loading this content")
    //     } else {
    //       let totalMarketCap = 0
    //       let totalVolTrade = 0
    //       let btcDominance = 0

    //       for (let i = 0; i < Data.length; i++) {
    //         const { RAW } = Data[i] || {}
    //         const { USD } = RAW || {}
    //         const { MKTCAP } = USD || {}
    //         const { FROMSYMBOL } = USD || {}
    //         const { TOTALVOLUME24H } = USD || {}

    //         if (FROMSYMBOL === "BTC") {
    //           btcDominance = MKTCAP
    //         }

    //         totalMarketCap += MKTCAP
    //         totalVolTrade += TOTALVOLUME24H
    //       }

    //       const btcDmn = (btcDominance * 100) / totalMarketCap

    //       setData({
    //         totalMarketCap: totalMarketCap,
    //         totalVol24: totalVolTrade,
    //         btcDominance: btcDmn
    //       })
    //     }
    //   })
    //   .catch(error => {
    //     setLoading(false)
    //     setError("There was an error loading this content")
    //     console.error(error)
    //   })
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
