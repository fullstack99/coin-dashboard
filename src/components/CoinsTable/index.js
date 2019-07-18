import React, { useState, useEffect } from "react"
import { string, array, func } from "prop-types"
import useApi, { REST_API_ENDPOINTS } from "@hooks/use-api"

import CoinsGrid from "./components/CoinsGrid"
import CoinsGridWrapper from "./components/CoinsGridWrapper"
import ErrorMessage from "./components/ErrorMessage"
import Coin from "./components/Coin"

import { CURRENCY } from "@utils/constants"

const CoinsTable = ({ title, cryptoCurrencies, onClick }) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [coins, setCoins] = useState({})

  useEffect(() => {
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
        }
      })
      .catch(error => {
        setLoading(false)
        setError("There was an error loading this content")
        console.error(error)
      })
  }, [title])

  return (
    <CoinsGridWrapper>
      <p align="left">{title}</p>
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
            <th>name</th>
            <th>price</th>
            <th>Mrk Cap</th>
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
            cryptoCurrencies.map((crypto, key) => {
              const { name, symbol } = crypto
              const info = coins[symbol]
              if (!info || !info[CURRENCY]) return null
              const displayInfo = info[CURRENCY]
              const { PRICE, IMAGEURL, MKTCAP, TOTALVOLUME24H } = displayInfo
              return (
                <Coin
                  key={key}
                  name={name}
                  imageUrl={IMAGEURL}
                  price={PRICE}
                  mktcap={MKTCAP}
                  totalVolume24h={TOTALVOLUME24H}
                  onClick={() => {
                    onClick(info, crypto)
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
  onClick: func
}

CoinsTable.defaultProps = {
  title: "",
  onClick: () => null
}

export default CoinsTable
