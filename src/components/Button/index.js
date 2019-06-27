import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { bool } from "prop-types"

const ButtonWrapper = styled.button`
  -webkit-appearance: none;
  background: #262d3e;
  border-radius: 5px;
  border: 1px solid #262d3e;
  color: inherit;
  font-size: 0.875rem;
  line-height: 20px;
  min-width: 100px;
  padding: 0.3125rem 1.25rem;

  &:focus,
  &:visited,
  &:active {
    outline: none;
  }

  &:active {
    opacity: 0.8;
    transform: scale(0.95);
  }
`

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

const Button = styled(({ className, ...rest }) => (
  <div className={className}>
    <ButtonContainer {...rest} />
  </div>
))`
  display: flex;
`

Button.propTypes = {
  active: bool,
}

Button.defaultProps = { active: false }

export default Button
