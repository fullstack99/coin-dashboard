import React from 'react'
import styled from "@emotion/styled"
import Col from "react-bootstrap/Col" 
import CoinInfoData from "./CoinInfoData/index"
import CardHeader from '@components/CardHeader'
import CardHeading from '@components/CardHeading'

const Card = styled.section`
    width:30%;
    margin-top:3%;
    border-radius: 8px;
    border: solid 1px #313d4f;
    float:left;
    @media (max-width: 575px){
        width: 100%;
        margin-top:10%;
    }
`
class CoinInfo extends React.Component {
    render() {
        return (
            <>
                <Card>
                    <CardHeader>
                        <CardHeading>Coin Info</CardHeading>   
                    </CardHeader>
                    <Col style={{marginTop:"25px"}}>
                        <CoinInfoData coinfields={"Market Rank"} coinvalue={"1"}/>
                        <CoinInfoData coinfields={"Market Cap"} coinvalue={"32655553"}/>
                        <CoinInfoData coinfields={"Circulatiing Supply"} coinvalue={"4.07"}/>
                        <CoinInfoData coinfields={"Circulatiing Supply"} coinvalue={"4.07"}/>
                        <CoinInfoData coinfields={"Circulatiing Supply"} coinvalue={"4.07"}/>
                        <CoinInfoData coinfields={"Circulatiing Supply"} coinvalue={"4.07"}/>
                        <CoinInfoData coinfields={"Circulatiing Supply"} coinvalue={"4.07"}/>
                        <CoinInfoData coinfields={"Circulatiing Supply"} coinvalue={"4.07"}/>
                        <CoinInfoData coinfields={"Circulatiing Supply"} coinvalue={"4.07"}/>
                        <CoinInfoData coinfields={"Circulatiing Supply"} coinvalue={"4.07"}/>
                        <CoinInfoData coinfields={"Circulatiing Supply"} coinvalue={"4.07"}/>
                        <CoinInfoData coinfields={"Circulatiing Supply"} coinvalue={"4.07"}/>
                        <CoinInfoData coinfields={"Circulatiing Supply"} coinvalue={"4.07"}/>
                        <CoinInfoData coinfields={"Circulatiing Supply"} coinvalue={"4.07"}/>
                        <CoinInfoData coinfields={"Circulatiing Supply"} coinvalue={"4.07"}/>
                        <CoinInfoData coinfields={"Circulatiing Supply"} coinvalue={"4.07"}/>
                        <CoinInfoData coinfields={"Circulatiing Supply"} coinvalue={"4.07"}/>
                    </Col> 
                </Card>
            </>
        )
    }
}
export default CoinInfo