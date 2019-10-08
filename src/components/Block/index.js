import React from "react"
import { string } from "prop-types"
import styled from "@emotion/styled"

import Label from "./components/Label"
import CoinScore from "./components/CoinScore"
import Amount from "./components/Amount"
import Percentage from "./components/Percentage"

const Block = styled(({ label, value, pct, move, className }) => (
  <div className={`${className} bg-ebony-clay`}>
    <Label className="text-black-squeeze">{label}</Label>
    <CoinScore className="text-blue-bayoux">CoinScore</CoinScore>
    <Amount className="text-white">{value}</Amount>
    <Percentage
      className={move === "up" ? "text-royal-blue" : "text-electric-violet"}
    >
      {pct}
    </Percentage>
  </div>
))`
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 20px 15px;
  width: 100%;

  @media (min-width: 1200px) {
    margin-bottom: 0;
    width: 100%;
  }
`

Block.propTypes = {
  pct: string,
  amount: string,
  value: string
}

Block.defaultProps = {
  pct: null,
  amount: null,
  value: null
}

export default Block
