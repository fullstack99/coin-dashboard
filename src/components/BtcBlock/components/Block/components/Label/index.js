import React from "react"

import LabelWrapper from "./components/LabelWrapper"

const Label = props => {
  const { value } = props
  return <LabelWrapper>{value}</LabelWrapper>
}

export default Label
