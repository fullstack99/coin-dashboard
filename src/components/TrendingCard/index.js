import React from 'react'
import Col from "react-bootstrap/Col" 
import CardData from "./cardData/index"
import Card from '../Card/index'
import CardHeader from "@components/CardHeader"
import CardHeading from '@components/CardHeading'

class TrendingCard extends React.Component {
    render() {
        return (
                <Card>
                    <CardHeader>
                        <CardHeading>Trending</CardHeading>   
                    </CardHeader>
                    <Col style={{marginTop:"25px"}}>
                        <CardData field={"Coindesk"}/>
                        <CardData field={"Coin Telelgraph"}/>
                        <CardData field={"CNBC"}/>
                    </Col> 
                </Card>
        )
    }
}
export default TrendingCard