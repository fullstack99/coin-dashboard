import React from "react"
import { string } from "prop-types"
import styled from "@emotion/styled"

const Time = styled(({ text, className }) => (
  <span className={className}>{text}</span>
))`
  color: #c1c0c8;
  font-size: 10px;
  letter-spacing: 0.18px;
  margin-bottom: 0;
  margin-right: 10px;
`

Time.propTypes = {
  text: string
}

Time.defaultProps = {
  text: null
}

export default Time