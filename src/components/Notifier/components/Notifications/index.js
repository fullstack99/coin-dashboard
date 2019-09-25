import React from "react"
import styled from "@emotion/styled"

import Box from "./components/Box"

const Notifications = styled(({active, className}) => (
  <div className={`position-absolute ${className}`}>
    <Box className={active === false ? "" : "showNotifier"}  />
  </div>
))`
  display: none;
  left: -244px;
  top: 52px;
`

export default Notifications
