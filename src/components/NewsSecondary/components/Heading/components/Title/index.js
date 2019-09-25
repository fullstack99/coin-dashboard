import React from "react"
import { string } from "prop-types"
import styled from "@emotion/styled"

const Title = styled(({ text, className }) => (
  <p className={className}>{text}</p>
))`
  color: #fff;
  font-size: 20px;
  letter-spacing: 0.18px;
  margin-bottom: 0;
  margin-right: 10px;
`

Title.propTypes = {
  text: string
}

Title.defaultProps = {
  text: null
}

export default Title