import React from "react"
import styled from "@emotion/styled"

const Body = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  padding: 15px;
`

export default Body