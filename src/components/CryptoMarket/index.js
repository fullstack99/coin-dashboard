import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import axios from "axios"
import CountUp from "react-countup"
import useFormat, { GROUP_DIGITS } from "@hooks/use-format"

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

  return (
    <div className={`my-5 ${className}`}>
      <Body className="text-white">
        {isLoading.changePercentage ? (
          "Loading..."
        ) : isError ? (
          "Something went grown!"
        ) : (
          <>
            Global Crypto Currency Valuation{" "}
            <span>$
              {
                <CountUp end={parseFloat(useFormat(data, GROUP_DIGITS).toString().replace(/,/g, ""))} decimal="." decimals={2} separator="," duration={1}  />
              }
            </span> USD
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
