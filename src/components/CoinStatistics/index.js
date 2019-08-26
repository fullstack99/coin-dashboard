import React from "react"

import Card from "@components/Card"

import CoinStatisticsData from "./components/CoinStatisticsData"

const CoinStatistics = () => {
  return (
    <Card title="Coin Statistics">
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
    </Card>
  )
}

export default CoinStatistics
