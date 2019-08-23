import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ListName from "../../../OverviewList/index"
import ListValue from "../../../OverviewValue/index"
import { IoMdArrowDropup } from "react-icons/io"

const QuantToolData = props => {
  return (
    <Row>
      <Col xs={8} md={7}>
        <ListName>{props.QuantToolFields}</ListName>
      </Col>
      <Col xs={4} md={5}>
        <ListValue>
          {props.QuantToolValue}
          <IoMdArrowDropup style={{ fontSize: "20px" }} />
        </ListValue>
      </Col>
    </Row>
  )
}
export default QuantToolData
