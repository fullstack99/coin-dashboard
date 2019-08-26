import React from "react"
import styled from "@emotion/styled"

const Amount = styled(({ value, className }) => (
  <span className={className}>
    {value}
  </span>
))`
  color: #eff3f9;
  font-size: 24px;
  font-weight: bold;
  margin-right: 5px;

  @media (max-width: 768px) {
    font-size: 12px !important;
  }
`

export default Amount
