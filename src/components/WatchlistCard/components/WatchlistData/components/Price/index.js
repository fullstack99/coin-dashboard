import React from "react"

import PriceWrapper from "./components/PriceWrapper"

const Price = props => {
  const { price } = props
  return <PriceWrapper price={price} />
}

export default Price
