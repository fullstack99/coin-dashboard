import React, { useState, useEffect } from "react"
import { string, array, func, shape } from "prop-types"
import axios from "axios"

import useApi, { REST_API_ENDPOINTS } from "@hooks/use-api"

import CoinsGrid from "./components/CoinsGrid"
import CoinsGridWrapper from "./components/CoinsGridWrapper"
import Title from "./components/Title"
import ErrorMessage from "./components/ErrorMessage"
import Coin from "./components/Coin"

import { CURRENCY } from "@utils/constants"

const CoinsTable = ({ title, cryptoCurrencies, selectedCoin, onClick }) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [coins, setCoins] = useState({})
  useEffect(() => {
    const CancelToken = axios.CancelToken
    const source = CancelToken.source()

    setLoading(true)
    useApi(REST_API_ENDPOINTS.PRICE_MULTIFULL, {
      params: {
        fsyms: cryptoCurrencies.map(item => item.symbol).join(","),
        tsyms: CURRENCY
      }
    })
      .then(result => {
        setLoading(false)
        const { data: json } = result || {}
        const { RAW } = json || {}
        if (!RAW) {
          setError("There was an error loading this content")
        } else {
          setCoins(RAW)
          const crypto = cryptoCurrencies.find(item => RAW[item.symbol])
          const info = RAW[crypto.symbol]
          if (info && info[CURRENCY]) {
            const displayInfo = info[CURRENCY]
            onClick(displayInfo, crypto)
          }
        }
      })
      .catch(error => {
        setLoading(false)
        setError("There was an error loading this content")
        console.error(error)
      })
    return () => source.cancel()
  }, [title])

  return (
    <CoinsGridWrapper className="mb-5">
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
          {loading ? (
            <tr>
              <td colSpan={5}>Loading...</td>
            </tr>
          ) : error ? (
            <tr>
              <ErrorMessage>{error}</ErrorMessage>
            </tr>
          ) : (
            cryptoCurrencies
              .filter(item => coins[item.symbol])
              .map((crypto, key) => {
                const { symbol } = crypto
                const info = coins[symbol]
                if (!info || !info[CURRENCY]) return null
                const displayInfo = info[CURRENCY]
                const { PRICE, IMAGEURL, MKTCAP, TOTALVOLUME24H } = displayInfo
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
    </CoinsGridWrapper>
  )
}

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
