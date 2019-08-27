import React from "react"
import { string } from "prop-types"
import styled from "@emotion/styled"

const Percentage = styled(({ value, className }) => (
  <span className={className}>{value}</span>
))`
  font-size: 14px;
  font-weight: bold;
  margin-right: 5px;
`

Percentage.propTypes = {
  value: string
}

Percentage.defaultProps = {
  value: null
}

export default Percentage
