import React from "react"

import PercentageWrapper from "./components/PercentageWrapper"

const Percentage = props => {
  const { value } = props
  return <PercentageWrapper>{value}</PercentageWrapper>
}

export default Percentage
