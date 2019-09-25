import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import axios from "axios"
import { useCountUp } from "react-countup"

import Body from "./components/Body"

const CryptoMarket = styled(({ className }) => {
  const [data, setData] = useState(0)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const result = await axios(
          "https://s2.coinmarketcap.com/generated/stats/global.json"
        )

        const { data: response } = result
        const { total_market_cap_by_available_supply_usd } = response || {}

        setData(total_market_cap_by_available_supply_usd)
      } catch (error) {
        setIsError(true)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [])

  const CompleteHook = () => {
    const { countUp } = useCountUp({
      start: 0,
      end: data,
      duration: 2,
      decimal: ".",
      decimals: 2,
      separator: ",",
    })

    return <span>{countUp}</span>
  }

  return (
    <div className={`my-5 ${className}`}>
      <Body>
        {isLoading.changePercentage ? (
          "Loading..."
        ) : isError ? (
          "Something went grown!"
        ) : (
          <>
            Global Crypto Currency Valuation{" "}
            <span>{data && !isLoading && <CompleteHook />}</span> USD
          </>
        )}
      </Body>
    </div>
  )
})`
  margin: 0;
  text-align: center;
`

export default CryptoMarket
