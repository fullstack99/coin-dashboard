import React from "react"
import styled from "@emotion/styled"
import CoinInfo from "./components/CoinInfo/index"
import QuantTool from "./components/QuantTool/index"
import Description from "./components/Description/index"
import CoinStatistics from "./components/CoinStatistics/index"

const OverviewWapper = styled.section`
  width: 100%;
`
const Overview = () => {
  return (
    <OverviewWapper>
      <CoinInfo />
      <QuantTool />
      <Description />
      <CoinStatistics />
    </OverviewWapper>
  )
}
export default Overview
