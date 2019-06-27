import React from "react"

import Icon from "../Icon"

import { baseUrl } from "@hooks/use-api"
import useFormat from "@hooks/use-format"

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
export default Coin
