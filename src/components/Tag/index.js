import React from "react"
import styled from "@emotion/styled"

const Tag = styled(({ text, className }) => (
  <button className={className}>{text}</button>
))`
  background-color: #262d3f;
  border: 0;
  border-radius: 8px;
  color: #6d86a1;
  font-size: 14px;
  margin-right: 10px;
`

export default Tag
