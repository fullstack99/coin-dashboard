import React, { useState, useEffect } from "react"
import { string, array, func, shape } from "prop-types"
import styled from "@emotion/styled"
import axios from "axios"

import CoinsGrid from "./components/CoinsGrid"
import Title from "./components/Title"
import ErrorMessage from "./components/ErrorMessage"
import Coin from "./components/Coin"

import { CURRENCY } from "@utils/constants"

const CoinsTable = styled(
  ({ title, cryptoCurrencies, selectedCoin, onClick, className }) => {
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [coins, setCoins] = useState({})

    useEffect(() => {
      const fetchData = async () => {
        setIsError(false)
        setIsLoading(true)

        try {
          const result = await axios(
            "https://min-api.cryptocompare.com/data/pricemultifull",
            {
              params: {
                fsyms: cryptoCurrencies.map(item => item.symbol).join(","),
                tsyms: CURRENCY,
                headers: {
                  Apikey:
                    "cf4d7fa2bac9320077e822ba35bdb009ef9c0308bed3909abd9c91012ac4c384"
                }
              }
            }
          )

          const { data } = result || {}
          const { RAW } = data || {}

          setCoins(RAW)

          const crypto = cryptoCurrencies.find(item => RAW[item.symbol])
          const info = RAW[crypto.symbol]

          if (info && info[CURRENCY]) {
            const displayInfo = info[CURRENCY]
            onClick(displayInfo, crypto)
          }
        } catch (error) {
          setIsError(true)
        }

        setIsLoading(false)
      }

      fetchData()
    }, [title])

    return (
      <div className={`mb-5 ${className}`}>
        <Title align="left">{title}</Title>
        <CoinsGrid
          borderless
          hover
          responsive
          variant="flat"
          cellSpacing="0"
          cellPadding="0"
        >
          <thead>
            <tr>
              <th> </th>
              <th>Name</th>
              <th>Price</th>
              <th>Market Cap</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={5}>Loading...</td>
              </tr>
            ) : isError ? (
              <tr>
                <ErrorMessage>There was an error loading this content</ErrorMessage>
              </tr>
            ) : (
              cryptoCurrencies
                .filter(item => coins[item.symbol])
                .map((crypto, key) => {
                  const { symbol } = crypto
                  const info = coins[symbol]
                  if (!info || !info[CURRENCY]) return null
                  const displayInfo = info[CURRENCY]
                  const {
                    PRICE,
                    IMAGEURL,
                    MKTCAP,
                    TOTALVOLUME24H
                  } = displayInfo
                  return (
                    <Coin
                      key={key}
                      symbol={symbol}
                      imageUrl={IMAGEURL}
                      price={PRICE}
                      mktcap={MKTCAP}
                      totalVolume24h={TOTALVOLUME24H}
                      selected={selectedCoin.symbol === symbol}
                      onClick={() => {
                        onClick(displayInfo, crypto)
                      }}
                    />
                  )
                })
            )}
          </tbody>
        </CoinsGrid>
      </div>
    )
  }
)`
  background: rgba(99, 132, 159, 0.15);
  border-radius: 0.3125rem;
  height: 100%;
  text-align: center;
`

CoinsTable.propTypes = {
  cryptoCurrencies: array.isRequired,
  title: string,
  selectedCoin: shape({}),
  onClick: func
}

CoinsTable.defaultProps = {
  title: "",
  selectedCoin: {},
  onClick: () => null
}

export default CoinsTable
