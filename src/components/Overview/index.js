import React from "react"
import styled from "@emotion/styled"
import CoinInfo from "./components/CoinInfo/index"
import QuantTool from "./components/QuantTool/index"
import Descripation from "./components/Descripation/index"
import CoinStatistics from "./components/CoinStatistics/index"

const OverviewWapper = styled.section`
  width: 100%;
`
const Overview = () => {
  return (
    <OverviewWapper>
      <CoinInfo />
      <QuantTool />
      <Descripation />
      <CoinStatistics />
    </OverviewWapper>
  )
}
export default Overview
