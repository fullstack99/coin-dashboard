import React from "react"
import styled from "@emotion/styled"
import Col from "react-bootstrap/Col"
import QuantToolData from "./components/QuantToolData/index"
import CardHeader from "@components/CardHeader"

const Card = styled.section`
  border: solid 1px #313d4f;
  border-radius: 8px;
  float: left;
  margin-left: 5.2%;
  margin-top: 3%;
  width: 30%;

  @media (max-width: 575px) {
    margin-left: 0px;
    margin-top: 10%;
    width: 100%;
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
      <CardHeader text="Quant Toolbox" />
      <Col style={{ marginTop: "25px" }}>
        <QuantToolData QuantToolFields={"Market Rank"} QuantToolValue={"785"} />
        {data}
      </Col>
    </Card>
  )
}
export default QuantTool
