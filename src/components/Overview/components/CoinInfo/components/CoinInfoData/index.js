import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ListName from "../../../OverviewList/index"
import ListValue from "../../../OverviewValue/index"
import { IoMdArrowDropup } from "react-icons/io"

const CoinInfoData = props => {
  return (
    <Row>
      <Col xs={8} md={7} lg={8}>
        <ListName>{props.coinfields}</ListName>
      </Col>
      <Col xs={4} md={5} lg={4}>
        <ListValue>
          {props.coinvalue}
          <IoMdArrowDropup style={{ fontSize: "20px" }} />
        </ListValue>
      </Col>
    </Row>
  )
}
export default CoinInfoData
