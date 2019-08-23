import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Block from "./components/Block"

const BtcComponents = () => {
  return (
    <Row>
      <Col xs={6} lg={4} xl={2}>
        <p>Tradeview mini-chart here</p>
      </Col>
      <Col xs={6} lg={4} xl={2}>
        <Block valueName={"Tru value"} amount={"$10,313"} pct={"5.25%"} />
      </Col>
      <Col xs={6} lg={4} xl={2}>
        <Block valueName={"Sentiment"} amount={"+7.2"} pct={"5.25%"} />
      </Col>
      <Col xs={6} lg={4} xl={2}>
        <Block valueName={"Stability"} amount={"+7.2"} pct={"5.25%"} />
      </Col>
      <Col xs={6} lg={4} xl={2}>
        <Block valueName={"Longevity"} amount={"+7.2"} pct={"5.25%"} />
      </Col>
      <Col xs={6} lg={4} xl={2}>
        <Block valueName={"Community"} amount={"+7.2"} pct={"5.25%"} />
      </Col>
    </Row>
  )
}

export default BtcComponents
