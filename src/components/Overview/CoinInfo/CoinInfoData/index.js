import React from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col" 
import ListName from '../../OverviewList/index'
import ListValue from '../../OverviewValue/index'
import { IoMdArrowDropup } from 'react-icons/io'

class CoinInfoData extends React.Component {
    render() {
        return (
             <Row>
                <Col md={8} lg={8} sm={8}  xs={9} style={{paddingLeft: "0px"}}>
                    <ListName>{this.props.coinfields}</ListName>
                </Col>
                <Col md={4} lg={4} sm={4}  xs={3} style={{paddingLeft: "0px"}}>
                    <ListValue>{this.props.coinvalue}<IoMdArrowDropup style={{fontSize:"20px"}}/></ListValue>
                </Col>
            </Row>
        )
    }
}
export default CoinInfoData