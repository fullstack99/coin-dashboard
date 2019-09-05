import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import { useCountUp } from "react-countup"
// hooks
import useApi, { REST_API_ENDPOINTS, TOP_BY_MARKET_URL } from "@hooks/use-api"
import useFormat, { GROUP_DIGITS } from "@hooks/use-format"

// utils
import { CURRENCY } from "@utils/constants"

const CryptoMarketWrapper = styled.section`
  margin: 0;
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
  & span {
    color: #4659fb;
    font-size: 36px;
    font-size: 36px;
    font-weight: bold;
    font-weight: bold;
  }
`

const CryptoMarket = ({ currency }) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState({
    changePercentage: false,
    globalCrypto: false
  })
  // const [prc, setPrc] = useState({})
  const [data, setData] = useState({})
  let number = useFormat(data, GROUP_DIGITS)
  let finalData = parseFloat(number.replace(/,/g, ""))

  useEffect(() => {
    setLoading({ globalCrypto: true, changePercentage: true })
    useApi(REST_API_ENDPOINTS.PRICE_MULTIFULL, {
      params: {
        fsyms: currency.map(data => data.map(item => item.symbol)).join(","),
        tsyms: CURRENCY
      }
    })
      .then(result => {
        setLoading({ ...loading, changePercentage: false })
        const { data: response } = result
        const { RAW } = response || {}
        const { BTC } = RAW || {}

        if (!BTC || !BTC[CURRENCY]) {
          setError("There was an error loading this content")
        } else {
          // setPrc(BTC[CURRENCY])
        }
      })
      .catch(error => {
        setLoading(false)
        setError("There was an error loading this content")
        console.error(error)
      })

    useApi(REST_API_ENDPOINTS.TOP_BY_MARKET, {
      url: TOP_BY_MARKET_URL
    })
      .then(result => {
        setLoading({ ...loading, globalCrypto: false })
        const { data, status } = result || {}
        if (status !== 200) {
          setError("There was an error loading this content")
        } else {
          const { total_market_cap_by_available_supply_usd } = data || {}
          setData(total_market_cap_by_available_supply_usd)
        }
      })
      .catch(error => {
        setLoading(false)
        setError("There was an error loading this content")
        console.error(error)
      })
  }, [])

  const CompleteHook = () => {
    const { countUp } = useCountUp({
      start: 0,
      end: finalData,
      duration: 5,
      decimal: ".",
      decimals: 2,
      separator: ","
    })
    return <span>{countUp}</span>
  }

  return (
    <CryptoMarketWrapper className="my-5">
      <Message>
        {loading.globalCrypto && loading.changePercentage ? (
          "Loading..."
        ) : error ? (
          error
        ) : (
          <>
            Global Crypto Currency Valuation{" "}
            <span>
              {/* {prc.CHANGEPCT24HOUR > 0 ? "Up " : "Down "} */}
              {/* {useFormat(prc.CHANGEPCT24HOUR, PERCENTAGE)} $ */}$
              {/* {useFormat(data, GROUP_DIGITS)} */}
              <CompleteHook />
            </span>{" "}
            {CURRENCY}
          </>
        )}
      </Message>
    </CryptoMarketWrapper>
  )
}

export default CryptoMarket
