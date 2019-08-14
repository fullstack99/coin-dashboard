import React from "react"
import styled from "@emotion/styled"
import Col from "react-bootstrap/Col"
import CardHeader from "@components/CardHeader"
import CardHeading from "@components/CardHeading"
import BtcMenu from "./components/BtcMenu"

const Card = styled.section`
  border-radius: 8px;
  border: solid 1px #313d4f;
  width: 83%;
  float: right;
  @media (max-width: 575px) {
    margin-left: 0px;
    width: 100%;
  }
  @media (max-width: 768px) {
    border-radius: 8px;
    border: solid 1px #313d4f;
  }
`
const Sentimate = () => {
  return (
    <Card>
      <CardHeader>
        <CardHeading>Sentimate</CardHeading>
      </CardHeader>
      <Col>
        <BtcMenu />
      </Col>
    </Card>
  )
}
export default Sentimate
