import React from 'react'
import styled from "@emotion/styled"
import CoinInfo from './CoinInfo/index'
import QuantTool from './QuantTool/index'
import Descripation from './Descripation/index'
import CoinStatistics from './CoinStatistics/index'
const OverviewWapper  = styled.section`
    width:100%;
`
class Overview extends React.Component {
    render() {
        return (
         <OverviewWapper>
            <CoinInfo />
            <QuantTool />
            <Descripation />
            <CoinStatistics />
         </OverviewWapper>
        )
    }
}
export default Overview    