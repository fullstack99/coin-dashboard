import React from "react"

import BlockWrapper from "./components/BlockWrapper"
import Label from "./components/Label"
import CoinScore from "./components/CoinScore"
import Amount from "./components/Amount"
import ArrowUp from "./components/ArrowUp"
import Percentage from "./components/Percentage"

const Block = props => {
  const { pct, amount, valueName } = props

  return (
    <BlockWrapper>
      <Label value={valueName} />
      <CoinScore>CoinScore</CoinScore>
      <Amount value={amount} />
      <ArrowUp />
      <Percentage value={pct} />
    </BlockWrapper>
  )
}

export default Block
