import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { bool } from "prop-types"

import ButtonContainer from './components/ButtonContainer'

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
