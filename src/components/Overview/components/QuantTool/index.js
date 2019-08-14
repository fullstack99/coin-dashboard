import React from "react"
import styled from "@emotion/styled"
import Col from "react-bootstrap/Col"
import QuantToolData from "./components/QuantToolData/index"
import CardHeader from "@components/CardHeader"
import CardHeading from "@components/CardHeading"

const Card = styled.section`
  width: 30%;
  margin-left: 5.2%;
  margin-top: 3%;
  border-radius: 8px;
  border: solid 1px #313d4f;
  float: left;
  @media (max-width: 575px) {
    width: 100%;
    margin-left: 0px;
    margin-top: 10%;
  }
`
const QuantTool = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    data.push(
      <QuantToolData
        QuantToolFields={"Market Rank"}
        QuantToolValue={"32352" + i}
        key={"index" + i}
      />
    )
  }
  return (
    <Card>
      <CardHeader>
        <CardHeading>Quant Toolbox</CardHeading>
      </CardHeader>
      <Col style={{ marginTop: "25px" }}>
        <QuantToolData QuantToolFields={"Market Rank"} QuantToolValue={"785"} />
        {data}
      </Col>
    </Card>
  )
}
export default QuantTool
