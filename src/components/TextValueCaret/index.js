import React from "react"
import { string } from "prop-types"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import ArrowUp from "@components/ArrowUp"
import ArrowDown from "@components/ArrowDown"

import Name from "./components/Name"
import Value from "./components/Value"

const TextValueCaret = ({ text, value, move }) => {
  return (
    <Row>
      <Col xs={8} md={7} lg={8}>
        <Name>{text}</Name>
      </Col>
      <Col xs={4} md={5} lg={4}>
        <Value className="text-royal-blue">
          <span
            className={move === "up" ? "text-royal-blue" : "text-electric-violet"}
          >
            {value}
          </span>
          {move === "up" ? <ArrowUp /> : <ArrowDown />}
        </Value>
      </Col>
    </Row>
  )
}

TextValueCaret.propTypes = {
  text: string,
  value: string,
  move: string
}

TextValueCaret.defaultProps = {
  text: null,
  value: null,
  move: null
}

export default TextValueCaret
