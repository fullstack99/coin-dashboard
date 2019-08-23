import React from "react"

import ButtonsGroup from "./components/ButtonsGroup"
import ButtonWrapper from "./components/Button"

const BtcNav = () => {
  return (
    <ButtonsGroup vertical>
      <ButtonWrapper text="Overview" style={{ opacity: "1" }} />
      <ButtonWrapper text="CG Trends" />
      <ButtonWrapper text="Network" />
      <ButtonWrapper text="Markets" />
      <ButtonWrapper text="News" />
      <ButtonWrapper text="Social" />
    </ButtonsGroup>
  )
}

export default BtcNav