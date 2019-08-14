import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ListName from "../../../OverviewList/index"
import ListValue from "../../../OverviewValue/index"
import { IoMdArrowDropup } from "react-icons/io"

const QuantToolData = props => {
  return (
    <Row>
      <Col md={7} lg={7} sm={8} xs={8}>
        <ListName>{props.QuantToolFields}</ListName>
      </Col>
      <Col md={5} lg={5} sm={4} xs={4}>
        <ListValue>
          {props.QuantToolValue}
          <IoMdArrowDropup style={{ fontSize: "20px" }} />
        </ListValue>
      </Col>
    </Row>
  )
}
export default QuantToolData
