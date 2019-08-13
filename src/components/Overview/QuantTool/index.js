import React from 'react'
import styled from "@emotion/styled"
import Col from "react-bootstrap/Col" 
import QuantToolData from "./QuantToolData/index"
import CardHeader from '@components/CardHeader'
import CardHeading from "@components/CardHeading"

const Card = styled.section`
    width:30%;
    margin-left:5.2%;   
    margin-top:3%; 
    border-radius: 8px;
    border: solid 1px #313d4f;
    float:left;
    @media (max-width: 575px){
        width: 100%;
        margin-left:0px;
        margin-top:10%;
    }
`
class QuantTool extends React.Component {
    render() {
        return (
            <>
                <Card >
                    <CardHeader>
                        <CardHeading>Quant Toolbox</CardHeading>   
                    </CardHeader>
                    <Col style={{marginTop:"25px"}}>
                        <QuantToolData QuantToolFields={"Market Rank"} QuantToolValue={"1"}/>
                        <QuantToolData QuantToolFields={"Circulatiing Supply"} QuantToolValue={"4.07"}/>
                        <QuantToolData QuantToolFields={"Market Cap"} QuantToolValue={"32653"}/>
                        <QuantToolData QuantToolFields={"Market Cap"} QuantToolValue={"32653"}/>
                        <QuantToolData QuantToolFields={"Market Cap"} QuantToolValue={"32653"}/>
                        <QuantToolData QuantToolFields={"Market Cap"} QuantToolValue={"32653"}/>
                        <QuantToolData QuantToolFields={"Market Cap"} QuantToolValue={"32653"}/>
                        <QuantToolData QuantToolFields={"Market Cap"} QuantToolValue={"32653"}/>
                        <QuantToolData QuantToolFields={"Market Cap"} QuantToolValue={"32653"}/>
                        <QuantToolData QuantToolFields={"Market Cap"} QuantToolValue={"32653"}/>
                    </Col> 
                </Card>
            </>
        )
    }
}
export default QuantTool