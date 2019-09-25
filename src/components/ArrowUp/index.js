import React from "react"
import { string, number } from "prop-types"
import { css } from "@emotion/core"
import { IoMdArrowDropup } from "react-icons/io"

const ArrowUp = ({ size, color }) => (
  <IoMdArrowDropup
    css={css`
      color: ${color};
      font-size: ${size}px;
    `}
  />
)

ArrowUp.propTypes = {
  color: string,
  size: number
}

ArrowUp.defaultProps = {
  color: "#475ff2",
  size: 20
}

export default ArrowUp
