import React from "react"
import styled from "@emotion/styled"
import { string } from "prop-types"

const Separator = styled(({ backgroundColor, className }) => (
  <div
    className={`${className} ${
      backgroundColor ? `bg-${backgroundColor}` : "bg-royal-blue"
    }`}
  />
))`
  height: 6px;
  width: 40px;
`

Separator.propTypes = {
  backgroundColor: string
}

export default Separator
