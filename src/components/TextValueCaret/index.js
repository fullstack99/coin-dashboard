import React from "react"
import { css } from "@emotion/core"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import ListName from "@components/OverviewList"
import ListValue from "@components/OverviewValue"
import ArrowUp from "@components/ArrowUp"
import ArrowDown from "@components/ArrowDown"

const TextValueCaret = ({ text, value, move }) => {
  return (
    <Row>
      <Col xs={8} md={7} lg={8}>
        <ListName>{text}</ListName>
      </Col>
      <Col xs={4} md={5} lg={4}>
        <ListValue>
          <span
            css={css`
              color: ${move === "up" ? "" : "red"};
            `}
          >
            {value}
          </span>
          {move === "up" ? (
            <ArrowUp size="20" color="" />
          ) : (
            <ArrowDown size="20" color="red" />
          )}
        </ListValue>
      </Col>
    </Row>
  )
}
export default TextValueCaret
