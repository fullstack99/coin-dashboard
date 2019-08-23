import React from "react"

import BlocksWrapper from "./components/BlocksWrapper"
import Block from "./components/Block"

const BtcComponents = () => {
  return (
    <BlocksWrapper>
      <img
        src="https://images.markets.businessinsider.com/image/5accb38c146e7130008b4595-981/screen-shot-2018-04-10-at-85200-am.png"
        alt="BTCimage"
        width="183px"
        height="100px"
      />
      <Block valueName={"Tru value"} amount={"$ 10,313"} pct={"5.25%"} />
      <Block valueName={"Sentimate"} amount={"+7.2"} pct={"5.25%"} />
      <Block valueName={"Stability"} amount={"+7.2"} pct={"5.25%"} />
      <Block valueName={"Longevity"} amount={"+7.2"} pct={"5.25%"} />
      <Block valueName={"Community"} amount={"+7.2"} pct={"5.25%"} />
    </BlocksWrapper>
  )
}

export default BtcComponents
