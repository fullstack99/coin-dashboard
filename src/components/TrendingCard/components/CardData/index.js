import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import TrendingData from "./components/TrendingData"
import TrendingDescription from "./components/TrendingDescription"
import TrendingRating from "./components/TrendingRating"

const CardData = props => {
  return (
    <Row style={{ paddingBottom: "20px" }}>
      <Col md={8} lg={9} sm={8} xs={9}>
        <TrendingData>{props.field}</TrendingData>
        <hr style={{ marginTop: "0.5em", marginBottom: "1em", width: "50%" }} />
        <TrendingDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor ….
        </TrendingDescription>
      </Col>
      <Col md={4} lg={3} sm={4} xs={3}>
        <TrendingRating style={{ color: "#475ff2", height: "28px" }}>
          7.2
        </TrendingRating>
      </Col>
    </Row>
  )
}
export default CardData
