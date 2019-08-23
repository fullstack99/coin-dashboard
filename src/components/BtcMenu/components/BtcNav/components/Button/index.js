import React from "react"

import IconSun from "./components/IconSun"
import ButtonWrapper from "./components/ButtonWrapper"

const Button = props => {
  const { text } = props
  return (
    <ButtonWrapper>
      <IconSun />
      {text}
    </ButtonWrapper>
  )
}

export default Button
