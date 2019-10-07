import React from "react"
import styled from "@emotion/styled"

import CardHeading from "./components/CardHeading"

const Header = styled(({ title, className }) => (
  <div className={className}>
    <CardHeading>{title}</CardHeading>
  </div>
))`
  background-color: #222636;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 15px;
  width: 100%;
`

export default Header
