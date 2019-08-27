import React from "react"
import { string } from "prop-types"
import styled from "@emotion/styled"

const Amount = styled(({ value, className }) => (
  <span className={className}>{value}</span>
))`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  margin-right: 5px;

  @media (max-width: 768px) {
    font-size: 12px !important;
  }
`

Amount.propTypes = {
  value: string
}

Amount.defaultProps = {
  value: null
}

export default Amount
