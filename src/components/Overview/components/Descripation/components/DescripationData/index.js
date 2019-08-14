import React from "react"
import styled from "@emotion/styled"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ListName from "../OverviewStyle/index"

const TrendingRating = styled.section`
  width: 26px;
  height: 21px;
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: white;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`
const DescripationData = props => {
  return (
    <Row>
      <Col md={8} lg={8} style={{ width: "auto", flex: 1 }}>
        <ListName>{props.socialmedia}</ListName>
      </Col>
      <Col md={4} lg={4} style={{ width: "auto" }}>
        <TrendingRating>7.2</TrendingRating>
      </Col>
    </Row>
  )
}
export default DescripationData
