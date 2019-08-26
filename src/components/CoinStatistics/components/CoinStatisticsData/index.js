import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import ListName from "@components/OverviewList"
import ListValue from "@components/OverviewValue"
import ArrowDown from "@components/ArrowDown"

const CoinStatisticsData = ({ CoinStatisticsFields, CoinStatisticsValue }) => {
  return (
    <Row>
      <Col xs={8} md={7}>
        <ListName>{CoinStatisticsFields}</ListName>
      </Col>
      <Col xs={4} md={5}>
        <ListValue>
          {CoinStatisticsValue}
          <ArrowDown size="20" />
        </ListValue>
      </Col>
    </Row>
  )
}
export default CoinStatisticsData
