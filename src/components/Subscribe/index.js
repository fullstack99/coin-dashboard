import React from "react"
import cx from "classnames"
import styled from "styled-components"
import { string, node } from "prop-types"

const BUTTON_BACKGROUND_COLOR = "#475ff2"
const Button = styled.button`
  background-color: ${BUTTON_BACKGROUND_COLOR};
  border-radius: 6px;
  box-sizing: content-box;
  font-size: 14px;
  min-height: 16px;
  outline: none
  padding: 12px 8px;
  width: 124px;

  &:hover {
    opacity: 0.8;
  }
`

const Subscribe = ({ type, children, className, ...rest }) => {
  return (
    <Button
      type={type}
      className={cx("border-0", "text-white", className)}
      {...rest}
    >
      {children}
    </Button>
  )
}

Subscribe.propTypes = {
  className: string,
  type: string,
  children: node
}

Subscribe.defaultProps = {
  className: null,
  type: "button",
  children: null
}

export default Subscribe
