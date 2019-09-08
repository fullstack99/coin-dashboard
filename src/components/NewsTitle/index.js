import React from "react"
import { string } from "prop-types"
import styled from "@emotion/styled"

const NewsTitle = styled(({ text, className }) => (
  <p className={className}>{text}</p>
))`
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.18px;
  margin-bottom: 12px;
`

NewsTitle.propTypes = {
  text: string
}

NewsTitle.defaultProps = {
  text: null
}

export default NewsTitle