import React from "react"
import styled from "@emotion/styled"
import Col from "react-bootstrap/Col"
import CardHeader from "@components/CardHeader"
import BtcMenu from "./components/BtcMenu"

const Card = styled.section`
  border: solid 1px #313d4f;
  border-radius: 8px;
  float: right;
  width: 83%;

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
const Sentimate = () => {
  return (
    <Card>
      <CardHeader text="Sentimate"/>
      <Col>
        <BtcMenu />
      </Col>
    </Card>
  )
}
export default Sentimate
