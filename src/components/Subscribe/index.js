import React from "react"
import cx from "classnames"
import styled from "styled-components"
import { string, node } from "prop-types"

const Button = styled.button`
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 14px;
  min-height: 40px;
  outline: none;
  padding: 12px 8px;
  width: 124px;

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 0.8;
  }
`

const Subscribe = ({ type, children, className, ...rest }) => {
  return (
    <Button
      type={type}
      className={cx("border-0", "text-white", "text-royal-blue", className)}
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
