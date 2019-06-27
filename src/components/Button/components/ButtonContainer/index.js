import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import ButtonWrapper from "../ButtonWrapper"

const ButtonContainer = styled(({ className, ...rest }) => (
  <div className={className}>
    <ButtonWrapper {...rest} />
  </div>
))`
  border-radius: 5px;
  padding: 1px;
  ${props =>
    props.active
      ? css`
          background: linear-gradient(to right, #29257b, #814f96);
          color: white;
        `
      : css`
          background: #262d3e;
          color: #657d97;
        `}
`
export default ButtonContainer
