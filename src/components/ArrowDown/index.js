import React from "react"
import { string, number } from "prop-types"
import { css } from "@emotion/core"
import { IoMdArrowDropdown } from "react-icons/io"

const ArrowDown = ({ size, color }) => (
  <IoMdArrowDropdown
    css={css`
      color: ${color};
      font-size: ${size}px;
    `}
  />
)

ArrowDown.propTypes = {
  color: string,
  size: number
}

ArrowDown.defaultProps = {
  color: "#ad34fe",
  size: 20
}

export default ArrowDown
