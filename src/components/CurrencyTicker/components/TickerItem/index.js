import React from "react"
import { string, oneOfType, number } from "prop-types"
import styled from "@emotion/styled"

const TickerItem = styled(({ label, value, placeholder, className }) => (
  <span className={className}>
    {label}
    {value ? value : placeholder}
  </span>
))`
  color: #ffffff;
  font-family: sans-serif;
  font-size: 14px;
  letter-spacing: -0.5px;
  margin-right: 55px;
  opacity: 0.7;
  white-space: nowrap;
`

TickerItem.propTypes = {
  label: string.isRequired,
  value: oneOfType([string.isRequired, number.isRequired]),
  placeholder: string.isRequired
}

TickerItem.defaultProps = {
  label: null,
  value: null,
  placeholder: null
}

export default TickerItem
