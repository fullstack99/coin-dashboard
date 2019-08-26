import React from "react"
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

export default ArrowUp