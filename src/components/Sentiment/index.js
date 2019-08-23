import React from "react"
import styled from "@emotion/styled"
import Col from "react-bootstrap/Col"
import CardHeader from "@components/CardHeader"
import BtcMenu from "./components/BtcMenu"

const Card = styled.section`
  border: solid 1px #313d4f;
  border-radius: 8px;

  @media (max-width: 575px) {
    margin-left: 0px;
    margin-top:3em;
    width: 100%;
  }

  @media (max-width: 768px) {
    border: solid 1px #313d4f;
    border-radius: 8px;
  }
`
const Sentiment = () => {
  return (
    <Card>
      <CardHeader text="Sentiment"/>
      <Col>
        <BtcMenu />
      </Col>
    </Card>
  )
}
export default Sentiment
