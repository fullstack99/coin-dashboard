import React from "react"
import styled from "@emotion/styled"

const Icon = styled(({ url, ...rest }) => (
  <div {...rest} style={{ backgroundImage: `url(${url})` }} />
))`
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  height: 20px;
  width: 20px;
`

export default Icon
