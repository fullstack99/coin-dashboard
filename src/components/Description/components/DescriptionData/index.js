import React from "react"
import styled from "@emotion/styled"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ListName from "../OverviewStyle/index"

const TrendingRating = styled.section`
  color: white;
  font-family: sans-serif;
  font-size: 18px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 500;
  height: 21px;
  letter-spacing: normal;
  line-height: normal;
  text-align: right;
  width: 26px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const DescriptionData = ({ socialMedia }) => {
  return (
    <Row>
      <Col md={8} lg={8} style={{ width: "auto", flex: 1 }}>
        <ListName>{socialMedia}</ListName>
      </Col>
      <Col md={4} lg={4} style={{ width: "auto" }}>
        <TrendingRating>7.2</TrendingRating>
      </Col>
    </Row>
  )
}
export default DescriptionData
