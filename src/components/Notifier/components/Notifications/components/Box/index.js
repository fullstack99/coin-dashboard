import React from "react"
import styled from "@emotion/styled"

const Box = styled(({className}) => (
  <div className={className}>
    <p>Result #1</p>
    <p>Result #2</p>
    <p>Result #3</p>
    <p>Result #3</p>
  </div>
))`
  background-color: #1c1e2e;
  border-radius: 8px;
  border: 1px solid #313d4f;
  color: #fff;
  float: left;
  height: 300px;
  padding: 15px;
  position: relative;
  width: 300px;
  z-index: 99;

  &:after {
    content: " ";
    position: absolute;
    right: 30px;
    top: -15px;
    border-top: none;
    border-right: 15px solid transparent;
    border-left: 15px solid transparent;
    border-bottom: 15px solid #1c1e2e;
  }

  &:before {
    content: " ";
    position: absolute;
    right: 29px;
    top: -16px;
    border-top: none;
    border-right: 16px solid transparent;
    border-left: 16px solid transparent;
    border-bottom: 16px solid #313d4f;
  }
`

export default Box
