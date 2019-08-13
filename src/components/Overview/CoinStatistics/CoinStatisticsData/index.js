import React from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col" 
import ListName from "../../OverviewList/index"
import ListValue from "../../OverviewValue/index"
import { IoMdArrowDropup } from 'react-icons/io'

class CoinStatisticsData extends React.Component {
    render() {
        return (
             <Row>
                <Col md={7} lg={7} sm={8}  xs={9}>
                    <ListName>{this.props.CoinStatisticsFields}</ListName>
                </Col>
                <Col md={5} lg={5} sm={4}  xs={3}>
                    <ListValue>{this.props.CoinStatisticsValue}<IoMdArrowDropup style={{fontSize:"20px"}}/></ListValue>
                </Col>
            </Row>
        )
    }
}
export default CoinStatisticsData