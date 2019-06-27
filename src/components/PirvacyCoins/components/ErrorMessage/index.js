import React from "react"
import styled from "@emotion/styled"

const ErrorMessage = styled(props => <td colSpan={5} {...props} />)`
  color: #c80000 !important;
  background-color: rgba(206, 17, 38, 0.05);
  text-align: center;
`

export default ErrorMessage
