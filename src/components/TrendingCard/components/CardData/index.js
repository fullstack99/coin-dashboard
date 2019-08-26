import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Hr from "@components/Hr"

import TrendingData from "./components/TrendingData"
import TrendingDescription from "./components/TrendingDescription"
import TrendingRating from "./components/TrendingRating"

const CardData = ({from, post}) => {
  return (
    <Row className="mb-xs-3 mb-md-5">
      <Col xs={9} sm={10} lg={9}>
        <TrendingData>{from}</TrendingData>
        <Hr />
        <TrendingDescription>
          {post}
        </TrendingDescription>
      </Col>
      <Col xs={3} sm={2} lg={3}>
        <TrendingRating>
          7.2
        </TrendingRating>
      </Col>
    </Row>
  )
}
export default CardData
