import React from "react"
import { string, number } from "prop-types"

// components
import Icon from "../Icon"

// hooks
import { baseUrl } from "@hooks/use-api"
import useFormat from "@hooks/use-format"

const Coin = ({ name, imageUrl, price, mktcap, totalVolume24h }) => {
  return (
    <tr>
      <td>{imageUrl ? <Icon url={`${baseUrl}${imageUrl}`} /> : ""}</td>
      <td>{name}</td>
      <td>{useFormat(price)}</td>
      <td>{useFormat(mktcap)}</td>
      <td>{useFormat(totalVolume24h)}</td>
    </tr>
  )
}

Coin.propTypes = {
  name: string.isRequired,
  price: number.isRequired,
  mktcap: number.isRequired,
  totalVolume24h: number.isRequired,
  imageUrl: string,
}

Coin.defaultProps = {
  imageUrl: "",
}

export default Coin
