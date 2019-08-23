import React from "react"
import styled from "@emotion/styled"
import Col from "react-bootstrap/Col"
import CoinInfoData from "./components/CoinInfoData/index"
import CardHeader from "@components/CardHeader"

const Card = styled.section`;
  border: solid 1px #313d4f;
  border-radius: 8px;
  float: left;
  margin-top: 3%;
  width: 30%;

  @media (max-width: 575px) {
    margin-top: 10%;
    width: 100%;
  }
`

const CoinInfo = () => {
  let data = [];
  for (let i = 0; i < 15; i++) {
     data.push(<CoinInfoData coinfields={"Market Rank"} coinvalue={"1" + i} key={"index" + i}/>)
  }
  return (
    <Card>
      <CardHeader text="Coin Info" />
      <Col style={{ marginTop: "25px" }}>
        {data}
      </Col>
    </Card>
  )
}

export default CoinInfo
