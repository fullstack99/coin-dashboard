import React from 'react'
import styled from "@emotion/styled"
import Col from "react-bootstrap/Col" 
import CoinStatisticsData from "./CoinStatisticsData/index"
import CardHeader from '@components/CardHeader'
import CardHeading from '@components/CardHeading'

const Card = styled.section`
    width:30%;
    margin-top:3%;
    border-radius: 8px;
    border: solid 1px #313d4f;
    float:right;
    @media (max-width: 575px){
        width: 100%;
        margin-top:10%;
    }
    
`
class CoinStatistics extends React.Component {
    render() {
        return (
            <>
                <Card>
                    <CardHeader>
                        <CardHeading>Coin Statistics</CardHeading>   
                    </CardHeader>
                    <Col style={{marginTop:"25px"}}>
                        <CoinStatisticsData CoinStatisticsFields={"Market Rank"} CoinStatisticsValue={"1"}/>
                        <CoinStatisticsData CoinStatisticsFields={"Market Cap"} CoinStatisticsValue={"32653"}/>
                        <CoinStatisticsData CoinStatisticsFields={"Circulatiing Supply"} CoinStatisticsValue={"4.07"}/>
                    </Col> 
                </Card>
            </>
        )
    }
}
export default CoinStatistics