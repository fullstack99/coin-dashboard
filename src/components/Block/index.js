import React from "react"
import styled from "@emotion/styled"

import Label from "./components/Label"
import CoinScore from "./components/CoinScore"
import Amount from "./components/Amount"
import ArrowUp from "./components/ArrowUp"
import Percentage from "./components/Percentage"

const Block = styled(({ pct, amount, valueName, className }) => (
  <div className={className}>
    <Label value={valueName} />
    <CoinScore>CoinScore</CoinScore>
    <Amount value={amount} />
    <ArrowUp />
    <Percentage value={pct} />
  </div>
))`
  background-color: #202334;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 20px 15px;
  width: 100%;

  @media (min-width: 1200px) {
    margin-bottom: 0;
    width: 100%;
  }
`

export default Block
