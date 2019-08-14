import React from "react"
import styled from "@emotion/styled"
import Col from "react-bootstrap/Col"
import CoinInfoData from "./components/CoinInfoData/index"
import CardHeader from "@components/CardHeader"
import CardHeading from "@components/CardHeading"

const Card = styled.section`
  width: 30%;
  margin-top: 3%;
  border-radius: 8px;
  border: solid 1px #313d4f;
  float: left;
  @media (max-width: 575px) {
    width: 100%;
    margin-top: 10%;
  }
`
const CoinInfo = () => {
  let data = [];
  for (let i = 0; i < 15; i++) {
     data.push(<CoinInfoData coinfields={"Market Rank"} coinvalue={"1" + i} key={"index" + i}/>)
  }
  return (
    <Card>
      <CardHeader>
        <CardHeading>Coin Info</CardHeading>
      </CardHeader>
      <Col style={{ marginTop: "25px" }}>
        {data}
      </Col>
    </Card>
  )
}
export default CoinInfo
