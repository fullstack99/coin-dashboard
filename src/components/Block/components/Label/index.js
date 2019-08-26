import React from "react"
import styled from "@emotion/styled"

const Label = styled(({ value, className }) => (
  <div className={className}>{value}</div>
))`
  color: #eff3f9;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 6px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

export default Label