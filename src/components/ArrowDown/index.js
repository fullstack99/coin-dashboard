import React from "react"
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

export default ArrowDown
