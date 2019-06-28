import React, { useState, useEffect } from "react"
import { number, string } from 'prop-types'
import useApi, { REST_API_ENDPOINTS } from "@hooks/use-api"

import CoinsGrid from './components/CoinsGrid'
import CoinsGridWrapper from './components/CoinsGridWrapper'
import ErrorMessage from './components/ErrorMessage'
import Coin from './components/Coin'

const CoinsTable = ({ page, title }) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [coins, setCoins] = useState([])

  useEffect(() => {
    setLoading(true)
    useApi(REST_API_ENDPOINTS.TOP_BY_MARKET, {
      params: { limit: 10, tsym: "USD", page },
    })
      .then(result => {
        setLoading(false)
        const { data: json } = result || {}
        const { Data, Response, Message } = json || {}
        if (Response === "Error") {
          console.error(Message)
          setError("There was an error loading this content")
        } else {
          setCoins(Data)
        }
      })
      .catch(error => {
        setLoading(false)
        setError("There was an error loading this content")
        console.error(error)
      })
  }, [page])

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
            coins.map((coin, key) => (
              <Coin key={key} info={coin.CoinInfo} raw={coin.RAW} />
            ))
          )}
        </tbody>
      </CoinsGrid>
    </CoinsGridWrapper>
  )
}

CoinsTable.propTypes = {
  page: number,
  title: string
}

CoinsTable.defaultProps = {
  page: 1,
  title: ''
}

export default CoinsTable
