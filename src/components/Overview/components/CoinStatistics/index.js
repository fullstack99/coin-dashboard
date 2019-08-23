import React from "react"
import styled from "@emotion/styled"
import Col from "react-bootstrap/Col"
import CoinStatisticsData from "./components/CoinStatisticsData/index"

const Card = styled.section`
  border: solid 1px #313d4f;
  border-radius: 8px;
  float: right;
  margin-top: 3%;
  width: 30%;

  @media (max-width: 575px) {
    margin-top: 10%;
    width: 100%;
  }
`
const CoinStatistics = () => {
  return (
    <>
      <Card title="Description">
        <Col style={{ marginTop: "25px" }}>
          <CoinStatisticsData
            CoinStatisticsFields={"Market Rank"}
            CoinStatisticsValue={"1"}
          />
          <CoinStatisticsData
            CoinStatisticsFields={"Market Cap"}
            CoinStatisticsValue={"32653"}
          />
          <CoinStatisticsData
            CoinStatisticsFields={"Circulatiing Supply"}
            CoinStatisticsValue={"4.07"}
          />
        </Col>
      </Card>
    </>
  )
}
export default CoinStatistics
