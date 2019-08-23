import React from "react"

import AmountWrapper from "./components/AmountWrapper"

const Amount = props => {
  const { value } = props
  return <AmountWrapper>{value}</AmountWrapper>
}

export default Amount
