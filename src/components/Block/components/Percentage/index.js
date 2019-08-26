import React from "react"
import styled from "@emotion/styled"

const Percentage = styled(({ value, className }) => (
  <span className={className}>{value}</span>
))`
  color: #475ff2;
  font-size: 14px;
  font-weight: bold;
  margin-right: 5px;
`

export default Percentage
