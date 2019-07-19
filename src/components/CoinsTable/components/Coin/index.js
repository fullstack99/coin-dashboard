import React from "react"
import { string, number, func } from "prop-types"
import styled from "@emotion/styled"

// components
import Icon from "../Icon"

// hooks
import { baseUrl } from "@hooks/use-api"
import useFormat from "@hooks/use-format"

const Row = styled.tr`
  cursor: pointer;
`

const Coin = ({ name, imageUrl, price, mktcap, totalVolume24h, onClick }) => {
  return (
    <Row onClick={onClick}>
      <td>{imageUrl ? <Icon url={`${baseUrl}${imageUrl}`} /> : ""}</td>
      <td>{name}</td>
      <td>{useFormat(price)}</td>
      <td>{useFormat(mktcap)}</td>
      <td>{useFormat(totalVolume24h)}</td>
    </Row>
  )
}

Coin.propTypes = {
  name: string.isRequired,
  price: number.isRequired,
  mktcap: number.isRequired,
  totalVolume24h: number.isRequired,
  imageUrl: string,
  onClick: func
}

Coin.defaultProps = {
  imageUrl: "",
  onClick: () => null
}

export default Coin
