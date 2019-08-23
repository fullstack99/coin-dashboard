import React from "react"

import CardHeaderWrapper from "./components/CardHeaderWrapper"
import CardHeading from "./components/CardHeading"

const CardHeader = props => {
  const { text } = props
  return (
    <CardHeaderWrapper>
      <CardHeading>{text}</CardHeading>
    </CardHeaderWrapper>
  )
}

export default CardHeader
