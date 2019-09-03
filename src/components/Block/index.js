import React from "react"
import { string } from "prop-types"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Label from "./components/Label"
import CoinScore from "./components/CoinScore"
import Amount from "./components/Amount"
import Percentage from "./components/Percentage"

const Block = styled(({ label, value, pct,  move, className }) => (
  <div className={className}>
    <Label label={label} />
    <CoinScore>CoinScore</CoinScore>
    <Amount value={value} />
    <Percentage
      css={css`
        color: ${move === "up" ? "#475ff2" : "#ad34fe"};
      `}
      value={pct}
    />
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
