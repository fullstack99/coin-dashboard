import React from "react"

import PriceValue from "./components/PriceValue"
import Caret from "./components/Caret"

const PriceWrapper = props => {
  const { price } = props
  return (
    <PriceValue>
      {price}
      <Caret />
    </PriceValue>
  )
}

export default PriceWrapper
