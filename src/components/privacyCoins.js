import React, { useState, useEffect } from "react"
import Table from "react-bootstrap/Table"

import styled from "@emotion/styled"
import useApi, { baseUrl, REST_API_ENDPOINTS } from "../hooks/use-api"
import useFormat from "../hooks/use-format"

const PrivacyCoinsWrapper = styled.section`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.3125rem;
  margin: 0 0 2rem;
  padding: 1rem;
  text-align: center;
`

const CoinsTable = styled(props => <Table {...props} />)`
  thead tr th,
  tbody tr td {
    border-color: transparent;
    color: white;
    font-weight: normal;
    font-size: 14px;
    padding: 0.5rem;
  }
`

const Icon = styled(({ url, ...rest }) => (
  <div {...rest} style={{ backgroundImage: `url(${url})` }} />
))`
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  height: 20px;
  width: 20px;
`

const Coin = ({ info, raw }) => {
  const { Name, ImageUrl } = info
  const { PRICE, MKTCAP, TOTALVOLUME24H } = raw.USD
  return (
    <tr>
      <td>
        <Icon url={`${baseUrl}${ImageUrl}`} />
      </td>
      <td>{Name}</td>
      <td>{useFormat(PRICE)}</td>
      <td>{useFormat(MKTCAP)}</td>
      <td>{useFormat(TOTALVOLUME24H)}</td>
    </tr>
  )
}
const PrivacyCoins = () => {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    useApi({
      endpoint: REST_API_ENDPOINTS.TOP_BY_MARKET,
      params: { limit: 10, tsym: "USD" },
    })
      .then(result => {
        const { data: response } = result || {}
        const { Data } = response || {}
        setCoins(Data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <PrivacyCoinsWrapper>
      <p align="left">Privacy Coins</p>
      <CoinsTable
        borderless
        hover
        responsive
        variant="flat"
        cellspacing="0"
        cellpadding="0"
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
          {coins.map((coin, key) => (
            <Coin key={key} info={coin.CoinInfo} raw={coin.RAW} />
          ))}
        </tbody>
      </CoinsTable>
    </PrivacyCoinsWrapper>
  )
}

export default PrivacyCoins
