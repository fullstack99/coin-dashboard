import React from "react"
import { string, number, func, bool } from "prop-types"
import styled from "@emotion/styled"

// components
import Icon from "../Icon"

// hooks
import { baseUrl } from "@hooks/use-api"
import useFormat from "@hooks/use-format"

const Row = styled.tr`
  cursor: pointer;
  background: ${props => props.selected ? 'rgba(216, 216, 216, 0.1)' : 'transparent'};
`

const Coin = ({ symbol, imageUrl, price, mktcap, totalVolume24h, selected, onClick }) => {
  return (
    <Row onClick={onClick} selected={selected}>
      <td>{imageUrl ? <Icon url={`${baseUrl}${imageUrl}`} /> : ""}</td>
      <td>{symbol}</td>
      <td>{useFormat(price)}</td>
      <td>{useFormat(mktcap)}</td>
      <td>{useFormat(totalVolume24h)}</td>
    </Row>
  )
}

Coin.propTypes = {
  symbol: string.isRequired,
  price: number.isRequired,
  mktcap: number.isRequired,
  totalVolume24h: number.isRequired,
  imageUrl: string,
  selected: bool,
  onClick: func
}

Coin.defaultProps = {
  imageUrl: "",
  selected: false,
  onClick: () => null
}

export default Coin
