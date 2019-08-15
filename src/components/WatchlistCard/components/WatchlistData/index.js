import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import styled from "@emotion/styled"
import { IoMdArrowDropup } from "react-icons/io"

const CurrencyName = styled.section`
  height: auto;
  font-family: sans-serif;
  font-size: 16px;
  color: #748aa1;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
`
const Price = styled.section`
  height: auto;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-align: right;
  color: #475ff2;
  margin-bottom: 26px @media (max-width: 768px) {
    font-size: 10px;
    font-weight: 500;
    margin-bottom: 26px;
  }
  @media (max-width: 768px) {
    font-size: 10px;
  }
`
const WatchlistData = props => {
  return (
    <Row style={{ marginBottom: "20px" }}>
      <Col md={6} lg={6} sm={6} xs={6}>
        <CurrencyName>{props.currency}</CurrencyName>
      </Col>
      <Col md={6} lg={6} sm={6} xs={6}>
        <Price>
          {props.price} <IoMdArrowDropup style={{ fontSize: "20px" }} />
        </Price>
      </Col>
    </Row>
  )
}
export default WatchlistData
